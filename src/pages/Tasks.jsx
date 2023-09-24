import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import Pagination from "./pagination";
const Tasks = () => {
  const [tasks, setTask] = useState([]);
  const [page, setPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    getTasks();
  }, [page]);

  const lastPostIndex = page * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPage =  tasks.slice(firstPostIndex, lastPostIndex);

  const getTasks = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      console.log(response.data);
      setTask(response.data);
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="p-10 w-full">
      <div className="flex items-center justify-between pb-2">
      <h1 className="text-lg text-semibold">Tasks</h1>
      <div className="flex items center justify-between gap-3">
      <input type="text" placeholder="Add New Task.." className="text-sm px-3 py-1 rounded-sm border-transparent active:border-none" />
      <button className="bg-blue-800 rounded-md text-bold text-sm px-2 py-1">Add New</button>
      </div> 
      </div>
     
      <div className="w-full text-black text-sm">
        <table className="rounded-lg bg-white px-2 py-1 w-full text-left ">
          <tr>
            <th className="p-2">ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
          {currentPage &&
            currentPage.map((task) => (
              <tr key={task.id}>
                <td className="p-2">{task.id}</td>
                <td>{task.title}</td>
                <td>{task.completed ? "Pending" : "Done"}</td>
                <td>
                  {" "}
                  <MdDeleteOutline  className="cursor-pointer"/>{" "}
                </td>
                <td>
                  {" "}
                  <BsFillPencilFill  className="cursor-pointer"/>{" "}
                </td>
              </tr>
            ))}
        </table>
      </div>
      <div className="flex items-center justify-center gap-4 pt-5">
      <button className='bg-black text-white px-2 py-1 rounded-md' onClick={() => setPage(page - 1)} disabled={page === 1}>Pre</button>
       <Pagination totalTasks={tasks.length} postPerPage={postPerPage} setPage={setPage} currentPage={currentPage} />
       <button className='bg-black text-white px-2 py-1 rounded-md'  onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Tasks;
