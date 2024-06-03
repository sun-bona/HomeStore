import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Categories, Deal, Home, What } from "./pages";
import RootLayout from "./Layouts/RootLayout";
import Error from "./pages/Error";

// for animation
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Login from "./pages/Login";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "deals",
          element: <Deal />,
        },
        {
          path: "what",
          element: <What />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
