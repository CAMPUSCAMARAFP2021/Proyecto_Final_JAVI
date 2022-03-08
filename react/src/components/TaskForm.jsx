import { useState } from "react";
import Button from './Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TaskForm = ({createTask}) => {
    const [task, setTask] = useState(
        {
            "title": "",
            "author": "",
            "description": "",
            "comments": [],
            "dueDate": new Date()
        }
    );

    const setTitle = ({target}) => {
        const title = target.value;
        setTask( lastValue => ({...lastValue, title}))
    }

    const setAuthor = ({target}) => {
        const author = target.value;
        setTask( lastValue => ({...lastValue, author}))
    }

    const setDescription = ({target}) => {
        const description = target.value;
        setTask( lastValue => ({...lastValue, description}))
    }

    const setDate = (dueDate) => {
        setTask( lastValue => ({...lastValue, dueDate}))
    }

    return <>
        <form>
            <input type="text" name="title" onChange={setTitle} value={task.title}></input>
            <input type="text" name="author" onChange={setAuthor} value={task.author}></input>
            <textarea onChange={setDescription} value={task.description}></textarea>
            <DatePicker selected={task.dueDate} onChange={setDate} ></DatePicker>
        </form>
        <Button name="enviar" onClick={() => createTask(task)}></Button>
        <div> 
            {JSON.stringify(task)}
        </div>
    </>;
}

export default TaskForm;