import { RouterProvider } from "react-router-dom";
import logo from "./logo.svg";
import { router } from "./Routes/Routes/Routes";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
