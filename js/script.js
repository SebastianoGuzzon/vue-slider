const { createApp } = Vue;

createApp({

    data(){
        return{
          // Inserimento delle 5 immagini 
            counter: 0,
            image: [
                "https://cdn.wallpapersafari.com/27/97/vMhYDQ.png",
                "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8NGslMjBtb3VudGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80",
                "https://images.unsplash.com/photo-1549740425-5e9ed4d8cd34?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzOTU0NTB8fGVufDB8fHx8&w=1000&q=80",
                "https://wallpapers.com/images/featured/ztbad1qj8vdjqe0p.jpg",
                "https://images2.alphacoders.com/107/1074989.jpg"
            ],
            time: null,
            hover: false
        }  
    },

    methods:{
      // Controlli next o prev
        changeImg(next){
            if(next) this.counter++
            else this.counter--

            this.conditionCounter()
        },

        clickChange(index){
            this.counter = index 
        },

        autoChange(){
            this.time = setInterval(() => {
                this.counter++
                
                this.conditionCounter()               
            }, 3000);
        },

        over(){
            this.hover = !this.hover

            if(this.hover){
                clearInterval(this.time)
            }
        },
        // Autoplay immagini
        out(){
            this.hover = !this.hover
            this.autoChange()
        },

        conditionCounter(){
            if(this.counter > this.image.length - 1) this.counter = 0;
            else if(this.counter < 0) this.counter = this.image.length - 1
        }

    },

    mounted(){
        this.autoChange();
    }


}).mount("#app")