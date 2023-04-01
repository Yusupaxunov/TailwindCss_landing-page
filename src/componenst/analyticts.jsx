import Laptop from '../assets/laptop.jpg';
import { styles } from '../util/styles';

const Analyticts = () => {
  return (
    <div id='resources' className="w-full bg-white px-16 py-14">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className='w-[500px] mx-auto my-4' src={Laptop} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className={`uppercase ${styles.green} font-bold`}>Data analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl my-4 text-2xl font-bold'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt iusto eius, eligendi fuga ad omnis enim? Magni error officiis numquam officia tempora, voluptas quae velit eius eum deleniti expedita, hic placeat similique provident explicabo quia vitae! Mollitia sunt harum error.</p>
                <button className={`bg-black w-[200px] rounded-md my-6 py-3 ${styles.green} mx-auto md:mx-0 font-bold active:bg-[#292929]`}>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analyticts