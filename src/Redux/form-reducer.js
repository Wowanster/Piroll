let UPDATE_NEW_YOUR_NAME='UPDATE_NEW_YOUR_NAME';
let SEND_FORM='SEND_FORM';
let UPDATE_NEW_EMAIL='UPDATE_NEW_EMAIL';
let UPDATE_NEW_TITLE='UPDATE_NEW_TITLE';
let UPDATE_NEW_COMMENT='UPDATE_NEW_COMMENT';

let ititialState={name:'', email:'', title:'', comment:'', newYourName:'', newEmail:'', newTitle:'', newComment:''}

const formReducer=(state=ititialState, action)=>{
    if(action.type===UPDATE_NEW_YOUR_NAME){
        state.newYourName=action.newName;  
    } else if  
    (action.type===SEND_FORM){
        
        let newName=state.newYourName;
        let newEmail=state.newEmail;
        let newTitle=state.newTitle;
        let newComment=state.newComment;

        state.newYourName='';
        state.newEmail='';
        state.newTitle='';
        state.newComment='';

        state.name=newName;
        state.email=newEmail;
        state.title=newTitle;
        state.comment=newComment;
        
        console.log(state);
        
    } else if
    (action.type===UPDATE_NEW_EMAIL){
        state.newEmail=action.newEmail;
    } else if
    (action.type===UPDATE_NEW_TITLE){
        state.newTitle=action.newTitle;
    } else if
    (action.type===UPDATE_NEW_COMMENT){
        state.newComment=action.newComment;
    }
    return state;
}
export default formReducer;

