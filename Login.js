$(document).ready(function(){
  $('#oksignup').click(function(){
  	$('#login').addClass("reg");
  	$('#signup').removeClass("reg");
  });
  $('#oklogin').click(function(){
  	$('#signup').addClass("reg");
  	$('#login').removeClass("reg");
  });
  $('#okforgetpassword').click(function(){
    $('#recoverpassword').addClass("reg");
    $('#enter a new paassword').removeClass("reg");
  }