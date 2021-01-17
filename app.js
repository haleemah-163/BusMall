'use strict';
var rounds=25;
var roundsCounter=0;
function ProductImages (productName,imagePath){
    this.productName=productName;
    this.imagePath=imagePath;
    this.timeDisplayed;
    this.votes;
    ProductImages.prototype.allImages.push(this);
}
ProductImages.prototype.allImages=[];

