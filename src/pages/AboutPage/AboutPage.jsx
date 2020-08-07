import React from "react";
import "./AboutPage.css"; 
import * as Icon from 'react-feather';

function AboutPage(props) {
  return (
    <div className="pages">
      <div className="sub-page"> 

        <div className="section-title">
            <div className="main-title">
                <div className="title-main-page">  
                    <h4>{props.title}</h4>  
                </div>
            </div>
        </div>

        <div className="row pb-30">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <h3>Tria Bagus Nur Taufik</h3>
              <span className="about-location">
                <Icon.MapPin /> Batu City, Indonesia</span>
              <p className="about-content">
                  Hi, I'm a web developer and have been in this field for more than 4 years. It feels good to help and solve problems, problems, and logic that is applied to today's technology. Regarding web developers, I have participated in several training and competitions in the same field. I also contribute with several organizations and communities. 
              </p> 
          </div>

          <div className="col-xs-6 col-sm-12 col-md-6 col-lg-6">
              <div className="box-img">
                  <img src="https://triabagus.github.io/images/profile.svg" className="img-fluid" alt="profile" />
              </div>
          </div>
        </div>

        <div className="pb-30 pt-30">
          <div className="row skills-blocks"> 
              <div className="col-md-7">
                  <div className="special-block-bg">
                      <div className="section-head">
                          <h4>
                              <span>My Professional</span>
                              Work Skills 
                          </h4>
                      </div>
                      <div className="skills-info skills-second-style">
                          <div className="clearfix">
                              <h4>PHP</h4> 
                          </div> 

                          <div className="clearfix">
                              <h4>Javascript</h4> 
                          </div> 

                          <div className="clearfix">
                              <h4>Wordpress</h4> 
                          </div> 

                          <div className="clearfix">
                              <h4>Laravel</h4> 
                          </div> 

                          <div className="clearfix">
                              <h4>Fiqma</h4> 
                          </div> 
                      </div>
                  </div>
              </div> 
 
              <div className="col-md-5">
                  <div className="special-block-bg">
                      <div className="section-head">
                          <h4>
                              <span>My Professional</span>
                              Language Skills
                          </h4>
                      </div>
                      <div className="skills-info">
                          <div className="language-skill row">
                              <h4 className="col-md-6 text-left">English <span>Conversional</span> </h4>
                          </div>
                          <div className="language-skill row">
                              <h4 className="col-md-6 text-left">Arab<span>Native</span> </h4>
                          </div>
                      </div>
                  </div>
              </div> 
          </div>
      </div>


      </div>
    </div>
  );
}

export default AboutPage;
