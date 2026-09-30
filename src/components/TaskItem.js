import React from "react";
function TaskItem({task,toggleTask,deleteTask}){return <div className="task-item"><label><input type="checkbox" checked={task.completed} onChange={()=>toggleTask(task.id)}/><span className={task.completed?"completed":""}>{task.title}</span></label><button onClick={()=>deleteTask(task.id)}>[Xóa]</button></div>}
export default TaskItem;
