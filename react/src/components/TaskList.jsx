import Task from "./Task"
import TaskForm from './TaskForm';

import { useState, useEffect } from 'react';
import { getTasks, createTask, deleteTask } from "../api/tasks";



const TaskList = ({jwt}) => {
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const doCreateTask = (task, jwt) => {
        setIsLoading(true);
        createTask(task)
            .then((newTask) => {
                 setTasks((prevState) => [...prevState, newTask]);
                 setIsLoading(false);       
            }); 
    };
    const doDeleteTask = (task, jwt) => {
        setIsLoading(true);
        deleteTask(task)
        .then(loadData);
    };
    const loadData = () => {
        setIsLoading(true);
        getTasks(jwt).then((tasks) => {    
            setIsLoading(false);
            setTasks(tasks);
        }).catch(() => setIsLoading(false));
    }
    useEffect(loadData,[]); 
    
   
    
    return <>
        {isLoading ? 
            <p>cargando...</p> : 
            tasks.map(task => 
                <Task 
                    key={task._id} 
                    task={task} 
                    onDelete={() => doDeleteTask(task)}
                />)}
        <TaskForm createTask={doCreateTask}></TaskForm>
    </>
        
}
    

export default TaskList;