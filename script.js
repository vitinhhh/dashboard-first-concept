function showPage(pageId, element) {

  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  
  document.getElementById(pageId).classList.add('active');

  
  const links = document.querySelectorAll('.sidebar-nav a');
  links.forEach(link => link.classList.remove('menu-active'));
  
  if(element) {
    element.classList.add('menu-active');
  }
}