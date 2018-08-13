
const begin = () => {
  location.href = ('views/register.html');
};

let register = document.getElementById('btn-registersig');
register.addEventListener('click', begin);


// JQuery
$(document).ready(()=> {
  $('#sidebar').mCustomScrollbar({
    theme: 'minimal'
  });
  $('#dismiss, .overlay').on('click', () => {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
  });
  $('#sidebarCollapse').on('click', () => {
    $('#sidebar').addClass('active');
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  });
});
