import {users, quotes} from "./fakeDB.js"
import {randomBytes} from "crypto"





const resolvers ={
    Query:{
        users:()=>{
            return  users

        },
        user:(_,{id})=>{
           return users.find(user=>user.id == id)

        },
        quotes:()=>{
            return quotes
            },
        iquote:(_,{by})=>{
            return quotes.filter(quote=>quote.by == by)
        }    
},
    User:{
      quotes:(ur)=>quotes.filter(quote=>quote.by == ur.id )
    },

    Mutation:{
        createNewUser:(_,{firstName, lastName, age})=>{
            const id =  randomBytes(16).toString('hex')
            users.push({
                id,
                firstName,
                lastName,
                age
            })
              return users.find(user=>user.id == id)
        }
    }
}



export default resolvers