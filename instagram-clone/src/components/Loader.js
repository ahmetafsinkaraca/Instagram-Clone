import {FaInstagram} from "react-icons/fa";

export default function Loader() {
  return (
    <div className='w-full h-full text-bold text-3xl items-center flex flex-col text-center justify-center bg-white text-pink-900'>
      <FaInstagram size={60}/>
      <h3>instagram</h3>
    </div>
  )
}
