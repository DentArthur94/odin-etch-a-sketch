"use strict"; 

const container = document.querySelector("#container"); 
const newGridButton = document.querySelector("button");
let squarePerSide = 0;

newGridButton.addEventListener("click", () => {

    do {
        squarePerSide = prompt("How many square per side do you want ?"); 
    } while (squarePerSide > 100);
    

    deleteGrid();
    createGrid(squarePerSide,squarePerSide);

    const gridBlock = document.querySelectorAll(".column"); 
    
    gridBlock.forEach( (block) => {
    
        block.addEventListener("mouseenter", function eventHandler() {
    
            block.style.cssText = 'background-color : blue;';
    
            // setTimeout(function () {
            //     block.style.cssText = '';
            // }, 500);
    
            
        });
    });
}
);









function addLine() {
    const line = document.createElement("div");
    line.setAttribute("class","line"); 
    container.appendChild(line);
};

function addNUmberOfLine(numberOfLine) {
    for(let i = 0 ; i < numberOfLine ; i++) {
        addLine();
    }
};


function addColumn() {
    const lines = document.querySelectorAll(".line");
    lines.forEach(
        (line) => {
            const column = document.createElement("div");
            column.setAttribute("class","column");
            line.appendChild(column)
        }

    );
};


function addNumberOfColumn(numberOfColumn) {
    for(let i = 0 ; i < numberOfColumn ; i++) {
        addColumn();
    };
};

function createGrid(nbOfLines, nbOfColumns) {
    addNUmberOfLine(nbOfLines);
    addNumberOfColumn(nbOfColumns);
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function deleteGrid() {
    removeAllChildNodes(container); 
}