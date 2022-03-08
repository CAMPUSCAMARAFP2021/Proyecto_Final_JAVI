import Button from './Button';
import CommentList from './CommentList';
import Checkbox from './Checkbox'

const Task = ({task, onDelete}) =>  
    <div>
        <Checkbox checked={task.done}></Checkbox>
        <p className="title">{task.title}</p>
        <p className="author">{task.author}</p>
        <Button name="eliminar" onClick={onDelete}></Button>
        <CommentList comments={task.comments}></CommentList>
    </div>

export default Task;