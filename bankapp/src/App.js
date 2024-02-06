import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Transactions from "./pages/Transactions";
import Error from "./pages/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/login/",
		element: <Login />
	},
	{
		path: "/profile/",
		element: <Profile />
	},
  {
		path: "/transactions/",
		element: <Transactions />
	},
	{
		path: "*",
		element: <Error />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
