import React from 'react'
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard'
import AdminLayout from './Components/AdminLayout'
import Projects from './pages/Admin/Projects/Projects'
import Tasks from './pages/Admin/Tasks/Tasks'
import Users from './pages/Admin/Users/Users'
import { Route, Routes ,Navigate } from 'react-router-dom'
import ProjectForms from './pages/Admin/Projects/ProjectForms'
import ProjectList from './pages/Admin/Projects/ProjectList'
import Home from './components/Home'
import ProjectEditForms from './pages/Admin/Projects/ProjectEditForm'
import TaskForms from './pages/Admin/Tasks/TaskForms'
import TasksList from './pages/Admin/Tasks/TasksList'
function App() {
  return (
    <>
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path='/admindashboard' element={<AdminLayout/>}>
      <Route index element={<Navigate to="admindashboard" replace />} />
      <Route path='admindashboard' element={<AdminDashboard/>}/>

      <Route path='adminprojects' element={<Projects/>}>
      <Route index element={<Navigate to="projectlist" replace />} />
      <Route path='projectlist' element={<ProjectList/>}/>
      </Route>
      <Route path='addproject' element={<ProjectForms/>}/>
      <Route path="editproject/:id" element={<ProjectEditForms />} />

      <Route path='admintasks' element={<Tasks/>}>
          <Route index element={<Navigate to="tasklist" replace />} />
      <Route path='tasklist' element={<TasksList/>}/>
      <Route path='addTask' element={<TaskForms/>}/>
      </Route>
      <Route path='adminusers' element={<Users/>}/>
      </Route>
    </Routes>

    
    </>
  )
}

export default App