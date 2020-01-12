import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Table } from 'react-bootstrap'
import MsgResponse from '../../MsgResponse'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Lists extends Component {
   constructor() {
      super()

      this.state = {
         msg_response: ''
      }
   }

   componentDidMount() {
      this.loadData = $('#datatable').DataTable({
         ordering: true,
         processing: true,
         serverSide: true,
         ajax: {
            url: siteURL + '/admin/users/account/getData',
            type: 'POST'
         },
         createdRow: (row) => {
            var rows = row.cells[0].children[1].children
            var _edit = rows[0].children[0]
            var _delete = rows[1].children[0]
            var _suspend = rows[2].children[0]

            _edit.onclick = () => {
               open(siteURL + '/admin/users/account/edit/' + _edit.dataset.id, '_parent')
            }

            _delete.onclick = () => {
               if (confirm('Are you sure you want to delete?')) {
                  this._delete(_delete.dataset.id, _delete.dataset.avatar)
               }
            }

            _suspend.onclick = () => {
               this._suspendUser(_suspend.dataset.id, _suspend.dataset.status)
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

   _suspendUser(id, status) {
      var formData = new FormData()
      formData.append('id', id)
      formData.append('status', status)

      axios.
         post('/admin/users/account/suspendUser', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            if (response.status) {
               this.loadData.ajax.reload(false, null)
            }

            setTimeout(() => {
               this.setState({ msg_response: '' })
            }, 3000);
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   _delete(id, avatar) {
      var formData = new FormData()
      formData.append('id', id)
      formData.append('avatar', avatar)

      axios.
         post('/admin/users/account/delete', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            if (response.status) {
               this.loadData.ajax.reload(false, null)
            }

            setTimeout(() => {
               this.setState({ msg_response: '' })
            }, 3000);
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
               <Col md={10} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Users</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Users</Breadcrumb.Item>
                     <Breadcrumb.Item active>{document.getElementsByTagName('title')[0].innerText}</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
               <Col md={2} className="align-self-center">
                  <button onClick={() => open(siteURL + '/admin/users/account/addNew', '_parent')} className="btn waves-effect waves-light btn-success btn-sm float-right">Add New</button>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
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
         </Container>
      )
   }
}

ReactDOM.render(<Lists />, document.getElementById('root'))