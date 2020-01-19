import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form, Button } from 'react-bootstrap'
import MsgResponse from '../MsgResponse'
import Navigation from './Navigation'
import 'trumbowyg'
import axios from 'axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { renderTrumbowyg, appendValueTrumbowyg } from '../Helper'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Apperance extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         initial: '',
         logo: '',
         favicon: '',
         thumbnail: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      const { detail } = content
      this.setState({ ...detail })

      renderTrumbowyg('#page_footer')
      renderTrumbowyg('#additional_content')
      
      appendValueTrumbowyg('#page_footer', detail.page_footer)
      appendValueTrumbowyg('#additional_content', detail.additional_content)

      this._readImageBase64('public/' + detail.initial, 'logo')
      this._readImageBase64('public/' + detail.initial, 'favicon')
      this._readImageBase64('public/' + detail.initial, 'thumbnail')
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })

      if (e.target.type === 'file') {
         var name = e.target.name
         var f = this[name].files[0]
         var reader = new FileReader()
         reader.addEventListener('load', (env) => {
            this.setState({ [name]: env.target.result })
         })
         reader.readAsDataURL(f)
      }
   }

   _renderTrumbowyg(id) {
      $(id).trumbowyg({
         svgPath: '/assets/plugins/trumbowyg/ui/icons.svg',
         removeformatPasted: true,
         autogrow: true,
         imageWidthModalEdit: true
      })
   }

   _appendValueTrumbowyg(id, content) {
      $(id).trumbowyg('html', content)
   }

   _readImageBase64(path, file_name) {
      var formData = new FormData()
      formData.append('path', path)
      formData.append('file_name', file_name)

      axios.
         post('/admin/journal/readImage', formData).
         then(res => {
            var response = res.data
            if (response.status) {
               this.setState({ ...response.content })
            }
         }).
         catch(error => {
            console.log('Error', error.message)
         })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('page_footer', $('#page_footer').trumbowyg('html'))
      formData.append('additional_content', $('#additional_content').trumbowyg('html'))
      formData.append('initial', this.state.initial)
      formData.append('logo', this.state.logo)
      formData.append('favicon', this.state.favicon)
      formData.append('thumbnail', this.state.thumbnail)

      axios.
         post('/admin/journal/update/apperance', formData).
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
                        <Form.Group>
                           <Form.Label>Page Footer</Form.Label>
                           <Form.Control size="sm" as="textarea" id="page_footer" />
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Additional Content</Form.Label>
                           <Form.Control size="sm" as="textarea" id="additional_content" />
                           <Form.Control.Feedback type="valid">Anything entered here will appear on your homepage.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className={this.state.errors.logo ? 'has-danger' : ''}>
                           <Row>
                              <Col md={9}>
                                 <Form.Label>Logo</Form.Label>
                                 <Form.Control ref={e => this.logo = e} name="logo" onChange={this._onChange} size="sm" type="file" />
                                 <Form.Control.Feedback type="invalid">{this.state.errors.logo}</Form.Control.Feedback>
                              </Col>
                              <Col md={3}>
                                 <LazyLoadImage effect="blur" src={this.state.logo} className="img-thumbnail img-response" />
                              </Col>
                           </Row>
                        </Form.Group>
                        <Form.Group>
                           <Row>
                              <Col md={9}>
                                 <Form.Label>Favicon</Form.Label>
                                 <Form.Control ref={e => this.favicon = e} name="favicon" onChange={this._onChange} size="sm" type="file" />
                              </Col>
                              <Col md={3}>
                                 <LazyLoadImage effect="blur" src={this.state.favicon} className="img-thumbnail img-response" />
                              </Col>
                           </Row>
                        </Form.Group>
                        <Form.Group>
                           <Row>
                              <Col md={9}>
                                 <Form.Label>Thumbnail</Form.Label>
                                 <Form.Control ref={e => this.thumbnail = e} name="thumbnail" onChange={this._onChange} size="sm" type="file" />
                              </Col>
                              <Col md={3}>
                                 <LazyLoadImage effect="blur" src={this.state.thumbnail} className="img-thumbnail img-response" />
                              </Col>
                           </Row>
                        </Form.Group>
                        <Button
                           variant="success"
                           className="waves-effect waves-light"
                           size="sm"
                           onClick={this.state.btnLoading ? null : this._submit.bind(this)}
                        >{!this.state.btnLoading ? 'Save Apperance' : 'Loading...'}</Button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Apperance />, document.getElementById('root'))