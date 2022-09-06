import React, { useState, useEffect } from "react";
import Form from "./Form";
import axios from 'axios'
import {
  useNavigate,
  Routes,
  Route
} from "react-router-dom";

import Display from "./Display";
import EditGuest from "./EditForm";

const Main = () => {

  let navigate = useNavigate()
  
  const [guestForm, setGuestForm] = useState({
    first_name: "",
    last_name: "",
    food: [],
    time: null,
    coming: true
  })
  const [guestEdit, setGuestEdit] = useState({})
  const [guestList, setGuestList] = useState([]);
  let foodChoices = ['Steak and Cheese Quessadilla', 'Sausage Rolls', 'Meatballs', 'Potato Skins']

  useEffect(() => {
    getGuests();
  },[]);

  const handleChange = (e) => {

    setGuestForm({ ...guestForm, [e.target.name]: e.target.value });

    if (e.target.name === "time" && e.target.value === "Day") {
      setGuestForm({ ...guestForm, time: 0 })
    } else if (e.target.name ==="time" && e.target.value === "Night") {
      setGuestForm({ ...guestForm, time: 1 })

    }

   if(e.target.name === "coming"){ if ( e.target.value === "Yes") {
      setGuestForm({ ...guestForm, coming: true })
    } else if (e.target.value === "No") {
      setGuestForm({ ...guestForm, coming: false })
    }}

    if (e.target.name === "food") {
      if (e.target.checked) {
        setGuestForm({ ...guestForm, food: [...guestForm.food, e.target.value] })
      } else {
        let foodSelected = guestForm.food.filter((value) => value !== e.target.value)
        setGuestForm({
          ...guestForm, food: foodSelected
        });
      }
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if(guestForm.first_name === "" || guestForm.last_name === "" || guestForm.food === [] || guestForm.time === Number || guestForm.coming === Boolean){
      return alert("Fill up all the required places")
    } else{
      try {
        const savedGuest = await axios.post("http://localhost:4001/save_guests",
            guestForm,);
            getGuests();
            navigate('/display')

            setGuestForm({
              first_name: "",
              last_name: "",
              food: [],
              time: 0,
              coming: true
            })
            return savedGuest
            
          } catch (error) {
            console.log("error", error)
          }
        }
        
      };
      // console.log('guestForm', guestForm)
 
  const getGuests = async () => {
    await axios
      .get("http://localhost:4001/get_guestList")
      .then((response) => {
        const data = response.data;
        console.log('data', data)
        setGuestList(data);
      })
      .catch(() => {
      });
    };

    const deleteGuest = async (id) => {
     let res = await axios.delete(`http://localhost:4001/delete_guest/${id}`);
      // console.log('id', id)
      getGuests()
     return res.data
    }
    

    const handleEditGuest = async (id) => {
      let res = await axios.put(`http://localhost:4001/update_guest/${id}`);
      // console.log('id', id) 
     return res.data
    }

    
    const guestToEditUpdate = async (e) => {
      e.preventDefault();
      let res = await axios.put(`http://localhost:4001/update_guest/${guestEdit.id}`, guestEdit);
      // console.log('id', id)
     return res.data
    }

  return (

    <div>
      <Routes>
        <Route path="/" exact element={<Form handleChange={handleChange} handleSubmit={handleSubmit} foodChoices={foodChoices} />} />
        <Route path="/display" element={<Display guestList={guestList} getGuests={getGuests} deleteGuest={deleteGuest} handleEditGuest={handleEditGuest} guestToEditUpdate={guestToEditUpdate}/>} />
        <Route path="/edit" element={<EditGuest/>} />

      </Routes>
    </div>

  );
}

export default Main;