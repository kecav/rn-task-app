export const CREATE_TASK = "CREATE_TASK";
export const FETCH_TASK = "FETCH_TASK";
export const UPDATE_TASK = "UPDATE_TASK";
export const DELETE_TASK = "DELETE_TASK";
import uuid from "react-native-uuid";


export const createTask = (title, description, remarks) => {
    const id = uuid.v4();
    return async (dispatch) => {
        const task = { id, title, description, remarks };
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        };

        await fetch(
            "https://61cc76cf198df60017aec0d7.mockapi.io/tasks",
            options
        );

        dispatch({
            type: CREATE_TASK,
            task: task,
        });
    };
};

export const fetchTask = () => {
    return async (dispatch) => {
        const res = await fetch(
            `https://61cc76cf198df60017aec0d7.mockapi.io/tasks`
        );
        const data = await res.json();
        // console.log("Fetched from actions: ",data);
        dispatch({
            type: FETCH_TASK,
            tasks: data,
        });
    };
};

export const updateTask = (id, title, description, remarks) => {
    return async (dispatch) => {
        const task = { id, title, description, remarks };
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task),
        };

        const res = await fetch(
            `https://61cc76cf198df60017aec0d7.mockapi.io/tasks/${id}`,
            options
        );
        const data = await res.json();
        // console.log(data);

        dispatch({
            type: UPDATE_TASK,
            task: { id, title, description, remarks },
        });
    };
};

export const deleteTask = (id) => {
    return async (dispatch) => {
        const options = {
            method: "DELETE",
        };

        await fetch(
            `https://61cc76cf198df60017aec0d7.mockapi.io/tasks/${id}`,
            options
        );

        dispatch({
            type: DELETE_TASK,
            id,
        });
    };
};
