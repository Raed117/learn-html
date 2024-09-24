
function getTicketPrice(age) {
    if (age <= 12) {
      return 10; 
    } else if (age >= 13 && age <= 17) {
      return 15;
    } else if (age >= 18) {
      return 20; 
    } else {
      return "Invalid age";
    }
  }
  
  // Prompt the user to enter their age
  const userAge = prompt("enter your age:");
  
  const age = Number(userAge);
  
  const ticketPrice = getTicketPrice(age);
  if (isNaN(ticketPrice)) {
    console.log(ticketPrice);
  } else {
    console.log(`Your ticket price is: $${ticketPrice}`);
  }
  


  // Recursive function to calculate  the result of raising a number to a given power
function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  