import React from 'react';
import { homeleft } from '../../menu';
import { midhome } from '../../homemid';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='flex w-[100%]'>
            <div className='w-[24%] pl-[60px] mt-[40px]'>
                <img src="./twitter-logo-4 1.svg" alt="twitter" />
                <div className='mt-[30px] ml-[]'>
                    {
                        homeleft.map((item) => (
                            <div key={item.id} className="py-[5px] flex gap-[15px] items-center mt-[5px]">
                                <img className='w-[25px]' src={item.img} alt={item.title} />
                                <p className="text-[15px] font-[700]">{item.title}</p>
                            </div>
                        ))
                    }
                </div>
                <button className='mt-[40px] ease-linear bg-[#1DA1F2] w-[60%] px-[8px] py-[12px] rounded-[30px] hover:bg-[#4f4ff2] text-[white] font-[600] text-[16px]'>
                    Tweet
                </button>
            </div>
            <div className='border-l-[1px] border-l-[black] w-[50%] border-r-[1px] border-r-[black]'>
                <div className='flex justify-between mt-[40px] p-[10px]'>
                    <h1 className='text-[25px] font-[700]'>Home</h1>
                    <img className='ml-[auto]' src="./Homemidimg/Customize.svg" alt="" />
                </div>

                <div className='mt-[20px]'>
                    {
                        midhome.map((time) => (
                            <div key={time.id} className='flex pt-[15px] pl-[20px] border-t-[1px] border-t-[#0000007d]'>
                                <div><img className='w-[60px] h-[60px]' src={time.imgprofile} alt={time.title} /></div>
                                <div className='ml-[30px]'>
                                    <div className='flex gap-[10px]'>
                                        <h3 className='font-[600]'>{time.title}</h3>
                                        <p className='text-[#0000005d]'>{time.email}</p>
                                        <p className='text-[#0000006e]'>.</p>
                                        <p className='text-[#0000006e]'>{time.lefttime}</p>
                                    </div>
                                    <div className='my-[5px] w-[90%] mx-[auto]'>
                                        <p  >{time.messeg}</p>
                                    </div>
                                    <div>
                                        <img src={time.img} alt="" />
                                    </div>
                                    <div className='flex gap-[40px] justify-between my-[10px] w-[90%] mx-[auto]'>
                                        <img src={time.imgmessge} alt={time.title} />
                                        <img src={time.imgrefresh} alt={time.title} />
                                        <img src={time.imglike} alt={time.title} />
                                        <img src={time.imgsend} alt={time.title} />
                                        <img src={time.imgstatsia} alt={time.title} />
                                    </div>
                                </div>
                                <div className='ml-[auto] p-[5px]'>
                                    <img className='w-[18px]' src={time.imgpunct} alt={time.title} />
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>

            <div className='mt-[40px] w-[24%]'>
                <div className='mx-[auto] my-[5px] items-center ml-[30px]'>
                    <input placeholder='Search' className='border-[1px] border-[#00000068] w-[90%] py-[5px] px-[10px] rounded-[30px]' type="search" />
                </div>
                <div className=' bg-[#F7F9F9] py-[10px] px-[8px] rounded-[8px] ml-[10px] mt-[20px] mb-[10px]'>
                    <div>
                        <h2 className='text-[20px] font-[600] ml-[20px] my-[15px]'>Trends for you</h2>
                    </div>
                    <div>
                        {
                            midhome.map((secl) => (
                                <div className='mt-[10px] ml-[20px] flex justify-between'>
                                    <div>
                                        <p className='text-[#0000006c]'>{secl.city}</p>
                                        <h4 className='text-[18px] font-[600]'>{secl.revolution}</h4>
                                        <p className='text-[15px] text-[#00000076]'>{secl.fuulllike}</p>
                                    </div>
                                    <div>
                                        <img src={secl.imgpunct} alt={secl.revolution} />
                                    </div>
                                </div>

                            ))
                        }
                        <div className='mt-[20px] ml-[20px]'>
                            <p className='text-[#1DA1F2]'>Show more</p>
                        </div>
                    </div>
                </div>

                <div className='bg-[#F7F9F9] mt-[20px] ml-[30px] p-[10px]'>
                    <h1 className='font-[700] text-[20px]'>You might like</h1>
                    <div className='flex justify-between items-center mt-[10px] p-[5px]'>
                        <div>
                            <img src="./Homemidimg/Ellipse 5.svg" alt="" />
                        </div>
                        <div>
                            <h4>Mushtariy</h4>
                            <p>@Mushtar565266</p>
                        </div>
                        <div>
                            <Link className='px-[15px] py-[5px] pb-[6px] bg-[black] text-[white] rounded-[20px]' href="#">Follow</Link>
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-[10px] p-[5px]'>
                        <div>
                            <img src="./Homemidimg/Ellipse 5 (1).svg" alt="" />
                        </div>
                        <div className='ml-[-25px]'>
                            <h4>Shuhratbek</h4>
                            <p>@mrshukhrat</p>
                        </div>
                        <div>
                            <Link className='px-[15px] py-[5px] pb-[6px] bg-[black] text-[white] rounded-[20px]' href="#">Follow</Link>
                        </div>
                    </div>
                    <div className='mt-[20px] ml-[20px]'>
                        <p className='text-[#1DA1F2]'>Show more</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
