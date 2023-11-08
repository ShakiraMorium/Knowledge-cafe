import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};
// props types error solve//
Blog.propTypes = {
    blog: PropTypes. object .isRequired
}

export default Blog;