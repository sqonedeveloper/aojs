import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Table, Modal, Form } from 'react-bootstrap'
import MsgResponse from '../../MsgResponse'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Upload extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         showModal: false
      }

      this._onChange = this._onChange.bind(this)
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[5])

      axios.
         post('', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            setTimeout(() => {
               this.setState({ msg_response: '' })
            }, 3000);
         }).
         catch(error => {
            console.log('Error', error.message)
         }).
         finally(() => {
            this.setState({ btnLoading: false })
         })
   }

   render() {
      return (
         <Container fluid={true}>
            <MsgResponse msg_response={this.state.msg_response} />
            <Row className="page-titles">
               <Col md={12} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Submissions</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Submissions</Breadcrumb.Item>
                     <Breadcrumb.Item active>Wizard</Breadcrumb.Item>
                     <Breadcrumb.Item active>{document.getElementsByTagName('title')[0].innerText}</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <div className="card">
                     <Table striped bordered hover size="sm">
                        <thead>
                           <tr>
                              <th colSpan={2}>Submission Files</th>
                              <th style={{ textAlign: 'right' }}><span style={{ cursor: 'pointer' }} onClick={() => this.setState({ showModal: true })}>Upload File</span></th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td>alwefalwefkjh</td>
                              <td>November</td>
                              <td>Article Text</td>
                           </tr>
                        </tbody>
                     </Table>
                     <div className="card-body">
                        <button onClick={this._submit.bind(this)} className="btn waves-effect waves-light btn-success btn-sm">{!this.state.btnLoading ? 'Save & Continue' : 'Loading...'}</button>
                     </div>
                  </div>
               </Col>
            </Row>

            <Modal show={this.state.showModal} onHide={() => this.setState({ showModal: false })} size="lg">
               <Modal.Header closeButton>
                  <Modal.Title>Upload Submission File</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group>
                     <Form.Label>If you are uploading a revision of an existing file, please indicate which file.</Form.Label>
                     <Form.Control size="sm" as="select">
                        <option value="">This is not a revision of an existing file</option>
                     </Form.Control>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>Article Component</Form.Label>
                     <Form.Control size="sm" as="select">
                        <option value="">Select article component</option>
                     </Form.Control>
                  </Form.Group>
                  <Form.Group>
                     <Form.Label>File</Form.Label>
                     <Form.Control size="sm" type="file" />
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>

               </Modal.Footer>
            </Modal>
         </Container>
      )
   }
}

ReactDOM.render(<Upload />, document.getElementById('root'))