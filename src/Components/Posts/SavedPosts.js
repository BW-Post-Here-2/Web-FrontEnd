import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPost,
  deletePost,
  savePost,
  createPost,
  fetchSavedPost,
} from "../../Store/Actions/postActions";
// import { NavLink } from "react-router-dom";

function SavedPosts({ post }, props) {
  const dispatch = useDispatch();

  // const postState = useSelector((state) => {
  //   return state.post.posts;
  // });
  const favoriteState = useSelector((state) => {
    return state.post.favorite;
  });

  const helperFunction = (id) => {
    dispatch(deletePost(id));
    setDummyState(dummyState + 1);
  };

  const [dummyState, setDummyState] = useState(1);

  // const [favoritedPosts, setFavoritedPosts] = useState(favoriteState);

  useEffect(() => {
    dispatch(fetchSavedPost());
  }, [dummyState]);

  // useEffect(() => {

  // })

  console.log("My favorite state", favoriteState);
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          {favoriteState.map((post) => {
            console.log(post);
            return (
              <div key={post.id} className="card-action  grelighten-4 y-text">
                <div>
                  <span className="card-title">TITLE:{post.post_title}</span>
                  <p>CONTENT:{post.post_content}</p>
                  <h4>r/{post.subreddits}</h4>

                  <div className="card-action grey lighten-4 grey-text">
                    <div>Pulled from Reddit</div>
                    <div>May 27 2020</div>
                    {/* <button
                        className="save-button"
                        onClick={() => {
                          console.log(post.id);
                          dispatch(savePost(post.id));
                          console.log({ favoriteState });
                        }}
                      >
                        Save
                      </button> */}
                    <button onClick={() => helperFunction(post.post_id)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default SavedPosts;

// export const inistialState ={
// ​
//     additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
//   };
// ​
// export const reducer = (state = inistialState, action) => {
//     switch(action.type){
//         case "ADD_FEATURES":
//             // console.log("action.payload from ADD_FEATURES",action.payload)
//             return{
//                 ...state,
//                 car: {...state.car,
//                     price:state.car.price + action.payload.price,
//                     features: [...state.car.features,
//                     action.payload
//                     ]
//                 },
//                 additionalFeatures: [...state.additionalFeatures.filter(item => item.id !== action.payload.id)]
//             }
//         case "REMOVE_FEATURES":
//             // console.log("action.payload from REMOVE_FEATURES",action.payload)
//             return{
//                 ...state,
//                 car:{...state.car,
//                     price:state.car.price - action.payload.price,
//                     features: [
//                         ...state.car.features.filter(item=> item.id !== action.payload.id)]
//                     },
//                 additionalFeatures: [...state.additionalFeatures, action.payload]
//             }
//     default:
//         return state
//     }
// }
// Collapse
