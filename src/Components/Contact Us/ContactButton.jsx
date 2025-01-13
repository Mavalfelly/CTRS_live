import { Link } from "react-router-dom"

const Cuds = () => {
    return(
        <div className="flex justify-center text-xl font-extrabold gap-2 ">
          <Link
            to='/contact'
            className="underline text-blue-700 hover:text-blue-900  transform transition-all duration-300 hover:scale-105  "
          >
            Contact Us  
          </Link>
          <span> to see how we can help you!</span>
        </div>
    )
}

export default Cuds