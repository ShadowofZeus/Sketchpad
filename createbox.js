
let form = document.querySelector('form');
let littleDiv = document.getElementsByClassName('littleOnes');
let resetbtn = document.getElementById('reset');
gridArea=document.getElementById('box-section');
//let mix = gridArea.querySelectorAll('div.littleOnes');

function createMyGrid(colNmbr)
{
	gridArea=document.getElementById('box-section');
	OneDiv=document.createElement('div');
	//console.log(gridArea,OneDiv);

	for(i=0;i<Math.pow(colNmbr,2);i++)
	{
		//console.log(i,gridArea);
		gridArea.appendChild(document.createElement('div')).classList.add('littleOnes');
	}

	gridArea.style.gridTemplateColumns = `repeat(${colNmbr}, 1fr)`
    gridArea.style.gridTemplateRows = `repeat(${colNmbr}, 1fr)`
}

function clearGrid()
{
	//console.log('hi')
	window.location.reload();
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
  //console.log(event.target);
  event.target.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
  event.stopPropagation();

 
  /*reset the color after a short delay
  setTimeout(function() {
    event.target.style.background = "";
  }, 8000);
}, false);*/
});

resetbtn.addEventListener('click', clearGrid);



