let GET_IMAGES = "GET_IMAGES";
let TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
let LOAD_MORE = "LOAD_MORE";
let TOTAL_COUNT = "TOTAL_COUNT";
let MODAL_FOTO = "MODAL_FOTO";
let CLOSE_MODAL = "CLOSE_MODAL";

const initialstate = {
  images: [],
  isFetching: false,
  page: 3,
  totalCount: 0,
  modalFoto: null,
  isOpen: false,
};

const portfolioReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_IMAGES: {
      return {
        ...state,
        images: [...state.images, ...action.images],
      };
    }
    case TOOGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }
    case LOAD_MORE: {
      return {
        ...state,
        page: state.page + 1,
      };
    }
    case TOTAL_COUNT: {
      return {
        ...state,
        totalCount: action.count,
      };
    }
    case MODAL_FOTO: {
      return {
        ...state,
        modalFoto: action.modalFoto,
      };
    }
    case CLOSE_MODAL: {
      return {
        ...state,
        isOpen: action.modal,
      };
    }
    default:
      return state;
  }
};

export const setImages = (images) => ({ type: GET_IMAGES, images });
export const toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  isFetching,
});
export const loadMore = (e) => ({ type: LOAD_MORE, e });
export const setTotalCount = (count) => ({ type: TOTAL_COUNT, count });
export const setModalFoto = (modalFoto) => ({ type: MODAL_FOTO, modalFoto });
export const tooglemodal = (modal) => ({ type: CLOSE_MODAL, modal });

export default portfolioReducer;
