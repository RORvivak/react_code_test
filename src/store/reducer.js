const initialstate = {title: "",
description: "",
results: [] }

const reducer = (state = initialstate, action) => {
    // let result = []
   
        switch(action.type){
            case "Pusher":{
                let payload = action.payload
                state.results.push({title: payload.title, description: payload.description, status: "created"})
                let id = state.results.length
                console.log(state)
                return({...state, id: id})
            }

            default:
                {
                    return(state)
                }
        }
    

}

export default reducer