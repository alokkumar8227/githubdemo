import React from 'react'

function Provide() {
  return (
    <section id="what-we-do" class="what-we-do">
      <div class="container">

        <div class="section-title">
          <h2>What We Provide</h2>
          <p>"we provide the tools and study materials that required throughout your college journey"</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon">
                {/* <!-- <i class="bi bi-question-circle"></i> --> */}
                <i class="bi bi-braces"></i>
              </div>
              <h4><a href="">Online Coding</a></h4>
              <p>A begineer friendly online coding IDE with the support language of C, C++, Python, Java etc.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-youtube"></i></div>
              <h4><a href="">Video Tutorials</a></h4>
              <p>Stucked? Don't worry, we provides you video tutorials according to your college syllabus.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bi bi-journal-arrow-down"></i></div>
              <h4><a href="">Notes & Quize</a></h4>
              <p>Get semester wise notes, pdf, assignment, short and long type questions answer and much more in downloadable formate.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Provide