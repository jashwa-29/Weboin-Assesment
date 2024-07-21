import React, { useState } from 'react';

const Joinform = () => {
    const [form, setForm] = useState(true);
    const [name, setName] = useState('');
    const [phoneno, setPhoneno] = useState('');
    const [city, setCity] = useState('');

    const submitbtn = (e) => {
        e.preventDefault();
        // Add any form validation if needed
        if (name && phoneno && city) {
            setForm(false);
        } else {
            alert('Please fill all fields');
        }
    };

    return (
        <section className='bg-rose-200 py-16'>
            {
                form ? 
                <div className='w-[95%] mx-auto text-center'>
                    <h2 className='text-orange-600 font-extrabold mx-auto text-center text-[38px]'>Join the <br className='md:hidden flex'/> Waitlist</h2>
                    <form onSubmit={submitbtn}>
                        <div className='flex items-center justify-center gap-11 py-4 flex-wrap'>
                            <input 
                                type="text" 
                                placeholder='Name' 
                                className='py-4 rounded-lg ps-2 w-[240px]' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder='Phone Number' 
                                className='py-4 rounded-lg ps-2 w-[240px]' 
                                value={phoneno}
                                onChange={(e) => setPhoneno(e.target.value)}
                            />
                            <input 
                                type="text" 
                                placeholder='City' 
                                className='py-4 rounded-lg ps-2 w-[240px]' 
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>
                        <button className='bg-none rounded-full w-[200px] py-[8px]  border-orange-600 border-[3px] my-7'  >

                          <span className='bg-orange-600 rounded-full px-[36px] py-3 text-[16px] text-black font-bold relative right-[7px] bottom-[6px]'> Join the Waitlist</span>
 
                        </button>
                    </form>
                </div> 
                : 
                <div>
                   <h2 className='text-orange-600 font-extrabold text-[38px] text-center'>Join the Waitlist</h2>
                    <h2 className='text-orange-600 font-extrabold text-[38px] text-center bg-red-500 py-10'>Thank You!</h2>
                </div>
            }
        </section>
    );
}

export default Joinform;
