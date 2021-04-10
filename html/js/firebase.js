//ref is a function by using ref() we are referencing our database to the firebase project database.
//set is a function. Its just like json format .Name on left side is what we store in our firebase database and name on right side is the value we store it on "Name variable" 


let id=0,pass,email, age="", name="", address="";
function set(e)
{
    
    id = id+1;
    console.log(id);
    
    db.ref("users/"+email.split('@')[0]).set({
        Email:email,
        Password:pass,
        Name: name,
        Age: age,
        Address: address
    });
    window.location.href="../html/userDets.html";
}
const get = document.getElementById("get").addEventListener('click',(e)=>
{e.preventDefault();
    
    email =  document.getElementById("email").value;
    pass = document.getElementById("password").value;

    db.ref("users/" + email.split('@')[0]).on("value",snapshot=>{
        
        if(snapshot.val()===null)
        {
            set(e);

        }
        else{
            //redirect since user exists
        }
    });
    
})
const update = document.getElementById("update").addEventListener('click',(e)=>
{
    //e.stopImmediatePropagation()
    
    try{
        name = document.getElementById("name").value;
    age =  document.getElementById("age").value;
    address = document.getElementById("address").value;
    console.log("ppo");
    console.log(email);
    db.ref("users/" + email.split('@')[0]).update({
        
        
        Name: name,
        Age: age,
        Address: address
    });  }
    catch(ex)
    {
        console.log("error!")
    }  
    e.preventDefault();
})  
/*const update = document.getElementById("update").addEventListener('click',()=>
{
    id = document.getElementById("id").value;
    name =  document.getElementById("name").value;
    email = document.getElementById("email").value;
    db.ref("users/" + id).update({
        Name:name,
        Email:email
    });    
}) 
//get function is used to fech data from database
const get = document.getElementById("get").addEventListener('click',()=>
{
    id = document.getElementById("id").value;

    db.ref("users/" + id).on("value",snapshot=>{
        document.getElementById("name").value = snapshot.val().Name;
        document.getElementById("email").value = snapshot.val().Email;
    });
}) 
const del = document.getElementById("delete").addEventListener('click',()=>
{
    id = document.getElementById("id").value;
    db.ref("users/" + id).remove();
}) 
const add = document.getElementById("add").addEventListener('click',(e)=>
{
    e.preventDefault();
    id = id+1;
    console.log(id);
    name =  document.getElementById("email").value;
    email = document.getElementById("password").value;
    db.ref("users/"+id).set({
        Name:name,
        Email:email
    });
}) */