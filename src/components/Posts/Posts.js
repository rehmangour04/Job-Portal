import { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import EditPost from '../../pages/EditPost/EditPost';
import SinglePost from '../../pages/SinglePost/SinglePost';
import { FaUserCircle } from "react-icons/fa";
import "../../App.css";

import {
    createPostAction,
    getPostsAction,
    deletePostAction,
} from '../../store/actions/PostActions';

class Posts extends Component {
    onCreatePost() {
        this.props.createPostAction();
    }

    componentDidMount() {
        if (this.props.posts && !this.props.posts.length) {
            this.props.getPostsAction();
        }
    }

    onDeletePost(postId) {
        if (window.confirm('Are you sure you want to delete post?')) {
            this.props.deletePostAction(postId, this.props.history);
        }
    }

    render() {
        const posts = [];

        for (let post of this.props.posts) {
            posts.push(
              <div key={post.id} className="fight1 ">
                <div className="shadow border p-3  fight2">
                  <div className="title">{post.title}</div>
                  <div className="companyprofile">
                    <div className="icons">
                      <FaUserCircle size={"3em"} />
                    </div>
                    <div className="company">{post.company}</div>
                  </div>
                  <div className="salarytime">
                    <div className="salary ">Salary :{post.salary}</div>
                    <div className="datetime">Date Time : {post.datetime}</div>
                  </div>
                  <div> Description: {post.description}</div>
                  <div className='detailsedit'>
                    <div>
                      <Link
                        to={{ pathname: `/posts/${post.id}` }}
                        className="text-purple-500"
                      >
                        View Details
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={{ pathname: `/posts/edit/${post.id}` }}
                        className="text-purple-500"
                      >
                        Edit Details
                      </Link>
                    </div>
                    <div>
                      <button
                        className="text-purple-500"
                        onClick={() => this.onDeletePost(post.id)}
                      >
                        Delete Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
        }
        return (
          <div className="mt-4">
            <div className="flex items-center justify-between my-4">
              <h2 className="bolder text-lg"></h2>
              <Link to="/createpost" className="bg-red-300 px-3 py-2">
                Add Jobs
              </Link>
            </div>
            <hr />
            <div className="flex">
              <div className="">
                <div className="flex flex-wrap">{posts}</div>
              </div>
              <div className="">
                {this.props.posts.length && (
                  <div>
                    <Switch>
                      <Route path="/posts/:id" exact component={SinglePost} />
                      <Route path="/posts/edit/:id" component={EditPost} />
                      
                    </Switch>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(
        { createPostAction, getPostsAction, deletePostAction },
        dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
