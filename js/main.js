function onDeleteButtonClicked(){
    var cities = document.getElementsByClassName('city');

    if(cities.length > 0){
        cities[0].remove();
    }else{
        document.getElementById('count').innerHTML = 'No city to remove!';
    }
}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();

    var dragId = ev.dataTransfer.getData("text");
    var dropId = ev.currentTarget.id;

    var elementToDrag = document.getElementById(dragId);
    var elementToDrop = document.getElementById(dropId);

    var cities = document.getElementsByClassName('city');

    var direction;
    for(var i in cities){
        if(cities[i].id == elementToDrop.id){
            direction = 'right';
            break;
        }
        if(cities[i].id == elementToDrag.id){
            direction = 'left';
            break;
        }
    }

    if(direction == 'left'){
        elementToDrop.parentNode.insertBefore(elementToDrag, elementToDrop.nextElementSibling);
    }else{
        elementToDrop.parentNode.insertBefore(elementToDrag, elementToDrop);
    }

}

