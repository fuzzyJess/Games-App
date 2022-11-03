
const CommentForm = () => {

    return (
        <form>
            <fieldset>
                <legend>Leave a comment</legend>
                <label htmlFor="form_author">Enter a username</label>
                <input id="form_author" type="text" />
                <label htmlFor="form_body">Enter your comment</label>
                <input id="form_body" type="text" />
            </fieldset>
        </form>
    )
}

export default CommentForm