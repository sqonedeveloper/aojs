import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Table, Modal, Form, InputGroup } from 'react-bootstrap'
import axios from 'axios'
import MsgResponse from './MsgResponse'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Dashboard extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         status: false,
         errors: {},
         msg_response: '',
         modal: false,
         journalName: '',
         journalInitial: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      this.loadData = $('#datatable').DataTable({
         ordering: true,
         processing: true,
         serverSide: true,
         ajax: {
            url: siteURL + '/admin/journal/getData',
            type: 'POST'
         },
         createdRow: (row) => {
            var rows = row.cells[0].children[1].children
            var _edit = rows[0].children[0]
            var _delete = rows[1].children[0]

            _edit.onclick = () => {
               open(siteURL + '/admin/journal/wizard/' + _edit.dataset.id + '/masthead', '_parent')
            }

            _delete.onclick = () => {
               if (confirm('Are you sure you want to delete?')) {
                  this._delete(_delete.dataset.id, _delete.dataset.initial)
               }
            }
         },
         columns: [
            null,
            null
         ]
      });
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _delete(id, initial) {
      var formData = new FormData()
      formData.append('id', id)
      formData.append('initial', initial)

      axios.
         post('/admin/journal/delete', formData).
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

   _createJournal() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('journalName', this.state.journalName)
      formData.append('journalInitial', this.state.journalInitial)

      axios.
         post('/admin/journal/createJournal', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            if (response.status) {
               open(siteURL + '/admin/journal/wizard/' + response.content + '/masthead', '_parent')
            }

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
            <MsgResponse msg_response={this.state.msg_response} status={this.state.status} />
            <Row className="page-titles">
               <Col md={10} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Dashboard</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
               <Col md={2} className="align-self-center">
                  <button onClick={() => this.setState({ modal: true })} className="btn waves-effect waves-light btn-success btn-sm float-right">Create Journal</button>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <div className="card">
                     <Table id="datatable" striped bordered hover size="sm">
                        <thead>
                           <tr>
                              <th>Name</th>
                              <th style={{ width: '20%' }}>Path</th>
                           </tr>
                        </thead>
                     </Table>
                  </div>
               </Col>
            </Row>

            <Modal show={this.state.modal} onHide={() => this.setState({ modal: false })} backdrop="static" size="lg">
               <Modal.Header closeButton>
                  <Modal.Title>Create Journal</Modal.Title>
               </Modal.Header>
               <Modal.Body>
                  {this.state.errors.createPath ? <div className="alert alert-warning">{this.state.errors.createPath}</div> : ''}
                  <Form.Group className={this.state.errors.journalName ? 'has-danger' : ''}>
                     <Form.Label>Journal Title</Form.Label>
                     <Form.Control name="journalName" value={this.state.journalName} onChange={this._onChange} size="sm" autoFocus />
                     <Form.Control.Feedback type="invalid">{this.state.errors.journalName}</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group className={this.state.errors.journalInitial ? 'has-danger' : ''}>
                     <Form.Label>Journal Path</Form.Label>
                     <InputGroup size="sm">
                        <InputGroup.Prepend>
                           <InputGroup.Text>{siteURL + '/'}</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control name="journalInitial" value={this.state.journalInitial} onChange={this._onChange} size="sm" />
                        <Form.Control.Feedback type="invalid">{this.state.errors.journalInitial}</Form.Control.Feedback>
                     </InputGroup>
                  </Form.Group>
               </Modal.Body>
               <Modal.Footer>
                  <button onClick={this._createJournal.bind(this)} className="btn waves-effect waves-light btn-success btn-sm">{!this.state.btnLoading ? 'Save' : 'Loading...'}</button>
               </Modal.Footer>
            </Modal>
         </Container>
      )
   }
}

ReactDOM.render(<Dashboard />, document.getElementById('root'))