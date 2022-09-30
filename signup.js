let form=document.querySelector("form");
form.addEventListener("submit", myFunction);

function myFunction(event){
    event.preventDefault();

    let obj={
        name:document.querySelector("#Name").value,
        email:document.querySelector("#Email").value,
        password:document.querySelector("#Password").value
    }

    localStorage.setItem("details", JSON.stringify(obj));
    alert("Signed up Successfully")

    window.location.href="login.html"




}
