"use strict"; 

const container = document.querySelector("#container"); 




createGrid(4,4);




function addNUmberOfLine(numberOfLine) {
    for(let i = 0 ; i < numberOfLine ; i++) {
        addLine();
    }
};

function addLine() {
    const line = document.createElement("div");
    line.setAttribute("class","line"); 
    container.appendChild(line);
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


