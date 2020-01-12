import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap'
import renderHTML from 'react-render-html'
import RightSidebar from '../RightSidebar'

class Privacy extends Component {
   constructor() {
      super()

      this.state = {
         privacy: '',
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
                                       <li className="sj-linkedin"><a href={'https://www.linkedin.com/shareArticle?mini=true&url=' + location.href + '&title=&summary=About the Journal'} target="_blank"><i className="fab fa-linkedin-in" /></a></li>
                                       <li className="sj-rss"><a href="#"><i className="fa fa-rss" /></a></li>
                                    </ul>
                                 </div>
                                 <div className="sj-description">
                                    {this.state.editUrl.privacy ? <button onClick={() => open(this.state.editUrl.privacy, '_blank')} className="live-edit-button"><i className="fas fa-edit" /> Edit</button> : ''}
                                    {renderHTML(this.state.privacy)}
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

ReactDOM.render(<Privacy />, document.getElementById('root'))