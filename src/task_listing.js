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
                <td>Assign</td>
             </tr>   
       { this.props.ctr.map((e,i)=>{
           let button = <button onClick =  { () => this.props.assign(e.id)}>Assign</button>
           if(e.status != "created")
            {button  = "Already assigned" }
            return(<tr>
                <td>{e.title}</td>
                <td>{e.description}</td>
                <td>{button}</td>
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
          assign: (id) => {
                return(dispatch({type: "assing_task", payload:  {id: id}}))
            }

            
       }
    )
}
  

export default connect(mapStateToProps, mapActionToProps)(TaskListing)