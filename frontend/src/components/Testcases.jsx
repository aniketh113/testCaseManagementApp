import {React , useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from '../constants/utils.js';
import { dateFormat } from "../utils/dateFormat.js";
import Navbar from "./Navbar.jsx";
import '../css/globalstyle.css'
import '../css/testcasescreen.css'
import { BsSuitcaseLg, BsSpeedometer2, BsPlusLg} from "react-icons/bs";

const Testcases = ()=>{
    const [testcases, setTestCases] = useState([])
    const [testcasename,setTestCaseName]=useState('')
    const [inputVisibilty,setInputVisibility]=useState('inputDisplay')
    const [addButtonVisibility, setAddButtonVisibility] = useState('')
    const [subProjectNameDisplay, setSubProjectName] = useState([])
    const {subprojectid} = useParams();
    const getTestcasesHandler = async ()=>{
        try {
            const testCasesR = await axios.get( `${baseURL}/api/project/gettestcases/${subprojectid}`,
               {
                 withCredentials:true
               });
                 setTestCases(testCasesR.data.testcases)
                 setSubProjectName(testCasesR.data.subProjectName)
         } catch (error) {
           console.error(error);
         }
    }
    const createTestCaseHandler = async ()=>{
  
                try {
                    const data = {
                      testcasename:testcasename,
                      subprojectid:subprojectid,
                    }
                    console.log(data)
                    await axios.post( `${baseURL}/api/project/createtestcase`, data,
                      {
                        withCredentials:true
                      });
                      getTestcasesHandler()
                      setAddButtonVisibility(' ')
                      setInputVisibility('inputDisplay')
                      console.log("Creating a subproject")
                } catch (error) {
                  console.error(error);
                }
    }
    const inputTestCaseNameHandler = async()=>{
      if(inputVisibilty=='inputDisplay' && addButtonVisibility==''){
        setInputVisibility(' ');
        setAddButtonVisibility('addButtonDisplay')
      }
      else{
        setInputVisibility('inputDisplay')
        setAddButtonVisibility('')
      }
      
    }
    useEffect(()=>{
        getTestcasesHandler()
    },[])
    return(
        <div className='container-fluid m-0 p-0' >
          <Navbar/>
          <div className='row'>
              <div className='col-2 p-0'>
                  <div className="d-flex  flex-column flex-shrink-0 bg-light">
                    <ul className="nav justify-content-center nav-pills p-3 flex-column mb-auto">
                      <li className='nav-item'>
                        <a href="#" className="text-decoration-none link-dark ">
                          <BsSuitcaseLg className="me-1 ms-2"/>
                          {subProjectNameDisplay}
                        </a>
                    <hr className='p-0' />
                      </li>
                      <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                        <BsSuitcaseLg className="me-1 ms-2"/>
                          Projects
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark">
                        <BsSpeedometer2 className="me-1 ms-2"/>
                          Dashboard
                        </a>
                      </li>
                      <li>
                        <a href="#" className="nav-link link-dark">
                          <svg className="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
                          Sub Projects
                        </a>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className='col-10 p-0 testCaseTable p-1 bg-light'>
                <div className='content'>
                    <div className='content-header border-bottom'>
                      <h4>Test Cases</h4>
                    </div>
                    <div className='content-inner'>
                      <table className='table table-bordered-rounded '>
                          <thead className='sticky-top'>
                              <tr>
                                <th className='table-info' scope='col'>#</th>
                                <th className='table-info' scope='col'>Name</th>
                                <th className='table-info' scope='col'>Created At</th>
                                <th className='table-info' scope='col'>Updated At</th>
                              </tr>                      
                          </thead>
                          <tbody>
                            {
                              testcases.map((project, index) =>
                              <tr className="tableRow" key={index}>
                              <th scope='row'>{index+1}</th>
                              <td>{project.testcasename}</td>
                              <td>{dateFormat(project.createdAt)}</td>
                              <td>{dateFormat(project.updatedAt)}</td>
                              </tr>)
                            }
                            </tbody>                            
                      </table>
                      <div className="content-add">
                        <div className={`content-add-button ${addButtonVisibility}`} >
                            <a href='#' onClick={()=>inputTestCaseNameHandler()} className='link-primary'>Add Case</a> | <a href='#' className="link-primary">Add Subsection</a>
                        </div>
                        <form onSubmit>        
                        <div className='input-group'>
                        <input type='text' className={`${inputVisibilty}`}  aria-describedby="button-addon2" value={testcasename} onChange={(e) => setTestCaseName(e.target.value)}/>
                        <button onClick={()=>{createTestCaseHandler()}} className={`btn btn-secondary  ${inputVisibilty}`} id="button-addon2">{<BsPlusLg/>}</button>
                        </div>
                        </form>
                        
                      </div>        
                    </div>
                </div>
                
              </div>
          </div>
        </div>
    )

}

export default Testcases