import { Link } from 'react-router-dom';
import ButtonComp from './ButtonComp';
import { MdWorkspacePremium } from 'react-icons/md';
import Swal from 'sweetalert2';

const ArticleCart = ({article,role}) => {
    const {_id,title,publisher,image,description,isPremium}=article;

    const handleButton = () => {
        Swal.fire({
            title: "Premium Article !",
            text: "This content is premium. please get premium.",
            icon: "question"
        });
    }
    
    return (
      <div className='space-y-2 border-2 p-3 hover:border-purple-400 rounded-2xl flex flex-col justify-between'>
          <div>
            { isPremium==='yes' ?
              <div className='relative'>
                <img className='h-[215px] rounded-xl w-full' src={image} alt="" />
                <MdWorkspacePremium className='absolute text-yellow-300 top-2 text-6xl' />
              </div>
              :
              <img className='h-[215px] rounded-xl w-full' src={image} alt="" />
            }
          </div>

          <div className='space-y-2'>
            <h4 className=' font-semibold'>{publisher}</h4>

            <h2 className='text-2xl font-semibold'>{title?.slice(0,50)}</h2>

            <p className='text-sm'>{description?.slice(0,150)}</p>
          </div>

          <div>
            {
                isPremium==='yes' ?
                <>
                  {
                    role==='admin' || role==='Premium user' ? 
                    <Link to={`/article/${_id}`}><ButtonComp value={"View Details"}></ButtonComp></Link> 
                    :
                    <Link onClick={handleButton}><ButtonComp value={"View Details"}></ButtonComp></Link>

                   }
                </>
                :
                <Link to={`/article/${_id}`}><ButtonComp value={"View Details"}></ButtonComp></Link>
            }
          </div>
      </div>
    );
};

export default ArticleCart;