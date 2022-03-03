
import { connect } from "react-redux";
import {updateComment,updateTitle,updateEmail,sendForm,updateYorName} from "../../../Redux/form-reducer";
import Need from "./Need";

let stateToProps=(state)=>{
    return{ 
        Name: state.form.newYourName,
        Email: state.form.newEmail,
        Title: state.form.newTitle,
        Comment: state.form.newComment,
    }
}

const NeedContainer=connect(stateToProps, {updateComment,updateTitle,updateEmail,sendForm,updateYorName})(Need);

export default NeedContainer;