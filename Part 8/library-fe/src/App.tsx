import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authors from "./Authors";

const router = createBrowserRouter([
  {
    path: "/authors",
    element: <Authors />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
