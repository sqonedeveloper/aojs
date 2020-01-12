import React, { Component } from 'react'
import { Modal, Table } from 'react-bootstrap'

export default class RoleModal extends Component {
   constructor(props) {
      super(props)

      this._onChange = this._onChange.bind(this)
   }

   _onChange(e) {
      if (e.target.name === 'saveRoles') {
         var setCheckbox = [];
         var input = document.getElementsByTagName('input')
         for (var i = 0; i < input.length; i++) {
            if (input[i].type === 'checkbox') {
               if (input[i].checked) {
                  setCheckbox.push(input[i].value)
               }
            }
         }

         this.props._updateState({
            name: 'saveRoles',
            value: setCheckbox
         })
      }
   }

   render() {
      return (
         <Modal show={this.props.openModal} onHide={() => this.props._updateState({ name: 'openModal', value: false })} backdrop="static" size="lg">
            <Modal.Header closeButton>
               <Modal.Title>User Roles : {this.props.last_name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
               <Table id="datatable" striped bordered hover size="sm">
                  <tbody>
                     {content.role.map((data, key) => {
                        return (
                           <tr key={key}>
                              <td align="center" style={{ width: '5%' }}><input type="checkbox" name="id_role" value={data.value} style={{ opacity: 1, position: 'inherit' }} /></td>
                              <td style={{ cursor: 'pointer' }}>{data.label}</td>
                           </tr>
                        )
                     })}
                  </tbody>
               </Table>
            </Modal.Body>
            <Modal.Footer>
               <button className="btn waves-effect waves-light btn-success btn-sm" name="saveRoles" onClick={this._onChange}>{!this.props.btnLoading ? 'Save Changes' : 'Loading...'}</button>
            </Modal.Footer>
         </Modal>
      )
   }
}