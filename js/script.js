// function validates the given email id
function validateemail(){
    var myEmail=document.getElementById(email).value;
    var format=/.+@.+/;
    if(!myEmail.match(format)){
        alert("Please enter a valid email id");
    }
}
const name=document.getElementById('name');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cnPassword=document.getElementById('cn_password');
const form=document.getElementById('form');
const errorElement=document.getElementById('error');
const phone= document.getElementById('phone');

if(phone.value.length<10){
    alert("phone number must be 10 characters");
}
form.addEventListener('submit',(e)=>{
    let messages=[]
    if(name.value===''||name.value==null){
        messages.push('Name is required')
    }
    if(password.value.length<=6){
        messages.push('Password must be between 6 and 20 characters')
    }
    if(password.value.length>=20){
        messages.push('Password must be less than 20 characters')
    }
    if(password.value==='password'){
        messages.push('password can not be password')
    }
    if(messages.length>0){
        e.preventDefault()
        errorElement.innerText=messages.join(',') 
    }
})