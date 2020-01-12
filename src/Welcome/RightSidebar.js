import React, { Component } from 'react'
import { Col } from 'react-bootstrap'

export default class RightSidebar extends Component {
   render() {
      return (
         <Col xs={12} sm={12} md={4} lg={3}>
            <aside id="sj-sidebar" className="sj-sidebar">
               <div className="sj-widget sj-widgetimpactfector">
                  <div className="sj-widgetcontent">
                     <ul>
                        <li>
                           <h3>Impact Factor<span>2.125</span></h3>
                           <h3>5 Year Impact Factor<span>2.853</span></h3>
                        </li>
                        <li>
                           <h3>Dr. Desmond Bratton</h3>
                           <div className="sj-description">
                              <p>Consectetur adipisicing elit sedo amod tempor incididunt. <a href="#">Read More</a></p>
                           </div>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="sj-widget sj-widgetnoticeboard">
                  <div className="sj-widgetheading">
                     <h3>Notice Board</h3>
                  </div>
                  <div className="sj-widgetcontent">
                     <ul>
                        <li><a href="#">Adipisicing elitaium sed dotas eiusm tempor incididunt utae labore etiate dolore magna aliqua enim.</a></li>
                        <li><a href="#">Labore etiat dolore magna aliquaen ad minim veniam.</a></li>
                        <li><a href="#">Duis aute irure dolor in reprehender</a></li>
                     </ul>
                  </div>
               </div>
               <div className="sj-widget sj-widgetadd">
                  <span className="sj-headtitle">Advertisment 270 x270</span>
                  <div className="sj-widgetcontent">
                     <figure className="sj-addimage"><a href="#"><img src="images/widget-add.jpg" alt="image description" /></a></figure>
                  </div>
               </div>
               <div className="sj-widget sj-widgetquestions">
                  <div className="sj-widgetheading">
                     <h3>Question Of The Week</h3>
                  </div>
                  <div className="sj-widgetcontent">
                     <div className="sj-description">
                        <p>Consectetur adipisicing elit, sed aeiuse tempor incididunt ut labore etamiudon magna aliqua enim ad minim?</p>
                     </div>
                     <div className="sj-questions">
                        <div className="sj-selectgroup">
                           <span className="sj-radio">
                              <input id="sj-qone" type="radio" name="question" value="qone" />
                              <label>Sputum stain for acid-fast bacilli</label>
                           </span>
                           <span className="sj-radio">
                              <input id="sj-qtwo" type="radio" name="question" value="qtwo" />
                              <label>Pleural biopsy</label>
                           </span>
                           <span className="sj-radio">
                              <input id="sj-qthree" type="radio" name="question" value="qthree" />
                              <label>Pleural fluid amylase</label>
                           </span>
                           <span className="sj-radio">
                              <input id="sj-qfour" type="radio" name="question" value="qfour" />
                              <label>Pleural fluid cytology</label>
                           </span>
                        </div>
                        <a className="sj-btn" href="#">Submit Now</a>
                     </div>
                  </div>
               </div>
            </aside>
         </Col>
      )
   }
}
