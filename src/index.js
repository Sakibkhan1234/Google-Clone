import {createRoot} from "react-dom";
import {StateProvider} from "./GoogleComponent/StateProvider"
import reducer,{initialState} from "./GoogleComponent/Reducer"

// import Sakib from "./Sakib";
import App from "./App";

createRoot(document.getElementById("root")).render (<StateProvider initialState={initialState} reducer={reducer}><App/></StateProvider>)