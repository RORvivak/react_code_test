import React, { Component } from 'react';
import { connect } from 'react-redux';

class  TaskListing extends Component {
    render(){
    return(
        <table border = "1">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Assign</th>
                </tr>    
            </thead>
            <tbody>   
                { this.props.ctr.map((e,i)=>{
                    let button = <button onClick =  { () => this.props.assign(e.id)}>Assign</button>
                    if(e.status != "created")
                        {button  = "Already assigned" }
                        return(<tr key={e.id}>
                            <td>{e.title}</td>
                            <td>{e.description}</td>
                            <td>{button}</td>
                        </tr>)
                    })}
            </tbody>
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