let form = document.querySelector('form');
let littleDiv = document.getElementsByClassName('littleOnes');

function createMyGrid(colNmbr)
{
	gridArea=document.getElementById('box-section');
	OneDiv=document.createElement('div');
	//console.log(gridArea,OneDiv);

	for(i=0;i<Math.pow(colNmbr,2);i++)
	{
		console.log(i,gridArea);
		gridArea.appendChild(document.createElement('div')).classList.add('littleOnes');
	}

	gridArea.style.gridTemplateColumns = `repeat(${colNmbr}, 1fr)`
    gridArea.style.gridTemplateRows = `repeat(${colNmbr}, 1fr)`
}

form.addEventListener('submit', e => {
	rows = Number(document.getElementById('numberBoxes').value);
	//console.log(rows);
	e.preventDefault();
	createMyGrid(rows);

	});

document.querySelector("#box-section").addEventListener("mouseover", function( event ) { 
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);  
  // highlight the mouseover target
  event.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  //console.log(event.target);

 
  // reset the color after a short delay
  setTimeout(function() {
    event.target.style.background = "";
  }, 8000);
}, false);


