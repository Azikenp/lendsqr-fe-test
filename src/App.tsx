import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import LoginPage from "./features/login/LoginPage";
import Users from "./features/users/Users";
import { RequireAuth } from "./auth/RequireAuth";
import "./scss/App.scss";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/users",
    element: (
      <RequireAuth>
        <Users />
      </RequireAuth>
    ),
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        containerClassName="custom-toaster"
        reverseOrder={false}
      />
    </AuthProvider>
  );
}
