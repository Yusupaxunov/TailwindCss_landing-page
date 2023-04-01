import { styles } from "../util/styles"
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { navLinks } from "../config/constants"
import { useState } from "react"

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [active, setActive] = useState('home')

    const activeHandler = (id) => setActive(id)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className={`flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4`}>
        <h1 className={`w-full uppercase text-3xl font-bold ${styles.green}`}>React.</h1>
        <ul className="hidden md:flex">
            {navLinks.map((item) => (
                <li onClick={()=>activeHandler(item.id)} 
                    key={item.id} className={`m-4 cursor-pointer
                    ${active === item.id ? 'text-white': 'text-gray-400'} hover:text-white transition-all duration-150`}>
                        <a href={`#${item.id}`}>{item.label}</a>
                </li>
            ))}
        </ul>

        <div onClick={handleNav} className={`z-10 fixed right-5 text-gray-400 cursor-pointer block md:hidden`}>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={`z-10 ${nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%] top-[0] h-full w-[60%] ease-in-out duration-500'}`}>
                <h1 className={`w-full uppercase text-3xl font-bold ${styles.green} m-4 mt-[30px]`}>React.</h1>
                <ul className="uppercase p-4">
                {navLinks.map((item, idx) => (
                    <li onClick={()=>activeHandler(item.id)} 
                    key={item.id} className={`m-4 cursor-pointer pb-4
                    ${active === item.id ? 'text-white': 'text-gray-400'}
                    ${idx === navLinks.length -1 ? '' : 'border-b'}
                     hover:text-white transition-all duration-150`}>
                        <a href={`#${item.id}`}>{item.label}</a>
                </li>
                    
                ))}
                </ul>
            </div>
    </div>
  )
}

export default Navbar