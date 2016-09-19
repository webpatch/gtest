/**
 * Created by kiny on 16/9/7.
 */
import React from 'react';
import User from "./components/user/user";
import Alert from "./components/alert/alert";

export default class Main extends React.Component {
  render() {
    return (
      // 程序入口组件
      <div>
        <User/>
        <Alert/>
      </div>
    );
  }
}
