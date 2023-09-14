import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../fcc_primary_large.svg";
import toast from 'react-hot-toast';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://ec2-13-200-110-133.ap-south-1.compute.amazonaws.com:8000/api/v1/courses')
      .then((response) => {
        const fetchedCourses = response.data.data;
        setCourses(fetchedCourses);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("signin-token");
    navigate('/');
    toast.success('Logout successful');
    window.location.reload();

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
