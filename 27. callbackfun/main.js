const button = document.querySelector('button');

var toggle = () => {
  button.classList.toggle('altColor');
};

// toggle();
button.addEventListener('click', toggle);
