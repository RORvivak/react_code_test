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

            default:
                {
                    return(state)
                }
        }
    

}

export default reducer