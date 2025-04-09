import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../constants/utils.js';
import Cookies from 'js-cookie';
import { BsPlusLg, BsFillTrash3Fill } from "react-icons/bs";
import '../css/globalstyle.css';
import '../css/projectscreen.css';
import Subprojects from './subprojects.jsx';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const [name,setName] = useState('') 
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
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
        await axios.post( `${baseURL}/api/project/createproject`, {name},
          {
            withCredentials:true
          });
        await fetchUserProjects();
    } catch (error) {
      console.error(error);
    }
  };
  const deleteHandler = async (projectId) => {
    try {
        await axios.delete( `${baseURL}/api/project/deleteproject/${projectId}`,
          {
            withCredentials:true
          });
        setProjects(projects.filter(project => project._id !== projectId));
        fetchUserProjects();
    } catch (error) {
      console.error(error);
    }
  };
  const subprojectsHandler = async (projectId) => {
          navigate(`/subprojects/${projectId}`)
        }; 
  useEffect(() => {
    fetchUserProjects();
  }, []);
  return (
    <div>
      <div className='container'>
          <div className='row'>
            <h2 className='fontStyle ps-0'>Project List</h2>
          </div>
          <div className='row'>
            <div className='col-3 ps-0'>
              <div className='input-group'>
                <input  className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={submitHandler}  className="input-group-text">{<BsPlusLg/>}</button>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='table-responsive p-0'>
            <table className='table table-bordered-rounded'>
              <thead className='sticky-top'>
                <tr>
                  <th className='table-info' scope='col'>#</th>
                  <th className='table-info' scope='col'>Name</th>
                  <th className='table-info' scope='col'>Created At</th>
                  <th className='table-info' scope='col'>Updated At</th>
                  <th className='table-info'></th>
                </tr>
              </thead>
              <tbody>
                  {
                  projects.map((project, index) =>
                    <tr className="tableRow" key={index}>
                    <th scope='row'>{index+1}</th>
                    <td><a  onClick={ ()=>subprojectsHandler(project.id)}>{project.name}</a></td>
                    <td>{project.createdAt}</td>
                    <td>{project.updatedAt}</td>
                    <td><span><button onClick={()=>deleteHandler(project.id)}  className="input-group-text">{<BsFillTrash3Fill/>}</button></span></td>
                  </tr>
                )}
              </tbody>
            </table>
            </div>
          </div>
      </div>   
    </div>
  );
};

export default Projects;