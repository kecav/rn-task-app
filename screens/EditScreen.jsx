import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    ScrollView,
    TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as taskActions from "../store/actions";

const EditScreen = (props) => {
    const tasks = useSelector((state) => state.tasks);
    const [isNew, setIsNew] = useState(props.route.params ? false : true);
    const [task, setTask] = useState(
        isNew ? null : tasks.find((item) => item.id === props.route.params.id)
    );
    const [title, setTitle] = useState(isNew ? "" : task.title);
    const [description, setDescription] = useState(
        isNew ? "" : task.description
    );
    const [remarks, setRemarks] = useState(isNew ? "" : task.remarks);
    const dispatch = useDispatch();

    // console.log("FROM EDIT : ", task);
    // console.log(tasks);

    const onSubmitHandler = () => {
        if (isNew) {
            dispatch(taskActions.createTask(title, description, remarks));
            console.log("New task added!");
        } else {
            id = props.route.params.id;
            dispatch(taskActions.updateTask(id, title, description, remarks));
            console.log("task updated");
        }
        props.navigation.goBack();
    };

    useEffect(() => {
        props.navigation.setOptions({
            title: isNew ? "Add new task" : "Edit Task",
        });
    }, [props]);

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(title) => {
                        setTitle(title);
                    }}
                    value={title}
                    placeholder="Enter task title here ..."
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(title) => {
                        setDescription(title);
                    }}
                    value={description}
                    placeholder="Enter task description here ..."
                    multiline
                    numberOfLines={4}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={(title) => {
                        setRemarks(title);
                    }}
                    value={remarks}
                    placeholder="Enter task Remarks here ..."
                />
                <Button title="Submit" onPress={onSubmitHandler} color="#222" />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#dedede",
    },
    input: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: "#fff",
        // borderRadius: 10,
        fontSize: 16,
        marginVertical: 10,
    },
});

export default EditScreen;
