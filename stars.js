
  const starCount = 100;

  for(let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    // Random size between 1px and 3px
    const size = Math.random() * 4 + 2; // bigger stars
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    // Random position across viewport width/height
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';

    // Random animation duration & delay for twinkle effect
    star.style.animationDuration = (Math.random() * 3 + 1) + 's';
    star.style.animationDelay = (Math.random() * 3) + 's';

    document.body.appendChild(star);
  }
