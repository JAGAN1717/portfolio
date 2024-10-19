import React from 'react'
// import Resume from '../../../public/assets/JAGAN_BM.pdf'

export default function AboutMe() { 

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://bmjagan.vercel.app/assets/JAGAN_BM.pdf`; // Path to your PDF
    link.download = 'JAGAN_B.pdf'; // Filename for the downloaded file
    link.click();
  }

  return (
    <section className='aboutbg swift-up-text'>
      <div className='container'>
        <div className='text-start'>
          <h3 className='fw-bold mb-3'>ABOUT ME</h3>
          <div className='abo mt-5 row'>
            <div className='col-md-6 d-flex justify-content-center mb-4'>
              <img src='/assets/images/v.jpg' className='abo_img ' alt='me' />
            </div>
            <div className='col-md-6 mb-4'>
              <div className='text-end mb-3'>
                <h5>HI</h5>
                <h4>THERE!</h4>
              </div>
              <div className='box_bg mb-3'>
                <p className='mb-0'>My name is Jagan and I'm a Frontend Web Developer.
                  Although I started Career in Vriksha Techno Solution, in the last 2 years I have focused on web and Mobile app development.</p>
              </div>
              <div className='box_bg mb-3'>
                <p className='mb-0'>In this portfolio you will find my most outstanding works since I started on this path.
                  I invite you to know me better, my training, and experience and see my <a href='#' onClick={()=> handleDownload()} className='text-success'>RESUME</a> located in the upper right part of this page.
                  .</p>
              </div>
              <div className='text-end mb-3'>
                <h6>My favorite technologies  include:</h6>
                <p>REACT JS, NODE JS, HTML & CSS </p>
              </div>
            </div>
            <div className='col-md-12 mb-4 d-none'>
              <h3 className='fw-bold mb-3'>MY SKILLS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
