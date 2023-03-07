function menu() {
  const humberger = document.getElementById('humberger');
  humberger.classList.add('active');
}
function closemenu() {
  humberger.classList.remove('active');
}

const humberger = document.getElementById('humberger');
document.getElementById('navbar').onclick = () => {
  menu();
  closemenu();
};