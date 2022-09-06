import React from 'react'
import EditForm from './EditForm'
import Navbar from './Navbar'

const Display = (props) => {
    const { guestList , deleteGuest, handleEdit} = props

    return (
        <div className='display'>
            <Navbar />
            {/* <EditForm /> */}

            <div>{guestList.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>First Name: { item.first_name}</li>
                        <li>Last Name: {item.last_name}</li>
                        <li>Coming: {item.coming === true ? "Yes" : "No"} </li>
                        <li>Time: {item.day_or_night !== null ? (item.day_or_night === "0" ? "Day" : "Night") : null}  </li>
                        {console.log('item.day_or_night', item.day_or_night)}
                        <li>FoodChoices :{item.food.map(item=> <ul>{item}</ul>)}</li>
                        <li><input type="submit" onClick={()=>deleteGuest(item.id)} value="delete"/></li>
                        <li><input type="submit" onclick={()=>handleEdit(item)} 
                        data-toggle="modal"
                        data-target="#myModal"
                        value="Edit"/></li>
                    </ul>
                )
            })}</div>
        </div>
    )
}

export default Display