const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.getElementById('toggleMode');
const overlay = document.querySelector('.overlay');

// Image data
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const alts = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Ancient Egyptian wall art',
  'pic5.jpg': 'Large moth on a leaf'
};

// Populate thumbnail bar
images.forEach(filename => {
  const img = document.createElement('img');
  img.src = `images/${filename}`;
  img.alt = alts[filename];
  thumbBar.appendChild(img);

  img.addEventListener('click', () => {
    displayedImage.src = img.src;
    displayedImage.alt = img.alt;
  });
});

// Toggle dark/light mode
btn.addEventListener('click', () => {
  const isDark = btn.classList.contains('dark');

  if (isDark) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Light Mode';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Dark Mode';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});
