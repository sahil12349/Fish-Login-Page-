document.addEventListener("DOMContentLoaded", function(){
    const fishImage = document.querySelectorAll('.fish');
    fishImage.forEach(fish => {
        setInitialPosition(fish);
        moveFish(fish);
    })

function setInitialPosition(fish){
    let newX = Math.random() * (window.innerWidth - 100);
    let newY = Math.random() * (window.innerHeight -100);
    
    //Don`t let fishes image overlap
    fish.style.left = newX + 'px';
    fish.style.top = newY +'px';

    // set random direction
    fish.dataset.directionX = Math.random() > 0.5 ? 1 : -1;

}

function moveFish(fish) {
    const speed = Math.random() * 2+1;
    let currentX = parseFloat(fish.style.left);
    let newX = currentX + parseFloat(fish.dataset.directionX) *speed;

    if(newX <0 || newX > window.innerWidth -100) {
        fish.dataset.directionX *= -1;
        fish.style.transform = `scaleX(${fish.dataset.direction})`;

    }
    fish.style.left = newX + 'px';
    requestAnimationFrame(() => moveFish(fish));
}
});
