

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
  console.log(labels);
  for( var i = 0; i < labels.length; i++ ) {
     if (labels[i].htmlFor == idVal)
          return labels[i];
  }
}

function validateForm(){
    //alert("validating form");
    const myform = document.getElementById("scheduleForm");
    console.log(myform);
    let errorList = [];
    [...myform.elements].forEach(item => {
      if(item.hasAttribute('required')){
        const givenLabel = findLableForControl(item);
        const errorMessage = document.createElement("div");
        errorMessage.innerHTML= givenLabel.innerHTML + " needs to be filled";
        errorMessage.classList.add("errorMessage");
        item.after(errorMessage);
        errorList.push(item);
        // item.after(document.createElement("div", "Stephen"));
        // alert("Element is required for " + givenLabel.innerHTML);
      }
      console.log(item);
    });
  
    errorList[0].tabIndex = "-1"
    errorList[0].focus();
    const firslabel = findLableForControl(errorList[0]);
    firstlabel.ariaLive = "assertive";

    // let x = document.forms["callForm"]["fname"].value;
    // if (x == "") {
    //   alert("Name must be filled out");
    //   return false;
    // }
  
  // alert("Call was scheduled");

}






// knowledgeRunner()

