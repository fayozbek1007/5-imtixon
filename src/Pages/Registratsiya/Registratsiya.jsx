import React, { useRef } from 'react';


const Registratsiya = ({ data, SetData }) => {


    const nameref = useRef(null)
    const numberref = useRef(null)
    const passwordref = useRef(null)

    const hendSubmit = (v) => {
        v.preventDefault();

        const Name = nameref.current.value.trim();
        const Number = numberref.current.value.trim();
        const Password = passwordref.current.value.trim();

        if (!Name || !Number || !Password) {
            alert("Siz to'liq ma'lumot kiritmadingiz. Iltimos to'liq ma'lumot kiriting.");
            return;
        }

        const NewProfile = [...data, {
            id: data.length + 1,
            nAme: Name,
            nUmber: Number,
            pAssword: Password,
        }];

        SetData(NewProfile)

        nameref.current.value = ""
        numberref.current.value = ""
        passwordref.current.value = ""
    }

    return (
        <div>
            <div className='h-[100vh] flex items-center justify-center'>
                <div className='p-[40px] w-[400px] h-[500px]  '>
                    <div>
                        <img className='mx-[auto] my-0' src="./twitter-logo-4 1.svg" alt="twetter" />
                        <h2 className='font-[700] text-[25px] text-center mt-4'>
                            Create an account
                        </h2>
                    </div>
                    <form onSubmit={hendSubmit} >
                        <div className='mt-[20px]'>
                            <input ref={nameref} placeholder='Name...' className='text-[blue] border-[1px] border-[black]  mt-[15px] p-[10px] w-[100%] rounded-[7px]' type="text" />
                            <input ref={numberref} placeholder='Phone number' className='text-indigo-700 border-[1px] border-[black]  mt-[15px] p-[10px] w-[100%] rounded-[7px]' type="password" />
                            <input ref={passwordref} placeholder='Password' className='text-[blue] border-[1px] border-[black]  mt-[15px] p-[10px] w-[100%] rounded-[7px]' type="text" />
                            <h4 className='my-[30px] font-[700] text-[15px] text-[black]'>
                                Date of brith
                            </h4>
                            <div className='flex justify-between'>
                                <form className='border-[1.5px] border-[black] w-[120px] rounded-[6px] p-[4px]'>
                                    <select id="language">
                                        <option className='border-[2px] border-[black] text-sm font-semibold text-[#1DA1F2] ' value="">Month</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="January">January</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="February">February</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="March">March</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="April">April</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="May">May</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="June">June</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="July">July</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="August">August</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="September">September</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="October">October</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="November">November</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="December">December</option>
                                    </select>
                                </form>
                                <form className='border-[1.5px] border-[black] w-[60px] rounded-[6px] p-[4px]'>
                                    <select id="language">
                                        <option className='border-[2px] border-[black] text-sm font-semibold text-[#1DA1F2] ' value="">Day </option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="January">1</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="February">2</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="March">3</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="April">4</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="May">5</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="June">6</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="July">7</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="August">8</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="September">9</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="October">10</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="November">11</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="December">12</option>
                                    </select>
                                </form>
                                <form className='border-[1.5px] border-[black] w-[90px] rounded-[6px] p-[4px]'>
                                    <select id="language">
                                        <option className='border-[2px] border-[black] text-sm font-semibold text-[#1DA1F2] ' value="">Year</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="September">1996</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="October">1997</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="November">1998</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="December">1999</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="January">2000</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="February">2001</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="March">2002</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="April">2003</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="May">2004</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="June">2005</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="July">2006</option>
                                        <option className='p-2 text-sm font-semibold text-[#1DA1F2]' value="August">2007</option>
                                    </select>
                                </form>
                            </div>
                            <button className='mt-[40px] ease-linear bg-[#1DA1F2] w-[100%] px-[8px] py-[12px] rounded-[30px] hover:bg-[#4f4ff2] text-[white] font-[600] text-[16px]'>
                                Next
                            </button>
                        </div>
                        <div className='mt-[20px] gap-[20px] flex justify-between'>
                            <p className='font-[400] text-[16px] text-[#1DA1F2]'>
                                Forgot password ?
                            </p>
                            <p className='font-[400] text-[16px] text-[#1DA1F2]'>
                                Sign up to Twitter
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Registratsiya;
