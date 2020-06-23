import React, { Component } from 'react';
import {  withRouter,Link} from 'react-router-dom';

class task1 extends Component {
    constructor(props){
        super(props)
        this.state = {
          time1: 0,
          start1: 0,
          isOn1: false,
          time2: 0,
          start2: 0,
          isOn2: false,
          time3: 0,
          start3: 0,
          isOn3: false,
          finaltimer1:0,
          totaltime:0

        }
        this.startTimer1 = this.startTimer1.bind(this)
        this.stopTimer1 = this.stopTimer1.bind(this)
        this.resetTimer1 = this.resetTimer1.bind(this)
        this.startTimer2 = this.startTimer2.bind(this)
        this.stopTimer2 = this.stopTimer2.bind(this)
        this.resetTimer2 = this.resetTimer2.bind(this)
        this.startTimer3 = this.startTimer3.bind(this)
        this.stopTimer3 = this.stopTimer3.bind(this)
        this.resetTimer3 = this.resetTimer3.bind(this)
        this.msToTime=this.msToTime.bind(this)
        // this.Totaltime=this.Totaltime.bind(this)
      }
       msToTime(duration) {
        var milliseconds = parseInt((duration%1000)/100)
        var seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60);
    
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;
    
        this.setState({
            finaltimer1:  minutes + ":" + seconds + "." + milliseconds
        }) 
    }
      startTimer1() {
        this.setState({
          time1: this.state.time1,
          start1: Date.now() - this.state.time1,
          isOn1: true,
        })
        this.timer = setInterval(() => this.setState({
          time1: Date.now() - this.state.start1
        }), 10000);
      }
      stopTimer1() {
        this.setState({isOn1: false})
        clearInterval(this.timer)
      }
      resetTimer1() {
        this.setState({time1: 0})
      }


      startTimer2() {
        this.setState({
          time2: this.state.time2,
          start2: Date.now() - this.state.time2,
          isOn2: true
        })
        this.timer2 = setInterval(() => this.setState({
          time2: Date.now() - this.state.start2
        }), 1000);
      }
      stopTimer2() {
        this.setState({isOn2: false})
        clearInterval(this.timer2)
      }
      resetTimer2() {
        this.setState({time2: 0})
      }

      startTimer3() {
        this.setState({
          time3: this.state.time3,
          start3: Date.now() - this.state.time3,
          isOn3: true
        })
        this.timer3 = setInterval(() => this.setState({
          time3: Date.now() - this.state.start3
        }), 100);
      }
      stopTimer3() {
        this.setState({isOn3: false})
        clearInterval(this.timer3)
      }
      resetTimer3() {
        this.setState({time3: 0})
      }
    //   Totaltime() {
    //     this.setState({totaltime: this.state.time1+this.state.time2+this.state.time3})
    //   }
    render() {
        let start1 = (this.state.time1 == 0) ?
      <button onClick={this.startTimer1}>start</button> :
      null
    let stop1 = (this.state.isOn1) ?
      <button onClick={this.stopTimer1}>stop</button> :
      null
    let reset1 = (this.state.time1 != 0 && !this.state.isOn1) ?
      <button onClick={this.resetTimer1}>reset</button> :
      null
    let resume1 = (this.state.time1 != 0 && !this.state.isOn1) ?
      <button onClick={this.startTimer1}>resume</button> :
      null

      let start2 = (this.state.time2 == 0) ?
      <button onClick={this.startTimer2}>start</button> :
      null
    let stop2= (this.state.isOn2) ?
      <button onClick={this.stopTimer2}>stop</button> :
      null
    let reset2 = (this.state.time2 != 0 && !this.state.isOn2) ?
      <button onClick={this.resetTimer2}>reset</button> :
      null
    let resume2 = (this.state.time2 != 0 && !this.state.isOn2) ?
      <button onClick={this.startTimer2}>resume</button> :
      null

      let start3 = (this.state.time3 == 0) ?
      <button onClick={this.startTimer3}>start</button> :
      null
    let stop3= (this.state.isOn3) ?
      <button onClick={this.stopTimer3}>stop</button> :
      null
    let reset3 = (this.state.time3 != 0 && !this.state.isOn3) ?
      <button onClick={this.resetTimer3}>reset</button> :
      null
    let resume3 = (this.state.time3 != 0 && !this.state.isOn3) ?
      <button onClick={this.startTimer3}>resume</button> :
      null
      
        return(
            <div>
                <div className="row">
                    <div className="col-md-3">
                    <h3>timer1:{this.state.time1} </h3>
                    {/* {msToTime} */}
        {start1}
        {resume1}
        {stop1}
        {reset1}
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                    <h3>timer2: {this.state.time2}</h3>
        {start2}
        {resume2}
        {stop2}
        {reset2}
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-3">
                    <h3>timer3: {this.state.time3}</h3>
        {start3}
        {resume3}
        {stop3}
        {reset3}
                    </div>

               
                </div>
                <div className="row">
                <h3>Total Time: {this.state.totaltime}</h3>
                </div>
        
      </div>
        );
    }
}export default withRouter(task1);