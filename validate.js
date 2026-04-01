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
	let num = document.getElementById("ticknum").value.trim();
	
	if (num === "" || isNaN(num)) return false;
	let n = parseInt(num);
	return n >= 1 && n <= 5;
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

	if (!checkTicketNo()) {
		alert("จำนวนตั๋วต้องเป็น 1-5 เท่านั้น!");
		document.getElementById("ticknum").focus();
		return false;
	  }
  

	let total = priceCalculate(); 
	alert("Total price for this booking is " + total + " USD");
	
	return false;
  }