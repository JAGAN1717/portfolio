import React from 'react'

export default function AboutMe() {
  return (
    <section className='aboutbg swift-up-text'>
      <div className='container'>
        <div className='text-start'>
          <h3 className='fw-bold mb-3'>ABOUT ME</h3>
          <div className='abo mt-5 row'>
            <div className='col-md-6 d-flex justify-content-center'>
              <img src='/assets/images/v.jpg' className='abo_img ' alt='me' />
            </div>
            <div className='col-md-6 '>
              <div className='text-end mb-3'>
                <h5>HI</h5>
                <h4>THERE!</h4>
              </div>
              <div className='box_bg mb-3'>
                <p className='mb-0'>My name is Jagan and I'm a Frontend Web Developer.
                  Although I started training in Platosys Technology pvt Ltd, in the last 2 years I have focused on web and Mobile app development.</p>
              </div> 
              <div className='box_bg mb-3'>
                <p className='mb-0'>In this portfolio you will find my most outstanding works since I started on this path.
                    I invite you to know me better, my training, and experience and see my <a href='#' className='text-success'>RESUME</a> located in the upper right part of this page.
                .</p>
              </div> 
              <div className='text-end mb-3'>
              <h6>My favorite technologies  include:</h6>  
              <p>REACT JS, NODE JS, HTML & CSS </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
