
import { connect } from "react-redux";
import SectionFoto from "./SectionFotoClass";
import { getImages} from "../../../Redux/portfolio-reducer";


const stateToProps = ( state ) => {
return{
  images:state.portfolio.images
  }
}
const dispatchToProps=(dispatch)=>{
  return{
    setImages:(images)=>{
      dispatch(getImages(images));
    }
  }
}
let SectionFotoContainer=connect(stateToProps,dispatchToProps)(SectionFoto);

export default SectionFotoContainer;
