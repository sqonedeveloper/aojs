import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Container, Row, Col, Breadcrumb, Form, ProgressBar } from 'react-bootstrap'
import axios from 'axios'
import MsgResponse from '../../MsgResponse'
import 'trumbowyg'

axios.defaults.baseURL = siteURL
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

class Start extends Component {
   constructor() {
      super()

      this.state = {
         btnLoading: false,
         isLoading: false,
         errors: {},
         msg_response: '',
         journalPreparation: [],
         id_journal: ''
      }

      this._onChange = this._onChange.bind(this)
   }

   componentDidMount() {
      $('#comment_for_editor').trumbowyg({
         svgPath: '/assets/plugins/trumbowyg/ui/icons.svg',
         removeformatPasted: true,
         autogrow: true,
         imageWidthModalEdit: true
      })
   }

   _onChange(e) {
      this.setState({ [e.target.name]: e.target.value })

      if (e.target.name === 'id_journal') {
         this._getJournalPreparation(e.target.value)
         this._getHistoryStart(e.target.value)
      }
   }

   _getHistoryStart(idJournal) {
      $('.preloader').show()
      var formData = new FormData()
      formData.append('id_journal', idJournal)

      axios.
         post('/admin/submission/wizard/getHistoryStart', formData).
         then(res => {
            var response = res.data
            $('#comment_for_editor').trumbowyg('html', response.comment)
         }).
         catch(error => {
            console.log('Error', error.message)
         }).
         finally(() => {
            $('.preloader').hide()
         })
   }

   _getJournalPreparation(idJournal) {
      $('.preloader').show()
      var formData = new FormData()
      formData.append('id_journal', idJournal)

      axios.
         post('/admin/submission/wizard/getJournalPreparation', formData).
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
            $('.preloader').hide()
         })
   }

   _submit() {
      this.setState({ btnLoading: true })
      var formData = new FormData()
      formData.append('id_journal', this.state.id_journal)
      formData.append('comment', $('#comment_for_editor').trumbowyg('html'))

      axios.
         post('/admin/submission/wizard/submitStart', formData).
         then(res => {
            var response = res.data
            this.setState({ ...response })

            setTimeout(() => {
               this.setState({ msg_response: '' })
            }, 3000);

            if (response.status) {
               open(siteURL + '/admin/submission/wizard/upload/' + response.id_journal, '_parent')
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
         <Container fluid={true}>
            <MsgResponse msg_response={this.state.msg_response} />
            <Row className="page-titles">
               <Col md={12} className="align-self-center">
                  <h3 className="text-themecolor m-b-0 m-t-0">Submissions</h3>
                  <Breadcrumb>
                     <Breadcrumb.Item active>Home</Breadcrumb.Item>
                     <Breadcrumb.Item active>Submissions</Breadcrumb.Item>
                     <Breadcrumb.Item active>Wizard</Breadcrumb.Item>
                     <Breadcrumb.Item active>{document.getElementsByTagName('title')[0].innerText}</Breadcrumb.Item>
                  </Breadcrumb>
               </Col>
            </Row>
            <Row>
               <Col md={12}>
                  <div className="card">
                     {this.state.isLoading ? <ProgressBar animated now={100} height={30} label="Trying to get data?" /> : ''}
                     <div className="card-body">
                        <Form.Group className={this.state.errors.id_journal ? 'has-danger' : ''}>
                           <Form.Label>Journal Lists</Form.Label>
                           <Form.Control name="id_journal" value={this.state.id_journal} onChange={this._onChange} as="select" size="sm">
                              <option value="">--choose--</option>
                              {content.listsJournal.map((data, key) => {
                                 return <option value={data.id_journal} key={key}>{data.name}</option>
                              })}
                           </Form.Control>
                           <Form.Control.Feedback type="invalid">{this.state.errors.id_journal}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Submission Requirements</Form.Label>
                           {this.state.journalPreparation.length > 0 ? <ol>{this.state.journalPreparation.map((data, key) => {
                              return <li key={key}>{data.label}</li>
                           })}</ol> : ''}
                        </Form.Group>
                        <Form.Group>
                           <Form.Label>Comments for the Editor</Form.Label>
                           <Form.Control size="sm" as="textarea" id="comment_for_editor" />
                        </Form.Group>
                        <button onClick={this._submit.bind(this)} className="btn waves-effect waves-light btn-success btn-sm">{!this.state.btnLoading ? 'Save & Continue' : 'Loading...'}</button>
                     </div>
                  </div>
               </Col>
            </Row>
         </Container>
      )
   }
}

ReactDOM.render(<Start />, document.getElementById('root'))