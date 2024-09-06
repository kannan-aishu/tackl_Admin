
import Sign_in from './Components/Sign_in/Sign_in';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Forget_Password from './Components/Forget_Password/Forget_Password';
import Reset_password from './Components/Reset_password/Reset_password';
import Navbar from './Components/Navbar/Navbar';
import Banner_management from './Components/Banner-management/Banner_management';
import Dashboard from './Components/Dashboard/Dashboard';
import Doubt from './Components/Doubt/Doubt';

import Student_management from './Components/Student_management/Student_management';
import Settings from './Components/Settings/Settings';
import Syllabus_folder from './Components/Syllabus_folder/Syllabus_folder';
import Question_Management from './Components/Question_Management/Question_Management';





function App() {
  return (
    <div className="App bg-[#dfd7d7]">
      <BrowserRouter >
      <div className='flex'>
      <Navbar/>
     
      <Routes>
        <Route path='/student-management' element={<Student_management/>}/>
        <Route path='/sign_in' element={<Sign_in/>}/>
        <Route path='/banner-management' element={<Banner_management/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/doubt-management' element={<Doubt/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='/syllabus-folder' element={<Syllabus_folder/>}/>
        <Route path='/question-management' element={<Question_Management/>}/>
       
      </Routes>

      </div>
     

      </BrowserRouter>
    </div>
  );
}

export default App;
