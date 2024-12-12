import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [pending, setPending] = useState(false)
    const [error, setError] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      console.log(form.current)
      setPending(true)
  
      emailjs
        .sendForm('service_0q335ss', 'template_95pr6y1', form.current, {
          publicKey: 'u8uMMZsUUZ0IfvjR9',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            
            setTimeout(()=>{
                setPending(false)
            },1000)
          },
          (error) => {
            console.log('FAILED...', error.text);
            setPending(false)
            setError(error.text)
          },
        );
    }
    
  return (
    <>
    <div className="my-6" id='contact'>
            <div className="grid sm:grid-cols-2 items-center gap-16 p-8 mx-auto max-w-4xl border shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#fff] font-[sans-serif]">
                <div>
                    <h1 className="text-3xl font-extrabold">Let's Talk</h1>
                    <p className="text-sm text-white mt-3">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                    <p className="text-sm text-white mt-3">Looking forward to connect with you.</p>
                    <div className="mt-12">
                        <h2 className="text-lg font-extrabold">Email</h2>
                        <ul className="mt-3">
                            <li className="flex items-center">
                                <div className="bg-[#ffffffcf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                                        viewBox="0 0 479.058 479.058">
                                        <path
                                            d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                            data-original="#000000" />
                                    </svg>
                                </div>
                                <a target="blank" href="https://veilmail.io/e/FkKh7o" className="text-[#007bff] text-sm ml-3">
                                    <small className="block">Mail</small>
                                    <strong>contact@tattvacode.in</strong>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
                <form className="ml-auo space-y-4" ref={form} onSubmit={sendEmail}>
                    <input type='text'  placeholder='Name'name='name'
                        className="w-full bg-slate-800 text-white rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='email'  placeholder='Email' name='email'
                        className="w-full bg-slate-800 text-white rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <input type='text'  placeholder='Subject' name='subject'
                        className="w-full bg-slate-800 text-white rounded-md py-2.5 px-4 border text-sm outline-[#007bff]" />
                    <textarea placeholder='Message' rows="6" name='full_massage'
                        className="w-full bg-slate-800 text-white rounded-md px-4 border text-sm pt-2.5 outline-[#007bff]"></textarea>
                    <button type='submit'
                        className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-2.5 w-full">{pending?"Sending..":"Send"}</button>
                        <p className='text-red-500 text-xs'>{error.length>0?error:""}</p>
                </form>
            </div>
    <div className="inset-0 absolute blur-[200px] left-[-15%] top-[380%] max-w-xs h-[357px] sm:max-w-md md:max-w-lg z-10" style={{ background: "linear-gradient(16.89deg, rgba(47, 56, 246, 0.537) 15.73%, rgba(240, 62, 225, 0.29) 50.74%, rgba(213, 6, 221, 0.259) 56.49%)" }}></div>

        </div>
    </>
  )
}

export default Contact