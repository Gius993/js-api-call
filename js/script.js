//Step 1 Creo un Button che quando premuto recuperi i dati da https://swapi.dev/api/people 

// variabili
const fetchButton = document.querySelector('#fetch_button');
const peopleList = document.getElementById('people_list');

const fetchMyData = async (url)=>{
	const resp = await fetch(url);
	const data = await resp.json();
	return data;
};
//funzioni
function listPeople(list){
	peopleList.innerHTML = "";
	list.forEach((element) => {
		const li = document.createElement('li');
		li.append(element);
		peopleList.append(li);	
	});
}
//event
fetchButton.addEventListener('click', async ()=>{
	
	const data = await fetchMyData("https://swapi.dev/api/people");
	const list = data.results.map((person) => person.name);
	
	listPeople(list);
});
