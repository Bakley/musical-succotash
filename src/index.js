// your code here
document.addEventListener("DOMContentLoaded", ()=>{
    // Fake the api call and fetch data
    const CAKES = [
        {
          id: 1,
          name: "Let It Drip",
          description: "Quadruple chocolate cake just drip drip dripping in flavor!",
          image_url:
            "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/let-it-drip-cake.jpg",
          reviews: [
            "Yummy Yummy Yummy!",
            "Is this a real cake, or is this just fantasy?",
            "I've always hated cakes with no flavor, so this is absolutely delightful.",
            "Best cake ever!! I love you!!!",
          ],
        },
        {
          id: 2,
          name: "My Cake is Poppin, My Cake is Cool",
          description:
            "This cake is elegant, refined, tasty... a fruity riot of blackberries, pears, and plums.",
          image_url:
            "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/popcorn-cake.jpg",
          reviews: ["Lil Mama's fav cake!!!", "Like a river of joy"],
        },
        {
            id: 3,
            name: "My Cake is Wassabi, My Cake is made in Africa",
            description:
              "This cake is elegant, refined, tasty... a fruity riot of blackberries, pears, and plums.",
            image_url:
              "https://curriculum-content.s3.amazonaws.com/phase-1/phase-1-code-challenge-cake-off/popcorn-cake.jpg",
            reviews: ["Lil Maina's fav cake!!!", "Like a river of joy and pastries"],
          },
      ];

    const baseurl = "http://localhost:3000"

    function fetchfirstcake(){
      fetch(`${baseurl}/cakes`)
        .then((res) => res.json())
        .then((data) => displayCakeDetails(data))
    }

    const cakeList = document.querySelector("#cake-list")
    const cakeName = document.querySelector("#cake-name")
    const cakeImage = document.querySelector("#cake-image")
    const cakeDesc = document.querySelector("#cake-description")

    let currentCake = CAKES[0]
    displayCakeDetails(currentCake)

    // populate the nav menu
    CAKES.forEach((cake) => {
        const list = document.createElement("li")
        list.textContent = cake.name;
        list.addEventListener("click", () => {
            currentCake = cake;
            displayCakeDetails(cake)
        })
        cakeList.append(list)
    })

    function displayCakeDetails(cake) {
        cakeName.textContent =  cake.name
        cakeImage.src = cake.image_url
        cakeDesc.textContent = cake.description

    }

    fetchfirstcake()
});