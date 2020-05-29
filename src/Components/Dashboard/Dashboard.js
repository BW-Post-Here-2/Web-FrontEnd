import React, { Component } from "react";
// import Notifications from "./Notifications";
import PostList from "../Posts/PostList";
import { connect } from "react-redux";
import { CreatePost } from "../Posts/CreatePost";
import { Link } from "react-router-dom";
import "../../App.css";
class Dashboard extends Component {
  render() {
    console.log("HHHEEEYYYYY", this.props);
    const { posts } = this.props;

    return (
      <div className="container">
        <form className="white">
          <h3 className="grey-text text-darken-3 center">
            Reddit App Dashboard
          </h3>
          {/* <div className="dashboard container"> */}
          {/* <div className="row"> */}
          {/* <div className="col s12 m6"> */}
          <div className="container2">
            <div>
              <button className="btn orange accent-3 z-depth-2">
                <Link to="/create">Create Post</Link>
              </button>
            </div>
            <div>
              <button className="btn orange accent-3 z-depth-2">
                <Link to="/post/:id">Reddit Archive</Link>
              </button>
            </div>
            <div>
              <button className="btn orange accent-3 z-depth-2">
                <Link to="/savedposts">Saved Posts</Link>
              </button>
            </div>
          </div>
          {/* </div> */}

          {/* </div> */}
          {/* </div> */}
        </form>
      </div>
    );
  }
}

//testing

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts,
  };
};

export default connect(mapStateToProps)(Dashboard);
