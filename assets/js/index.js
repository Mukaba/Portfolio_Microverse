function menu() {
  const humberger = document.getElementById('humberger');
  humberger.classList.add('active');
}
function closemenu() {
  const humberger = document.getElementById('humberger');
  humberger.classList.remove('active');
}

document.getElementById('navbar').onclick = () => {
  menu();
  closemenu();
};
