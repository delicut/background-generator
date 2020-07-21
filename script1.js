var input = document.getElementById("userinput");
var button = document.getElementById("submit");
var ul = document.getElementById("ulist");
console.log("hello");
console.log(input);

function removeFromListAfterClick(evt1) {
	console.log("button clicked");
	var button2 = evt1.buttons[0];
	console.log("you pressed " + button2);

}

function addItemToList(){

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	var button1 = document.createElement("button");
	button1.appendChild(document.createTextNode("Delete"));

	var div = document.createElement("div");
	div.appendChild(li);
	div.appendChild(button1);

	button1.addEventListener("click", removeFromListAfterClick);

	//console.log(li);
	ul.appendChild(div);
	input.value="";
}

function addToListAfterClick() {
	console.log(input.value.length);
	if(input.value.length >0 ) {
		addItemToList();
	}

}

function addToListAfterEnterKey(evt) {
	if(input.value.length > 0 && evt.keyCode === 13) {
		console.log(input.value.length);
		addItemToList();
	}
}


button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterEnterKey);

