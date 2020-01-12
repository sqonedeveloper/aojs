import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'
import renderHTML from 'react-render-html'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Home extends Component {
   constructor() {
      super()

      this.state = {
         thumbnail: '',
         name: '',
         about_journal: '',
         additional_content: ''
      }
   }

   componentDidMount() {
      this._getThumbnail()
      this.setState({ ...content.journal })
   }

   _getThumbnail() {
      var formData = new FormData()
      formData.append('file_name', 'thumbnail')
      formData.append('path', 'public/' + segment[0])
      formData.append('field_response', 'thumbnail')

      axios.
         post('/readimage', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   render() {
      return (
         <>
            <div id="sj-homebanner" className="sj-homebanner">
               <Container fluid={false}>
                  <Row>
                     <Col sm={12} md={12} lg={6}>
                        <div className="sj-postbook">
                           <figure className="sj-featureimg">
                              <div className="sj-bookimg">
                                 <div className="sj-frontcover">
                                    <LazyLoadImage effect="blur" src={this.state.thumbnail} />
                                 </div>
                              </div>
                           </figure>
                        </div>
                     </Col>
                     <Col sm={12} md={12} lg={6}>
                        <div className="sj-bannercontent">
                           <h1>{this.state.name}</h1>
                           <div className="sj-description">
                              <p>{this.state.about_journal}<a href={siteURL + '/' + segment[0] + '/about/journal'}>Read more</a></p>
                           </div>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
            <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
               <div className="sj-haslayout">
                  <Container fluid={false}>
                     <Row>
                        <div className="sj-welcomegreeting" style={{ background: 'transparent' }}>
                           <Col sm={12} md={12} lg={12} className="sj-verticalmiddle">
                              <div className="sj-welcomecontent">
                                 <div className="sj-description">
                                    {renderHTML(this.state.additional_content)}
                                 </div>
                              </div>
                           </Col>
                        </div>
                     </Row>
                  </Container>
               </div>
               <div id="sj-twocolumns" className="sj-twocolumns">
                  <div className="container">
                     <div className="row">
                        <div className="col-12 col-sm-12 col-md-8 col-lg-9">
                           <div id="sj-content" className="sj-content">
                              <section className="sj-haslayout sj-sectioninnerspace">
                                 <div className="sj-borderheading">
                                    <h3>Editor’s Pick</h3>
                                    <a className="sj-btnview" href="#">View All</a>
                                 </div>
                                 <div id="sj-editorchoiceslider" className="sj-editorchoiceslider sj-editorschoice owl-carousel">
                                    <div className="item">
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-01.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Hillary Farnham</a></span>
                                                <h3><a href="#">Toward Better-Quality Compounded Drugs — An Update form</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-02.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-03.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Frederica Kinnaird</a></span>
                                                <h3><a href="#">A Milestone for CART Cells &amp; Treatment</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                    </div>
                                    <div className="item">
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-01.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Hillary Farnham</a></span>
                                                <h3><a href="#">Toward Better-Quality Compounded Drugs — An Update form</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-02.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-03.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Frederica Kinnaird</a></span>
                                                <h3><a href="#">A Milestone for CART Cells &amp; Treatment</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                    </div>
                                    <div className="item">
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-01.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Hillary Farnham</a></span>
                                                <h3><a href="#">Toward Better-Quality Compounded Drugs — An Update form</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-02.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                       <article className="sj-post sj-editorchoice">
                                          <figure className="sj-postimg">
                                             <img src="images/editorchoice/img-03.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <div className="sj-head">
                                                <span className="sj-username"><a href="#">Frederica Kinnaird</a></span>
                                                <h3><a href="#">A Milestone for CART Cells &amp; Treatment</a></h3>
                                             </div>
                                             <div className="sj-description">
                                                <p>Consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco...</p>
                                             </div>
                                             <a className="sj-btn" href="#">View Full Article</a>
                                          </div>
                                       </article>
                                    </div>
                                 </div>
                              </section>
                              <section className="sj-haslayout sj-sectioninnerspace">
                                 <div className="sj-borderheading">
                                    <h3>Previous Issues</h3>
                                    <a className="sj-btnview" href="#">View All</a>
                                 </div>
                                 <div className="sj-previousissues">
                                    <ul className="sj-navtabs nav" id="myTab" role="tablist">
                                       <li className="nav-item">
                                          <a className="nav-link active" id="home-tab" data-toggle="tab" href="#2018" role="tab" aria-controls="2018" aria-selected="true">Issues From: <span>2018</span></a>
                                       </li>
                                       <li className="nav-item">
                                          <a className="nav-link" id="profile-tab" data-toggle="tab" href="#2017" role="tab" aria-controls="2017" aria-selected="false">Issues From: <span>2017</span></a>
                                       </li>
                                       <li className="nav-item">
                                          <a className="nav-link" id="contact-tab" data-toggle="tab" href="#2016" role="tab" aria-controls="2016" aria-selected="false">Issues From: <span>2016</span></a>
                                       </li>
                                       <li className="nav-item">
                                          <a className="nav-link" id="home-tabb" data-toggle="tab" href="#2015" role="tab" aria-controls="2015" aria-selected="true">Issues From: <span>2015</span></a>
                                       </li>
                                       <li className="nav-item">
                                          <a className="nav-link" id="profile-tabb" data-toggle="tab" href="#2014" role="tab" aria-controls="2014" aria-selected="false">Issues From: <span>2014</span></a>
                                       </li>
                                       <li className="nav-item">
                                          <a className="nav-link" id="contact-tabb" data-toggle="tab" href="#2013" role="tab" aria-controls="2013" aria-selected="false">Issues From: <span>2013</span></a>
                                       </li>
                                    </ul>
                                    <div className="sj-tabcontent tab-content" id="myTabContent">
                                       <div className="tab-pane fade show active" id="2018" role="tabpanel" aria-labelledby="home-tab">
                                          <div id="sj-issuesslider-2018" className="sj-issuesslider-2018 sj-issuesslider owl-carousel">
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tab-pane fade" id="2017" role="tabpanel" aria-labelledby="profile-tab">
                                          <div id="sj-issuesslider-2017" className="sj-issuesslider-2017 sj-issuesslider owl-carousel">
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tab-pane fade" id="2016" role="tabpanel" aria-labelledby="contact-tab">
                                          <div id="sj-issuesslider-2016" className="sj-issuesslider-2016 sj-issuesslider owl-carousel">
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tab-pane fade" id="2015" role="tabpanel" aria-labelledby="home-tab">
                                          <div id="sj-issuesslider-2015" className="sj-issuesslider-2015 sj-issuesslider owl-carousel">
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tab-pane fade" id="2014" role="tabpanel" aria-labelledby="profile-tab">
                                          <div id="sj-issuesslider-2014" className="sj-issuesslider-2014 sj-issuesslider owl-carousel">
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="tab-pane fade" id="2013" role="tabpanel" aria-labelledby="contact-tab">
                                          <div id="sj-issuesslider-2013" className="sj-issuesslider-2013 sj-issuesslider owl-carousel">
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                             <div className="item">
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-04.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Coleman Hoff</a></span>
                                                         <h3><a href="#">Toward Better-Quality Compounded Drugs</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-05.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Kimberly Delapena</a></span>
                                                         <h3><a href="#">Swallowing a Spy</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-06.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Milan Poat</a></span>
                                                         <h3><a href="#">Emergency Legal Authority &amp; the Crisis</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                                <article className="sj-post sj-editorchoice sj-smallpost">
                                                   <figure className="sj-postimg">
                                                      <img src="images/editorchoice/img-07.jpg" alt="image description" />
                                                   </figure>
                                                   <div className="sj-postcontent">
                                                      <div className="sj-head">
                                                         <span className="sj-username"><a href="#">Camilla Hofstetter</a></span>
                                                         <h3><a href="#">Talaromyces marneffei Infection</a></h3>
                                                      </div>
                                                   </div>
                                                </article>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </section>
                              <section className="sj-haslayout sj-sectioninnerspace">
                                 <div className="sj-borderheading">
                                    <h3>Coming In 2018</h3>
                                    <a className="sj-btnview" href="#">View All</a>
                                 </div>
                                 <div id="sj-upcomingbooksslider" className="sj-upcomingbooksslider sj-upcomingbooks owl-carousel">
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-01.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Revealing of Behavioral</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-02.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Communication Theory</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-03.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Translational Animal</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-04.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Journal of Communication</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-05.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Journal of Burn Care</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-06.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Journal of Communication</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-07.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Translational Animal Science</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-08.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Communication Theory</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="item">
                                       <div className="sj-upcomingbook">
                                          <figure className="sj-upcomingbookimg">
                                             <img src="images/comingbooks/img-09.jpg" alt="image description" />
                                          </figure>
                                          <div className="sj-postcontent">
                                             <h3><a href="#">Revealing of Behavioral</a></h3>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </section>
                              <section className="sj-haslayout sj-sectioninnerspace">
                                 <div className="sj-borderheading">
                                    <h3>What's Hot In News</h3>
                                    <a className="sj-btnview" href="#">View All</a>
                                 </div>
                                 <div className="sj-newsposts">
                                    <div id="sj-newsarticlesslider" className="sj-newsarticlesslider sj-newsarticles owl-carousel">
                                       <div className="item">
                                          <div className="sj-newsarticle">
                                             <figure className="sj-newsimg">
                                                <img src="images/news/img-01.jpg" alt="image description" />
                                             </figure>
                                             <div className="sj-newscontent">
                                                <div className="sj-newshead">
                                                   <time className="sj-posttimedate">Tuesday, Apr 21, 2017</time>
                                                   <h3><a href="#">Moving Toward Better-Quality Compounded Drugs</a></h3>
                                                </div>
                                                <div className="sj-description">
                                                   <p>Consectetur adipisicing elit sed incididunt labore... <a href="#">Read More</a></p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="sj-newsarticle">
                                             <figure className="sj-newsimg">
                                                <img src="images/news/img-02.jpg" alt="image description" />
                                             </figure>
                                             <div className="sj-newscontent">
                                                <div className="sj-newshead">
                                                   <time className="sj-posttimedate">Tuesday, Apr 21, 2017</time>
                                                   <h3><a href="#">Moving Toward Better-Quality Compounded Drugs</a></h3>
                                                </div>
                                                <div className="sj-description">
                                                   <p>Consectetur adipisicing elit sed incididunt labore... <a href="#">Read More</a></p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="sj-newsarticle">
                                             <figure className="sj-newsimg">
                                                <img src="images/news/img-03.jpg" alt="image description" />
                                             </figure>
                                             <div className="sj-newscontent">
                                                <div className="sj-newshead">
                                                   <time className="sj-posttimedate">Tuesday, Apr 21, 2017</time>
                                                   <h3><a href="#">Moving Toward Better-Quality Compounded Drugs</a></h3>
                                                </div>
                                                <div className="sj-description">
                                                   <p>Consectetur adipisicing elit sed incididunt labore... <a href="#">Read More</a></p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="sj-newsarticle">
                                             <figure className="sj-newsimg">
                                                <img src="images/news/img-01.jpg" alt="image description" />
                                             </figure>
                                             <div className="sj-newscontent">
                                                <div className="sj-newshead">
                                                   <time className="sj-posttimedate">Tuesday, Apr 21, 2017</time>
                                                   <h3><a href="#">Moving Toward Better-Quality Compounded Drugs</a></h3>
                                                </div>
                                                <div className="sj-description">
                                                   <p>Consectetur adipisicing elit sed incididunt labore... <a href="#">Read More</a></p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div className="item">
                                          <div className="sj-newsarticle">
                                             <figure className="sj-newsimg">
                                                <img src="images/news/img-02.jpg" alt="image description" />
                                             </figure>
                                             <div className="sj-newscontent">
                                                <div className="sj-newshead">
                                                   <time className="sj-posttimedate">Tuesday, Apr 21, 2017</time>
                                                   <h3><a href="#">Moving Toward Better-Quality Compounded Drugs</a></h3>
                                                </div>
                                                <div className="sj-description">
                                                   <p>Consectetur adipisicing elit sed incididunt labore... <a href="#">Read More</a></p>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </section>
                           </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-4 col-lg-3">
                           <aside id="sj-sidebar" className="sj-sidebar">
                              <div className="sj-widget sj-widgetsearch">
                                 <div className="sj-widgetcontent">
                                    <form className="sj-formtheme sj-formsearch">
                                       <fieldset>
                                          <input type="search" name="search" className="form-control" placeholder="Search here" />
                                          <button type="submit" className="sj-btnsearch"><i className="lnr lnr-magnifier"></i></button>
                                       </fieldset>
                                    </form>
                                 </div>
                              </div>
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
                              <div className="sj-widget sj-widgetadd">
                                 <div className="sj-widgetcontent">
                                    <figure className="sj-addimage"><a href="#"><img src="images/widget-add2.jpg" alt="image description" /></a></figure>
                                 </div>
                              </div>
                           </aside>
                        </div>
                     </div>
                  </div>
               </div>
            </main>
         </>
      )
   }
}

ReactDOM.render(<Home />, document.getElementById('root'))