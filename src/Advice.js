import React, { useEffect, useState } from 'react'
import axios from "axios";


const Advice = () => {
    const [datas, setDatas] = useState({});

    const getAdvice = async () => {
        const { data } = await axios("https://api.adviceslip.com/advice");
        setDatas(data.slip)

    }
    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div className='z-30 h-screen w-screen flex justify-center items-center text-center '>
            <div className='bg-gray-300 text-black px-[10%] py-[2%] rounded-xl'>
                <div className='text-lg'>
                    {datas.advice}
                </div>
                <button className='px-2 py-1 text-xs text-gray-800 border border-black rounded-lg mt-4' onClick={getAdvice}>GIVE ME ADVICE</button>
            </div>
        </div>
    )
}

export default Advice