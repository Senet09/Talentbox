import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import OtherHeader from './components/OtherHeader'
import CourseList from './components/CourseList';
import SignUp from './components/SignUp';


function App() {

  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseClick = (courseId) => {
    setSelectedCourse(courseId);
  };



  return (
    <div className='relative pt-24 min-h-screen'>
    

      <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signin" element={<OtherHeader />} />
     </Routes>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/course"    element={<CourseList onCourseClick={handleCourseClick} />}/>
          <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
