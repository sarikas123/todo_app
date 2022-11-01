window.addEventListener("click", () => {
  document
    .querySelector("#signup-submit")
    .addEventListener("click", handleSubmit);
});

function handleSubmit(e) {
  e.preventDefault();
  const userName = document.querySelector("exampleInputEmail1").value;
  const Password = document.querySelector("exampleInputPassword1").value;

  if(validateCrendentials(userName,Password)){
    createUser(userName,Password)
  }
  else{
    document.querySelector("LiveAlertPlaceholder").innerHTML = `<div class = "alert for wrong crendentials">`


    }
  
  console.log("submit action called",userName,Password);
}
function createUser(userName,Password){
    localStorage.setItem(userName,Password);
    window.location('./app.html')
}

function validateCrendentials(userName,Password){
    if(! userName.length >4 && Password.length >4){
        return true;
    }
    else{
        return false;
    }
}

