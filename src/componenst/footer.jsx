import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'
import { Links } from '../config/constants'
import { styles } from '../util/styles'

const Footer = () => {
  return (
    <div id='contact' className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className={`w-full uppercase text-3xl font-bold ${styles.green}`}>React.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum ea voluptate doloremque quae animi perferendis.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30}/>
                <FaInstagram size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaDribbbleSquare size={30}/>
            </div>
        </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                
                {Links.map(item => (
                <div>
                    <h6 className='text-gray-400 font-medium'>{item.title}</h6>
                    <ul>
                        <li className='py-2 text-sm'>{item.links.link0}</li>
                        <li className='py-2 text-sm'>{item.links.link1}</li>
                        <li className='py-2 text-sm'>{item.links.link2}</li>
                        <li className='py-2 text-sm'>{item.links.link3}</li>
                    </ul> 
                </div>
                ))}
            
        </div>
    </div>
  )
}

export default Footer