import api from "../api/api";
import * as types from "../constants/ActionTypes";

export const fetchBlogBegin = () => ({
  type: types.FETCH_BLOG_BEGIN,
});

export const receiveBlog = (blog) => ({
  type: types.RECEIVE_BLOG,
  blog,
});

export const receiveApartments = (data) => ({
  type: "receive_apartments",
  apartments: data,
});

export const getAllData = () => (dispatch) => {
  api.getBlog((blog) => {
    dispatch(receiveBlog(blog));
    return blog;
  });

  api.getApartments((apartments) => {
    dispatch(receiveApartments(apartments));
    return apartments;
  });
};
