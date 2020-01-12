import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Header extends Component {
   constructor() {
      super()

      this.state = {
         avatar: ''
      }
   }

   componentDidMount() {
      var formData = new FormData()
      formData.append('path', 'public/assets/img/')
      formData.append('file_name', content.user.username)
      formData.append('field_response', 'avatar')

      axios.
         post('/readimage', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   render() {
      return (
         <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
               <div className="navbar-header">
                  <a className="navbar-brand" href={siteURL}>
                     <b>
                        <LazyLoadImage src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/logo-icon.png" effect="blur" className="dark-logo" />
                        <LazyLoadImage src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/logo-light-icon.png" effect="blur" className="light-logo" />
                     </b>
                     <span>
                        <LazyLoadImage src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/logo-text.png" effect="blur" className="dark-logo" />
                        <LazyLoadImage src="https://wrappixel.com/demos/admin-templates/material-pro/assets/images/logo-light-text.png" effect="blur" className="light-logo" />
                     </span>
                  </a>
               </div>
               <div className="navbar-collapse">
                  <ul className="navbar-nav mr-auto mt-md-0">
                     <li className="nav-item"> <a className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark" href="#"><i className="mdi mdi-menu" /></a> </li>
                     <li className="nav-item"> <a className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark" href="#"><i className="ti-menu" /></a> </li>
                  </ul>
                  <ul className="navbar-nav my-lg-0">
                     <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted waves-effect waves-dark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <LazyLoadImage src={this.state.avatar} effect="blur" className="profile-pic" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right scale-up">
                           <ul className="dropdown-user">
                              <li>
                                 <div className="dw-user-box">
                                    <div className="u-img">
                                       <LazyLoadImage effect="blur" src={this.state.avatar} />
                                    </div>
                                    <div className="u-text">
                                       <h4>{content.user.name}</h4>
                                       <p className="text-muted">{content.user.email}</p>
                                    </div>
                                 </div>
                              </li>
                              <li role="separator" className="divider"></li>
                              <li><a href={siteURL + '/admin/users/profile'}><i className="ti-user" /> My Profile</a></li>
                              <li><a href={siteURL + '/login/logout'}><i className="fa fa-power-off" /> Logout</a></li>
                           </ul>
                        </div>
                     </li>
                  </ul>
               </div>
            </nav>
         </header>
      )
   }
}

ReactDOM.render(<Header />, document.getElementById('header'))