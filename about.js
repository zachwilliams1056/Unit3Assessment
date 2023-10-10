console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('Successfully submitted!')
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const cat = document.getElementById("cat")

cat.addEventListener("mouseover", () => {
	alert("Obviously, you're not a golfer")
})
