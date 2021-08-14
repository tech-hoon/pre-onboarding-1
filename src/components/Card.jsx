import '../assets/css/Card.css';

const Card = ({ id, email, body }) => {
  return (
    <div className='card-box'>
      <span className='id'>
        <h1>Comment Id</h1>
        <h2>{id}</h2>
      </span>
      <span className='email'>
        <h1>Email</h1>
        <h2>{email}</h2>
      </span>
      <span className='comment'>
        <h1>Comment</h1>
      </span>
      <span className='body'>
        <h2>{body}</h2>
      </span>
    </div>
  );
};

export default Card;
