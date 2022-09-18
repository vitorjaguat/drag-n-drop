const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
}

function dragStart() {
    this.className += ' hold';
    //the same as this.classList.add('hold')
    setTimeout(() => this.className = 'invisible', 0)
    //if I don't use setTimeout, the image disappears instantly from its original place AND from the drag;
}

function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
    // default behaviour is go back to origin
}

function dragEnter(e) {
    e.preventDefault();
    // default behaviour is go back to origin
    this.className += ' hovered';

}

function dragLeave() {
    this.className = 'empty';
}

function dragDrop() {
    this.className = 'empty';
    this.append(fill);
}