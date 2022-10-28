$(function(){
  // 기본 셀렉트
  var sel_name;
  var sel_select = $(".selectGroup");
  var sel_list = sel_select.children("ul");
  sel_list.slideUp(0);
  sel_select.click(function(){
    if(sel_select.hasClass("is--open")){
      sel_select.removeClass("is--open");
      sel_list.slideUp(300);
    }else{
      sel_select.addClass("is--open");
      sel_list.slideDown(300);
    }
  });

  sel_list.children("li").click(function(){
    sel_name = $(this).text();
    sel_select.children(".selected").html('').text(sel_name);
  });

  // 메인넷 선택
  var net_name;
  var net_select = $(".boxNetSelect");
  var net_list = net_select.children('ul');

  net_list.slideUp(0);
  net_select.click(function(){
    if(net_select.hasClass("is--open")){
      net_select.removeClass("is--open");
      net_list.slideUp(300);
    }else{
      net_select.addClass("is--open");
      net_list.slideDown(300);
    }
  });

  net_list.find("a").click(function(){
    net_list.children("li").removeClass("hide");
    $(this).parent("li").addClass("hide");
    net_name = $(this).text();
    net_select.children(".selected").html('').text(net_name);
  });

  // 내 정보
  $(".btnProfile").click(function(){
    if($(".boxMypage").css("display") == "none"){
      $(".boxMypage").fadeIn(300);
    }else{
      $(".boxMypage").fadeOut(300);      
    }
  });

  // 달력
  if($(".datapicker").length){
    $(".datepicker").datepicker();
  }

  if($(".timepicker").length){
    $(".timepicker").datetimepicker({
      dateFormat: "mm/dd/yy",
      timeFormat: "hh:mm"
    });
  }

  //탭
  $(".boxTab a").click(function(){
    var target = $(this).attr("data-tab");
    var _parents = $(this).parents(".boxTabGroup");
    if(!$(this).hasClass("active")){
      $(this).addClass("active").siblings().removeClass("active");
      _parents.children(".boxTabCont").removeClass("active");
      $("#"+target).addClass("active");
    }
  });

  // 팝업
  $(".open--popup").click(function(){
    var target = $(this).attr("data-pop");
    $(".popBasic").hide();
    $("#"+target).show();
    $("#dim").show();
    $("body").css("overflow", "hidden");
  });

  $(".close--popup").click(function(){
    $(this).parents(".popBasic").hide();
    $("body").css("overflow", "auto");
    $("#dim").hide();
  });

  // 파일 업로드
  $(".inputFile .file").on("change", function(){
    var file = $(this).val().split('/').pop().split('\\').pop();
    console.log(file)
    $(this).parent().children(".upload-name").val(file);
  })
});