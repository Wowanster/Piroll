import { connect } from "react-redux";
import SectionFoto from "./SectionFotoClass";
import {
  setModalFoto,
  tooglemodal,
  addImages,
  loadImages,
} from "../../../Redux/portfolio-reducer";

const stateToProps = (state) => {
  return {
    images: state.portfolio.images,
    isFetching: state.portfolio.isFetching,
    pageStart: state.portfolio.pageStart,
    pageEnd: state.portfolio.pageEnd,
    totalCount: state.portfolio.totalCount,
    modalFoto: state.portfolio.modalFoto,
    isOpen: state.portfolio.isOpen,
  };
};

let SectionFotoContainer = connect(stateToProps, {
  setModalFoto,
  tooglemodal,
  addImages,
  loadImages,
})(SectionFoto);

export default SectionFotoContainer;
