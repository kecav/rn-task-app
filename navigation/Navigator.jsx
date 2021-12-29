import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import EditScreen from "../screens/EditScreen";

const Stack = createNativeStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Task Management",
                        headerTitleAlign: "center",
                    }}
                />
                <Stack.Screen name="Edit Task" component={EditScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;
