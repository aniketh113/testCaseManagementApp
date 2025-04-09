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

    const subprojectsHandler = async () => {
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
    const submitHandler = async (e) => {
                e.preventDefault();
                try {
                    console.log({name,projectid})
                    await axios.post( `${baseURL}/api/project/createsubproject`, {name,projectid},
                      {
                        withCredentials:true
                      });
                    
                } catch (error) {
                  console.error(error);
                }
            };

useEffect(() => {
    subprojectsHandler();
  }, []);
    return (
    <div className='container'>
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
                            <a href="#" className="btn btn-primary">Go somewhere</a>
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