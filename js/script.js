//Step 1 Creo un Button che quando premuto recuperi i dati da https://swapi.dev/api/people 
// Step 2 pagina le chiamate
// variabili
const fetchButton = document.querySelector('#fetch_button');
const peopleList = document.getElementById('people_list');
const prevButton = document.querySelector('#prev_button');
const nextButton = document.getElementById('next_button');

let prevUrl = "https://swapi.dev/api/people";
let nextUrl = "https://swapi.dev/api/people";

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
const renderPage = async (url)=>{
		
	const data = await fetchMyData(url);
	prevUrl = data.previous;
	nextUrl = data.next;
	const list = data.results.map((person) => person.name);
	
	listPeople(list);
}
//event
fetchButton.addEventListener('click', async ()=>{
	renderPage('https://swapi.dev/api/people');
});
prevButton.addEventListener("click", ()=>{
		if(prevUrl){
			renderPage(prevUrl);
		}
});
nextButton.addEventListener('click', async ()=>{
		if(nextUrl){
			renderPage(nextUrl);
		}
});

