import React ,{Component} from 'react';
import { add_reminder , remove_reminder , clear_reminder } from './actions';
import {connect} from 'react-redux';
import moment from 'moment';
import './App.css'; 
class  App extends Component  {
  state = {
    text:'',
    date: new Date()
  }
  render_Reminders = () =>{
    const {reminders} = this.props;
    if (reminders && reminders.map){
    return(
       <ul className="list-group">
        {
          reminders.map(reminder => {
            return(
              <li  className="list-group-item" key = {reminder.id} >
                <div>{reminder.text}</div>
                <div>{moment(new Date(reminder.date)).fromNow() }</div>
                <div className="btn btn-danger" onClick={()=>this.props.remove_reminder(reminder.id)}>X</div>
              </li>
            )
          })
        }
      </ul>
    )
  } }
  render(){
    console.log(this.props);
    console.log(this.state);
  return (
    <div className="App form-group">
    <div><h2>What should I do ?</h2></div>
    <input type="text" className="form-control"
    value ={this.state.text}
    placeholder = "what U think about ....?" 
    onChange ={(e) => this.setState({text:e.target.value}) }/>
    <input type="datetime-local" className="form-control"
    value ={this.state.text}
    onChange ={(e) => this.setState({date:e.target.value}) }   />
    <button type="button" className="btn btn-primary btn-block"
    onClick ={() => {
      this.props.add_reminder(this.state.text , this.state.date)
      this.setState({text: '' , date:''})
     }
      }>
    Add Reminder</button>
    {this.render_Reminders()}
    <button
    onClick={()=> this.props.clear_reminder()}
     type="button" className="btn btn-danger btn-block">Clear</button>
    <div></div>
    </div>
  );
}
}
/* function mapDispatchToProps (dispatch){
  return{
    add_reminder:() =>{add_reminder}
  }
} */
/* function mapStateToProps (state){
  return{

  
  reminders : state 
}
} */
export default connect(state=>{
  return{
      reminders : state 
    }
    }
   , {add_reminder , remove_reminder , clear_reminder}) (App);
