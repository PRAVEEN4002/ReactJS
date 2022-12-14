
const redux = require('redux')


const createStore=redux.createStore;

const BUY_CAKE='BUY_CAKE';

function buyCake(){
    return {
        type:BUY_CAKE,
        info:"it is the redux store"
    }
}
const intialState={
    numOfCakes:20
}
const reducer=(state=intialState, action)=>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,numOfCakes:state.numOfCakes-1
            }
        default:
            return state;
    }
}

const store=createStore(reducer);
console.log("intial state",store.getState());
store.subscribe(()=>{console.log("updated store",store.getState())});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
