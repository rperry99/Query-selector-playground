// Grab all the buttons
const selectOddBtn = document.getElementById("selectOdd");
const selectDataAttrBtn = document.getElementById("selectDataAttr");
const selectOnlyIceTypesBtn = document.getElementById("selectOnlyIceTypes");

// Grab Table elements
const tablesList = document.querySelectorAll('.table-group table');
const rowsList = document.querySelectorAll('.table-group tr');
const cellsList = document.querySelectorAll('.table-group td, .table-group th');

// Grab the description for what is being selected.
const selectionDesc = document.querySelector(".selection-description");

// // Returns the first instance of the associated class. Returns NULL if it can't find the associated class.
// const successTable = document.querySelector(".success-table"); 
// const failTable = document.querySelector(".fail-table"); 

// // Select every odd row in the tables.
// const oddSuccess = document.querySelectorAll(".success-table tr:nth-child(odd)");

// // Selects a row using a data attribute.
// const selectedRow = document.querySelector("tr[data-selected='true']");

// // A safer way to only select from a specific table.
// const successRows = successTable.querySelectorAll("tr");

// Function to select all the odd rows.
function selectOdd() {
    stripUnusedClasses();
    selectOddBtn.classList.add("active");

    selectionDesc.innerHTML = 'Using <code>document.querySelectorAll("tr:nth-Child(odd)")</code> along with a for loop, I am able to select all of the odd number rows in both tables.';

    const selectOdd = document.querySelectorAll("tr:nth-child(odd)");
    for (let i = 0; i < selectOdd.length; i++){
        selectOdd[i].classList.add("highlight");
    }
}

// Function to select only the ones with the 'data-selected="true"' attribute.
function selectDataAttr() {
    stripUnusedClasses();
    selectDataAttrBtn.classList.add("active");

    selectionDesc.innerHTML = 'Using <code>document.querySelectorAll("tr[data-selected=\'true\'], td[data-selected=\'true\'])</code> along with a for loop, I am able to select any rows or cells that have <code>data-selected=\'true\'</code> attribute.<br><br>The rows with "Glaceon" and "Talonflame" have this data-selected attribute. <br><br>The cells for the names "Weavile" and "Arcanine" also have this attribute.'

    const selectPreSelectedItems = document.querySelectorAll("tr[data-selected='true'], td[data-selected='true']");
    for (let item = 0; item < selectPreSelectedItems.length; item++){
        selectPreSelectedItems[item].classList.add("highlight");
    }
}

function selectOnlyIce() {
    stripUnusedClasses();
    selectOnlyIceBtn.classList.add("active");
}

// Helper Functions

function stripUnusedClasses(){
    stripActiveClass();
    stripHighlightClass();
}

function stripActiveClass() {
    const allButtons = document.querySelectorAll("button");
    for (let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove('active');
    }
}

function stripHighlightClass() {
    for(let cell = 0; cell < cellsList.length; cell++){
        cellsList[cell].classList.remove('highlight');
    }
    for(let table = 0; table < tablesList.length; table++){
        tablesList[table].classList.remove('highlight');
    }
    for(let row = 0; row < rowsList.length; row++){
        rowsList[row].classList.remove('highlight');
    }
}