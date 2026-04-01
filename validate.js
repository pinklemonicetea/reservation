function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length != 13) {
    return false;
  } else {
	return true;
  }
}

function checkTicketNo() {
  let num = (document.getElementById("ticknum").value).trim();
  if (isNaN(num)) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();

    if(fname === "" || lname === ""){
        alert("Please fill in all required fields!");
        return false;
    }
}