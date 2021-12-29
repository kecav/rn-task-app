// import { StatusBar } from "expo-status-bar";
import Navigator from "./navigation/Navigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import TaskReducer from "./store/reducers";

// const middlewares = [ReduxThunk];
const store = createStore(TaskReducer, applyMiddleware(ReduxThunk));

export default function App() {
    return (
        <Provider store={store}>
            <Navigator />
        </Provider>
    );
}
