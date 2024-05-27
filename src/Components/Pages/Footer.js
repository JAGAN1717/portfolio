import React from 'react'

export default function Footer() {
  return ( 
    <footer className='foot-Bg'>
      <div className='container text-center'>
        <h4 className='mb-5'>JAGAN BM - FrontEnd Developer</h4>  
        <div className='Sicons d-flex justify-content-center align-items-center mb-5'>
          <div><i class="fa fa-linkedin-square mx-3" aria-hidden="true"></i></div>
          <div ><i className="fa fa-github  mx-3" aria-hidden="false"></i></div>
          <div><i className="fa fa-envelope mx-3"></i></div>
        </div>
        <p className='fw-normal'>© 2024 JAGAN. all rights reserved.</p>
      </div>
    </footer>
  )
}
