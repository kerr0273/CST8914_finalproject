

function showLightbox(){
  document.getElementById("lightboxmodal").style.display = "block";
  //document.getElementById("dialoglabel").focus();
  document.getElementById("dialoglabel").tabIndex = "-1";
  //document.getElementById("dialoglabel").trigger('focus');
  document.getElementById("dialoglabel").setAttribute("aria-hidden","false");

}


// Close the Modal
function closeModal() {
  document.getElementById("lightboxmodal").style.display = "none";
}

function toggleSwitch(thingy){
  if(thingy.checked){
    console.log("Switch is ON");
  } else {
    console.log("Switch is OFF");
  }
}
function findLableForControl(el) {
  var idVal = el.id;
  labels = document.getElementsByTagName('label');
  for( var i = 0; i < labels.length; i++ ) {
     if (labels[i].htmlFor == idVal)
          return labels[i];
  }
}
function removeErrorMessages(){
    //alert("validating form");
    const errorElements = document.getElementsByClassName('errorMessage');    
    for(let i=0; i < errorElements.length; i++){
      console.log(errorElements[i]);
      errorElements[i].innerHTML = "Stephen";
      errorElements[i].innerText = "Stephen 39";
      errorElements[i].parentNode.removeChild(errorElements[i]);
    }
    alert("errorMessages removed");
}
function validateForm(){
    removeErrorMessages();

    validateFieldset("talkAboutGroup");

    const myform = document.getElementById("scheduleForm");
    
    let errorList = [];

    [...myform.elements].forEach(item => {

      if(item.hasAttribute('required')){
        const givenLabel = findLableForControl(item);
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML= givenLabel.innerHTML + " needs to be filled";
        errorMessage.classList.add("errorMessage");
        item.after(errorMessage);
        errorList.push(item);
      }
    });
  
    errorList[0].tabIndex = "-1"
    errorList[0].focus();
    const firstlabel = findLableForControl(errorList[0]);
    firstlabel.ariaLive = "assertive";

    // let x = document.forms["callForm"]["fname"].value;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // }
  
  // alert("Call was scheduled");

}
function validateFieldset(id){ 
    let searchString = '#' + id + ' input';
    let fieldstuff = document.forms['scheduleForm'].querySelectorAll(searchString);
    let grouprequired = false;
    let hasChecked = false;
   

    for(let i=0; i < fieldstuff.length; i++){
      if(fieldstuff[i].hasAttribute('required') && ! fieldstuff[i].hidden == true ){
        console.log("grouprequired set to true");
        console.log(fieldstuff[i]);
         grouprequired = true;
      }
      if(fieldstuff[i].checked == true){
        console.log("true");
        console.log(fieldstuff[i]);
        hasChecked = true;
      }
    }

    if(!grouprequired){
      return true;
    }
    if(!grouprequired && hasCheck){
      return true;
    }
    console.log(grouprequired);
    console.log(hasCheck);
    searchString = '#' + id + ' legend';
    fieldstuff = document.forms['scheduleForm'].querySelectorAll(searchString);
    // console.log(fieldstuff);
    const errorMessage = document.createElement("div");
    errorMessage.innerHTML= '<i class="fa fa-exclamation-triangle" aria-hidden="true"></i>' + fieldstuff[0].innerHTML + " needs at least one choice";
    errorMessage.classList.add("errorMessage");
    fieldstuff[0].after(errorMessage);

}    

function togglePleaseTellUs(){
  let showhidediv = document.getElementById("pleaseTellUs");
  console.log(showhidediv)
  if(document.getElementById("check_invite").checked == true){
    showhidediv.hidden = false;
  } else { 
    showhidediv.hidden = true;
  }
}


// knowledgeRunner()

