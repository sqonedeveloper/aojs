import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Header extends Component {
   constructor() {
      super()

      this.state = {
         logo: ''
      }
   }

   componentDidMount() {
      var formData = new FormData()
      formData.append('file_name', 'logo')
      formData.append('path', 'public/' + segment[0])
      formData.append('field_response', 'logo')

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
         <Container fluid={false}>
            <Row>
               <Col sm={12} md={12} lg={12} xl={12}>
                  <div className="sj-topbar">
                     <div className="sj-languagelogin">
                        <div className="sj-loginarea">
                           <ul className="sj-loging">
                              <li><a href={siteURL + '/login'}>Login</a></li>
                              <li><a href={siteURL + '/' + segment[0] + '/register'}>Register</a></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="sj-navigationarea">
                     <strong className="sj-logo">
                        <a href={siteURL + '/' + segment[0]}>
                           <LazyLoadImage effect="blur" src={this.state.logo} />
                        </a>
                     </strong>
                     <div className="sj-rightarea">
                        <nav id="sj-nav" className="sj-nav navbar-expand-lg">
                           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                              <i className="lnr lnr-menu" />
                           </button>
                           <div className="collapse navbar-collapse sj-navigation" id="navbarNav">
                              <ul>
                                 {content.navigation.map((data, key) => {
                                    return (
                                       <li key={key} className={data.sub ? 'menu-item-has-children' : ''}>
                                          <a href={data.url}>{data.label}</a>
                                          {data.sub ? <ul className="sub-menu">{data.child.map((a, b) => {
                                             return <li key={b}><a href={a.url}>{a.label}</a></li>
                                          })}</ul> : ''}
                                       </li>
                                    )
                                 })}
                              </ul>
                           </div>
                        </nav>
                        <a className="sj-btntopsearch" href="#sj-searcharea"><i className="lnr lnr-magnifier" /></a>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Header />, document.getElementById('sj-header'))