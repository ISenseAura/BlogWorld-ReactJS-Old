import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {

  
  return (
            
<header>
  <div className="collapse bg-dark" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-7 py-4">
          <h4 className="text-white">About</h4>
          <p className="text-muted">A Place for me and my friends to write blogs.</p>
        </div>
        
         <div className="col-sm-4 offset-md-1 py-4">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/myblogs">My Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/signup">SignUp</Link></li>
                      
                        </ul>
        </div>
                  
        
      </div>
    </div>
  </div>
  <div className="navbar navbar-dark bg-dark shadow-sm">
    <div className="container">
      <a href="#" className="navbar-brand d-flex align-items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" aria-hidden="true" className="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        <strong>BlogWorld</strong>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </div>
</header>
    )

  
  
  
  
    /* return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">MyBlogWorld</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/myblogs">My Blogs</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/signup">SignUp</Link></li>
                      
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
*/
}

export default NavBar
