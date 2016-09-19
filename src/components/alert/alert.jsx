/**
 * Created by kiny on 16/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import styles from './alert.scss'


@CSSModules(styles)
export default class Alert extends React.Component {
  render() {
    return (
      // 程序入口组件
      <div styleName="alert">
        <div styleName="title">title</div>
        <div className="content">
          Hello world!
        </div>
      </div>
    );
  }
}
