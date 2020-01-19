import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form, Modal, Button } from 'react-bootstrap'
import MsgResponse from '../MsgResponse'
import Navigation from './Navigation'
import axios from 'axios'
import 'trumbowyg'
import { renderTrumbowyg, appendValueTrumbowyg } from '../Helper'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Submission extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         modalPreparation: false,
         label: '',
         editPreparation: 'false',
         submissionPreparation: [],
         idSubmissionPreparation: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      const { detail } = content

      this.setState({ ...detail })

      renderTrumbowyg('#author_guidelines')
      renderTrumbowyg('#privacy_statement')

      appendValueTrumbowyg('#author_guidelines', detail.author_guidelines)
      appendValueTrumbowyg('#privacy_statement', detail.privacy_statement)
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('author_guidelines', $('#author_guidelines').trumbowyg('html'))
      formData.append('privacy_statement', $('#privacy_statement').trumbowyg('html'))

      axios.
         post('/admin/journal/update/submission', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })
         }).
         catch(error => {
            console.log('Error', error.message)
         }).
         finally(() => {
            this.setState({ btnLoading: false })
         })
   }

   _submitSubmissionPreparation() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('label', this.state.label)
      formData.append('editPreparation', this.state.editPreparation)
      formData.append('idSubmissionPreparation', this.state.idSubmissionPreparation)

      axios.
         post('/admin/journal/update/submissionPreparation', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            if (response.status) {
               this.setState({
                  label: '',
                  modalPreparation: false
               })
            }
         }).
         catch(error => {
            console.log('Error', error.message)
         }).
         finally(() => {
            this.setState({ btnLoading: false })
         })
   }

   _deleteSubmissionPreparation(id) {
      var formData = new FormData()
      formData.append('id', id)
      formData.append('id_journal', segment[4])

      axios.
         post('/admin/journal/update/deleteSubmissionPreparation', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   _editSubmissionPreparation(id) {
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('id', id)

      axios.
         post('/admin/journal/update/editSubmissionPreparation', formData).
         then(res => {
            var response = res.data

            if (response.status) {
               this.setState({
                  modalPreparation: true,
                  label: response.content.label,
                  idSubmissionPreparation: response.content.id,
                  editPreparation: 'true'
               })
            }
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   render() {
      const { submissionPreparation } = this.state

      return (
         <Container fluid={true}>
            <Row className="page-titles">
               <Col md={12} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Journal</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                     <Breadcrumb.Item active>Journal</Breadcrumb.Item>
                     <Breadcrumb.Item active>{document.getElementsByTagName('title')[0].innerText}</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <Navigation />
                  <MsgResponse {...this.state} />
                  <div className="card">
                     <div className="card-body">
                        <Form.Group>
                           <Form.Label>Submission Preparation Checklist</Form.Label>
                           <Button
                              variant="info"
                              className="waves-effect waves-light float-right"
                              size="xs"
                              onClick={() => this.setState({ modalPreparation: true })}
                           >Add preparation item checklist</Button>
                           <ol>
                              {submissionPreparation.length > 0 ? submissionPreparation.map((data, key) => {
                                 return (
                                    <li key={key}>
                                       {data.label}
                                       <div className="row-actions" style={{ position: 'static' }}>
                                          <span className="edit"><a onClick={this._editSubmissionPreparation.bind(this, data.id)}>Edit</a></span>
                                          <span className="delete"><a data-type="delete" onClick={this._deleteSubmissionPreparation.bind(this, data.id)}>Delete</a></span>
                                       </div>
                                    </li>
                                 )
                              }) : ''}
                           </ol>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Author Guidelines</Form.Label>
                           <Form.Control size="sm" as="textarea" id="author_guidelines" />
                           <Form.Control.Feedback type="valid">Recommended guidelines include bibliographic and formatting standards alongside examples of common citation formats to be used in submissions.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Privacy Statement</Form.Label>
                           <Form.Control size="sm" as="textarea" id="privacy_statement" />
                           <Form.Control.Feedback type="valid">This statement will appear during user registration, author submission, and on the publicly available Privacy page. In some jurisdictions, you are legally required to disclose how you handle user data in this privacy policy.</Form.Control.Feedback>
                        </Form.Group>
                        <Button
                           variant="success"
                           className="waves-effect waves-light"
                           size="sm"
                           onClick={this.state.btnLoading ? null : this._submit.bind(this)}
                        >{this.state.btnLoading ? 'Loading...' : 'Save Masthead'}</Button>
                     </div>
                  </div>
               </Col>
            </Row>

            <Modal show={this.state.modalPreparation} onHide={() => this.setState({ modalPreparation: false, editPreparation: 'false', label: '', idSubmissionPreparation: '' })}>
               <Modal.Header closeButton>
                  <Modal.Title>Submission Preparation Checklist</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Form.Group className={this.state.errors.label ? 'has-danger' : ''}>
                     <Form.Label>Label</Form.Label>
                     <Form.Control name="label" value={this.state.label} onChange={this._onChange} size="sm" autoFocus />
                     <Form.Control.Feedback type="invalid">{this.state.errors.label}</Form.Control.Feedback>
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                  <Button
                     variant="success"
                     className="waves-effect waves-light"
                     size="sm"
                     onClick={this.state.btnLoading ? null : this._submitSubmissionPreparation.bind(this)}
                  >{this.state.btnLoading ? 'Loading...' : 'Save Changes'}</Button>
               </Modal.Footer>
            </Modal>
         </Container>
      )
   }
}

ReactDOM.render(<Submission />, document.getElementById('root'))