export default{
    async setUsers(context,payload){
        const token="SpjcYz8xQyY7w9Jz-DRU";
        const userdata={
          token: "SpjcYz8xQyY7w9Jz-DRU",
email: payload.email,
password:payload.password,


        }
        const response= await fetch(`https://webpont-be896-default-rtdb.firebaseio.com/${token}.json`,{
            method:'PUT',
            body:
                JSON.stringify(userdata)
            })

           
            if(!response.ok){
              console.log("")
            }

            
        
context.commit('setUsers',{
    ...userdata, token:token
})
    }
,

async loadUsers(context) {
    const response=await fetch(`https://webpont-be896-default-rtdb.firebaseio.com/users.json`
    )
const responseData=await response.json();
if(!response.ok){
const error=new Error('Nincs iylen');
throw error
}
const users=[]
for(const key in responseData) {
const user ={
    token:key,
    email: responseData[key].email,
message:responseData[key].message,

}
users.push(user)
}
context.commit("setUsers",users)
}


}
