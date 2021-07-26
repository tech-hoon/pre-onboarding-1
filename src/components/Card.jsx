import "../assets/css/Card.css";

const Card = ({ id, email, body }) => {
  return (
    <div className="CardBox">
      <span className="row-1">
        <h1>Comment Id</h1>
        <h2>{id}</h2>
      </span>
      <span className="row-2">
        <h1>Email</h1>
        <h2>{email}</h2>
      </span>
      <span className="row-3">
        <h1>Comment</h1>
      </span>
      <span className="row-4">
        <h2>{body}</h2>
      </span>
    </div>
  );
};

export default Card;
