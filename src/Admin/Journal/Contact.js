import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form } from 'react-bootstrap'
import MsgResponse from '../MsgResponse'
import Navigation from './Navigation'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Contact extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         msg_response: '',
         errors: {},
         name: '',
         title: '',
         email: '',
         phone: '',
         affiliation: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      this.setState({ ...content[segment[5]] })
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('name', this.state.name)
      formData.append('title', this.state.title)
      formData.append('email', this.state.email)
      formData.append('phone', this.state.phone)
      formData.append('affiliation', this.state.affiliation)

      axios.
         post('/admin/journal/update/contact', formData).
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

   render() {
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
                        <p>Enter contact details, typically for a principal editorship, managing editorship, or administrative staff position, which can be displayed on your publicly accessible website.</p>
                        <Row>
                           <Col md={6}>
                              <Form.Group className={this.state.errors.name ? 'has-danger' : ''}>
                                 <Form.Label>Name</Form.Label>
                                 <Form.Control name="name" value={this.state.name} onChange={this._onChange} size="sm" autoFocus />
                                 <Form.Control.Feedback type="invalid">{this.state.errors.name}</Form.Control.Feedback>
                              </Form.Group>
                              <Form.Group className={this.state.errors.email ? 'has-danger' : ''}>
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control name="email" value={this.state.email} onChange={this._onChange} size="sm" type="email" />
                                 <Form.Control.Feedback type="invalid">{this.state.errors.email}</Form.Control.Feedback>
                              </Form.Group>
                           </Col>
                           <Col md={6}>
                              <Form.Group>
                                 <Form.Label>Title</Form.Label>
                                 <Form.Control name="title" value={this.state.title} onChange={this._onChange} size="sm" />
                              </Form.Group>
                              <Form.Group className={this.state.errors.phone ? 'has-danger' : ''}>
                                 <Form.Label>Phone</Form.Label>
                                 <Form.Control name="phone" value={this.state.phone} onChange={this._onChange} size="sm" type="number" />
                                 <Form.Control.Feedback type="invalid">{this.state.errors.phone}</Form.Control.Feedback>
                              </Form.Group>
                           </Col>
                           <Col md={12}>
                              <Form.Group>
                                 <Form.Label>Affiliation</Form.Label>
                                 <Form.Control name="affiliation" value={this.state.affiliation} onChange={this._onChange} size="sm" />
                              </Form.Group>
                           </Col>
                        </Row>
                        <button className="btn waves-effect waves-light btn-success btn-sm" onClick={this._submit.bind(this)}>{!this.state.btnLoading ? 'Save Contact' : 'Loading...'}</button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Contact />, document.getElementById('root'))