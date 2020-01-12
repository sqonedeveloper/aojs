import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Table, Modal, Form, Button } from 'react-bootstrap'
import MsgResponse from '../MsgResponse'
import Navigation from './Navigation'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Users extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         usersLists: [],
         countryLists: [],
         modalUser: false,
         first_name: '',
         last_name: '',
         public_name: '',
         username: '',
         email: '',
         country: '',
         password: '',
         modalUsersExists: false,
         userListExists: []
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      this.setState({
         usersLists: content.users.users,
         countryLists: content.country
      })
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('first_name', this.state.first_name)
      formData.append('last_name', this.state.last_name)
      formData.append('public_name', this.state.public_name)
      formData.append('username', this.state.username)
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)
      formData.append('country', this.state.country)

      axios.
         post('/admin/journal/update/createdUser', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            if (response.status) {
               this.setState({ ...response.emptyPost })
            }
         }).
         catch(error => {
            console.log('Error', error.message)
         }).
         finally(() => {
            this.setState({ btnLoading: false })
         })
   }

   _deleteUsers(id) {
      if (confirm('Are you sure you want to delete?')) {
         var formData = new FormData()
         formData.append('id', id)
         formData.append('id_journal', segment[4])

         axios.
            post('/admin/journal/update/deleteUsers', formData).
            then(res => {
               var response = res.data
               this.setState({ ...response })
            }).
            catch(error => {
               console.log('Error', error.message)
            })
      }
   }

   _handleChooseUserExists() {
      this.setState({ modalUsersExists: true })

      let existsUsers = []
      this.state.usersLists.map(data => {
         existsUsers.push(data.id_users)
      })

      axios.
         get('/admin/journal/chooseUserExists?exists=' + existsUsers).
         then(res => {
            var response = res.data
            this.setState({
               userListExists: response.results,
               modalUser: false
            })
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   _setExistsUser(content) {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('content', JSON.stringify(content))
      formData.append('id_journal', segment[4])

      axios.
         post('/admin/journal/submitExistUsers', formData).
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
                     <Table striped bordered hover size="sm">
                        <thead>
                           <tr>
                              <th>Fullname</th>
                              <th>Public Name</th>
                              <th>Username</th>
                              <th>Email</th>
                           </tr>
                        </thead>
                        <tbody>
                           {this.state.usersLists.length > 0 ? this.state.usersLists.map((data, key) => {
                              return (
                                 <tr key={key}>
                                    <td>
                                       {data.fullname}
                                       <div className="row-actions">
                                          <span className="edit"><a data-id="">Edit</a></span>
                                          <span className="delete"><a onClick={this._deleteUsers.bind(this, data.id)} data-type="delete">Delete</a></span>
                                       </div>
                                    </td>
                                    <td>{data.public_name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                 </tr>
                              )
                           }) : <tr><td colSpan={4}>No data available.</td></tr>}
                        </tbody>
                     </Table>
                     <div className="card-body">
                        <Button
                           variant="success"
                           className="waves-effect waves-light"
                           size="sm"
                           onClick={() => this.setState({ modalUser: true })}
                        >Add User</Button>
                     </div>
                  </div>
               </Col>
            </Row>

            <Modal show={this.state.modalUser} onHide={() => this.setState({ modalUser: false })} size="xl" backdrop="static">
               <Modal.Header closeButton>
                  <Modal.Title>Add User</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Row>
                     <Col md={4} className={this.state.errors.first_name ? 'has-danger' : ''}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="first_name" value={this.state.first_name} onChange={this._onChange} size="sm" autoFocus />
                        <Form.Control.Feedback type="invalid">{this.state.errors.first_name}</Form.Control.Feedback>
                     </Col>
                     <Col md={4} className={this.state.errors.last_name ? 'has-danger' : ''}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="last_name" value={this.state.last_name} onChange={this._onChange} size="sm" autoFocus />
                        <Form.Control.Feedback type="invalid">{this.state.errors.last_name}</Form.Control.Feedback>
                     </Col>
                     <Col md={4}>
                        <Form.Label>Public Name</Form.Label>
                        <Form.Control name="public_name" value={this.state.public_name} onChange={this._onChange} size="sm" autoFocus />
                     </Col>
                     <Col md={6} className={this.state.errors.username ? 'has-danger' : ''}>
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" value={this.state.username} onChange={this._onChange} size="sm" />
                        <Form.Control.Feedback type="invalid">{this.state.errors.username}</Form.Control.Feedback>
                     </Col>
                     <Col md={6} className={this.state.errors.email ? 'has-danger' : ''}>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" value={this.state.email} onChange={this._onChange} size="sm" type="email" />
                        <Form.Control.Feedback type="invalid">{this.state.errors.email}</Form.Control.Feedback>
                     </Col>
                     <Col md={6} className={this.state.errors.password ? 'has-danger' : ''}>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" value={this.state.password} onChange={this._onChange} size="sm" type="password" />
                        <Form.Control.Feedback type="invalid">{this.state.errors.password}</Form.Control.Feedback>
                     </Col>
                     <Col md={6} className={this.state.errors.country ? 'has-danger' : ''}>
                        <Form.Label>Country</Form.Label>
                        <Form.Control name="country" value={this.state.country} onChange={this._onChange} size="sm" as="select">
                           <option value="">--Choose--</option>
                           {this.state.countryLists.map((data, key) => {
                              return <option value={data.value} key={key}>{data.label}</option>
                           })}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">{this.state.errors.country}</Form.Control.Feedback>
                     </Col>
                  </Row>
               </Modal.Body>
               <Modal.Footer>
                  <Button
                     variant="warning"
                     className="waves-effect waves-light"
                     size="sm"
                     onClick={this.state.btnLoading ? null : this._handleChooseUserExists.bind(this)}
                     style={{ float: 'left' }}
                  >Choose from user exists</Button>
                  <Button
                     variant="success"
                     className="waves-effect waves-light"
                     size="sm"
                     onClick={this.state.btnLoading ? null : this._submit.bind(this)}
                  >{this.state.btnLoading ? 'Loading...' : 'Save Changes'}</Button>
               </Modal.Footer>
            </Modal>

            <Modal show={this.state.modalUsersExists} onHide={() => this.setState({ modalUsersExists: false })} size="lg" backdrop="static">
               <Modal.Header closeButton>
                  <Modal.Title>Exists User</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  <Row>
                     <Table striped bordered hover size="sm">
                        <thead>
                           <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                              <th>Email</th>
                           </tr>
                        </thead>
                        <tbody>
                           {this.state.userListExists.length > 0 ? this.state.userListExists.map((data, key) => {
                              return (
                                 <tr key={key} style={{ cursor: 'pointer' }} onClick={this._setExistsUser.bind(this, data)}>
                                    <td>{data.first_name}</td>
                                    <td>{data.last_name}</td>
                                    <td>{data.username}</td>
                                    <td>{data.email}</td>
                                 </tr>
                              )
                           }) : <tr><td colSpan={4}>No data available.</td></tr>}
                        </tbody>
                     </Table>
                  </Row>
               </Modal.Body>
            </Modal>
         </Container>
      )
   }
}

ReactDOM.render(<Users />, document.getElementById('root'))