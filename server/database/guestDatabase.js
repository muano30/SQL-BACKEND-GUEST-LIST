const {Pool} = require('pg') 

const pool = new Pool({
    user: 'muano',
    host: 'localhost',
    database: "guestlistdatabase",
    password: 'kevin30',
    port: 5432,
}) 

const getGuest = async () => {
    const client = await pool.connect()
return client
}

module.exports = {
    getGuest
}