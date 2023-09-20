import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import { Home, About, Experience, Projects, Blog, ErrorPage } from './components';

export const Router = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            { index: true, element: <Home /> },
            { path: "about", element: <About /> },
            { path: "experience", element: <Experience /> },
            { path: "projects", element: <Projects /> },
            { path: "blog", element: <Blog /> },
          ],
        },
    ]);

    return <RouterProvider router={router} />
}