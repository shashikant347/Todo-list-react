import { useState } from "react";

export default function Todolist() {
  const [task, settask] = useState("");
  const [add, setadd] = useState([]);
  const [idcount, setIdcount] = useState(1);

  function adding() {
    if (task.trim() === "") return alert("Enter the task");

    const newtask = {
      id: idcount,
      text: task,
    };

    setIdcount(idcount + 1);
    setadd([...add, newtask]);
    settask("");
  }

  function tochange(event) {
    settask(event.target.value);
  }

  function delet(id) {
    setadd(add.filter((item) => item.id !== id));
  }

  function reset(){
    setadd([])

  }

  return (
    <>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        onChange={tochange}
      />
      <button onClick={adding}>Add</button>&nbsp;&nbsp;&nbsp;<button onClick={reset}>Reset</button>

      <table
        border="1"
        style={{ marginTop: "1rem", minWidth: "70%", textAlign: "left", border:"2px solid #ccc"}}
      >
        <thead>
          <tr>
            <th style={{width:"13rem"}}>List</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody>
          {add.map((item) => (
            <tr key={item.id}>
              <td>{item.text}</td>
              <td>
                <button onClick={() => delet(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
