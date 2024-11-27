/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import DeleteSVG from "./Svg/DeleteSVG";
import EditSVG from "./Svg/EditSVG";
import SortSVG from "./Svg/SortSVG";
import SortDescending from "./Svg/SortDescending";
import { TaskContext } from "../context/taskContext";

export default function ToDo() {
  const { filteredTasks, handleEdit, handleDelete } = useContext(TaskContext);
  const [isAscending, setIsAscending] = useState(null);

  let sortedData = filteredTasks.filter((item) => item.category === "todo");

  if (isAscending === null) {
    sortedData = sortedData.sort((a, b) => b.id - a.id);
  } else {
    sortedData = sortedData.sort((a, b) =>
      isAscending
        ? new Date(a.dueDate) - new Date(b.dueDate)
        : new Date(b.dueDate) - new Date(a.dueDate)
    );
  }
  function handleSortClick() {
    if (isAscending === null) {
      setIsAscending(false);
    } else {
      setIsAscending(!isAscending);
    }
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  }

  // console.log(sortedData);
  return (
    // Todo
    <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg bg-indigo-600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold">To-Do ({sortedData.length})</h3>
          <button onClick={handleSortClick}>
            {isAscending || isAscending === null ? (
              <SortSVG />
            ) : (
              <SortDescending />
            )}
          </button>
        </div>
        {sortedData.length === 0 && "Task List is empty!"}
        {sortedData.map((item) => {
          return (
            <div key={item.id}>
              <div className="mb-4 rounded-lg bg-gray-800 p-4">
                <div className="flex justify-between">
                  <h4 className="mb-2 flex-1 font-semibold text-indigo-500">
                    {item.taskName}
                    {/* {console.log(item.taskName)} */}
                  </h4>

                  <div className="flex gap-2">
                    <button onClick={() => handleDelete(item.id)}>
                      <DeleteSVG />
                    </button>
                    <button
                      onClick={() => {
                        handleEdit(item);
                      }}
                    >
                      <EditSVG />
                    </button>
                  </div>
                </div>
                <p className="mb-2 text-sm text-zinc-200">{item.description}</p>

                <p className="mt-6 text-xs text-zinc-400">
                  {formatDate(item.dueDate)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
