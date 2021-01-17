'use strict';
var rounds=25;
var roundsCounter=0;
var LIIndex;
var MIIndex;
var RIIndex;
var leftImage = document.getElementById('LI');
var middleImage = document.getElementById('MI');
var rightImage = document.getElementById('RI');
var pResults= document.getElementById('PR');

function ProductImages (productName,imagePath){
    this.productName=productName;
    this.imagePath=imagePath;
    this.timeDisplayed=0;
    this.votes=0;
    ProductImages.allImages.push(this);
}
ProductImages.allImages=[];

new ProductImages ('bag','img/bag.jpg');
new ProductImages ('banana','img/banana.jpg');
new ProductImages ('bathroom','img/bathroom.jpg');
new ProductImages ('boots','img/boots.jpg');
new ProductImages ('breakfast','img/breakfast.jpg');
new ProductImages ('bubblegum','img/bubblegum.jpg');
new ProductImages ('chair','img/chair.jpg');
new ProductImages ('cthulhu','img/cthulhu.jpg');
new ProductImages ('dog-duck','img/dog-duck.jpg');
new ProductImages ('dragon','img/dragon.jpg');
new ProductImages ('pen','img/pen.jpg');
new ProductImages ('pet-sweep','img/pet-sweep.jpg');
new ProductImages ('scissors','img/scissors.jpg');
new ProductImages ('shark','img/shark.jpg');
new ProductImages ('sweep','img/sweep.png');
new ProductImages ('tauntaun','img/tauntaun.jpg');
new ProductImages ('unicorn','img/unicorn.jpg');
new ProductImages ('usb','img/usb.gif');
new ProductImages ('water-can','img/water-can.jpg');
new ProductImages ('wine-glass','img/wine-glass.jpg');

RenderThreeImages();

//OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
function GenerateRandomIndex(){
    return Math.floor(Math.random()*ProductImages.allImages.length);
}

function RenderThreeImages(){
    LIIndex=GenerateRandomIndex();
    do { MIIndex=GenerateRandomIndex();
        
    } while (LIIndex===MIIndex);
    do {RIIndex=GenerateRandomIndex();
        
    } while (RIIndex===LIIndex || RIIndex===MIIndex );

    leftImage.src= ProductImages.allImages[LIIndex].imagePath;
    middleImage.src= ProductImages.allImages[MIIndex].imagePath;
    rightImage.src= ProductImages.allImages[RIIndex].imagePath;
}

leftImage.addEventListener('click', voting);
middleImage.addEventListener('click',voting);
rightImage.addEventListener('click',voting);

function voting(event){
    roundsCounter++;
    if (roundsCounter<=rounds) {
        if (event.target.id === 'LI' ) {
            ProductImages.allImages[LIIndex].votes++;
        } else if (event.target.id === 'MI' ) {
            ProductImages.allImages[MIIndex].votes++;}
            else{
                 
                    ProductImages.allImages[RIIndex].votes++;
            }
            ProductImages.allImages[LIIndex].timeDisplayed++;
            ProductImages.allImages[MIIndex].timeDisplayed++;
            ProductImages.allImages[RIIndex].timeDisplayed++;
            RenderThreeImages();
        
    } else {

        
    
        leftImage.removeEventListener('click',voting);
        middleImage.removeEventListener('click',voting);
        rightImage.removeEventListener('click',voting);

    }
}
function viewButton(){
    var pVotes;
    for (let i = 0; i < ProductImages.allImages.length; i++) {
        pVotes=document.createElement('li');
        pVotes.textContent=ProductImages.allImages[i].productName+' had '+ProductImages.allImages[i].votes+' votes, and was seen '+ProductImages.allImages[i].timeDisplayed+'  times. as percentage of '+Math.ceil((ProductImages.allImages[i].votes/ProductImages.allImages[i].timeDisplayed)*100) +'%' ;
        pResults.appendChild(pVotes);
        
        
    }
}
// this is the same as the first branch but I had to repush to copy the branch pull request link

