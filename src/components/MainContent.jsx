import { useState } from "react";
import Header from "./Header";
import Project from "./Project";
import { data } from "../assets/data";
import ToDoForm from "./ToDoForm";

export default function MainContent() {
  const [initialData, setInitialData] = useState(data);
  const [modalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState({});

  const [inputData, setInputData] = useState({
    taskName: "",
    description: "",
    dueDate: "",
    category: "",
  });
  const [currentEdit, setCurrentEdit] = useState(null);

  // console.log(initialData);

  const nextId =
    initialData.reduce((maxId, task) => {
      return Math.max(maxId, task.id);
    }, -1) + 1;
  // handlers
  function handleSearchText(e) {
    const value = e.target.value;

    if (value.trim() === "") {
      setInitialData(data);
    } else {
      setInitialData(
        data.filter((item) =>
          item.taskName.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  }
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
  function validateForm() {
    const newErrors = {};

    if (!inputData.taskName.trim()) {
      newErrors.taskName = "Task Name is required.";
    }
    if (!inputData.description.trim()) {
      newErrors.description = "Description is required.";
    }
    if (!inputData.dueDate) {
      newErrors.dueDate = "Due Date is required.";
    }
    if (!inputData.category.trim()) {
      newErrors.category = "Category is required.";
    }

    setError(newErrors);

    // Return whether the form is valid
    return Object.keys(newErrors).length === 0;
  }
  function handleAddorUpdate() {
    if (validateForm()) {
      if (currentEdit) {
        setInitialData((prevData) =>
          prevData.map((item) =>
            item.id === currentEdit.id ? { ...inputData, id: item.id } : item
          )
        );
        setModalOpen(!modalOpen);
        setCurrentEdit(null);
        console.log("hello");
      } else {
        console.log(inputData);
        setInitialData([...initialData, { ...inputData, id: nextId }]);
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
  // console.log(initialData);
  function handleEdit(item) {
    console.log(item);
    setCurrentEdit(item);
    setInputData({ ...item });
    setModalOpen(true);
  }

  function handleDelete(id) {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (isConfirmed) {
      setInitialData(initialData.filter((item) => item.id !== id));
    }
  }

  return (
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
          <Header onSearch={handleSearchText} />
          <Project
            initialData={initialData}
            onAddClick={handleModalCloseOpen}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </>
      )}
    </main>
  );
}
