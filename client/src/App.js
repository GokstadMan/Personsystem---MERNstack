import axios from "axios";
import { useState, useEffect } from "react";

function App() {

  const[listOfPersons, setListOfPersons] = useState([]);
  const[firstname,setFirstname] = useState("");
  const[lastname,setLastname] = useState("");
  const[age,setAge] = useState(0);
  const[city_place,setCity_place] = useState("");
  const[email,setEmail] = useState("");
  const[job,setJob] = useState("");
  const[hobbies,setHobbies] = useState("");

  const createPerson = ()=>{
    axios.post("http://localhost:8000/add-people",{
      firstname,
      lastname,
      age,
      city_place,
      email,
      job,
      hobbies
    }).then((response)=>{
      setListOfPersons([...listOfPersons, {
        firstname,
        lastname,
        age,
        city_place,
        email,
        job,
        hobbies
      },]);
    })
  } 

  useEffect(()=>{
    axios.get("http://localhost:8000/get-people").then((response)=>{
      setListOfPersons(response.data)
    });
  },[]);

  return (
    <div>
      <div className="top-0 left-0 right-0 fixed text-center">
        <h1 className="text-4xl text-white text-center font-bold bg-gray-800 p-4">PERSONDATABASE</h1>
        <input type="text" placeholder="Firstname: " onChange={(e)=>{setFirstname(e.target.value)}}/>
        <input type="text" placeholder="Lastname: " onChange={(e)=>{setLastname(e.target.value)}}/>
        <input type="number" placeholder="Age: " onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="text" placeholder="City/Place: " onChange={(e)=>{setCity_place(e.target.value)}}/>
        <input type="email" placeholder="Email: " onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="Occupation: " onChange={(e)=>{setJob(e.target.value)}}/>
        <input type="text" placeholder="Hobbies: " onChange={(e)=>{setHobbies(e.target.value)}}/>
        <div className="text-center mt-4">
          <button className="bg-rose-500 text-white rounded-xl hover:bg-rose-700 hover:cursor p-1" onClick={createPerson}>Create New Person</button>
          
        </div>
      </div>
      {listOfPersons.map((person)=>{
        return(
          <div className="text-sm border-2 mt-36">
            <div className="grid grid-cols-7 gap-2">
              <h1><b>Firstname:</b>{person.firstname}</h1>
              <h1><b>Lastname:</b>{person.lastname}</h1>
              <p><b>Age:</b>{person.age}</p>
              <p><b>City:</b>{person.city_place}</p>
              <p><b>Email:</b>{person.email}</p>
              <p><b>Occupation:</b>{person.job}</p>
              <p><b>Hobbies:</b>{person.hobbies}</p>
            </div>
          </div>
          
        )
      })}
    </div>
    
  );
}

export default App;
