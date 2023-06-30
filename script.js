function getFormvalue() {
    //Write your code here
	const firstName= document.getElementById("firstName").value;
		const lastName= document.getElementById("firstName").value;
	alert(`First Name: ${firstName}\nLast Name: ${lastName}`);

}

document.getElementById("loginForm").addEventListner("submit", function(event){
event.preventDefault();
	getFormValue();
})


