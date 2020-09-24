const itemArray =  [];

const addValve = () => {
	const readNode = document.getElementById("texto");
	const respuesta = document.getElementById("escribir");
	const nodeValue = readNode.value;
	console.log(nodeValue);
//	readNode.value = "";

	sanitizer(nodeValue, respuesta);

	//respuestaF(nodeValue, respuesta);
        };

const respuestaF = (value, target) => {
	
	const newItem = `<div>
  <p>${value}</p>
  <button onclick="" >editar</button>
  <button onclick="" >x</button>
  </div>`;
	target.innerHTML += newItem;
	
};

const sanitizer = (value, target) => {
	const trinedValue = value.trim();
	if (trinedValue){
		addArray(value, itemArray);
		respuestaF(value, target);
	}else{
		console.log("no")
	}
}
const addArray = (value, itemArray)=>{
	itemArray.push(value)
	saveToStorage(itemArray);
}
const saveToStorage = (itemArray) => {
	console.log("ssss")
	var myJSON = JSON.stringify(itemArray);
	localStorage.setItem("ALGO",myJSON);
}
//onload investigar y aplciarlo

































