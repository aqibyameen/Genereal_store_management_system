const firstname = document.querySelector("#fname");
const email= document.querySelector("#email");
const age = document.querySelector("#age");
const object=document.querySelector("#object");


const btn=document.querySelector("#submit");
const arrayObj=[];

let obj={
    firstName: '',
    email: '',
    age: '',
}
const myFunction =()=>{
    obj.firstName=firstname.value;
    obj.email=email.value;
    obj.age=age.value;
    object.innerHTML+=`
    
   <p> First Name: ${obj.firstName}</p><br>
    <p>Email: ${obj.email}</p><br>
    <p>Age: ${obj.age}</p><br>`
arrayObj.push(obj);
    console.log(obj);
}
btn.addEventListener("click", myFunction)
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
