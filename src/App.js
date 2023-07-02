import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import Todo from "./components/Todo";
// import Toastify from "./components/Toastify/Toastify";

function App() {
  return (
    <Fragment>
      <ToastContainer
        position="bottom-right"
      />
        {/* <Toastify/> */}
        <Todo/>
    </Fragment>
  );
}

export default App;
