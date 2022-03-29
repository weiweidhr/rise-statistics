import React from "react";
import { DateRangePicker } from 'element-react';
import 'element-theme-default';

export default class Operate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: []
        }
    }
    componentDidMount() {
        this.getStartDate()
    }

    cb(msg) {
        this.props.callback(msg)
    }

    getStartDate() {
        let startDate = new Date()
        startDate.setTime(startDate.getTime()-30*24*60*60*1000)
        this.setState({
            date: [startDate, new Date()]
        })
    }

    render() {
        const {date} = this.state;
        return (
            <div className="date_box">
                <span className="demonstration">日期范围: </span>
                <DateRangePicker    value={this.state.date}
                                    placeholder="请选择"
                                    align="right"
                                    ref={e=>this.daterangepicker2 = e}
                                    disabledDate={time=>time.getTime() > Date.now()}
                                    onChange = {date => {
                                        this.setState({date})
                                        this.cb(date);
                                    }}
                                    shortcuts={[{
                                        text: '最近一周',
                                        onClick: ()=> {
                                            const end = new Date();
                                            const start = new Date();
                                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                                            this.setState({date: [start, end]})
                                            this.cb([start, end]);
                                            this.daterangepicker2.togglePickerVisible()
                                        }
                                    }, {
                                        text: '最近一个月',
                                        onClick: ()=> {
                                        const end = new Date();
                                        const start = new Date();
                                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                                        this.setState({date: [start, end]})
                                        this.cb([start, end]);
                                        this.daterangepicker2.togglePickerVisible()
                                        }
                                    }, {
                                        text: '最近三个月',
                                        onClick: ()=> {
                                        const end = new Date();
                                        const start = new Date();
                                        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                                        this.setState({date: [start, end]})
                                        this.cb([start, end]);
                                        this.daterangepicker2.togglePickerVisible()
                                        }
                                    }]}
                />
            </div>
        )
    }
}