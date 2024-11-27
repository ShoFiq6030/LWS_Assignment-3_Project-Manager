/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "./Header";
import Project from "./Project";
import { data as initialData } from "../assets/data";
import ToDoForm from "./ToDoForm";
import { useReducer } from "react";
import taskReducer from "../reducer/taskReducer";
import { validateForm } from "../utils/utilityFunctions";
import { TaskContext } from "../context/taskContext";

export default function MainContent({setShowSidebar,showSidebar}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState({});
  const [initialTasks, dispatch] = useReducer(taskReducer, initialData);
  const [searchText, setSearchText] = useState("");
  const [inputData, setInputData] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    category: "",
  });
  const [currentEdit, setCurrentEdit] = useState(null);

  // handlers
  function handleSearchText(e) {
    setSearchText(e.target.value);
  }
  const filteredTasks = initialTasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchText.toLowerCase())
  );
  function handleModalCloseOpen() {
    setModalOpen(!modalOpen);
    setInputData({
      taskName: "",
      description: "",
      dueDate: "",
      category: "",
    });
    setError({});
  }

  function handleAddorUpdate() {
    if (validateForm(inputData, setError)) {
      if (currentEdit) {
        dispatch({
          type: "edit",
          inputData,
        });
        setModalOpen(!modalOpen);
        setCurrentEdit(null);
      } else {
        dispatch({
          type: "add",
          task: inputData,
        });

        setModalOpen(!modalOpen);
        setInputData({
          taskName: "",
          description: "",
          dueDate: "",
          category: "",
        });
      }
    }
  }

  function handleEdit(item) {
    // console.log(item);
    setCurrentEdit(item);
    setInputData({ ...item });
    setModalOpen(true);
  }

  function handleDelete(taskId) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      dispatch({
        type: "delete",
        taskId,
      });
    }
  }

  return (
    <TaskContext.Provider
      value={{
        filteredTasks,
        handleModalCloseOpen,
        handleAddorUpdate,
        handleEdit,
        handleDelete,
      }}
    >
      <main className="flex-1 overflow-y-auto overflow-x-hidden">
        {modalOpen && (
          <ToDoForm
            onCloseClick={handleModalCloseOpen}
            inputData={inputData}
            setInputData={setInputData}
            onAddTask={handleAddorUpdate}
            error={error}
            setError={setError}
            currentEdit={currentEdit}
          />
        )}
        {!modalOpen && (
          <>
            <Header onSearch={handleSearchText} setShowSidebar={setShowSidebar} showSidebar={showSidebar}/>
            <Project
              onAddClick={handleModalCloseOpen}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          </>
        )}
      </main>
    </TaskContext.Provider>
  );
}
