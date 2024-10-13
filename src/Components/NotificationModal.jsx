import { Link } from "react-router-dom";

const NotificationModal = ({ showModal, onClose }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl mb-4">Subscribe Now!</h2>
                <p className="mb-4 font-semibold">Get unlimited access to premium articles by <br /> subscribing to our premium plan.</p>
                <Link to='/payment'>
                    <button className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-base px-2 py-3 text-center me-2 mb-2 font-semibold justify-center">
                      Subscribe
                    </button>
                </Link>
                <button 
                    onClick={onClose} 
                    className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-800 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 rounded-lg text-base px-4 py-3 text-center me-2 mb-2 font-semibold justify-center"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default NotificationModal;
