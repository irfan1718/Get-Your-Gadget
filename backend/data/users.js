import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@irfftech.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
},

{
    name: 'Muhammed',
    email: 'muhammed@gmail.com',
    password: bcrypt.hashSync('123456', 10),
},

{
    name: 'Aysha',
    email:'aysha@gmail.com',
    password: bcrypt.hashSync('123456', 10),
},


]

export default users