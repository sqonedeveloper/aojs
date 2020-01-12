import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form } from 'react-bootstrap'
import MsgResponse from '../../MsgResponse'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Forms extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         first_name: '',
         last_name: '',
         public_name: '',
         username: '',
         email: '',
         password: '',
         confirm_password: '',
         country: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      if (pageType === 'update') {
         this.setState({ ...content.detail })
      }
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit(e) {
      e.preventDefault()
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('pageType', pageType)
      formData.append('id', segment[5])
      formData.append('first_name', this.state.first_name)
      formData.append('last_name', this.state.last_name)
      formData.append('public_name', this.state.public_name)
      formData.append('username', this.state.username)
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)
      formData.append('confirm_password', this.state.confirm_password)
      formData.append('country', this.state.country)

      axios.
         post('/admin/users/account/submit', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            setTimeout(() => {
               this.setState({ msg_response: '' })
            }, 3000);

            if (pageType === 'insert') {
               if (response.status) {
                  this.setState({ ...response.emptyPost })
               }
            }
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
                  <h3 className="text-themecolor m-b-0 m-t-0">Users</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Users</Breadcrumb.Item>
                     <Breadcrumb.Item active>Account</Breadcrumb.Item>
                     <Breadcrumb.Item active>{document.getElementsByTagName('title')[0].innerText}</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <div className="card">
                     <div className="card-body">
                        <Form onSubmit={this._submit.bind(this)}>
                           <Form.Group>
                              <Row>
                                 <Col md={4} className={this.state.errors.first_name ? 'has-danger' : ''}>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control name="first_name" value={this.state.first_name} onChange={this._onChange} size="sm" autoFocus />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.first_name}</Form.Control.Feedback>
                                 </Col>
                                 <Col md={4} className={this.state.errors.last_name ? 'has-danger' : ''}>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control name="last_name" value={this.state.last_name} onChange={this._onChange} size="sm" />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.last_name}</Form.Control.Feedback>
                                 </Col>
                                 <Col md={4}>
                                    <Form.Label>Preferred Public Name</Form.Label>
                                    <Form.Control name="public_name" value={this.state.public_name} onChange={this._onChange} size="sm" />
                                 </Col>
                              </Row>
                           </Form.Group>
                           <Form.Group>
                              <Row>
                                 <Col md={6} className={this.state.errors.username ? 'has-danger' : ''}>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control name="username" value={this.state.username} onChange={this._onChange} size="sm" disabled={pageType === 'update' ? true : false} />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.username}</Form.Control.Feedback>
                                 </Col>
                                 <Col md={6} className={this.state.errors.email ? 'has-danger' : ''}>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control name="email" value={this.state.email} onChange={this._onChange} size="sm" type="email" disabled={pageType === 'update' ? true : false} />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.email}</Form.Control.Feedback>
                                 </Col>
                              </Row>
                           </Form.Group>
                           <Form.Group>
                              <Row>
                                 <Col md={6} className={this.state.errors.password ? 'has-danger' : ''}>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" value={this.state.password} onChange={this._onChange} size="sm" type="password" />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.password}</Form.Control.Feedback>
                                 </Col>
                                 <Col md={6} className={this.state.errors.confirm_password ? 'has-danger' : ''}>
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control name="confirm_password" value={this.state.confirm_password} onChange={this._onChange} size="sm" type="password" />
                                    <Form.Control.Feedback type="invalid">{this.state.errors.confirm_password}</Form.Control.Feedback>
                                 </Col>
                              </Row>
                           </Form.Group>
                           <Form.Group>
                              <Row>
                                 <Col md={6} className={this.state.errors.country ? 'has-danger' : ''}>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control name="country" value={this.state.country} onChange={this._onChange} size="sm" as="select">
                                       <option value="">--Choose--</option>
                                       {content.country.map((data, key) => {
                                          return <option value={data.value} key={key}>{data.label}</option>
                                       })}
                                    </Form.Control>
                                    <Form.Control.Feedback type="invalid">{this.state.errors.country}</Form.Control.Feedback>
                                 </Col>
                              </Row>
                           </Form.Group>
                           <button className="btn waves-effect waves-light btn-success btn-sm" type="submit">{!this.state.btnLoading ? 'Save' : 'Loading...'}</button>
                        </Form>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Forms />, document.getElementById('root'))