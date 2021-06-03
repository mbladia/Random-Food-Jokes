require('dotenv').config()

const app = new Vue({
    el: "#app",
    data() {
        return{
            title: "Random Food Jokes",
            userMessage: "Enjoy!",
            text: "Click button to show random food jokes",
            items: ['🤣 Ok','😂 Not Bad','🤣🤣 Hahaha','😆 LOL','😝 Ohhh','🙄🙄',
            'Awit 🤣','🤪 More!!']
        }
    },
    methods: {
        async getFoodJoke(){
            const api_key = process.env.API_KEY;
            const api_url = `https://api.spoonacular.com/food/jokes/random?apiKey=${api_key}`
            const qry = await fetch(api_url)
            const res = await qry.json()
            const randNum = Math.floor(Math.random() * 8)
            
            this.userMessage = ""
            this.title = ""
            this.text = res.text
            setTimeout(() => {  this.userMessage = this.items[randNum]; }, 3000);
        }

    }
})

