import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard'
import AdminLayout from './Components/AdminLayout'
import Projects from './pages/Admin/Projects/Projects'
import Tasks from './pages/Admin/Tasks/Tasks'
import Users from './pages/Admin/Users/Users'
import ProjectForms from './pages/Admin/Projects/ProjectForms'
import ProjectList from './pages/Admin/Projects/ProjectList'
import ProjectEditForms from './pages/Admin/Projects/ProjectEditForm'
import TaskForms from './pages/Admin/Tasks/TaskForms'
import TasksList from './pages/Admin/Tasks/TasksList'
import TaskEditForm from './pages/Admin/Tasks/TaskEditForm'
import UsersForm from "./pages/Admin/Users/UsersForm"
import UsersList from "./pages/Admin/Users/UsersList"
import UsersEditForm from "./pages/Admin/Users/UsersEditForm"
import LoginPage from "./pages/Authorization/LoginPage"
import SignupPage from "./pages/Authorization/SignupPage"
import UserDashboard from './pages/ClinetUsers/userDashbaord/UserDashboard'
import ClientUsers from './pages/ClinetUsers/Users/ClientUsers'
import Usertask from './pages/ClinetUsers/Tasks/Usertask'
import UserProjects from './pages/ClinetUsers/Projects/UserProjects'
import UserTasksList from './pages/ClinetUsers/Tasks/UserTasksList'
import Home from './Components/Home' 


function PrivateRoute({ children }) {
  const { currentuser } = useSelector((state) => state.user)
  return currentuser ? children : <Navigate to="/login" replace />
}



function AdminRoute({ children }) {
  const { currentuser } = useSelector((state) => state.user)
  if (!currentuser) return <Navigate to="/login" replace />
  const isAdmin = currentuser?.role === "admin" || currentuser?.isAdmin === true
  return isAdmin ? children : <Navigate to="/" replace />
}


function GuestRoute({ children }) {
  const { currentuser } = useSelector((state) => state.user)
  if (!currentuser) return children
  const isAdmin = currentuser?.role === "admin" || currentuser?.isAdmin === true
  return <Navigate to={isAdmin ? "/admindashboard" : "/user"} replace />
}



function App() {
  return (
    <Routes>

     
      <Route path='/' element={<Home />} />

      <Route path="/login"  element={<GuestRoute><LoginPage /></GuestRoute>} />
      <Route path="/signup" element={<GuestRoute><SignupPage /></GuestRoute>} />

      <Route path='/admindashboard' element={<AdminRoute><AdminLayout /></AdminRoute>}>
        <Route index element={<AdminDashboard />} />

        <Route path='adminprojects' element={<Projects />}>
          <Route index element={<Navigate to="projectlist" replace />} />
          <Route path='projectlist' element={<ProjectList />} />
        </Route>
        <Route path='addproject' element={<ProjectForms />} />
        <Route path="editproject/:id" element={<ProjectEditForms />} />

        <Route path='admintasks' element={<Tasks />}>
          <Route index element={<Navigate to="tasklist" replace />} />
          <Route path='tasklist' element={<TasksList />} />
          <Route path='addtask' element={<TaskForms />} />
          <Route path='edittask/:id' element={<TaskEditForm />} />
        </Route>

        <Route path='adminusers' element={<Users />}>
          <Route index element={<Navigate to="userlist" replace />} />
          <Route path='userlist' element={<UsersList />} />
          <Route path='adduser' element={<UsersForm />} />
          <Route path='edituser/:id' element={<UsersEditForm />} />
        </Route>
      </Route>

     
      <Route path='/user'        element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
      <Route path='/userproject' element={<PrivateRoute><UserProjects /></PrivateRoute>} />
      <Route path='/userlist'    element={<PrivateRoute><ClientUsers /></PrivateRoute>} />

      <Route path='/usertasklist' element={<PrivateRoute><Usertask /></PrivateRoute>}>
        <Route index element={<Navigate to="tasklist" replace />} />
        <Route path='tasklist' element={<UserTasksList />} />
      </Route>

    </Routes>
  )
}

export default App
