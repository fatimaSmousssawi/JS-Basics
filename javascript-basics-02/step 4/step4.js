function myFunction() {
    if(confirm("Do you want to clear all fields of the form?")== true){
    document.getElementById("name").value = " ";
    document.getElementById("surname").value = " ";
    document.getElementById("city").value = " ";

    }
  }
