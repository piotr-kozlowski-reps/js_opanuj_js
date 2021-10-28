// import Vue from 'vue';

// ### Cel ćwiczenia

// Stwórz odtwarzacz audio w oparciu o Api Deezer'a (https://rapidapi.com/deezerdevs/api/deezer-1)
// 1. Wybierz 5 dowolnych utworów i pobierz dane bezpośrednio z API
// 2. Daj możliwość użytkownikowi: uruchamiania / pauzowania utworu oraz przełączania pomiędzy wybranymi utworami
// 3. Zadbaj o to, aby podczas odtwarzania pasek progressu odzwierciedlał realny stan utworu. 
// 4. Całość przygotuj w formie componentu <Player> przyjmującego jako props tablicę 5 dowolnych utworów pobranych z API Deezera. 

Vue.component('Player', {

  data: function(){
    return {

      responseFromApi: null,
      responseAvailable: false

    }
  },

  methods: {

    fetchDataFromApi(){

      //https://api.deezer.com/artist/195137/top?limit=50
      //https://deezerdevs-deezer.p.rapidapi.com/artist/Miles

      fetch("https://api.deezer.com/album/165787232", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "82a37221acmsh107b8ba357fb692p119788jsn6d30282382be"
        }
      })
      .then(response => {
          if(response.ok) return response.json()
          else alert(`serwer zwrócił ${response.status} : ${response.statusText}`)
        }
      )
      .then(response => {
        this.responseFromApi = response.body;
        this.responseAvailable = true
        console.log(this.responseFromApi)
      })
      .catch(err => {
        console.log(err)
      });

    }

  },


  created(){
    this.fetchDataFromApi();
  },

  template: `
  <div class="w-full">
  <div class="h-2 bg-red-light"></div>
    <div class="flex items-center justify-center h-screen bg-red-lightest">
      <div class="bg-white shadow-lg rounded-lg" style="width: 45rem !important;">
        <div class="flex">
          <div class="w-full p-8">
            <div class="flex justify-between">
              <div>
                <h3 class="text-2xl text-grey-darkest font-medium">One & One (feat. Maria Nayler)</h3>
                <p class="text-sm text-grey mt-1">Robert Miles</p>
              </div>
            </div>
            <div class="flex justify-evenly items-center mt-8">
              <div class="text-grey-darker">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"/></svg>
              </div>
              <div class="text-white bg-red-500 p-8 rounded-full bg-red-light shadow-lg">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/></svg>
              </div>
              <div class="text-grey-darker">
                <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="mx-8 py-4">
          <div class="flex justify-between text-sm text-grey-darker">
            <p>0:40</p>
            <p>4:20</p>
          </div>
          <div class="mt-1">
            <div class="h-1 bg-grey-dark rounded-full">
              <div class="w-1/5 h-1 bg-red-light rounded-full relative bg-red-500">
                <span class="w-4 h-4 bg-red absolute pin-r pin-b -mb-1 rounded-full shadow"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
})

new Vue({
  el: '#app',
  data: {

  }
})