import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="my-10">
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co/xXD7Zqv/pexels-ian-panelo-6564828.jpg)",
        }}
        className="h-[40vh] lg:h-[70vh] mt-6 bg-[linear-gradient(45deg,rgba(0.3,0.3,0.3,0.3),rgba(0.7,0.7,0.7,0.7))] bg-cover rounded-lg flex items-center"
      >
        <div className="text-white px-6 space-y-3">
          <h1 className="text-4xl font-extrabold text-black">
            Subscription Now!
          </h1>
          <p className="lg:w-[45%] text-black font-semibold">
            Embark on a journey to excellence with our professional program.
            Elevate your game and make your mark in the world of elite hockey.
          </p>

          <button type="submit">
            <Link
              className="text-white mt-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-4 py-3 font-semibold text-center"
              to={"/payment"}
            >
              Subscribe
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
