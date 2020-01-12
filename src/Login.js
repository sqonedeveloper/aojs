import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Form } from 'react-bootstrap'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Login extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         username: '',
         password: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      $('.preloader').fadeOut()
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit(e) {
      e.preventDefault()
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('username', this.state.username)
      formData.append('password', this.state.password)

      axios.
         post('/login/submit', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            if (response.status) {
               open(siteURL + '/admin/dashboard', '_parent')
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
         <div className="login-register" style={{ background: '#eee' }}>

            <div className="login-box card">
               {this.state.msg_response ? <div className="alert alert-warning">{this.state.msg_response}</div> : ''}
               <div className="card-body">
                  <Form className="form-horizontal form-material" onSubmit={this._submit.bind(this)}>
                     <h3 className="box-title m-b-20">Sign In</h3>
                     <Form.Group className={this.state.errors.username ? 'has-danger' : ''}>
                        <Form.Control name="username" value={this.state.username} onChange={this._onChange} placeholder="Username" autoFocus />
                        <Form.Control.Feedback type="invalid">{this.state.errors.username}</Form.Control.Feedback>
                     </Form.Group>
                     <Form.Group className={this.state.errors.password ? 'has-danger' : ''}>
                        <Form.Control name="password" value={this.state.password} onChange={this._onChange} placeholder="Password" type="password" />
                        <Form.Control.Feedback type="invalid">{this.state.errors.password}</Form.Control.Feedback>
                     </Form.Group>
                     <Form.Group>
                        <div className="d-flex no-block align-items-center">
                           <div className="ml-auto">
                              <a href="#" id="to-recover" className="text-muted"><i className="fa fa-lock m-r-5" /> Forgot password?</a>
                           </div>
                        </div>
                     </Form.Group>
                     <Form.Group className="text-center m-t-20">
                        <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">{!this.state.btnLoading ? 'Log In' : 'Loading...'}</button>
                     </Form.Group>
                  </Form>
                  <form className="form-horizontal">
                     <div className="form-group ">
                        <div className="col-xs-12">
                           <h3>Recover Password</h3>
                           <p className="text-muted">Enter your Email and instructions will be sent to you! </p>
                        </div>
                     </div>
                     <div className="form-group ">
                        <div className="col-xs-12">
                           <input className="form-control" type="text" required="" placeholder="Email" />
                        </div>
                     </div>
                     <div className="form-group text-center m-t-20">
                        <div className="col-xs-12">
                           <button className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      )
   }
}

ReactDOM.render(<Login />, document.getElementById('wrapper'))