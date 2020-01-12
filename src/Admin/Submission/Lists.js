import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'

class Lists extends Component {
   render() {
      return (
         <Container fluid={true}>
            <Row className="page-titles">
               <Col md={10} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Submissions</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Submissions</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
               <Col md={2} className="align-self-center">
                  <button onClick={() => open(siteURL + '/admin/submission/wizard/start', '_parent')} className="btn waves-effect waves-light btn-success btn-sm float-right">New Submissions</button>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <div className="card">
                     <div className="card-body">
                        This is some text within a card block.
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Lists />, document.getElementById('root'))