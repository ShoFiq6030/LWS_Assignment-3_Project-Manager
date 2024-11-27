import { nextId } from "../utils/utilityFunctions";

export default function taskReducer(tasks, action) {

    switch (action.type) {
        case "add": {
            return [
                ...tasks, { id: nextId(tasks), ...action.task },

            ]
        }
        case "delete": {
            return [
                ...tasks.filter((item) => item.id !== action.taskId)
            ]
        }
        case "edit": {
            // console.log(action.inputData);
            const updatedTasks = tasks.map(task =>
                task.id === action.inputData.id
                    ? { ...task, ...action.inputData }
                    : task
            );
            // console.log("Updated Tasks:", updatedTasks);
            return updatedTasks;
        }

        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}