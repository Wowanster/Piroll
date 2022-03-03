
import { connect } from "react-redux";
import SectionFoto from "./SectionFotoClass";
import { setImages, toogleIsFetching, loadMore, setTotalCount, setModalFoto} from "../../../Redux/portfolio-reducer";


const stateToProps = ( state ) => {
return{
  images:state.portfolio.images,
  isFetching:state.portfolio.isFetching,
  page:state.portfolio.page,
  totalCount:state.portfolio.totalCount,
  modalFoto:state.portfolio.modalFoto
  }
}

let SectionFotoContainer=connect(stateToProps, {setImages, toogleIsFetching, loadMore, setTotalCount, setModalFoto})(SectionFoto);

export default SectionFotoContainer;
