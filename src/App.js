import { RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import SideBar from "./SideBar";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <div className="flex">
        <SideBar />
      </div> */}
    </div>
  );
}

export default App;
