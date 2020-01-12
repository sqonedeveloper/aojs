import React, { Component } from 'react'
import { Form, Row, Col } from 'react-bootstrap'

export default class User extends Component {
   constructor() {
      super()

      this._onChange = this._onChange.bind(this)
   }

   _onChange(e) {
      this.props._updateState({
         name: e.target.name,
         value: (e.target.type === 'file' ? this[e.target.name].files[0] : e.target.value)
      })
   }

   render() {
      return (
         <>
            <Form.Group>
               <Row>
                  <Col md={6} className={this.props.errors.first_name ? 'has-danger' : ''}>
                     <Form.Label>First Name</Form.Label>
                     <Form.Control name="first_name" value={this.props.first_name} onChange={this._onChange} size="sm" autoFocus />
                     <Form.Control.Feedback type="invalid">{this.props.errors.first_name}</Form.Control.Feedback>
                  </Col>
                  <Col md={6} className={this.props.errors.last_name ? 'has-danger' : ''}>
                     <Form.Label>Last Name</Form.Label>
                     <Form.Control name="last_name" value={this.props.last_name} onChange={this._onChange} size="sm" />
                     <Form.Control.Feedback type="invalid">{this.props.errors.last_name}</Form.Control.Feedback>
                  </Col>
               </Row>
            </Form.Group>
            <Form.Group>
               <Form.Label>Preferred Public Name</Form.Label>
               <Form.Control name="public_name" value={this.props.public_name} onChange={this._onChange} size="sm" />
               <Form.Control.Feedback type="valid">How do you prefer to be addressed? Salutations, middle names and suffixes can be added here if you would like.</Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
               <Row>
                  <Col md={6} className={this.props.errors.username ? 'has-danger' : ''}>
                     <Form.Label>Username</Form.Label>
                     <Form.Control value={this.props.username} size="sm" disabled={true} />
                     <Form.Control.Feedback type="invalid">{this.props.errors.username}</Form.Control.Feedback>
                  </Col>
                  <Col md={6} className={this.props.errors.email ? 'has-danger' : ''}>
                     <Form.Label>Email</Form.Label>
                     <Form.Control value={this.props.email} size="sm" type="email" disabled={true} />
                     <Form.Control.Feedback type="invalid">{this.props.errors.email}</Form.Control.Feedback>
                  </Col>
               </Row>
            </Form.Group>
            <Form.Group>
               <Row>
                  <Col md={6}>
                     <Form.Label>Password</Form.Label>
                     <Form.Control name="password" value={this.props.password} onChange={this._onChange} size="sm" type="password" />
                  </Col>
                  <Col md={6} className={this.props.errors.confirm_password ? 'has-danger' : ''}>
                     <Form.Label>Confirm Password</Form.Label>
                     <Form.Control name="confirm_password" value={this.props.confirm_password} onChange={this._onChange} size="sm" type="password" />
                     <Form.Control.Feedback type="invalid">{this.props.errors.confirm_password}</Form.Control.Feedback>
                  </Col>
               </Row>
            </Form.Group>
            <Form.Group>
               <Row>
                  <Col md={6} className={this.props.errors.country ? 'has-danger' : ''}>
                     <Form.Label>Country</Form.Label>
                     <Form.Control name="country" value={this.props.country} onChange={this._onChange} size="sm" as="select">
                        <option value="">--Choose--</option>
                        {content.country.map((data, key) => {
                           return <option value={data.value} key={key}>{data.label}</option>
                        })}
                     </Form.Control>
                     <Form.Control.Feedback type="invalid">{this.props.errors.country}</Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                     <Form.Label>Avatar</Form.Label>
                     <Form.Control ref={e => this.avatar = e} name="avatar" onChange={this._onChange} size="sm" type="file" />
                  </Col>
               </Row>
            </Form.Group>
         </>
      )
   }
}
