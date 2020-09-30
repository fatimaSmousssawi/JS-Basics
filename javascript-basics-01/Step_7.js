var shoeSize=prompt("Please enter your shoe size ");
var yearOfBirth=prompt("Please enter your birth year");
function myFunction(size, year) {
    return (size * 2+5)*50-year+1766
  }
  alert(myFunction(shoeSize, yearOfBirth));