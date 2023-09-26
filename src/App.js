import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import {
  Home,
  Virtual,
  OnSite,
} from './Screen/'
import Join from "./Screen/Join";
import TandP from "./Screen/TandP";
import Pp from "./Screen/Pp";
import Guide from "./Screen/Guide";
import Safety from "./Screen/Safety";


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/virtual",
      element: <Virtual />,
    },
    {
      path: "/onsite",
      element: <OnSite />,
    },
    {
      path: "/join-us",
      element: <Join />
    },
    {
      path: "/terms-of-service",
      element: <TandP />
    },
    {
      path: "/privacy-policy",
      element: <Pp />
    },
    {
      path: "/guides",
      element: <Guide />
    },
    {
      path: "/safety",
      element: <Safety />
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
