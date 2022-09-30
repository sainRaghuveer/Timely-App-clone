let form=document.querySelector("form");

form.addEventListener("submit", logFunction);

function logFunction(event){
    event.preventDefault();
    let newData={
        email:document.querySelector("#Email").value,
        password:document.querySelector("#Password").value
    }

    localStorage.setItem("myNewData",JSON.stringify(newData));

    let myEmail=JSON.parse(localStorage.getItem("details"))
    let eml=myEmail.email;
    let pass=myEmail.password;
    if(eml==newData.email&&pass==newData.password){
        alert("Hurray! You logged in successful")
        window.location.href="welcome.html"
    }else{
        alert("Incorrect credential")
       
    }
}