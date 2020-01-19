import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Table, Modal, Form, InputGroup } from 'react-bootstrap'
import axios from 'axios'
import MsgResponse from './MsgResponse'
import { handleContextMenu } from './Helper'

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
         journalInitial: '',
         visible: false,
         id: '',
         initial: ''
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
         createdRow: (row, data) => {
            row.addEventListener('contextmenu', this._handleContextMenu.bind(this, { id: data.id, initial: data.initial }));
            row.addEventListener('click', this._handleClick.bind(this));
            row.addEventListener('scroll', this._handleScroll.bind(this));
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

   _handleContextMenu(params = [], event) {
      this.setState({
         visible: true,
         ...params
      });
      handleContextMenu(event, this.root)
   }

   _handleClick(event) {
      const { visible } = this.state;
      const wasOutside = !(event.target.contains === this.root);

      if (wasOutside && visible) this.setState({ visible: false, });
   }

   _handleScroll() {
      this.setState({ visible: false, });
   }

   _delete(id, initial) {
      if (confirm('Are you sure you want to delete?')) {
         this.setState({ status: true, msg_response: 'Loading...', visible: false })

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
            }).
            catch(error => {
               console.log('Error', error.message)
            })
      } else {
         this.setState({ visible: false })
      }
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
         }).
         catch(error => {
            console.log('Error', error.message)
         }).
         finally(() => {
            this.setState({ btnLoading: false })
         })
   }

   render() {
      const {
         visible,
         id,
         initial
      } = this.state

      return (
         <>
            <Container fluid={true}>
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
                     <MsgResponse {...this.state} />
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
            {(visible || null) &&
               <div ref={ref => { this.root = ref }} className="contextMenu">
                  <div className="contextMenu--option" onClick={() => open(siteURL + '/admin/journal/wizard/' + id + '/masthead', '_parent')}>Edit</div>
                  <div className="contextMenu--option" onClick={this._delete.bind(this, id, initial)}>Delete</div>
                  <div className="contextMenu--option">Views</div>
               </div>}
         </>
      )
   }
}

ReactDOM.render(<Dashboard />, document.getElementById('root'))