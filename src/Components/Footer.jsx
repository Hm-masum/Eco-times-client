import logo from '../../public/logo1.png'

const Footer = () => {
    return (
        <div className="bg-gray-800 mt-8 py-8">
          <div className="flex flex-col items-center justify-center text-white">
              <div>
                <img className="h-24 w-24" src={logo} alt="" />
              </div>
              <h2 className="text-3xl font-bold">
                Eco<span className="">Times</span>
              </h2>
              <p className="font-semibold mb-1">Providing reliable since since 1992</p>
              <p className="text-sm">Copyright © 2024 - All right reserved</p>

          </div>
        </div>
    );
};

export default Footer;