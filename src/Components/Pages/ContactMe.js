import React from 'react'

export default function ContactMe() {
  return (
    <section className='Con_bg' id='contact'>
      <div className='container'>
        <div className=' d-flex justify-content-center text-center w-100'>
          <div className='conatct'>
            <h3 className='mb-3'>Contact Me</h3>
            <p className='mb-3'>I'm always interested in hearing about new job opportunities, develop new sites and learn about it.</p>
            <a href={`mailto:jagan7162000@gmail.com`}>
              <button type='button' className='btn py-2'>Email Me</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
