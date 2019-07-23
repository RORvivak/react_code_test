import React, { Component } from 'react';
import { connect } from 'react-redux';

class  TaskListing extends Component {
    render(){
        const results = this.state
        console.log(results)
    return(
        <table border = "1">
            <tr>
                <td>Title</td>
                <td>Description</td>
             </tr>   
       { this.props.ctr.map((e,i)=>{
            return(<tr>
                <td>{e.title}</td>
                <td>{e.description}</td>
            </tr>)
        })}
        </table>
      
    )
    }

}

const mapStateToProps = (state) => {
    return(
        {
            ctr: state.results
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
  

export default connect(mapStateToProps, mapActionToProps)(TaskListing)