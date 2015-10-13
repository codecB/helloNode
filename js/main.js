function onDeleteButtonClicked(){
    var cities = document.getElementsByClassName('city');

    if(cities.length > 0){
        cities[0].remove();
    }else{
        document.getElementById('count').innerHTML = 'No city to remove!';
    }
}

function onShuffleButtonClicked(){
    //var seq = ['london','paris','tokyo','beijing'];
    //shuffle(seq);

    var london = document.getElementById('london');
    var paris = document.getElementById('paris');
    var tokyo = document.getElementById('tokyo');
    var beijing = document.getElementById('beijing');

    var cities = [london,paris,tokyo,beijing];
    shuffle(cities);

    var cityNames = [];
    for(var i in cities){
        cityNames.push(cities[i].id);
        cities[3].parentNode.insertBefore(cities[i],cities[3]);
    }
    //document.getElementById('count').innerHTML = cityNames;


}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex ;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
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

