import { CREATE_TASK, FETCH_TASK, UPDATE_TASK, DELETE_TASK } from "./actions";

const initialState = {
    tasks: [],
};

export default TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TASK:
            let taskIndex = state.tasks.findIndex(
                (task) => task.id == action.task.id
            );
            const newTasks = state.tasks;
            newTasks[taskIndex] = action.task;
            return {
                tasks: newTasks,
            };

        case CREATE_TASK:
            return {
                ...state,
                tasks: tasks.push(action.task),
            };

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    task.id === action.id;
                }),
            };

        case FETCH_TASK:
            return {
                tasks: action.tasks,
            };
        default:
            return state;
    }
    return state;
};
