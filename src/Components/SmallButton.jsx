
const SmallButton = ({value}) => {
    return (
        <div>
            <div type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-2 py-2 text-center me-2 mb-2 font-semibold justify-center">{value}</div>
        </div>
    );
};

export default SmallButton;