const { guestQuery } = require('./getGuestQueries.js');

const saveGuest = async (guestDetails) => {
    let { firstName,
        lastName,
        food,
        time,
        coming
    } = guestDetails
    try {
        let query = `INSERT INTO guest (first_name, last_name,food , day_or_night, coming) VALUES ($1,$2,$3,$4,$5) RETURNING first_name, last_name,food , day_or_night, coming`
        let parameters = [firstName,
            lastName,
            food,
            time,
            coming
            ];
        // console.log("parameters", parameters)
        return guestQuery(query, parameters)
    } catch (error) {
        console.log('error-saveGuest: ', error)
    }
};

const allGuest = async () => {
    let query = `SELECT * FROM guest`
    let allGuests = await guestQuery(query)
    return allGuests
}

const deleteGuest = async (id) => {
    let query = `DELETE FROM guest WHERE id = $1`
    let oneGuest = await guestQuery(query,[id])
    return oneGuest
}

const editGuest = async (id,data) => {
    const {lastName, firstName,food,time,coming}=data
    let query = `UPDATE guest SET  first_name=$1, last_name=$2, food=$3, day_or_night=$4, coming=$5 WHERE id = $6`
    let guestEdited = await guestQuery(query,[firstName,lastName,food,time,coming,id])
    return guestEdited
}

module.exports = {
 saveGuest,
 allGuest,
 deleteGuest,
 editGuest
}