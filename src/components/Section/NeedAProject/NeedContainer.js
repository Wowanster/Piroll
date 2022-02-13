
import { connect } from "react-redux";
import {updateYorNameCreator, sendFormCreator,updateNewEmailCreator,updateTitleCreator, updateCommentCreator} from "../../../Redux/form-reducer";
import Need from "./Need";

let stateToProps=(state)=>{
    return{ 
        Name: state.form.newYourName,
        Email: state.form.newEmail,
        Title: state.form.newTitle,
        Comment: state.form.newComment,
    }
}
let dispatchToProps=(dispatch)=>{
    return{
        send: () =>{
            dispatch(sendFormCreator());
        },
        updateName: (newName) =>{
            dispatch(updateYorNameCreator(newName));
        },
        updateEmail: (newEmail) =>{
            dispatch(updateNewEmailCreator(newEmail))
        },
        updateTitle: (title) =>{
            dispatch(updateTitleCreator(title))
        },
        updateComment: (comment) =>{
            dispatch(updateCommentCreator(comment))
        }
    }
}
const NeedContainer=connect(stateToProps, dispatchToProps)(Need);

export default NeedContainer;