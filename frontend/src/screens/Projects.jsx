import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../constants/utils.js';
import Cookies from 'js-cookie';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [name,setName] = useState('')
  const navigate = useNavigate();  
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        console.log("inside")
        const data= await axios.post( `${baseURL}/api/project/createproject`, {name},{
        withCredentials:true
      });
      console.log(data)
      navigate('/projects');
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const fetchUserProjects = async () => {
      const userInfo = Cookies.get('Token');
      if(userInfo) {
        try {
          const config = {
            headers: {
              Authorization: `Bearer ${userInfo}`,
              withCredentials: true
            },
          };
          const { data } = await axios.get(`${baseURL}/api/project/getprojects`, config);
          setProjects(data.projects);
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchUserProjects();
  }, []);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {
            projects.map((project, index) =>
            <li key={index}>{project}</li>
        )}
      </ul>
    </div>
  );
};

export default Projects;