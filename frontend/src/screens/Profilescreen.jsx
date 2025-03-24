import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../constants/utils.js';
import Projecthomescreen from './Projecthomescreen.jsx';
import Cookies from 'js-cookie';

const Profilescreen = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchUserProfile = async () => {
      const userInfo = Cookies.get('Token');
      if(userInfo) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo}`,
              withCredentials: true
            },
          };
          const { data } = await axios.get(`${baseURL}/api/users/profile`, config);
          setUser(data);
        } catch (error) {
          console.error(error);
        }
      }
    };



    fetchUserProfile();

  
  }, []);
  const handleLogout = async () => {
    const userInfo = Cookies.get('Token');
    if (userInfo) {
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
            withCredentials: true
          },
        };
        await axios.post('/api/users/logout', {}, config);
        
      } catch (error) {
        console.error(error);
      }
    }
    Cookies.remove('Token')
    navigate('/login');
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <button className='btn btn-primary' onClick={ handleLogout }>
      Logout
    </button>
    <a className="btn btn-primary"href="/dashboard">Dashboard</a>
    </div>
  );
};

export default Profilescreen;