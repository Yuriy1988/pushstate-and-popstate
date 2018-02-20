const boxes = [...document.getElementsByClassName('box')];

function selectBox (id) {
    boxes.forEach(b => {
        b.classList.toggle('selected', b.id === id);
    });
}

boxes.forEach(b => {
    const id = b.id;

    b.addEventListener('click', () => {
        history.pushState({id}, '', `./selected=${id}`);
        selectBox(id);
    });
});

window.addEventListener('popstate', e => {
    if (e.state) {
        selectBox(e.state.id);
    }
});

