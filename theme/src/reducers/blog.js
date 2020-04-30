import {
    FETCH_SINGLE_BLOG,
    RECEIVE_BLOG } from "../constants/ActionTypes";


const initialState = {
    blog: [],
    blog_details: []
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case RECEIVE_BLOG:
            return { ...state,
                blog: action.blog };
        case FETCH_SINGLE_BLOG:
            if (state.blog.findIndex(blog => blog.id === action.blogId) !== -1) {
                const singleItem = state.blog.reduce((itemAcc, blog) => {
                    return blog
                }, [])
                return { ...state,
                    blog_details: singleItem };
            }

        default:
            return state;
    }
};
export default blogReducer;