/**
 * Created by kiny on 16/9/17.
 */
import React from 'react';
import ReactDOM from 'react-dom'
import CSSModules from 'react-css-modules'
import styles from './user.scss'
import { repeat } from "../../utlis/string";

// @CSSModules(styles)
 export default class User extends React.Component {
  render() {
    return (
      // 程序入口组件
      <div className={styles.user}>
        <div styleName="title">title User AAA</div>
        <div className="content">
          This is {repeat('user', 5, '_')}
        </div>
      </div>
    );
  }
}

// export default CSSModules(User, styles);