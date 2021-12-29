import { CREATE_TASK, FETCH_TASK, UPDATE_TASK, DELETE_TASK } from "./actions";

const initialState = {
    tasks: [],
};

export default TaskReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TASK: 
            let taskIndex = state.tasks.findIndex(task => task.id==action.task.id);
            state.tasks[taskIndex] = action.task;
            // console.log("\n\nUpdated state: ",state.tasks);
            break;
        case CREATE_TASK:
            state.tasks.push(action.task);
            // console.log("\n\nAfter new task: ",state.tasks);
            break;
        case DELETE_TASK:
            let index = state.tasks.findIndex(task => task.id==action.id);
            state.tasks.splice(index, 1);
            // console.log("\n\nAfter delete task : \n",index, state.tasks);
            break;
        case FETCH_TASK:
            state.tasks = action.tasks;
            // console.log("\n\nFetched Tasks: ", state.tasks);
            break;
    }
    return state;
};
