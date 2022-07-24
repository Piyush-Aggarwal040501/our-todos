console.log("welcome to K&S Notes");
showNotes();
let addNote = document.getElementById('addNote');
addNote.addEventListener('click', function () {
    let addText = document.getElementById('addText');
    let addTittle = document.getElementById('addTittle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesContent = [addTittle.value,addText.value];
    notesObj.push(notesContent);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTittle.value = "";
    addText.value = "";
    showNotes();
});
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];

    }
    else {
        notesObj = JSON.parse(notes);

    }
    let htmlCard = "";
    notesObj.forEach(function (element, index){
        htmlCard +=
            `<div class="card noteCard">
                <div class="card-body">
                    <h5 class="card-title">${element[0]}</h5>
                    <p class="card-text">${element[1]}</p>
                    <div class="deleteBtn" id="${index}" onclick="deleteNote(this.id)">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-archive-fill">
                            <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                        </svg>
                    </div>
                </div>
            </div>`;
    });
    let allNotes = document.getElementById("notes");
    if (notesObj.length != 0) {
        allNotes.innerHTML = htmlCard;
    }
    else {
        allNotes.innerHTML = '<div id="nothing">Nothing to Show</div>'
    }
}
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}
let search = document.getElementById("searchBar");
search.addEventListener('input', function () {
    searchText = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName("noteCard");
    Array.from(noteCard).forEach(function (element) {
        let cardTitle = element.getElementsByTagName("h5")[0].innerText;
        let cardContent = element.getElementsByTagName("p")[0].innerText;
        console.log(cardTitle,cardContent);
        if (cardTitle.includes(searchText) || cardContent.includes(searchText)) {
            element.style.display = 'block';
        }else {
            element.style.display = 'none';
        }
    })
});