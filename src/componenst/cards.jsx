import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { styles } from '../util/styles'
import { Card } from '../config/constants'

const Cards = () => {
  return (
    <div id='about' className=" w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
            
            {Card.map((item, idx) => (
                <div className={`w-full border shadow-xl flex flex-col p-4 rounded-lg hover:scale-105 duration-300
                ${item.special === true ? 'my-8' : 'my-16'}`}>
                <img src={Single} alt="/" className='w-20 mx-auto -mt-[3rem] bg-white' />
                <h2 className='text-2xl text-center font-bold py-8'>{item.title}</h2>
                <p className='text-4xl font-bold text-center'>{item.price}</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>{item.storage}</p>
                    <p className='py-2 border-b mx-8'>{item.grantedUser}</p>
                    <p className={`py-2 border-b mx-8`}>{item.sendUpTo}</p>
                </div>
                <button className={` ${item.special === true ? `bg-black w-[200px] rounded-md my-6 py-3 ${styles.green} mx-auto font-bold active:bg-[#292929]`
                : `${styles.bgGreen} w-[200px] rounded-md my-6 mx-auto py-3 text-black font-bold active:bg-[#14976e]`}`}>Start Trial</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Cards