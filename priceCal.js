function priceCalculate() {
  let ticknum = parseInt(document.getElementById("ticknum").value.trim());
  
  let eventId = document.getElementById("event").value;
  
  let price = 0;

  if (eventId == "1") price = 91.25;
  else if (eventId == "2") price = 79.88;
  else if (eventId == "3") price = 83.12;
  else if (eventId == "4") price = 100.00;
  
  let total = price * ticknum;
  
  return total.toFixed(2);
}


