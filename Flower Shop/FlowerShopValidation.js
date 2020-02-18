function validateDetails() {
	var flag=false;
	var regex;
	var isValid;
	var cardnum = document.getElementById("txtCardNumber").value;   
    regex = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    isValid = regex.test(cardnum);
    if (!isValid)
    {
    	document.getElementById("CardNumber").style.display = "block";
    }

    var securityCode = document.getElementById("txtSecurityCode");
    regex = /^[0-9]{3}$/;
    isValid = regex.test(securityCode.value);
    if (!isValid)
    {
        document.getElementById("SecurityCode").style.display = "block"; 
    }

    var userName = document.getElementById("txtName").value;
    regex = /^[A-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    isValid = regex.test(userName);
    if (!isValid)
    {
		document.getElementById("CardholderName").style.display = "block"; 
    }

    var address = document.getElementById("txtAddress1").value;
    regex = /^([a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*){5}$/;
    isValid = regex.test(address);
    if (!isValid)
    {
		document.getElementById("Address1").style.display = "block"; 
    }

    var city = document.getElementById("txtCity").value;
    regex = /^([a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*){4}$/;
    isValid = regex.test(city);
    if (!isValid)
    {
		document.getElementById("City").style.display = "block"; 
    }
    var postcode = document.getElementById("txtPostcode").value;
    regex = /^[1-9][0-9]{5}$/;
    isValid = regex.test(postcode);
    if (!isValid)
    {
		document.getElementById("Postcode").style.display = "block"; 
    }

    var email = document.getElementById("txtEmail").value;
    regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    isValid = regex.test(email);
    if (!isValid)
    {
		document.getElementById("Email").style.display = "block"; 
    }
    else{
    	alert("Payment Successfull");
    }
}