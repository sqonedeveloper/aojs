import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form, Button } from 'react-bootstrap'
import MsgResponse from '../MsgResponse'
import Navigation from './Navigation'
import axios from 'axios'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Indexing extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_response: '',
         description: '',
         custom_tags: '',
         initial: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      this.setState({ ...content.detail })
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('description', this.state.description)
      formData.append('custom_tags', this.state.custom_tags)
      
      axios.
         post('/admin/journal/update/indexing', formData).
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
                        <p>Provide a brief description of the journal which search engines can display when listing the journal in search results.</p>
                        <Form.Group className={this.state.errors.description ? 'has-danger' : ''}>
                           <Form.Label>Description</Form.Label>
                           <Form.Control name="description" value={this.state.description} onChange={this._onChange} size="sm" autoFocus />
                           <Form.Control.Feedback type="invalid">{this.state.errors.description}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Custom tags</Form.Label>
                           <Form.Control name="custom_tags" value={this.state.custom_tags} onChange={this._onChange} size="sm" as="textarea" rows={5} />
                           <Form.Control.Feedback type="valid">Custom HTML header tags to be inserted in the header of every page (e.g., META tags).</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Sitemap</Form.Label>
                           <p>A XML sitemap is available for submitting to search engines at <a href={siteURL + '/' + this.state.initial + '/sitemap'} target="_blank">{siteURL + '/' + this.state.initial + '/sitemap'}</a></p>
                        </Form.Group>
                        <Button
                           variant="success"
                           className="waves-effect waves-light"
                           size="sm"
                           onClick={this.state.btnLoading ? null : this._submit.bind(this)}
                        >{this.state.btnLoading ? 'Loading...' : 'Save Indexing'}</Button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Indexing />, document.getElementById('root'))