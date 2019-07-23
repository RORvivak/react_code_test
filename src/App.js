import React, { Component } from 'react';
import TaskCreator from './task_creator';
import { connect } from 'react-redux';



class App extends Component {
  
 ticketValues = (event) => {
    const task = { ...this.state }
    task[event.target.name] = event.target.value
    this.setState(
     task
   )
   console.log(this.state)


  }
  
  
  render() {
  
    return (
      <TaskCreator valueSet={this.ticketValues} submit={ (event) => {
        event.preventDefault();
        this.props.resultPush({title: this.state.title, description: this.state.description})}
      }/>
     
    );
  }
}

const mapStateToProps = (state) => {
  return(
      {
          ctr: state.results,
          title: state.title,
          description: state.description
      }
  )

}


const mapActionToProps = (dispatch) => {
    return(
        {
          resultPush: (value) => {
                return(dispatch({type: "Pusher", payload:  {title: value.title, description: value.description}}))
            }

            
       }
    )
}
export default connect(mapStateToProps, mapActionToProps)(App)
