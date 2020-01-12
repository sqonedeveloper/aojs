import React, { Component } from 'react'

export default class Navigation extends Component {
   render() {
      return (
         <nav>
            <ul className="pagination" style={{ fontWeight: 400 }}>
               <li className={"page-item" + (segment[5] === 'masthead' ? ' active' : '')}>
                  <a href={siteURL + '/admin/journal/wizard/' + segment[4] + '/masthead'} className="page-link">Masthead</a>
               </li>
               <li className={"page-item" + (segment[5] === 'contact' ? ' active' : '')}>
                  <a href={siteURL + '/admin/journal/wizard/' + segment[4] + '/contact'} className="page-link">Contact</a>
               </li>
               <li className={"page-item" + (segment[5] === 'apperance' ? ' active' : '')}>
                  <a href={siteURL + '/admin/journal/wizard/' + segment[4] + '/apperance'} className="page-link">Apperance</a>
               </li>
               <li className={"page-item" + (segment[5] === 'submission' ? ' active' : '')}>
                  <a href={siteURL + '/admin/journal/wizard/' + segment[4] + '/submission'} className="page-link">Submission</a>
               </li>
               <li className={"page-item" + (segment[5] === 'indexing' ? ' active' : '')}>
                  <a href={siteURL + '/admin/journal/wizard/' + segment[4] + '/indexing'} className="page-link">Indexing</a>
               </li>
               <li className={"page-item" + (segment[5] === 'users' ? ' active' : '')}>
                  <a href={siteURL + '/admin/journal/wizard/' + segment[4] + '/users'} className="page-link">Users</a>
               </li>
            </ul>
         </nav>
      )
   }
}
