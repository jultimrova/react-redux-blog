import React, {Component} from "react";
import {deletePost, fetchPost} from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class DisplayPosts extends Component {
    componentDidMount() {
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const {id} = this.props.match.params
        this.props.deletePost(id, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const {post} = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back</Link>
                <button className="btn btn-danger pull-xs-right"
                        onClick={this.onDeleteClick.bind(this)}>
                    Delete Post
                </button>
                <h3>{post.title}</h3>
                <h5>{post.body}</h5>
            </div>
        );
    }
}

function mapStateToProps({posts}, ownProps) {
    return {post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(DisplayPosts);