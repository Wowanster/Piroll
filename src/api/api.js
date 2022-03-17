import * as axios from "axios";

const instance = axios.create({
  withCredetials: true,
  baseURL: "http://localhost:3008/",
});

export const imagesAPI = {
  getImages(page, limit) {
    return instance.get(`images?_page=${page}&_limit=${limit}`);
  },
};
