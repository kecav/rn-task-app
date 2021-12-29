import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button,
    FlatList,
    SafeAreaView,
    TouchableNativeFeedback,
    ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as taskActions from "../store/actions";

const Home = (props) => {
    const [isRefreshing, setIsRefreshing] = useState(false);
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

    const editTaksHandler = (id) => {
        props.navigation.navigate("Edit Task", { id });
    };

    const deleteTaskHandler = async (id) => {
        setIsRefreshing(true);
        await dispatch(taskActions.deleteTask(id));
        await dispatch(taskActions.fetchTask());
        setIsRefreshing(false);
    };

    const addTaskHandler = () => {
        props.navigation.navigate("Edit Task");
    };

    useEffect(() => {
        dispatch(taskActions.fetchTask());
    }, []);

    // console.log("Rendered", tasks.length);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topRow}>
                <View>
                    <Text style={styles.heading}>YOUR TASKS</Text>
                </View>
                <View>
                    <Button
                        title="Add New"
                        onPress={addTaskHandler}
                        color="#333"
                    />
                </View>
            </View>
            <View style={styles.listView}>
                {isRefreshing && <ActivityIndicator size="large" color="red" />}
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={(itemData) => (
                        <TouchableNativeFeedback
                            useForeground
                            onPress={() => editTaksHandler(itemData.item.id)}
                        >
                            <View style={styles.items}>
                                <Text style={styles.text}>
                                    {itemData.item.title}
                                </Text>
                                <View style={styles.buttonGroup}>
                                    <Button
                                        title="Edit"
                                        onPress={() =>
                                            editTaksHandler(itemData.item.id)
                                        }
                                        color="#333"
                                    />
                                    <View style={styles.space} />
                                    <Button
                                        title="Delete"
                                        onPress={() =>
                                            deleteTaskHandler(itemData.item.id)
                                        }
                                        color="#333"
                                    />
                                </View>
                            </View>
                        </TouchableNativeFeedback>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: "#eee",
        paddingBottom: 20,
    },
    topRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 20,
    },
    items: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: "#fff",
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    space: {
        width: 10,
    },
    text: {
        color: "#000",
        fontSize: 16,
    },
    listView: {
        marginBottom: 100,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
    },
});

export default Home;
