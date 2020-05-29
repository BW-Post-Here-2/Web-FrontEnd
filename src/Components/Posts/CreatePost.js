import React, { Component } from "react";
import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPost,
  deletePost,
  savePost,
  createPost,
} from "../../Store/Actions/postActions";

export class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      content: "",
      postId: [],
      subReddit: "",
      showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener("click", this.closeMenu);
      });
    }
  }

  // handleChange = (e) => {
  //   this.setState({
  //     [e.target.id]: e.target.value,
  //   });
  // };
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(this.state)
  //   this.props.createPost(this.state);
  // };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Post</h5>

          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              className="materialize-textarea"
              onChange={this.handleChange}
            ></textarea>
          </div>
          <h5 className="grey-text text-darken-3">Select Subreddit</h5>
          <div>
            <button
              onClick={this.showMenu}
              className="btn light-blue lighten-1 z-depth-2"
            >
              Show menu
            </button>

            {this.state.showMenu ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className="btn orange accent-3 z-depth-1">
                  {" "}
                  r/Home{" "}
                </button>
                <br></br>
                <button className="btn orange accent-3 z-depth-1">
                  {" "}
                  r/Coronavirus{" "}
                </button>
                <br></br>
                <button className="btn orange accent-3 z-depth-1">
                  {" "}
                  r/Askreddit{" "}
                </button>
              </div>
            ) : null}
          </div>
          <div className="input-field">
            {/* <button
              className="save-button"
              onClick={() => {
                dispatch(createPost(post));
              }}
            >
              Create Post
            </button> */}
          </div>
        </form>
      </div>

      //*******************************************************
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => dispatch(createPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(CreatePost);
