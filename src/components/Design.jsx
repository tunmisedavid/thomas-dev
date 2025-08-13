import Project1 from "../assets/Project1.svg";
import Project2 from "../assets/project2.svg";

const Design = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <img className="w-full" src={Project1} alt="project" />
      <img className="w-full" src={Project2} alt="project" />
      <img className="w-full" src={Project1} alt="project" />
      <img className="w-full" src={Project2} alt="project" />
      <img className="w-full" src={Project1} alt="project" />
      <img className="w-full" src={Project2} alt="project" />
    </div>
  );
}

export default Design;
