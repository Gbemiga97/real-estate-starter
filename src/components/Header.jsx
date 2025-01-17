import { Link } from "react-router-dom";
import { images } from "../assets";


const Header = () => {
  return (
    <header className='py-12 mb-12 border-b'>
      <div className="container mx-auto flex justify-between items-center">
        <Link>
        <img src={images.Logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-6 ">
          <Link className='hover:text-violet-900 transition' to=''>Log in</Link>
          <Link 
          className='bg-violet-700 hover:bg-violet-800 text-white
          px-4 py-3 rounded-lg transition'
          to=''>Sign up</Link>
        </div>
       
      </div>
    </header>
  )
};

export default Header;
