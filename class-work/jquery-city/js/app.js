// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked



$('#first').click(swapbigimageForFirst);
  function swapbigimageForFirst() 
{
	$('#bigimage').attr('src', 'img/1.jpg');
}

$('#second').click(swapbigimageForSecond);
  function swapbigimageForSecond() 
 {
	$('#bigimage').attr('src', 'img/2.jpg');
}

$('#third').click(swapbigimageForThird);
  function swapbigimageForThird() 
 {
	$('#bigimage').attr('src', 'img/3.jpg');
}

$('#fourth').click(swapbigimageForFourth);
  function swapbigimageForFourth() 
{
	$('#bigimage').attr('src', 'img/4.jpg');
}