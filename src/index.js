import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const AppLayOut=()=>{
    return <React.Fragment>
        <App/>
    </React.Fragment>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);

