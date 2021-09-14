import "./style.css";

const CharCard = ({ student: { name, image } }) => {
  return (
    <div>
      <div className="card">
        <label>{name}</label>
        <img className="picture" src={image} alt={name}></img>
      </div>
    </div>
  );
};

export default CharCard;
