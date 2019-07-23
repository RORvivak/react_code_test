const initialstate = {title: "",
description: "",
results: [] }

const reducer = (state = initialstate, action) => {
    // let result = []
   
        switch(action.type){
            case "Pusher":{
                let payload = action.payload
                let id = state.results.length + 1
                state.results.push({title: payload.title, description: payload.description, status: "created", id: id})
               
                console.log(state)
                return({...state})
            }

            case "assing_task":{
                let assign_state = [...state.results]
                // console.log(assign_state)
                assign_state.map((e)=>{
                    if(e.id == action.payload.id)
                    {
                        e.status = "Assigned"
                    }
                })
                return({...state, results: assign_state})
            }

            default:
                {
                    return(state)
                }
        }
    

}

export default reducer