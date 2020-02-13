
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
	let gridArea=document.getElementById('box-section');
	gridArea.textContent="";

}

document.querySelector('form').addEventListener('submit', e => {
	rows = Number(document.getElementById('numberBoxes').value);
	clearGrid();
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

});

document.getElementById('reset').addEventListener('click', clearGrid);



