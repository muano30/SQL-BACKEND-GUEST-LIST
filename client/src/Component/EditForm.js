// import React from 'react'

// const EditForm = (props) => {

//     const {foodChoices, guestToEditUdate, handleEditGuest } = props
//     const { first_name, last_name } = guestToEditUdate

//     return (
//         <div>
//             <div class="modal" id="modal">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h4 class="modal-title">Edit Guest</h4></div>
//                         <div class="modal-body">
//                             <form onSubmit={handleEditGuest}>

//                                 <div class="form-group">
//                                     <label>First Name: </label>
//                                     <input type="text"
//                                         placeholder='First Name'
//                                         onChange={handleChange}
//                                         name="first_name"
//                                         value={first_name}
//                                         className="form-control"
//                                     />
//                                 </div >
//                                 <div class="form-group">
//                                     <label>Last Name: </label>

//                                     <input type="text"
//                                         placeholder='Last Name'
//                                         onChange={handleChange}
//                                         name="last_name"
//                                         value={last_name}
//                                         className="form-control"

//                                     />
//                                 </div>

//                                 <div>

//                                     <div class="form-check">
//                                         <label class="form-check-label" for="flexRadioDefault2">Food:</label>

//                                     </div>
//                                     {foodChoices.map((choice) => (
//                                         <div class="form-check">
//                                             <input class="form-check-input"
//                                                 name="food"
//                                                 onChange={(e) => handleChange(e)} type="checkbox" value={choice} />
//                                             <span class="form-check-label" for="flexRadioDefault2" >{choice}</span>
//                                         </div>
//                                     ))}

//                                 </div>

//                                 <div>
//                                     <div class="form-check">
//                                         <label class="form-check-label" for="flexRadioDefault2">Time:</label>

//                                     </div>

//                                     <div class="form-check">
//                                         <input class="form-check-input"
//                                             type="radio"
//                                             name="time"
//                                             onChange={(e) => handleChange(e)}
//                                             value="Day" />

//                                         <label class="form-check-label" for="flexRadioDefault1">
//                                             Day
//                                         </label>
//                                     </div>

//                                     <div class="form-check">
//                                         <input class="form-check-input"
//                                             type="radio"
//                                             onChange={(e) => handleChange(e)}
//                                             name="time"
//                                             value="Night"
//                                         />

//                                         <label class="form-check-label" for="flexRadioDefault2">
//                                             Night
//                                         </label>
//                                     </div>

//                                     <div class="form-check">
//                                         <label class="form-check-label" for="flexRadioDefault2">Are you attending:</label>
//                                     </div>

//                                     <div class="form-check">
//                                         <input class="form-check-input"
//                                             type="radio"
//                                             name="coming"
//                                             onChange={(e) => handleChange(e)}
//                                             value="Yes" />

//                                         <label class="form-check-label" for="flexRadioDefault1">
//                                             Yes
//                                         </label>
//                                     </div>

//                                     <div class="form-check">
//                                         <input class="form-check-input"
//                                             type="radio" name="coming"
//                                             onChange={(e) => handleChange(e)}
//                                             value="No" />

//                                         <label class="form-check-label" for="flexRadioDefault2">
//                                             No
//                                         </label>
//                                     </div>
//                                 </div>

//                                 <div className='submit-button'>

//                                     <button type="submit" class='btn btn-outline-success' >Submit</button>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     );
// }

// export default EditForm