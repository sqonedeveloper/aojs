import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb } from 'react-bootstrap'
import axios from 'axios'
import User from './User'
import MsgResponse from '../../MsgResponse'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Forms extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         tab: '1',
         first_name: '',
         last_name: '',
         public_name: '',
         username: '',
         email: '',
         password: '',
         confirm_password: '',
         country: ''
      }
   }

   componentDidMount() {
      this.setState({ ...content.detail })
   }

   _changeTab(e) {
      this.setState({ tab: e })
   }

   _updateState(e) {
      this.setState({ [e.name]: e.value })

      if (e.name == 'avatar') {
         this._readFile(e.value)
      }
   }

   _readFile(file) {
      var reader = new FileReader();
      reader.onload = (e) => {
         document.getElementById('avatarBase64').value = e.target.result
      };
      reader.readAsDataURL(file);
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('tab', this.state.tab)
      if (this.state.tab === '1') {
         formData.append('first_name', this.state.first_name)
         formData.append('last_name', this.state.last_name)
         formData.append('public_name', this.state.public_name)
         formData.append('username', this.state.username)
         formData.append('email', this.state.email)
         formData.append('password', this.state.password)
         formData.append('confirm_password', this.state.confirm_password)
         formData.append('country', this.state.country)
         formData.append('avatar', document.getElementById('avatarBase64').value)
      } else if (this.state.tab === '2') {

      }

      axios.
         post('/admin/users/profile/update', formData).
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
      var tabs = {
         '1': <User {...this.state} _updateState={e => this._updateState(e)} />
      }

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
                  <div className="card">
                     <div className="card-body">
                        <ul className="nav nav-tabs customtab">
                           <li className="nav-item">
                              <a className={"nav-link" + (this.state.tab === '1' ? ' active' : '')} href="#" onClick={this._changeTab.bind(this, '1')}>
                                 <span className="hidden-xs-down">User Details</span>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a className={"nav-link" + (this.state.tab === '2' ? ' active' : '')} href="#" onClick={this._changeTab.bind(this, '2')}>
                                 <span className="hidden-xs-down">Other Details</span>
                              </a>
                           </li>
                        </ul>
                        <div className="tab-content">
                           <div className="tab-pane active">
                              <div className="p-10">
                                 {tabs[this.state.tab]}
                                 <input type="hidden" id="avatarBase64" />
                              </div>
                           </div>
                        </div>
                        <button onClick={this._submit.bind(this)} className="btn waves-effect waves-light btn-success btn-sm">{!this.state.btnLoading ? 'Update' : 'Loading...'}</button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Forms />, document.getElementById('root'))