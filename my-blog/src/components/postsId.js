import React, {Component} from "react";
import _ from 'lodash'
import {fetchPosts} from "../actions";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PostsId extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, p => {
            return (
                <li className='list-group-item' key={p.id}>
                    {p.title}
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <div className='text-xs-right'>
                    <Link className='btn btn-primary' to='/posts/new'>
                        Add post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps({posts}) {
    return {posts}
}

export default connect(mapStateToProps,{fetchPosts})(PostsId)