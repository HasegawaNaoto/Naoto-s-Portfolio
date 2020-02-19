$(function(){
  $('.menu-btn').click(function(){
    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, 'slow');
  });
});

$(function(){
  var doughnutData = [
    {
      value: 200,
      color:"rgba(199,0,103,1)",
      highlight: "rgba(199,0,103,0.8)",
      label: "Ruby on Rails"
    },
    {
      value: 100,
      color: "rgba(0,104,183,1)",
      highlight: "rgba(0,104,183,0.8)",
      label: "MySQL"
    },
    {
      value: 100,
      color: "rgba(0,169,104,1)",
      highlight: "rgba(0,169,104,0.8)",
      label: "HTML & CSS"
    },
    {
      value: 80,
      color: "rgba(255,215,0,1)",
      highlight: "rgba(255,215,0,0.8)",
      label: "Javascript"
    },
    {
      value: 80,
      color: "rgba(128,128,128,1)",
      highlight: "rgba(128,128,128,0.8)",
      label: "Command Line"
    },
    {
      value: 50,
      color: "rgba(20,20,20,1)",
      highlight: "rgba(20,20,20,0.8)",
      label: "GitHub"
    },
    {
      value: 30,
      color: "rgba(162,96,191,1)",
      highlight: "rgba(162,96,191,0.8)",
      label: "AWS"
    }
  ];
  window.onload = function(){
    var ctx = document.getElementById("doughnut-chart").getContext("2d");
    window.myDoughnut = new Chart(ctx).Doughnut(doughnutData, {
      responsive : true
    });
  };
});
