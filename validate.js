function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	
	let pattern = /^\d{13}$/;
  
	if (pattern.test(nid)) {
	  return true; 
	} else {
	  return false; 
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

function validateForm() {
	let fname = document.getElementById("fname").value.trim();
	let lname = document.getElementById("lname").value.trim();
	let nid = document.getElementById("nid").value.trim();
	let ticknum = document.getElementById("ticknum").value.trim();
  
	if (fname === "" || lname === "" || nid === "" || ticknum === "") {
	  alert("User จำเป็นต้องกรอกข้อมูลในทุก Fields");
	  return false;
	}
  
	if (!checkNID()) {
	  alert("National ID ต้องเป็นตัวเลข 13 หลักเท่านั้น และห้ามมีตัวอักษร!");
	  document.getElementById("nid").focus();
	  return false;
	}
  

	let total = priceCalculate(); 
	alert("Total price for this booking is " + total + " USD");
	
	return false;
  }