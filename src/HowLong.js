// @flow

import * as React from "react";
import moment from "moment";

const { useState, useEffect } = React;

async function fetchTransactions({
  url = "https://api.up.com.au/api/v1/transactions",
  token,
}) {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

const getMatch = (transactions) =>
  transactions.find(({ attributes }) => {
    if (!attributes) return false;
    const { description, rawText } = attributes;
    return (
      description?.toLowerCase().includes("kfc") ||
      rawText?.toLowerCase().includes("kfc")
    );
  });

const getDuration = (createdAt) => {
  const duration = moment.duration(moment().diff(moment(createdAt)));
  const days = Math.round(duration.asDays());
  return days !== 0 ? `${days} days` : "0 days? Are you eating KFC right now?!";
};

async function fetchPage({ token, url }) {
  const { data, links } = await fetchTransactions({ url, token });
  return {
    data,
    links,
  };
}

async function findKfcTransaction(token, updateCount, setErrored) {
  try {
    let { data, links } = await fetchPage({ token });
    if (!data) {
      setErrored(true);
      return {};
    }
    let allTransactions = [...data];
    let nextUrl = links.next;
    let match = getMatch(data);
    while (!match && nextUrl) {
      let nextPage = await fetchPage({ token, url: nextUrl });
      match = getMatch(nextPage.data);
      allTransactions = [...allTransactions, ...nextPage.data];
      updateCount(allTransactions.length);
      nextUrl = nextPage.links.next;
    }
    return {
      allTransactions,
      match,
    };
  } catch (error) {
    setErrored(true);
    return {};
  }
}

export default function HowLong({ token, onBack }) {
  const [transactions, setTransactions] = useState();
  const [match, setMatch] = useState();
  const [count, updateCount] = useState(0);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    findKfcTransaction(token, updateCount, setErrored).then(
      ({ allTransactions, match }) => {
        setTransactions(allTransactions);
        setMatch(match);
      }
    );
  }, [token, setTransactions, setMatch, updateCount]);

  return (
    <div className="text-white pt-20 text-center">
      {errored ? (
        <div>
          Oops, something went wrong! Is your token correct?
          <div>
            <button
              style={{ backgroundColor: "#f5d4b7" }}
              className="w-20 text-black mt-10"
              onClick={onBack}
            >
              Try Again
            </button>
          </div>
        </div>
      ) : !transactions ? (
        <div>
          <div className="text-xl" style={{ color: "#f5d4b7" }}>
            Finding out...{" "}
          </div>
          <div className="pt-20">
            I've searched <span style={{ color: "#f5d4b7" }}>{count}</span>{" "}
            transactions so far.
          </div>
        </div>
      ) : match ? (
        <div>
          <div className="text-xl">
            <div> It's been</div>
            <div className="text-6xl py-20">
              {getDuration(match.attributes.createdAt)}
            </div>
            <div>since you last KFC'd!</div>
          </div>
          <div className="pt-20">
            I searched {transactions.length} transactions.
          </div>
        </div>
      ) : (
        <div>
          Searched{" "}
          <span style={{ color: "#f5d4b7" }}>{transactions.length}</span>{" "}
          transactions and found nothing!
          <div className="pt-20"> Are you sure you eat KFC? </div>
        </div>
      )}
    </div>
  );
}
