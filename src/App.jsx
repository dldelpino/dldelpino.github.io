import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider
} from "react-router-dom"

import MainLayout from "./layouts/MainLayout"
import HomePage from "./pages/HomePage"
import ProjectPage from "./pages/ProjectPage"

// import LaTeX from "./pages/projects/LaTeX"
// import ShinyLivingDexTracker from "./pages/projects/ShinyLivingDexTracker"
// import ProjectEuler from "./pages/projects/ProjectEuler"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/projects/:id" element={<ProjectPage/>}/> 
      {/* <Route path="/latex" element={<LaTeX/>}/>
      <Route path="/shiny_living_dex_tracker" element={<ShinyLivingDexTracker/>}/>
      <Route path="/project_euler" element={<ProjectEuler/>}/> */}
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App