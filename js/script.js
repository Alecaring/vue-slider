


const { createApp } = Vue;

createApp({
  data() {
    return {

    activeIndex: 0,
    activeIndex1: 0,


      Slider: {
        images: [
            "https://www.wallpapertip.com/wmimgs/55-552198_4k-desktop-backgrounds.jpg",

            "https://www.wallpapertip.com/wmimgs/47-472318_click-here-to-download-data-src-most-popular.jpg",

            "https://hdqwalls.com/download/norway-mountains-island-bridges-sunrises-4k-6d-3840x2160.jpg",
        ],
        titles: [
            "Go to NORWAY",
            "Visit ALASKA",
            "RUSSIA is More",
        ],
        subTitles: [
            "Experience the Northern Lights: Norway, kingdom of light and magic.",
            "See the Northern Lights dance across the Alaskan sky.",
            "Journey on the Trans-Siberian Railway, the world's longest railway.",
        ]
      },
      Slider1: {
        images1: [
            "https://wallpapers-hub.art/wallpaper-images/119719.jpg",

            "https://images5.alphacoders.com/515/thumb-1920-515366.jpg",

            "https://wallpapers.com/images/hd/4k-summer-3840-x-2400-0bxmovv05eapixhi.jpg",
        ],
        titles1: [
            "Visit INDONESIA",
            "Go to CARIBEAN",
            "MADAGASCAR is More",
        ],
        subTitles1: [
            "Bali: Where paradise meets culture.",
            "Relax on pristine beaches and soak up the Caribbean sunshine.",
            "Relax on pristine beaches and swim alongside whale sharks.",
        ]
      },
      
    }
    
  },
  methods: {
    ShowNext: function() {
        
        if (this.activeIndex === this.Slider.images.length -1) {
            this.activeIndex = 0;

        } else {
            this.activeIndex++;

        }
    },
    ShowNext1: function() {

        if (this.activeIndex1 === this.Slider1.images1.length -1) {
            this.activeIndex1 = 0;

        } else {
            this.activeIndex1++;

        }
    }
  },
}).mount('#AppSlider');

