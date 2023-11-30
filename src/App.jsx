import { BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import LoginForm from './pages/login/LoginForm'
import UserListTable from './pages/listUser/UserListTable'
import PostUserForm from './pages/createUser/PostUserForm'
import Navbar from './components/Navbar'



function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/usuarios' element={<UserListTable/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/crear' element={<PostUserForm/>}/>
    </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
