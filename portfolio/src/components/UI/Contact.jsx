import React from 'react'

const Contact = () => {
  return <section id="contact" className='pb-16'>
    <div className="container">
        <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
            Get in Touch
            </h2>
        <div className='md:flex justify-between items-center'>
            <div className='w-full md:w-1/2 h-[300px] sm:h-[450px]'>
            <iframe title='google-maps'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113996.
            47088542127!2d83.32150883747099!3d26.
            76384460613315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991446a0c332489%3A0x1ff3f97fdcc6bfa2!2sGorakhpur%2C%20Uttar%20
            Pradesh!5e0!3m2!1sen!2sin!4v1696242623935!5m2!1sen!2sin" 
            className='border-0 w-full h-full' 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>  
            </div>
            <div className='w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8'>
                <form className='w-full'>
                    <div className='mb-5'>
                        <input
                        type="text"
                        placeholder='Enter your name'
                        className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <div className='mb-5'>
                        <input
                        type="text"
                        placeholder='Enter your Email'
                        className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <div className='mb-5'>
                        <input
                        type="text"
                        placeholder='Subject'
                        className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <div className='mb-5'>
                        <textarea
                        type="text"
                        row={3}
                        placeholder='Enter your name'
                        className='w-full p-3 focus:outline-none rounded-[5px]'/>
                    </div>
                    <button className="w-full p-3 focus:outline-none rounded-[5px] bg-smallTextColor text-white
                    hover:bg-headingColor text-center ease-linear duration-150">
                        Send Message</button>
                </form>
            </div>
        </div>
    </div>
  </section>
}

export default Contact
