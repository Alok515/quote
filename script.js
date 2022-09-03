const quoteQ = document.getElementById("qoute_class");
const quoteT = document.getElementById("qoute");
const quoteA = document.getElementById("author");
const twB = document.getElementById("tw");

const newQuote = document.getElementById("new_quote");

const load = document.getElementById("loading");


function setLoading(){
	load.hidden = false;
	quoteQ.hidden = true;
}

function loaded(){
    load.hidden = true;
	quoteQ.hidden = false;
}

let quote=[];

function newQ(){
	
	const qu = quote[Math.floor(Math.random() * quote.length)];
	if(!qu.author){
		quoteA.textContent = 'Unknown';
	}
	else{
		quoteA.textContent = qu.author;
	}

	if(qu.text.length > 70 ){
		quoteT.classList.add("long_quote");
	}
	else {
		quoteT.classList.remove("long_quote");
	}
    loaded();	
	quoteT.textContent = qu.text;
}


async function apiF(){
	setLoading();
	const url = 'https://type.fit/api/quotes';
	try{
		res = await fetch(url);
		quote = await res.json();
		newQ();
	}catch(error){
		alert(error);
	}

}

newQuote.addEventListener("click",newQ);

apiF();
