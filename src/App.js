import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import SignUp from "./components/SignUp";
import SetUpPassword from "./components/SetUpPassword";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  },
  {
    path: "/signUp",
    element: <SignUp />
  },
  {
    path: "/signUp/setUp",
    element: <SetUpPassword />
  }
]);
function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
