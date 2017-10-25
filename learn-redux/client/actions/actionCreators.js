const increment = (index) => (
    {
        type: 'INCREMENT_LIKES',
        index // ': index', but ES6, right?
    }
)

const addComment = (postId, author, comment) => (
    {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
)

const removeComment = (postId, index) => (
    {
        type: 'REMOVE_COMMENT',
        postId,
        index
    }
)

export default {
    increment,
    addComment,
    removeComment
}