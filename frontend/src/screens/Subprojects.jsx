import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { baseURL } from '../constants/utils.js';
import { BsPlusLg, BsFillTrash3Fill } from "react-icons/bs";
import '../css/globalstyle.css';
import '../css/projectscreen.css';
import { useParams } from 'react-router-dom';
  
const Subprojects = ()=>{
    const [inSubProjects,setInSubProjects] =useState([]) 
    const [name,setName]=useState('')
    const {projectid} = useParams();
    // this function is getting the projects as we land on page, handled in useEffect.
    const getsubprojectsHandler = async () => {
              try {
                 const subProjects = await axios.get( `${baseURL}/api/project/getsubprojects/${projectid}`,
                    {
                      withCredentials:true
                    });
                    setInSubProjects(subProjects.data.subprojects)
                    console.log(subProjects.data.subprojects)
              } catch (error) {
                console.error(error);
              }
            }; 
    // this function is submiting the subproject created.
    const submitHandler = async (e) => {
                e.preventDefault();
                try {
                    const data = {
                      name:name,
                      projectId:projectid 
                    }
                    console.log(data)
                    await axios.post( `${baseURL}/api/project/createsubproject`, data,
                      {
                        withCredentials:true
                      });
                      getsubprojectsHandler();
                      console.log("Creating a subproject")
                } catch (error) {
                  console.error(error);
                }
            };
    // this function is deleting the subproject selected.
    const deleteHandler = async (projectId) => {
              try {
                  await axios.delete( `${baseURL}/api/project/deletesubproject/${projectId}`,
                    {
                      withCredentials:true
                    });
                  setInSubProjects(inSubProjects.filter(project => project._id !== projectId));
                  getsubprojectsHandler();
              } catch (error) {
                console.error(error);
              }
            };         

useEffect(() => {
    getsubprojectsHandler();
  }, []);
    return (
    <div className='container'>
        <div className='row'>
          <div className='col ps-0'>
              <h2>Sub Projects</h2>
          </div>
        </div>
        <div className='row'>
            <div className='col-3 ps-0'>
                <div className='input-group'>
                    <input  className='form-control' type='text' value={name} onChange={(e) => setName(e.target.value)}/>
                    <button onClick={submitHandler}  className="input-group-text">{<BsPlusLg/>}</button>
                </div>      
            </div>        
        </div>
        <div className='row gx-3'>  
            {
            inSubProjects.map((project, index) =>
                <div className='col ps-0'>
                            <div className="card mt-3" key={index+1}>
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <div className="card-body">
                            <h5 className="card-title"><a>{project.name}</a></h5>
                            <button className="input-group-text" onClick={()=>{deleteHandler(project.id)}}>{<BsFillTrash3Fill/>}</button>
                            <a href="#" className="btn btn-primary">Go</a>
                            </div>
                            </div>
                </div>
            )
         }
            
        </div>
    </div>
    )
}

export default Subprojects;