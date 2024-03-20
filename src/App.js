import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import SignUp from "./components/SignUp";
import SetUpPage from "./components/SetUpPage";
import { Provider} from "react-redux";
import appStore from "./utils/appStore";
import Browse from "./components/Browse";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "/signUp/setUp",
    element: <SetUpPage />,
  },
]);
function App() {
  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
