import React from 'react'

function Header() {
  return (
  
  <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <div class="logo me-auto">
        <h1><a href="index.html">( );</a></h1>
        {/* <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>--> */}
      </div>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="nav-link scrollto" href="#services">Notes</a></li>
          <li><a class="nav-link scrollto " href="#portfolio"></a></li>
          <li class="dropdown"><a href="#"><span>PYQ</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li class="dropdown"><a href="#"><span>Semester 1</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2019</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Semester 2</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2019</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Semester 3</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2019</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Semester 4</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2019</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Semester 5</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2019</a></li>
                </ul>
              </li>
              <li class="dropdown"><a href="#"><span>Semester 6</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">2023</a></li>
                  <li><a href="#">2022</a></li>
                  <li><a href="#">2021</a></li>
                  <li><a href="#">2020</a></li>
                  <li><a href="#">2019</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

      <div class="header-social-links d-flex align-items-center">
        {/* <!-- <a href="#" class="twitter"><i class="bi bi-twitter"></i></a> -->
        <!-- <a href="#" class="facebook"><i class="bi bi-facebook"></i></a> --> */}
        <a href="https://www.instagram.com/m.d_a.z.a.d/" target="_blank" class="instagram"><i class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/mdazad2" target="_blank" class="linkedin" ><i class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
  )
}

export default Header