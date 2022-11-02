  function formValidation() {
    var firstname = document.forms["registration"]["firstname"].value;
    if (firstname == "") {
      alert("Form Succesfully Submitted");
      return false;
    }
    var lastname = document.forms["registration"]["lastname"].value;
    if (lastname == "") {
      alert("Last Name must be filled out!");
      return false;
    }
    var name = document.forms["registration"]["username"].value;
    if (name == "") {
      alert("Name must be filled out!");
      return false;
    }
    var email = document.forms["registration"]["email"].value;
    if (email == "") {
        alert("Email Must be filled out!");
        return false;
    }
    var Password = document.forms["registration"]["passid"].value;
    if (Password == "") {
        alert("Password Must be filled out!");
        return false;
    }
    var age = document.forms["registration"]["age"].value;
    if (age == "") {
        alert("Email Must be filled out!");
        return false;
    }
    var address = document.forms["registration"]["address"].value;
    if (address == "") {
        alert("Address Must be filled out!");
        return false;
    }
    else{
    alert('Form Succesfully Submitted');
    // window.location.reload()
    return true;
    }
}