(function courseColor(){ 
    var temp=$(".course_box");
//    console.log(temp);
    for(var i=0;i<temp.length;i++){
//        var color_class=temp[i].children[0].children[0].classList[2];
//        console.log(color_class);
        $(temp[i]).hover(function(){
            var color_class=this.children[0].children[0].classList[2];
            console.log(color_class);
            $(this).addClass("bg_"+color_class);
            $(this).css("border-right","5px");
            $(this).css("color","white");
        }
    ,   function(){
            var color_class=this.children[0].children[0].classList[2];
            $(this).removeClass("bg_"+color_class);
            $(this).css("background-color","#f8f8f8");
            $(this).css("border-right","3px");
            $(this).css("color","black");
        });

}}
)();

$(document).ready(function(){
	if($('#owl-demo-main').length){
		$("#owl-demo-main").owlCarousel({
		  items : 1, //10 items above 1000px browser width
		  itemsDesktop: [1000,1], //5 items between 1000px and 901px
		  itemsDesktopSmall : [900,1], // betweem 900px and 601px
		  itemsTablet: [600,1], //2 items between 600 and 0
		  itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});}
    
    $('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus();
});
    

    heightHoverBlocks();
});


function heightHoverBlocks(){
    var hoverBox=$("figure figcaption");
    for(var i=0;i<hoverBox.length;i++){
    $(hoverBox[i]).css("height",hoverBox[i].previousElementSibling.height+"px");
    $(hoverBox[i]).css("width",hoverBox[i].previousElementSibling.width+"px");    
    }
    
}