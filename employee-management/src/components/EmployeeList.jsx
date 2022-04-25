import {useEffect} from "react"
import {useState} from "react"
import {axios} from "axios";
import {useParams} from "react-router-dom"


export const EmployeeList = () => {

    
    const {id } = useParams();
     
        const [employee , setEmployee]=useState({})
        useEffect(()=>{
        getData();
      
    },[])
    
    const getData = ()=>{
        axios.get(`http://localhost:8080/employee/${id}`)
        .then( ( data)=>{
         
          console.log(data.data);
          setEmployee(data.data);
        })
    }

    return (
      <div className="list_container">
        {/* On clicking this card anywhere, user goes to user details */}
        <div className="employee_card">
          <img className="employee_image" />
          <span className="employee_name"></span>
          <span className="employee_title"></span>
        </div>
      </div>
    );
  };