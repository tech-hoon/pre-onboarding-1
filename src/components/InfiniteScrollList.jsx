import "../assets/css/InfiniteScrollList.css";
import Card from "./Card";
import { useState, useEffect, useCallback } from "react";
import { getData } from "../api/fetchData";

const InfiniteScrollList = () => {
  const [page, setPage] = useState(1);
  const [cards, setCards] = useState([]);
  const limit = 10;

  useEffect(() => getCards(page, limit), []);

  const getCards = async (page, limit) => setCards([...(await getData(page, limit))]);
  return (
    <>
      {cards.map(({ id, email, body }, key) => (
        <Card id={id} email={email} body={body} key={key} />
      ))}
    </>
  );
};

export default InfiniteScrollList;
