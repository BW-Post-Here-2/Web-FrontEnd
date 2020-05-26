const initState = {
    posts: [
        {id: '1', title: 'bake a cake', content: 'blah blah blah'},
        {id: '2', title: 'collect stuff', content: 'blah blah blah'},
        {id: '3', title: 'exercise routine', content: 'blah blah blah'}
    ]
}


const postReducer = (state = initState, action) => {
    return state
}

export default postReducer;