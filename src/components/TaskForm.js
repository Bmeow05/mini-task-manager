import React,{useState} from "react";
function TaskForm({addTask}){const[title,setTitle]=useState("");const submit=e=>{e.preventDefault();if(!title.trim())return;addTask(title.trim());setTitle("")};return <form className="task-form" onSubmit={submit}><input placeholder="Nhập tên công việc........" value={title} onChange={e=>setTitle(e.target.value)}/><button>[Thêm]</button></form>}
export default TaskForm;
