import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import PortfolioDetail from "../pages/PortfolioDetail";
import Education from "../pages/Education";
import Experience from "../pages/Experience";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "portfolio", element: <Portfolio /> },
            { path: "portfolio/:slug", element: <PortfolioDetail /> },
            { path: "education", element: <Education /> },
            { path: "experience", element: <Experience /> },
        ],
    },
]);
