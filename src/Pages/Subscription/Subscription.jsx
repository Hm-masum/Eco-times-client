import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="my-6">
      <div
        className="h-[50vh] md:h-[55vh] lg:h-[70vh] bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://i.ibb.co/xXD7Zqv/pexels-ian-panelo-6564828.jpg')] bg-slate-900 mt-6 bg-cover rounded-lg flex items-center"
      >
        <div className="text-white px-6 space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold">
            Subscription Now!
          </h1>
          <p className="lg:w-[45%] font-semibold">
            Embark on a journey to excellence with our professional program.
            Elevate your knowledge and make your mark in the world of news.
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
