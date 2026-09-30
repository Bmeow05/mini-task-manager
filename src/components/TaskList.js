import React from "react";import TaskItem from "./TaskItem";
function TaskList({tasks,toggleTask,deleteTask}){return <div className="task-list">{tasks.length===0?<p>Không có công việc.</p>:tasks.map(t=><TaskItem key={t.id} task={t} toggleTask={toggleTask} deleteTask={deleteTask}/>)}</div>}
export default TaskList;
