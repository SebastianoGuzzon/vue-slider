export default {
  data() {
    return {
      // Inserimento immagini
      images: [
        'https://images.hdqwalls.com/download/republic-of-games-strix-4k-nl-1336x768.jpg',
        'https://mcdn.wallpapersafari.com/medium/27/97/vMhYDQ.png',
        'https://www.proav.it/wp-content/uploads/2018/05/4K-HDR-2-768x492.jpg'
      ],
      activeIndex: 0,
      translateX: 0
    };
  },
  
  // Controlli prev e next
  methods: {
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
      this.translateX = -this.activeIndex * this.$refs.slide.offsetWidth;
    },
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
      this.translateX = -this.activeIndex * this.$refs.slide.offsetWidth;
    }
  }
};