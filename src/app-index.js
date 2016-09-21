import React from 'react';
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
 export default class User extends React.Component {
  render() {
    return (
      // 程序入口组件
      <div>
        <div>This is Index </div>
        <div>
            <ul>
                <li><Link to="/app"> /App3 </Link></li>
                <li><Link to="/user"> /User </Link></li>
            </ul>
        </div>
        <div>
            {this.props.children}
        </div>
      </div>
    );
  }
}