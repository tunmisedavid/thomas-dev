import Project3 from "../assets/Project3.svg";
import Project4 from "../assets/Project4.svg";


const Coded = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <img className="w-full" src={Project3} alt="project" />
      <img className="w-full" src={Project4} alt="project" />
      <img className="w-full" src={Project3} alt="project" />
      <img className="w-full" src={Project4} alt="project" />
      <img className="w-full" src={Project3} alt="project" />
      <img className="w-full" src={Project4} alt="project" />
    </div>
  );
};

export default Coded;
