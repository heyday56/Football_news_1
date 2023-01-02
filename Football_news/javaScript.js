"use strict"
function checklogin(){
	var user=document.getElementById("user");
	var pass=document.getElementById("pass");
	const uVal=user.value;
	const pVal=pass.value;
	if (pVal.indexOf("  ")>-1 || pVal.indexOf(" ")>-1){
		pass.focus();
		document.getElementById("error").textContent="Password and userName cannot content space,=,&,!,-"
		return false;
	}
	if(uVal.indexOf("  ")>-1 ||uVal.indexOf(" ")>-1){
		user.focus();
		document.getElementById("error").textContent="Password and userName cannot content space,=,&,!,-"
		return false;
	}
	if (uVal.indexOf("=")>-1 || uVal.indexOf("-")>-1||uVal.indexOf("!")>-1 ||uVal.indexOf("&")>-1){
		user.focus();
		document.getElementById("error").textContent="Password and userName cannot content space,=,&,!,-"
		return false;	
	}
	if (pVal.indexOf("=")>-1 || pVal.indexOf("-")>-1||pVal.indexOf("!")>-1 ||pVal.indexOf("&")>-1){

		pass.focus();
		document.getElementById("error").textContent="Password and userName cannot content space,=,&,!,-"
		return false;	

	}
	if (pVal.length<8){
		pass.focus();
		document.getElementById("error").textContent="Password should be hard and big"
		return false;
	}
	return true;
}
function addValidat(){
	let head=document.getElementById("head");
	if(head.indexOf("  ")>-1 ||head===" "){
		head.focus();
		head.placeholder="pleas type here.";
		return false;
	}
else{
	return true;
}

}

function validateCheck(){
	const username=document.getElementById("username").value;
	const pass=document.getElementById("password").value;
	if(username.indexOf("=")>-1 || pass.indexOf("=")>-1){
	
	return false;
	}
	else{
		return true;
	}
}
function validateNew(){
	const username=document.getElementById("username").value;
	const pass=document.getElementById("password").value;
	if(username.indexOf("  ")>-1 or username=" " or username.indexOf("=")>-1){
		document.querySelector("#username").focus();
		return false;
	}
	if(pass.indexOf("  ")>-1 or pass=" " or pass.indexOf("=")>-1 or pass.length<8){
		document.querySelector("#password").focus();
		return false;
	}	
}return true;