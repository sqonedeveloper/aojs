import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Table, Breadcrumb } from 'react-bootstrap'
import axios from 'axios'
import RoleModal from './RoleModal'
import MsgResponse from '../../MsgResponse'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Lists extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         msg_response: '',
         openModal: false,
         last_name: '',
         idUsers: '',
         roles: []
      }
   }

   componentDidMount() {
      this.loadData = $('#datatable').DataTable({
         ordering: true,
         processing: true,
         serverSide: true,
         ajax: {
            url: siteURL + '/admin/users/userRoles/getData',
            type: 'POST'
         },
         createdRow: (row, data) => {
            row.style.cursor = 'pointer'

            row.onclick = () => {
               this._setUpdateRoles(data.id)
            }
         },
         columns: [
            null,
            null,
            null,
            null
         ]
      });
   }

   _updateState(e) {
      this.setState({ [e.name]: e.value })

      if (e.name === 'saveRoles') {
         this._submit(e.value)
      }
   }

   _submit(roles) {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('idUsers', this.state.idUsers)
      formData.append('roles', roles)

      axios.
         post('/admin/users/userRoles/submit', formData).
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

   _setUpdateRoles(id) {
      var formData = new FormData()
      formData.append('id', id)

      axios.
         post('/admin/users/userRoles/getUsers', formData).
         then(res => {
            var response = res.data
            this.setState({
               ...response,
               ...response.content,
               openModal: response.status
            })
         }).
         catch(error => {
            console.log('Error', error.message)
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
                     <Breadcrumb.Item active>{document.getElementsByTagName('title')[0].innerText}</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <p>Click on one of the user lines to set the role</p>
                  <div className="card">
                     <Table id="datatable" striped bordered hover size="sm">
                        <thead>
                           <tr>
                              <th>Fullname</th>
                              <th>Public Name</th>
                              <th>Username</th>
                              <th>Email</th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
               </Col>
            </Row>
            <RoleModal {...this.state} _updateState={e => this._updateState(e)} />
         </Container>
      )
   }
}

ReactDOM.render(<Lists />, document.getElementById('root'))