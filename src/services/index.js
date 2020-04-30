import store from "../store";
import _ from 'lodash';

export const getBlogList = (blog, number = 3) =>{
    return blog.slice(0, number);
}

export const getBlog = options => {
    let blogList = store.getState().news.blog;
    let optionDefault = {
        number: 6,
    };
    options = {...optionDefault, ...options};
    blogList = _.sortBy(blogList, 'date')
    return blogList.splice(0, options.number)

}

export const getSingleBlog = slug => {
    let blogList = store.getState().news.blog;
    return _.find(blogList, blog => blog.slug === slug)
}


export const getApartments = (options) => {
    let apartments = store.getState().apartments.apartments;
    let optionDefault = {
        number: 6,
    };

    options = {...optionDefault, ...options};

    return apartments.splice(0, options.number);

}
