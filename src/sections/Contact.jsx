import BlackSeparator from "../assets/separatorBlack.svg";

const Contact = ({ refProp }) => {
  return (
    <div
      ref={refProp}
      className=" w-full flex flex-col items-center gap-8 lg:gap-14 py-10 lg:py-14 font-montserrat"
    >
      <div className="w-full flex justify-center items-center flex-col gap-8">
        <button className=" font-bold text-sm lg:text-3xl border-5 m-auto w-34 lg:w-55 h-11 lg:h-15">
          CONTACT
        </button>
        <p className="font-normal text-sm lg:text-base w-75 lg:w-180 m-auto text-center">
          My name is Tomasz Gajda, I’m a third year Applied Computer Science
          student at AGH University of Science and Technology in Cracow, Poland.{" "}
        </p>
        <img src={BlackSeparator} alt="" />
      </div>
      <div className="w-70 m-auto">
        <form action="" className="flex flex-col gap-10">
          <input
            className="outline-none pl-1 lg:pl-2 placeholder:text-[#8B8B8B] placeholder:text-xs lg:placeholder:text-sm text-sm lg:text-base border-black border-l-4 border-b-4 h-10 lg:h-12"
            placeholder="ENTER YOUR NAME*"
            type="text"
            name=""
            id=""
          />
          <input
            className="outline-none pl-1 lg:pl-2 placeholder:text-[#8B8B8B] placeholder:text-xs lg:placeholder:text-sm text-sm lg:text-base border-black border-l-4 border-b-4 h-10 lg:h-12"
            placeholder="ENTER YOUR EMAIL*"
            type="email"
            name=""
            id=""
          />
          <input
            className="outline-none pl-1 lg:pl-2 placeholder:text-[#8B8B8B] placeholder:text-xs lg:placeholder:text-sm text-sm lg:text-base border-black border-l-4 border-b-4 h-10 lg:h-12"
            placeholder="PHONE NUMBER"
            type="number"
            name=""
            id=""
          />
          <textarea
            className="outline-none pl-1 lg:pl-2 placeholder:text-[#8B8B8B] placeholder:text-xs lg:placeholder:text-sm text-sm lg:text-base border-black border-l-4 border-b-4 h-26 lg:h-40"
            placeholder="YOUR MESSAGE*"
            name=""
            id=""
          ></textarea>
          <button
            className="font-bold text-xs lg:text-base border-black border-x-3 lg:border-x-4 w-30 h-8 m-auto"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
