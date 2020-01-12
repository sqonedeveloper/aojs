import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form } from 'react-bootstrap'
import MsgResponse from '../MsgResponse'
import axios from 'axios'
import 'trumbowyg'
import Navigation from './Navigation'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Masthead extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         errors: {},
         msg_respones: '',
         name: '',
         summary: '',
         initial: '',
         abbreviation: '',
         publisher: '',
         online_issn: '',
         print_issn: '',
         editorial_team: '',
         about_journal: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      this.setState({ ...content[segment[5]] })

      $('#summary').trumbowyg({
         svgPath: '/assets/plugins/trumbowyg/ui/icons.svg',
         removeformatPasted: true,
         autogrow: true,
         imageWidthModalEdit: true
      })
      $('#editorial_team').trumbowyg({
         svgPath: '/assets/plugins/trumbowyg/ui/icons.svg',
         removeformatPasted: true,
         autogrow: true,
         imageWidthModalEdit: true
      })
      $('#about_journal').trumbowyg({
         svgPath: '/assets/plugins/trumbowyg/ui/icons.svg',
         removeformatPasted: true,
         autogrow: true,
         imageWidthModalEdit: true
      })

      $('#summary').trumbowyg('html', content.masthead.summary)
      $('#editorial_team').trumbowyg('html', content.masthead.editorial_team)
      $('#about_journal').trumbowyg('html', content.masthead.about_journal)
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', segment[4])
      formData.append('name', this.state.name)
      formData.append('initial', this.state.initial)
      formData.append('abbreviation', this.state.abbreviation)
      formData.append('publisher', this.state.publisher)
      formData.append('online_issn', this.state.online_issn)
      formData.append('print_issn', this.state.print_issn)
      formData.append('summary', $('#summary').trumbowyg('html'))
      formData.append('editorial_team', $('#editorial_team').trumbowyg('html'))
      formData.append('about_journal', $('#about_journal').trumbowyg('html'))

      axios.
         post('/admin/journal/update/masthead', formData).
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
                           <Row>
                              <Col md={6} className={this.state.errors.name ? 'has-danger' : ''}>
                                 <Form.Label>Journal Name</Form.Label>
                                 <Form.Control name="name" value={this.state.name} onChange={this._onChange} size="sm" autoFocus />
                                 <Form.Control.Feedback type="invalid">{this.state.errors.name}</Form.Control.Feedback>
                              </Col>
                              <Col md={3} className={this.state.errors.initial ? 'has-danger' : ''}>
                                 <Form.Label>Journal Initials</Form.Label>
                                 <Form.Control value={this.state.initial} size="sm" disabled={true} />
                                 <Form.Control.Feedback type="invalid">{this.state.errors.initial}</Form.Control.Feedback>
                              </Col>
                              <Col md={3}>
                                 <Form.Label>Journal Abbreviation</Form.Label>
                                 <Form.Control name="abbreviation" value={this.state.abbreviation} onChange={this._onChange} size="sm" />
                              </Col>
                           </Row>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Publisher</Form.Label>
                           <Form.Control name="publisher" value={this.state.publisher} onChange={this._onChange} size="sm" />
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>ISSN</Form.Label>
                           <Row>
                              <Col md={3}>
                                 <Form.Control name="online_issn" value={this.state.online_issn} onChange={this._onChange} size="sm" />
                                 <Form.Control.Feedback type="valid" style={{ display: 'block' }}>Online ISSN</Form.Control.Feedback>
                              </Col>
                              <Col md={3}>
                                 <Form.Control name="print_issn" value={this.state.print_issn} onChange={this._onChange} size="sm" />
                                 <Form.Control.Feedback type="valid" style={{ display: 'block' }}>Print ISSN</Form.Control.Feedback>
                              </Col>
                           </Row>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Journal Summary</Form.Label>
                           <Form.Control id="summary" size="sm" as="textarea" />
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Editorial Team</Form.Label>
                           <Form.Control id="editorial_team" size="sm" as="textarea" />
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>About the Journal</Form.Label>
                           <Form.Control id="about_journal" size="sm" as="textarea" />
                        </Form.Group>
                        <button className="btn waves-effect waves-light btn-success btn-sm" onClick={this._submit.bind(this)}>{!this.state.btnLoading ? 'Save Masthead' : 'Loading...'}</button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Masthead />, document.getElementById('root'))