import { Link } from "react-router-dom";
import ButtonComp from "../../Components/ButtonComp";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[32rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center w-[70%] mx-auto">
          <h1
            className="text-3xl font-semibold text-white lg:text-5xl"
          >
            {text}
          </h1>
          <br />
          <Link
            to={"/subscription"}
            className="bg-purple-700 font-semibold rounded-md text-center px-5 py-3 text-white"
          >
             Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
