
const {
    saveGuest,
    allGuest,
    deleteGuest,
    editGuest,

} = require('../guestQueries/guestQueries');


const guestRoutes = (app) => {

    
    app.post('/save_guests' , async (req , res) => {
        try {
        let guest = req.body
        
        // console.log('guest', guest)
        if(guest.first_name === "" || guest.last_name === ""  || guest.food === [] || guest.time === Number || guest.coming === Boolean){
            res.send(400)
        }
        
            const guestSaved = await saveGuest(guest) 
            // console.log('guestSaved', guestSaved)

            res.send({message:"Details succesfully saved", guestSaved})
            
        
    
} catch (error) {
    console.error("post error",error)
    res.send({message:"post error"}).status(401)
}

    })

    app.get('/get_guestList', async (req,res)=>{
        try {
            const guestList = await allGuest();  
        res.send(guestList).status(200);
        } catch (error) {
            res.status(404).send(error);
        }
    })


    app.delete('/delete_guest/:id' , async (req , res)  =>  {
        try{
            const id = req.params.id                    
            const guestToDelete = await deleteGuest(id)
            res.send({message: "Successfully deleted", guestToDelete})
        }catch(err){
            console.log(err);
            res.sendStatus(501)
        }
    })

    app.put('/update_guest/:id' , async (req ,res) =>  {
        const id = req.params.id
        const updateData = req.body
        try{
            const foundGuest = await editGuest(id,updateData)
            res.send({message: "Update Succesfully", foundGuest})
        }catch(err){
            console.log(err)
        }
    } )

}

module.exports = {
guestRoutes
}