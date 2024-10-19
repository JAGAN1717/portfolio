import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Header() {

  const router = useNavigate();

  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `https://bmjagan.vercel.app/assets/JAGAN_BM.pdf`; // Path to your PDF
    link.download = 'JAGAN_B.pdf'; // Filename for the downloaded file
    link.click();
  }



  return (
    <div className=''>

      <header className='top-header'>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container">
            <div role='button' onClick={() => router('/')} className="navbar-brand d-flex align-items-center">
              {/* <img src='/assets/images/Capture.jpg' alt='logo' className='' /> */}
              <i class="fa fa-code " aria-hidden="true"></i>
              <h4 className='ms-2 mb-0 mt-2'><span>J</span><span>A</span><span>G</span><span>A</span><span>N</span> <span>B</span><span>M</span></h4>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon "></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title text-light" id="offcanvasNavbarLabel">JAGAN BM</h5>
                <button type="button" class="btn-close" id='wheniClickClose' data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div class="offcanvas-body">
                <ul className="navbar-nav ms-auto " onClick={() => document.getElementById('wheniClickClose')?.click()}>
                  <li className={window.location.pathname == "/Projects" ? "nav-item active" : 'nav-item '}>
                    <Link className={"nav-link"} to={'/Projects'}>Projects</Link>
                  </li>
                  <li className={window.location.pathname == "/about-Me" ? "nav-item active" : 'nav-item '}>
                    <Link className={"nav-link"} to={'/about-Me'}>About me</Link>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" onClick={() => router('/')} href="#contact" >Contact me</a>
                  </li> 

                  <li className="nav-item">
                    <a className="nav-link Sicons2" target='_blank' href="https://www.linkedin.com/in/jagan-b-502b37229/" >
                      {/* <img src='/assets/images/__linked in.png' alt='logo' className='linked' /> */}
                      <i class="fa fa-linkedin-square " aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link Sicons2" target='_blank' href="https://github.com/JAGAN1717" >
                      <i class="fa fa-github" aria-hidden="true"></i>
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link Sicons2" onClick={()=> handleDownload()} href="#contact" >
                      <button type='button' className='btn pb-1'>RESUME</button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className='gradient'></div>
    </div>
  )
}
