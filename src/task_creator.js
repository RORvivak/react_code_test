import React from 'react';

const TaskCreator = (props) => {
    return(
        <div>
            <form  onSubmit={props.submit}>
                <div>
                    <label>Title: </label>
                    <input name = "title" type="text" onChange={props.valueSet}/>
                </div>

                <div>
                    <label>Description: </label>
                    <input name = "description" type="text" onChange={props.valueSet}/>
                </div>

                <div>
                     <input type="submit" value="submit"/>
                </div>
            </form>    
        </div>    
    )

}

export default TaskCreator