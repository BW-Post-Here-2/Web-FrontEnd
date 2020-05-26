import React from 'react'

const PostDetails = (props) => {
    console.log('the motha fuckin props boiii', props)
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className='card-content'>
                    <span className='card-title'>Post Title {id}</span>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className='card-action grey lighten-4 grey-text'>
                    <div>Posted by "User"</div>
                    <div>May 27 2020</div>
                </div> 
            </div>
        </div>
    )
}

export default PostDetails;
