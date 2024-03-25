function handleClick() {
    const log = document.getElementById('eventLog');
    log.innerHTML += '<li>Button clicked!</li>';
}

function handleInput(event) {
    const log = document.getElementById('eventLog');
    log.innerHTML += `<li>Input changed: ${event.target.value}</li>`;
}

function handleMouseOver() {
    const log = document.getElementById('eventLog');
    log.innerHTML += '<li>Hovered over the div!</li>';
}
