export function nextId(initialData) {
  // console.log(initialData);
  return initialData.reduce((maxId, task) => {
    return Math.max(maxId, task.id);
  }, -1) + 1;
}


 export function validateForm(inputData,setError) {
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
