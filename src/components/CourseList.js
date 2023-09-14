import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../fcc_primary_large.svg";
import toast from 'react-hot-toast'; // Import toast

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/v1/courses')
      .then((response) => {
        const fetchedCourses = response.data.data;
        setCourses(fetchedCourses);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleLogout = () => {
    // Add your logout logic here (e.g., clearing user data, redirecting to the login page)
    // For now, we'll just redirect to the login page and show a toast
    localStorage.removeItem("signin-token");
    navigate('/');
    toast.success('Logout successful');
    window.location.reload();

    // Show a toast notification for logout success
  };

  return (
    <div>
      <header className="header">
        <div className="header-left">
          <div className="search-bar">
            <input type="text" placeholder="Search 9000+ tutorials" />
          </div>
        </div>
        <div className="header-center">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="header-right">
          <button className="signin-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </header>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-item" key={index}>
            <img src={course.icon} alt={course.title} className="course-icon" />
            <p className="course-title">{course.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
