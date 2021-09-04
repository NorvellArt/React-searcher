import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
        <img alt='monsters' src={`https://robohash.org/${props.monster.id}?set=set2&size=256x256`} />
      <h2>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
