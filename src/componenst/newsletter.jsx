import { styles } from "../util/styles"

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
            <div className="lg:col-span-2">
                <h1 className="md:text-4xl sm:text-3xl text-2xl font bold py-2">Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="my-4">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                    <input type="email" placeholder="Enter Email" className="p-3 rounded text-black flex w-full"/>
                    <button className={`${styles.bgGreen} w-[200px] rounded-md my-6 sm:ml-4 mx-auto py-3 text-black font-medium active:bg-[#14976e]`}>Notify me</button>
                </div>
                <p>We care bout the protection of your data. Read our <span className={`${styles.green} cursor-pointer underline sm:text-center`}>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter