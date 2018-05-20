var addButton = document.querySelector('button');
var count=0,cCount=0;
function aDD(){
	
	var name = prompt('Enter name of the mentee');
	localStorage.setItem('namE', name);
	var rating = prompt('ENter the rating for the mentee (out of 5)');
	localStorage.setItem('ratinG', rating);
	var comm = prompt('Enter the comments for the mentee');
	localStorage.setItem('commenT', comm);
	var row = document.createElement("tr");
	row.setAttribute("id","row"+ (count=count+1));

	var c1 = document.createElement("td");
	var c1_t = document.createTextNode(localStorage.getItem('namE'));
	c1.setAttribute("id","cc" + ++cCount);
	c1.setAttribute("width",320);
	var c2 = document.createElement("td");
	var c2_t = document.createTextNode(localStorage.getItem('ratinG'));
	c2.setAttribute("id","cc"+ ++cCount);
	c2.setAttribute("width",20);
	var c3 = document.createElement("td");
	var c3_t = document.createTextNode(localStorage.getItem('commenT'));
	c3.setAttribute("id","cc"+ ++cCount);
	c3.setAttribute("width",720);
	c1.appendChild(c1_t);
	c2.appendChild(c2_t);
	c3.appendChild(c3_t);
	row.appendChild(c1);
	row.appendChild(c2);
	row.appendChild(c3);
	document.body.appendChild(row);
} 
addButton.onclick = function(){
	aDD();
}
var delButton = document.querySelector("#d3l");

function delet3(){
	var whicH = prompt('Whic row do you wish to delete ?(input row number)');
	localStorage.setItem('rowNo',whicH);
	var temp = Number(whicH); 
	temp= temp *3;
	var col3 = document.getElementById("cc"+ temp);
	col3.parentNode.removeChild(col3);
	var col2 = document.getElementById("cc"+ (temp=temp-1));
	col2.parentNode.removeChild(col2);
	var col1 = document.getElementById("cc"+ (temp=temp-1));
	col1.parentNode.removeChild(col1);
	var rowDel = document.getElementById("row"+temp);
	rowDel.parentNode.removeChild(rowDel);
}
delButton.onclick =function(){
	delet3();
}
