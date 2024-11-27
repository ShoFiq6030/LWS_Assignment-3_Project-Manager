import { useContext } from "react";
import { TaskContext } from "../context/taskContext";

/* eslint-disable react/prop-types */
export default function ToDoForm({
  inputData,
  setInputData,
  error,
  setError,
  currentEdit,
}) {
  const { handleModalCloseOpen, handleAddorUpdate } = useContext(TaskContext);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4 text-white">
        <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
          <div className="p-6">
            <h2 className="mb-6 text-2xl font-bold text-green-400">
              Create Task
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="taskName"
                  onChange={handleInputChange}
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Task Name
                </label>
                <input
                  type="text"
                  id="taskName"
                  value={inputData.taskName}
                  name="taskName"
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {error.taskName && (
                  <p className="mt-1 text-xs text-red-500">{error.taskName}</p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={inputData.description}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
                {error.description && (
                  <p className="mt-1 text-xs text-red-500">
                    {error.description}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="dueDate"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Due Date
                </label>
                <input
                  type="date"
                  id="dueDate"
                  name="dueDate"
                  value={inputData.dueDate}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                {error.dueDate && (
                  <p className="mt-1 text-xs text-red-500">{error.dueDate}</p>
                )}
              </div>

              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="mb-1 block text-sm font-medium text-gray-300"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={inputData.category}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="todo">To-Do</option>
                  <option value="inprogress">On Progress</option>
                  <option value="done">Done</option>
                  <option value="revised">Revised</option>
                </select>
                {error.category && (
                  <p className="mt-1 text-xs text-red-500">{error.category}</p>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  onClick={handleModalCloseOpen}
                  type="button"
                  className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddorUpdate();
                  }}
                  className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  {currentEdit ? "Update Task" : "Create Task"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
