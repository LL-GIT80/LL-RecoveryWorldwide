if( document.getElementById("newsletterForm") ){
	
	this.subscribeNewsletter.addEventListener("click",()=>{
		let headerGrid = document.getElementsByClassName("headerGrid");
		let newsletterInfo = document.getElementById("newsletterInfo");
		let newsletterForm = document.getElementById("newsletterForm");
		let newsletter = document.getElementById("newsletter");
		let errorBox = document.getElementById("errorBox");
		let success = document.getElementById("success");
		let Fname = document.getElementById("Fname").value;
		let Lname = document.getElementById("Lname").value;
		let email = document.getElementById("email").value;

		let nameRegex =/[a-zA-Z-,. ]{3,200}/i;//This REGEX checks to see if the name does not entirely consist of numbers or symbols.
		let emailRegex =/^[a-zA-Z0-9-_]{1,100}[@]{1}(?!\.)(?!\-)(?!.\.\.)[a-zA-Z0-9-_.]{1,100}[.][a-zA-Z]{1,100}$/i;// Validates Email Address.
			
		let FnameTest=nameRegex.test(Fname);
		let LnameTest=nameRegex.test(Lname);
		let emailTest=emailRegex.test(email);
		
		if(errorBox){errorBox.remove()}
		if(success){
			success.remove()
			newsletterInfo.innerText="Sign up for our newsletter and learn more about how you can recover from addiction.";
		}
		
		if(FnameTest && LnameTest && emailTest){
			console.log("True");
			newsletterForm.reset();
			newsletterInfo.innerHTML="<span id=\"success\"><strong><u>You have successfully subscribed to our Newsletter! Congratulations!</u>🎉</strong></span>";
			let success = document.getElementById("success");
			success.scrollIntoView({behavior: "smooth",block: "start"});
		}else{
			console.log("False");
			
			headerGrid[0].insertAdjacentHTML('beforebegin',`
				<section class="errorBox" id="errorBox">
					<h3><u>An Error Occurred! Please fill out all fields correctly!</u></h3>
					<div id="errorList">
						
					</div>
				</section>
			`);
			
			
			errorsArray=[];
			let errorList = document.getElementById("errorList");
			if(!Fname || !FnameTest){ errorsArray.push("<p>&#8226;Please Enter a Valid First Name!</p>")}
			if(!Lname || !LnameTest){errorsArray.push("<p>&#8226;Please Enter a Valid Last Name!</p>")}
			if(!email || !emailTest){errorsArray.push("<p>&#8226;Please Enter a Valid Email Address!</p>")}
			let i = 0;
			while  (i<errorsArray.length){
				errorList.insertAdjacentHTML("beforeend",`${errorsArray[i]}`);
				i++
			}
			
			let errorBox = document.getElementById("errorBox");
			errorBox.scrollIntoView({behavior: "smooth",block: "start"});
			
		}
	});

}
