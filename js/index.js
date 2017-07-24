//EXPLORE
$(window).scroll(function(e){
  if($(window).scrollTop()<=0)
    $(".explore,.navbar").addClass("a_top")
    
  else
$(".explore,.navbar").removeClass("a_top")
});
//按導覽列btn滑到頁面效果,監看a標籤是否有click的動作,有就呼叫funcion
$(document).on('click','a',function(event){
  //預防它直接點擊後跳頁
  //event.preventDefault();
  //這個被按的this去抓attr的href
  var target = $(this).attr("href");
  $('html,body').animate({
    //抓偏移距離,最上面的距離,慢慢偏移500/0.5s
    scrollTop: $(target).offset().top
  },1000);
});



//滑鼠移動事件
$(window).mousemove(function(evt){
  var pageX = evt.pageX;
  var pageY = evt.pageY;
  //文字跟著滑鼠洞的位置要減去上面的位置
  //console.log(x+","+y)
  var x = pageX - $("section#section_introduction").offset().left;
  var y = pageY - $("section#section_introduction").offset().top;
  
  //if判斷,y小於0或y大於這個高度  outerHeight就XX滑鼠會顯示
  if(y < 0 || y>$("#section_introduction").outerHeight())
  $(".rotate_int.tri").css("transform","translateX("+y/-6+"px)");  
  $(".r1").css("transform","translateX("+y/-10+"px)");
  $(".r2").css("transform","translateX("+y/-15+"px)");
  $(".r3").css("transform","translateX("+y/-12+"px)");
}); 

var license = ['電腦軟體應用乙級','Windows Server 2008 ActiveDirectory:Configuration','Windows Server 2008 Network Infrastructure:Configuration','3DS Max 2013 Certified Professional','Red Hat Certified System Administrator(RHCSA)','TQC+網頁設計','TQC+電腦繪圖設計'
  
];

var vm = new Vue({
  el: "#app",
  data: {licensedata: license}
});