import { Layout } from "components";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Spin } from "antd";
const Users = lazy(() => import("pages/users"));
const Books = lazy(() => import("pages/books"));
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Spin spinning={true} />}>
              <Users />
            </Suspense>
          ),
        },
        {
          path: "books",
          element: (
            <Suspense fallback={<Spin spinning={true} />}>
              <Books />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
