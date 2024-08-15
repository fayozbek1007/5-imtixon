import React from 'react';
import { useSubmit } from 'react-router-dom';

const Login = () => {
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div className='p-[40px] w-[400px] h-[500px]  '>
                <div>
                    <img className='mx-[auto] my-0' src="./twitter-logo-4 1.svg" alt="twetter" />
                    <h2 className='font-[700] text-[25px] text-center mt-4'>
                        Log in to Twitter
                    </h2>
                </div>
                <div className='mt-[20px]'>
                    <input placeholder='Phone number,email address' className='text-[blue] border-[1px] border-[black]  mt-[15px] p-[10px] w-[100%] rounded-[7px]' type="text" />
                    <input placeholder='Password' className='text-indigo-700 border-[1px] border-[black]  mt-[15px] p-[10px] w-[100%] rounded-[7px]' type="password" />
                    <button onSubmit={useSubmit} className='mt-[40px] ease-linear bg-[#1DA1F2] w-[100%] px-[8px] py-[12px] rounded-[30px] hover:bg-[#4f4ff2] text-[white] font-[600] text-[16px]'>
                        Log In
                    </button>
                </div>
                <div className='mt-[25%] gap-[20px] flex justify-between'>
                    <p className='font-[400] text-[16px] text-[#1DA1F2]'>
                        Forgot password ?
                    </p>
                    <p className='font-[400] text-[16px] text-[#1DA1F2]'>
                        Sign up to Twitter
                    </p>
                </div>
            </div>
        </div>
    );
}

console.log();
export default Login;
