//import * as axios from "axios";
import { getDatabase, ref, child, get } from "firebase/database";

// const instance = axios.create({
//   withCredetials: true,
//   baseURL: "http://localhost:3008/",
// });

// export const imagesAPI = {
//   getImages(page, limit) {
//     return instance.get(`images?_page=${page}&_limit=${limit}`);
//   },
// };

export const imagesFireAPI = {
  getImages() {
    const dbRef = ref(getDatabase());
    return get(child(dbRef, `images`));
  },
};
