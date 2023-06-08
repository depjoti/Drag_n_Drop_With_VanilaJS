var draggedItem = null;
var successMessage = null;

document.addEventListener('dragstart', function (event) {
    draggedItem = event.target;
});

document.addEventListener('dragover', function (event) {
    event.preventDefault();
});

document.addEventListener('drop', function (event) {
    event.preventDefault();
    var container = event.target;

    if (draggedItem && container && container.classList.contains('container')) {
        var clonedItem = draggedItem.cloneNode(true);
        container.appendChild(clonedItem);
        showMessage('Item dropped successfully!');
        draggedItem.parentNode.removeChild(draggedItem);
    }


    draggedItem = null;
});

function showMessage(message) {
    if (successMessage) {
        successMessage.parentNode.removeChild(successMessage);
    }

    successMessage = document.createElement('p');
    successMessage.className = 'success-message';
    successMessage.innerText = message;
    document.body.appendChild(successMessage);

    setTimeout(function () {
        successMessage.parentNode.removeChild(successMessage);
        successMessage = null;
    }, 2000);
}

function resetContainers() {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');

    while (container2.firstChild) {
        container1.appendChild(container2.firstChild);
    }
}
