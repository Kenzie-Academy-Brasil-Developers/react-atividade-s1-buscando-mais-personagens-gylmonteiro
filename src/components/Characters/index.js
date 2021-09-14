import CharCard from "../CharCard";
import "./style.css";
const Characters = ({ characterList }) => {
  return (
    <div>
      <h1>Meus personagens</h1>
      <div className="container">
        {characterList.map((student) => (
          <CharCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
