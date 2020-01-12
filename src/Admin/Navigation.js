import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Navigation extends Component {
   render() {
      return (
         <aside className="left-sidebar">
            <div className="scroll-sidebar">
               <nav className="sidebar-nav">
                  <ul id="sidebarnav">
                     {content.navigation.map((data, key) => {
                        return (
                           <li key={key} className={data.active.indexOf(segment[2]) !== -1 ? 'active' : ''}>
                              <a href={siteURL + data.url} aria-expanded="false" className={'waves-effect waves-dark' + (data.sub ? ' has-arrow' : '')}>
                                 <i className={data.icon} />
                                 <span className="hide-menu">{data.label}</span>
                              </a>
                              {data.sub ? <ul aria-expanded="false" className="collapse">{data.child.map((a, b) => {
                                 return (
                                    <li key={b}>
                                       <a href={siteURL + a.url} className={data.active.indexOf(segment[2]) !== -1 && a.active.indexOf(segment[3]) !== -1 ? 'active' : ''}>{a.label}</a>
                                    </li>
                                 )
                              })}</ul> : ''}
                           </li>
                        )
                     })}
                  </ul>
               </nav>
            </div>
         </aside>
      )
   }
}

ReactDOM.render(<Navigation />, document.getElementById('sidebar'))