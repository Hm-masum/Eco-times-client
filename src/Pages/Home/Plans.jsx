import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Plans = () => {
  return (
    <div className="flex py-10 flex-col md:flex-row items-center justify-center gap-4">
      <div className="border rounded-xl md:w-1/3 space-y-16 p-4">
        <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold">Normal user</h2>
            <div>
                <h2 className="font-semibold text-2xl">$0</h2>
                <h2 className="text-sm">1min</h2>
            </div>
        </div>

        <div className="space-y-3">
          <div>
            <ul className="space-y-1">
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Access to premium content.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> No ads whole website.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Access all features.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Post One articles</li>  
            </ul>
          </div>
          <div>
            <Link to={`/subscription`} type="button" className=" text-center block bg-purple-600 py-2 font-semibold text-white rounded-3xl">Get premium</Link>
          </div>
          <div>Take premium offer for explore premium content and you can give offer for 1 minute..</div>
        </div>
      </div>

      <div className="border rounded-xl md:w-1/3 space-y-16 p-4">
        <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold">Premium user</h2>
            <div>
                <h2 className="font-semibold text-2xl">$100</h2>
                <h2 className="text-sm">5 days</h2>
            </div>
        </div>

        <div className="space-y-3">
          <div>
            <ul className="space-y-1">
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Access to premium content.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> No ads whole website.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Access all features.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Post unlimited articles</li>  
            </ul>
          </div>
          <div>
            <Link to={`/subscription`} type="button" className=" text-center block bg-purple-600 py-2 font-semibold text-white rounded-3xl">Get premium</Link>
          </div>
          <div>Take premium offer for explore premium content and you can give offer for 5 days..</div>
        </div>
      </div>

      <div className="border rounded-xl md:w-1/3 space-y-16 p-4">
        <div className="flex justify-between items-center">
            <h2 className="text-4xl font-semibold">Premium user</h2>
            <div>
                <h2 className="font-semibold text-2xl">$150</h2>
                <h2 className="text-sm">10 days</h2>
            </div>
        </div>

        <div className="space-y-3">
          <div>
            <ul className="space-y-1">
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Access to premium content.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> No ads whole website.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Access all features.</li>
                <li className="flex items-center gap-1"><FaCircleArrowRight /> Post unlimited articles</li>  
            </ul>
          </div>
          <div>
            <Link to={`/subscription`} type="button" className=" text-center block bg-purple-600 py-2 font-semibold text-white rounded-3xl">Get premium</Link>
          </div>
          <div>Take premium offer for explore premium content and you can give offer for 10 days..</div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
