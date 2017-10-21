$(document).ready(function(){

  $(".button-collapse").sideNav();

  $(function () {
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#experience_div').hide();
      $('.brand_logo').hide();
      
  });

  $('#about_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').show();
      
  });

  $('#projects_tab').click(function(){ 
      $('#projects_div').show();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#skills_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').show();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#blogs_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').show();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#education_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').show();
      $('#about_div').hide();
      $('.brand_logo').show();
  });


  $('#experience_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').show();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#m_about_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').show();
      
  });

  $('#m_projects_tab').click(function(){ 
      $('#projects_div').show();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#m_skills_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').show();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#m_blogs_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').show();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('#m_education_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').hide();
      $('#blogs_div').hide();
      $('#education_div').show();
      $('#about_div').hide();
      $('.brand_logo').show();
  });


  $('#m_experience_tab').click(function(){ 
      $('#projects_div').hide();
      $('#skills_div').hide();
      $('#experience_div').show();
      $('#blogs_div').hide();
      $('#education_div').hide();
      $('#about_div').hide();
      $('.brand_logo').show();
  });

  $('.tabs').click(function(e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
  });

});