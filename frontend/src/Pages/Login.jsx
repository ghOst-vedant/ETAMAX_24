import React, { useState } from 'react'
import loginBird from '../Assets/other_images/loginBird.png'
import user from "../Assets/other_images/user.png";
import letter from "../Assets/other_images/letter.png";
import lock from "../Assets/other_images/lock.png";


const Login = ({ setAuth }) => {
    const [loginOrSignup, setloginOrSignup] = useState(true) //true means login and flase means signup
    const handleLogin = () => {
        setAuth(true)
    }
    const handleSignup = () => {
        setloginOrSignup(!loginOrSignup)
    }
    return (
        <div className={`flameBg h-[100vh] flex px-10 ${loginOrSignup ? "pt-[30vw] sm:pt-32" : "pt-[20vw] sm:pt-20"}`}>
            <div className='flex flex-col items-center gap-4 font-montserat sm:mx-auto'>
                <img src={loginBird} alt="phoenix" className='h-48 sm:h-60' />
                {loginOrSignup ?
                    <form action="submit" className='flex flex-col gap-4'>
                        <div className="bg-white/30 border-2 border-white rounded-full flex p-1 gap-2">
                            <img src={user} alt="icon" className="w-[15%] sm:w-[10%] rounded-full" />
                            <input type="text" name="rollno" id="rollno" placeholder="Roll no / email" className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white" />
                        </div>
                        <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
                            <img src={lock} alt="icon" className="w-[13%] sm:w-[8%] rounded-full mr-1" />
                            <input type="text" name="rollno" id="rollno" placeholder="Password" className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white" />
                        </div>
                        <button type='submit' className='bg-[#FFB800] w-fit m-auto py-3 px-10 rounded-full text-xl font-semibold text-gray-700' onClick={handleLogin}>Login</button>
                    </form>
                    :
                    <form action="submit" className='flex flex-col gap-4'>
                        <div className="bg-white/30 border-2 border-white rounded-full flex p-1 gap-2">
                            <img src={user} alt="icon" className="w-[15%] sm:w-[10%] rounded-full" />
                            <input type="text" name="rollno" id="rollno" placeholder="Username" className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white" />
                        </div>
                        <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
                            <img src={letter} alt="icon" className="w-[13%] sm:w-[8%] rounded-full mr-1" />
                            <input type="text" name="rollno" id="rollno" placeholder="E-mail" className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white" />
                        </div>
                        <div className="bg-white/30 border-2 border-white rounded-full flex p-2 gap-2">
                            <img src={lock} alt="icon" className="w-[13%] sm:w-[8%] rounded-full mr-1" />
                            <input type="text" name="rollno" id="rollno" placeholder="Password" className="text-xl outline-none w-[80%] bg-transparent rounded-r-full font-semibold text-white" />
                        </div>
                        <button type='submit' className='bg-[#FFB800] w-fit m-auto py-3 px-10 rounded-full text-xl font-semibold text-gray-700' onClick={handleSignup}>Signup</button>
                    </form>
                }
                {
                    loginOrSignup ?
                        <button className='w-fit py-3 px-6 text-xl font-semibold text-white border-b-[3px]' onClick={() => { setloginOrSignup(false) }}>Signup</button>
                        :
                        <button className='w-fit py-3 px-6 text-xl font-semibold text-white border-b-[3px]' onClick={() => { setloginOrSignup(true) }}>Login</button>
                }
            </div>
        </div>
    )
}

export default Login
