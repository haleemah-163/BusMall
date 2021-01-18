'use strict';
var rounds=25;
var roundsCounter=0;
var LIIndex;
var MIIndex;
var RIIndex; 
var leftImage = document.getElementById('LI');
var middleImage = document.getElementById('MI');
var rightImage = document.getElementById('RI');
var pResults;
var timeDisplayed=[];
var votes=[];
var productNames=[];
// var shownImages=[];


//add rounds number event
var formdiv = document.getElementById('roundsForm');
formdiv.addEventListener('submit',roundsSumbmission);
function roundsSumbmission(event){
    event.preventDefault();
    rounds=event.target.roundsNumber.value;
    
}
//ooooooooooooooooooooooooooooooooooooooooo



function ProductImages (productName,imagePath){
    this.productName=productName;
    this.imagePath=imagePath;
    this.timeDisplayed=0;
    this.votes=0;
    ProductImages.allImages.push(this);
    productNames.push(productName);
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
        
    } while (RIIndex===LIIndex || RIIndex===MIIndex );//||shownImages.includes(LIIndex)||shownImages.includes(MIIndex)||shownImages.includes(RIIndex);
    // HERE I COMMENTED THE HALF PART OF THE WHILE BECAUSE WHEN I RUN IT, SOMETHING GETS WRONG WITH THE WEBSITE AND IT STOPS, I DON'T KNOW IF IT'S BECAUSE OF MY LOW LAPTOP QUALIFICATIONS OR THE WRONG CODE. SO INCASE OF THE FIRST REASON; I COMMENTED THIS PART  **"||shownImages.includes(LIIndex)||shownImages.includes(MIIndex)||shownImages.includes(RIIndex);"** UNTIL I GET THE ANSWER
    
    // shownImages.push(LIIndex);
    // shownImages.push(MIIndex);
    // shownImages.push(RIIndex);
    
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

        
        pResults= document.getElementById('PR');
        leftImage.removeEventListener('click',voting);
        middleImage.removeEventListener('click',voting);
        rightImage.removeEventListener('click',voting);

        function viewButton(event,pVotes){
            event.preventDefault();
            
            
            for (let i = 0; i < ProductImages.allImages.length; i++) {
                pVotes=document.createElement('li');
                pVotes.textContent=ProductImages.allImages[i].productName+' had '+ProductImages.allImages[i].votes+' votes, and was seen '+ProductImages.allImages[i].timeDisplayed+'  times. as percentage of '+Math.ceil((ProductImages.allImages[i].votes/ProductImages.allImages[i].timeDisplayed)*100) +'%' ;
                pResults.appendChild(pVotes);
                    
            }

            for (let i = 0; i < ProductImages.allImages.length; i++) {
                votes.push(ProductImages.allImages[i].votes);
                timeDisplayed.push(ProductImages.allImages[i].timeDisplayed);
                
            }

            // Viewing Bars //////////////////////////////////////////////////////////////////////
            var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: productNames ,
        datasets: [{
            label: 'votes',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: votes
        }]
    },

    // Configuration options go here
    options: {}
});
var ctx = document.getElementById('mySecondChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: productNames ,
        datasets: [{
            
            label: 'shown',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: timeDisplayed
        }]
    },

    // Configuration options go here
    options: {}
});
        }
//////////////////////////////////////////////////////////////////////////////////
        

// view event
        var resultsDiv = document.getElementById('viewResults');
  
resultsDiv.addEventListener('submit',viewButton);

    }
}



