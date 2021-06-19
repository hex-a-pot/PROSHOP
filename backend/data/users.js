import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Sudhanshu Ranjan",
        email:"sudhansu204me@gmail.com",
        password: bcrypt.hashSync("123456",10),
        isAdmin:true
    
    },
    {
        name:"Shalini Ranjan",
        email:"shalini204me@gmail.com",
        password: bcrypt.hashSync("123456",10),
    
    },
    {
        name:"Rajesh Ranjan",
        email:"rajesh204me@gmail.com",
        password: bcrypt.hashSync("123456",10),
    
    },
    {
        name:"Usha Ranjan",
        email:"usha204me@gmail.com",
        password: bcrypt.hashSync("123456",10),
    
    }

]

export default users;