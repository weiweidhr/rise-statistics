import '../styles/index.less';
import HelloWorld from '../components/HelloWorld.js';
import Rising from '../components/rising.js';
import Operate from '../components/operatingSpace';
import React from "react";
import {getRising} from '../request/index';
import {clipboard} from '../tools.js';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        date: null,
        nub: ''
    }
  }

  callback = (date) => {
    this.setState({
      date
    })
  }
  save = (nub) => {
    this.setState({
      nub
    })
  }

  backup() {
    getRising().then(risingData => {
      let rising = localStorage.getItem("rising");
      rising = rising ? JSON.parse(rising) : {};
      rising = {
        ...risingData,
        ...rising
      }
      clipboard(JSON.stringify(rising)).then(() => {
        alert("复制成功！");
      }).catch(() => {
        alert("复制失败！");
      })
      
    })
  }

  render() {
    return (
      <div className="outer_box">
        <HelloWorld date={this.state.date} nub={this.state.nub}></HelloWorld>
        <div className="bottom_box">
          <Operate callback = {this.callback}></Operate>
          <Rising save={this.save}></Rising>
          <div className="backups" onClick={this.backup}>数据备份</div>
        </div>
      </div>
  
    )
  }
}
