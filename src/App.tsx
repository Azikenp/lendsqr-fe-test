import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./auth/AuthContext";
import LoginPage from "./features/login/LoginPage";
import Users from "./features/users/Users";
import { RequireAuth } from "./auth/RequireAuth";
import "./scss/App.scss";
import { Toaster } from "react-hot-toast";
import { SearchProvider } from "./context/AppContext";

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
      <SearchProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          containerClassName="custom-toaster"
          reverseOrder={false}
        />
      </SearchProvider>
    </AuthProvider>
  );
}
