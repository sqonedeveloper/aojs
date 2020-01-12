import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Col, Row } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import renderHTML from 'react-render-html'
import RightSidebar from '../RightSidebar'

class Journal extends Component {
   constructor() {
      super()

      this.state = {
         about_journal: '',
         editUrl: {}
      }
   }

   componentDidMount() {
      this.setState({ ...content.detail })
   }

   render() {
      return (
         <>
            <div className="sj-innerbanner">
               <Container fluid={false}>
                  <Row>
                     <Col sm={12} md={12} lg={12}>
                        <div className="sj-innerbannercontent">
                           <h1>{document.getElementsByTagName('title')[0].innerText}</h1>
                           <ol className="sj-breadcrumb">
                              <li><a href={siteURL + '/' + segment[0]}>Home</a></li>
                              <li className="active"><span>{document.getElementsByTagName('title')[0].innerText}</span></li>
                           </ol>
                        </div>
                     </Col>
                  </Row>
               </Container>
            </div>
            <main id="sj-main" className="sj-main sj-haslayout sj-sectionspace">
               <div id="sj-twocolumns" className="sj-twocolumns">
                  <Container fluid={false}>
                     <Row>
                        <Col xs={12} sm={12} md={8} lg={9}>
                           <div id="sj-content" className="sj-content">
                              <div className="sj-newsdetail">
                                 <div className="sj-tagssocialshare">
                                    <ul className="sj-socialiconssimple">
                                       <li className="sj-facebook"><a href={'https://www.facebook.com/sharer/sharer.php?u=' + location.href} target="_blank"><i className="fab fa-facebook-f" /></a></li>
                                       <li className="sj-twitter"><a href={'https://twitter.com/home?status=' + location.href} target="_blank"><i className="fab fa-twitter" /></a></li>
                                       <li className="sj-linkedin"><a href={'https://www.linkedin.com/shareArticle?mini=true&url='+ location.href +'&title=&summary=About the Journal'} target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                       <li className="sj-rss"><a href="#"><i className="fa fa-rss" /></a></li>
                                    </ul>
                                 </div>
                                 <div className="sj-description">
                                    {this.state.editUrl.about_journal ? <button onClick={() => open(this.state.editUrl.about_journal, '_blank')} className="live-edit-button"><i className="fas fa-edit" /> Edit</button> : ''}
                                    {renderHTML(this.state.about_journal)}
                                 </div>
                              </div>
                              <div className="sj-author">
                                 <figure className="sj-authorimg">
                                    <LazyLoadImage effect="blur" src="http://amentotech.com/htmls/amentojourn/images/newsdetail/authorimg-01.jpg" />
                                 </figure>
                                 <div className="sj-authorcontent">
                                    <div className="sj-authorhead">
                                       <div className="sj-leftarea">
                                          <div className="sj-authorname">
                                             <h3>Lurlene Cashman</h3>
                                             <span>Author Since: June 27, 2017</span>
                                          </div>
                                       </div>
                                       <div className="sj-rightarea">
                                          <ul className="sj-socialiconssimple">
                                             <li className="sj-facebook"><a href="#"><i className="fab fa-facebook-f" /></a></li>
                                             <li className="sj-twitter"><a href="#"><i className="fab fa-twitter" /></a></li>
                                             <li className="sj-linkedin"><a href="#"><i className="fab fa-linkedin-in" /></a></li>
                                             <li className="sj-googleplus"><a href="#"><i className="fab fa-google-plus-g" /></a></li>
                                             <li className="sj-rss"><a href="#"><i className="fa fa-rss" /></a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="sj-description">
                                       <p>ncididunt ut labore elore lokate magna aliqua enim adminim sitae veniam quis nostrud acitation ullamcoaris nisiutia aliquip ex ea commodo consequat aute irure dolor reprehenderit inoluptate velitita esse cillum dolore eu fugiat nulla pariatur enim ipsam voluptatem quia voluptas.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </Col>
                        <RightSidebar />
                     </Row>
                  </Container>
               </div>
            </main>
         </>
      )
   }
}

ReactDOM.render(<Journal />, document.getElementById('root'))