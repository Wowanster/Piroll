let UPDATE_NEW_YOUR_NAME='UPDATE_NEW_YOUR_NAME';
let SEND_FORM='SEND_FORM';
let UPDATE_NEW_EMAIL='UPDATE_NEW_EMAIL';
let UPDATE_NEW_TITLE='UPDATE_NEW_TITLE';
let UPDATE_NEW_COMMENT='UPDATE_NEW_COMMENT';

let ititialState={name:'', email:'', title:'', comment:'', newYourName:'', newEmail:'', newTitle:'', newComment:''};

const formReducer=(state=ititialState, action)=>{

    switch(action.type){
        case UPDATE_NEW_YOUR_NAME:{
            return{
                ...state,
            newYourName : action.newName
            }
        }
        case UPDATE_NEW_EMAIL:{
            return{
                ...state,
                newEmail:action.newEmail
            }
        }
        case UPDATE_NEW_TITLE:{
            return{
                ...state,
                newTitle:action.newTitle
            }
        }
        case UPDATE_NEW_COMMENT:{
            return{
                ...state,
                newComment:action.newComment
            }
        }
        case SEND_FORM:{
            return{
                ...state,
            name:state.newYourName,
            email:state.newEmail,
            title:state.newTitle,
            comment:state.newComment,
            newYourName:'', 
            newEmail:'',
            newTitle:'',
            newComment:''
            }
        }
        default: 
        return state;
    }
}


export const updateComment=(comment)=>({type:UPDATE_NEW_COMMENT, newComment:comment});
export const updateTitle=(title)=>({type:UPDATE_NEW_TITLE, newTitle:title});
export const updateEmail=(email)=>({type:UPDATE_NEW_EMAIL, newEmail:email});
export const sendForm=()=>({type:SEND_FORM});
export const updateYorName=(name)=>({type:UPDATE_NEW_YOUR_NAME, newName:name});

export default formReducer;

