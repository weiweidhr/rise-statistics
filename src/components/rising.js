import React from "react";
import {getDate} from '../tools'
import { Input, DatePicker } from 'antd';
import moment from 'moment';
import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';
import '../styles/rising.less';

export default class Rising extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            nub: '',
            selectedDate: getDate(new Date().getTime())
        }
    }

    save = () => {
        let rising = localStorage.getItem("rising");
        rising = rising ? JSON.parse(rising) : {};
        rising = {
            ...rising,
            [this.state.selectedDate]: this.state.nub
        }
        localStorage.setItem("rising", JSON.stringify(rising));
        this.props.save(this.state.nub)
    }

    onChange = (date) => {
        this.setState({
            selectedDate: getDate(new Date(date).getTime())
        })
    }

    render() {
        return (
           <div className="out_box">
                <DatePicker locale={locale}
                            disabledDate={ current => current > moment().endOf('day') }  
                            onChange={this.onChange} />
                <div className="rising_box">
                    <Input  className="input_box" 
                            placeholder="请输入今日上涨家数" 
                            value={this.state.nub} 
                            onChange = {e => {
                                console.log('onChange', e.nativeEvent.data)
                                this.setState({nub: e.nativeEvent.data})
                            }} />
                    <div className="rising_btn" onClick={this.save}>保存</div>
                </div>
           </div>
        )
    }

}