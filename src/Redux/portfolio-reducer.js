import { imagesFireAPI } from "../api/api";

let GET_IMAGES = "GET_IMAGES";
let TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
let LOAD_MORE = "LOAD_MORE";
let TOTAL_COUNT = "TOTAL_COUNT";
let MODAL_FOTO = "MODAL_FOTO";
let CLOSE_MODAL = "CLOSE_MODAL";

const initialstate = {
  images: [],
  isFetching: false,
  pageStart: 8,
  pageEnd: 12,
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
        pageStart: state.pageStart + 4,
        pageEnd: state.pageEnd + 4,
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
export const loadMore = () => ({ type: LOAD_MORE });
export const setTotalCount = (count) => ({ type: TOTAL_COUNT, count });
export const setModalFoto = (modalFoto) => ({ type: MODAL_FOTO, modalFoto });
export const tooglemodal = (modal) => ({ type: CLOSE_MODAL, modal });

// export const addImages = (page, limit) => {
//   return (dispatch) => {
//     dispatch(toogleIsFetching(true));
//     imagesAPI
//       .getImages(page, limit)
//       .then((response) => {
//         dispatch(setImages(response.data));
//         dispatch(setTotalCount(+response.headers["x-total-count"]));
//         dispatch(toogleIsFetching(false));
//       })
//       .catch(dispatch(toogleIsFetching(false)));
//   };
// };

export const addImages = (start, end) => {
  return (dispatch) => {
    dispatch(toogleIsFetching(true));
    imagesFireAPI
      .getImages()
      .then((snapshot) => {
        if (snapshot.exists()) {
          let block = snapshot.val().slice(start, end);
          dispatch(setImages(block));
          dispatch(setTotalCount(snapshot.size));
          dispatch(toogleIsFetching(false));
        } else console.log("No data available");
      })
      .catch(dispatch(toogleIsFetching(false)));
  };
};
export const loadImages = (start, end) => {
  return (dispatch) => {
    dispatch(loadMore());
    dispatch(toogleIsFetching(true));
    imagesFireAPI.getImages().then((snapshot) => {
      if (snapshot.exists()) {
        let block = snapshot.val().slice(start, end);
        dispatch(setImages(block));
        dispatch(toogleIsFetching(false));
      } else console.log("No data available");
    });
  };
};

// export const loadImages = (page, limit) => {
//   return (dispatch) => {
//     dispatch(loadMore());
//     dispatch(toogleIsFetching(true));
//     imagesAPI.getImages(page, limit).then((response) => {
//       dispatch(setImages(response.data));
//       dispatch(toogleIsFetching(false));
//     });
//   };
// };

export default portfolioReducer;
