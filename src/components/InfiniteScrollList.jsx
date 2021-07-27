import "../assets/css/InfiniteScrollList.css";
import Card from "./Card";
import { useState, useRef, useEffect } from "react";
import { fetchData } from "../api/fetchData";

const InfiniteScrollList = () => {
  const [cards, setCards] = useState([]);
  const limit = useRef(10);
  const page = useRef(1);
  const ioRef = useRef(null);

  const getCards = async () => {
    const newCards = await fetchData(page.current++, limit.current);
    setCards((cards) => [...cards, ...newCards]);
  };

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && getCards());
    io.observe(ioRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="container">
        {cards.map(({ id, email, body }, key) => (
          <Card id={id} email={email} body={body} key={key} />
        ))}
        <div className="observer" ref={ioRef}></div>
      </div>
    </>
  );
};

export default InfiniteScrollList;
