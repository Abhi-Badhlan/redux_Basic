const initialState=5;
const redu2=(state=initialState,action)=>{
    switch(action.type){
        case 'MULTIPLY' : return state*5;
        case 'DIVIDE' : return state/5;
        default : return state;
    }
}
export default redu2;