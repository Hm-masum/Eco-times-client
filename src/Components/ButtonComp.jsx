import { FaGithub, FaGoogle } from "react-icons/fa";

const ButtonComp = ({value,icon}) => {
    return (
        <div>
            <div type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-5 py-3 text-center me-2 mb-2 font-semibold flex items-center gap-2 justify-center">{icon=='google' && <FaGoogle className="text-xl"/>|| icon=='github' && <FaGithub className="text-xl"/>} {value}</div>
        </div>
    );
};

export default ButtonComp;