const { getGuest } = require('../database/guestDatabase');


const guestQuery = async (insertQuery, parameters) => {
    const guest = await getGuest();
    try {
        res = await guest.query(insertQuery, parameters);
        return res.rows;
    } catch (e) {
        console.log(e)
    }
     await guest.release()
}


module.exports = {
    guestQuery
}