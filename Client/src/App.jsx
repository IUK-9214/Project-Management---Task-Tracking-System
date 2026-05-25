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



function App() {
  return (
    <>


    <Routes>



      <Route path ='/' element={<Home/>}/>
      <Route path= "/login" element ={<LoginPage/>} />
      <Route path= "/signup" element ={<SignupPage/>} />

      <Route path='/admindashboard' element={<AdminLayout/>}>
      <Route index element={<AdminDashboard/>} />

      <Route path='adminprojects' element={<Projects/>}>
      <Route index element={<Navigate to="projectlist" replace />} />
      <Route path='projectlist' element={<ProjectList/>}/>
      </Route>
      <Route path='addproject' element={<ProjectForms/>}/>
      <Route path="editproject/:id" element={<ProjectEditForms />} />


      <Route path='admintasks' element={<Tasks/>}>
      <Route index element={<Navigate to="tasklist" replace />} />
      <Route path='tasklist' element={<TasksList/>}/>
      <Route path='addtask' element={<TaskForms/>}/>
      <Route path='edittask/:id' element={<TaskEditForm/>}/>
      </Route>

      <Route path='adminusers' element={<Users/>}>
      <Route index element={<Navigate to="userlist" replace/>}/>
      <Route path='userlist' element={<UsersList/>}/>
      <Route path='adduser' element={<UsersForm/>}/>
      <Route path='edituser/:id' element={<UsersEditForm/>}/>
      </Route>
      </Route>

      <Route path='/user' element={<UserDashboard/>}>
       
        
      </Route>
       <Route path='/usertasklist' element={<Usertask/>}>
          <Route index element={<Navigate to="tasklist" replace />} />
          <Route path='tasklist' element={<UserTasksList/>}/>
        </Route>
      <Route path='/userlist' element={<ClientUsers/>}/>
        <Route path='/userproject' element={<UserProjects/>}/>
      

      

    </Routes>

    
    </>
  )
}

export default App