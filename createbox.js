let form = document.querySelector('form');

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


