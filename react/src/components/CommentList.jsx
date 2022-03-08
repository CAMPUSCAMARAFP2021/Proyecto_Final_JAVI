import Comment from "./Comment"

const CommentList = ({comments}) => {

    return  comments.map(comment => 
                <Comment 
                  comment={comment}
                  key={comment._id}
                />)
              
}
export default CommentList