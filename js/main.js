var glide = new Glide('.glide', {
    type: 'carousel',
    focusAt: 'center',
    perView: 1,
    animationDuration: 1000,
    autoplay: 5000,
    hoverpause: true,
    breakpoints: {
      1200: {
        perView: 1
      },
      800: {
        perView: 1
      },
      480: {
        perView: 1
      }
    }
  })
  
  glide.mount()