import '../assets/css/InfiniteScrollList.css';
import Card from './Card';
import { useState, useRef, useEffect } from 'react';
import { fetchData } from '../api/fetchData';
import { DEFAULT_PAGE, LIMIT } from '../utils/config';

const InfiniteScrollList = () => {
  const [cards, setCards] = useState([]);
  const [page, setPage] = useState(DEFAULT_PAGE);
  const ioRef = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setPage((page) => page + 1)
    );
    io.observe(ioRef.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const getCards = async () => {
      const newCards = await fetchData(page, LIMIT);
      newCards.length > 0 && setCards((prevCards) => [...prevCards, ...newCards]);
    };

    getCards();
  }, [page]);

  return (
    <>
      <div className='container'>
        {cards.map(({ id, email, body }, key) => (
          <Card id={id} email={email} body={body} key={key} />
        ))}
        <div className='observer' ref={ioRef}></div>
      </div>
    </>
  );
};

export default InfiniteScrollList;
