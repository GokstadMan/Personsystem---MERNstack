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
      {listOfPersons.map((person)=>{
        return(
          <div>
            <h1>Firstname:{person.firstname}</h1>
            <h1>Lastname:{person.lastname}</h1>
            <p>Age:{person.age}</p>
            <p>City:{person.city_place}</p>
            <p>Email:{person.email}</p>
            <p>Occupation:{person.job}</p>
            <p>Hobbies:{person.hobbies}</p>
          </div>
        )
      })}
      <div>
        <input type="text" placeholder="Firstname: " onChange={(e)=>{setFirstname(e.target.value)}}/>
        <input type="text" placeholder="Lastname: " onChange={(e)=>{setLastname(e.target.value)}}/>
        <input type="number" placeholder="Age: " onChange={(e)=>{setAge(e.target.value)}}/>
        <input type="text" placeholder="City/Place: " onChange={(e)=>{setCity_place(e.target.value)}}/>
        <input type="email" placeholder="Email: " onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="text" placeholder="Occupation: " onChange={(e)=>{setJob(e.target.value)}}/>
        <input type="text" placeholder="Hobbies: " onChange={(e)=>{setHobbies(e.target.value)}}/>
        <button onClick={createPerson}>Create New Person</button>
      </div>
    </div>
    
  );
}

export default App;
