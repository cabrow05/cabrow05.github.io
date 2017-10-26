// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked



//$('#first').click(swapbigimageForFirst);
//$('#second').click(swapbigimageForSecond);  
//$('#third').click(swapbigimageForThird);
//$('#fourth').click(swapbigimageForFourth);



  //function swapbigimageForFirst(){
  	//$('#bigimage').attr('src', 'img/1.jpg');}

  //function swapbigimageForSecond() {
  	//$('#bigimage').attr('src', 'img/2.jpg');}

  //function swapbigimageForThird(){
 	//$('#bigimage').attr('src', 'img/3.jpg');}

  //function swapbigimageForFourth() {
	//$('#bigimage').attr('src', 'img/4.jpg');}


$('.thumb').click(changeImage);

function changeImage() {
	var newImage = $(this).attr('src');

	$('#bigimage').attr('src', newImage);
}










