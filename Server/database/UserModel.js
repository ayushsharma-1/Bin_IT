const mongoose=require('mongoose');

const userModel=mongoose.Schema({
name:{type:String,required:true},
email:{type:String,required:true,unique:true},
password:{type:String,required:true},
pic:{
    type:String,
    default:'https://imgs.search.brave.com/fGoU6LA_U7WLYtYpQnEIqwXRPpIAFICZzlY5CgctvGc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aWNvbm5pbmphLmNv/bS9maWxlcy82NzQv/NzEwLzQxOS9hbm9u/eW1vdXMtaWNvbi5w/bmc'}, 
},{
    timestamps:true,
})

userModel.methods.matchPassword=async function(enterPassword){
    return enterPassword.localeCompare(this.password)==0;
}
const User=mongoose.model('User',userModel);

module.exports=User;
