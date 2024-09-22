import logo from '../../public/logo1.png'

const Footer = () => {
    return (
        <div className="bg-gray-800 py-10">
          <div className="flex flex-col items-center justify-center text-white">
              <div>
                <img className="h-24 w-24" src={logo} alt="" />
              </div>
              <h2 className="text-3xl font-bold">
                Eco<span className="">Times</span>
              </h2>
              {/* <div className="grid grid-cols-1 md:grid-cols-6 text-center font-semibold my-2 space-x-0">
                <h2><NavLink to={`/`}>Home</NavLink></h2>
                <h2><NavLink to={`/addArticle`}>Add Articles</NavLink></h2>
                <h2><NavLink to={`/allArticle`}>All Articles</NavLink></h2>
                <h2><NavLink to={`/dashboard`}>Dashboard</NavLink></h2>
                <h2><NavLink to={`/myArticle`}>My Articles</NavLink></h2>
                <h2><NavLink to={`/premiumArticle`}>Premium Articles</NavLink></h2>
              </div> */}
              <p className="font-semibold mb-1">Providing reliable since since 1992</p>
              <p className="text-sm">Copyright © 2024 - All right reserved</p>

          </div>
        </div>
    );
};

export default Footer;