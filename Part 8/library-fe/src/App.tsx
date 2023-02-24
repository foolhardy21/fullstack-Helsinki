import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authors from "./pages/Authors";
import Books from "./pages/Books";

const router = createBrowserRouter([
  {
    path: "/authors",
    element: <Authors />,
  },
  {
    path: "/books",
    element: <Books />,
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
