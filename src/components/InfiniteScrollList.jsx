import "../assets/css/InfiniteScrollList.css";
import Card from "./Card";
import { useState, useRef } from "react";
import { fetchData } from "../api/fetchData";
import useIntersection from "../hook/useIntersection";

const InfiniteScrollList = () => {
  const [cards, setCards] = useState([]);
  const limit = useRef(10);
  const page = useRef(1);

  const getCards = async () => {
    const newCards = await fetchData(page.current++, limit.current);
    setCards((cards) => [...cards, ...newCards]);
  };

  const [_, setRef] = useIntersection(async (entry, observer) => {
    observer.unobserve(entry.target);
    await getCards();
    observer.observe(entry.target);
  }, {});

  return (
    <>
      <div className="container">
        {cards.map(({ id, email, body }, key) => (
          <Card id={id} email={email} body={body} key={key} />
        ))}
        <div className="observer" ref={setRef}></div>
      </div>
    </>
  );
};

export default InfiniteScrollList;
