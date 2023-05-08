const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");
const error404 = document.querySelector(".not-found");

search.addEventListener("click", () => {
   const APIKey = "b8582ec027cb82381d3b8a144ad31adb";
   const city = document.querySelector(".search-box input").value;

   if (city === "") return;

   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then((response) => response.json())
      .then((json) => {
         console.log(json);

         if (json.code === "404") {
            container.style.height = "400px";
            weatherBox.style.display = "none";
            weatherDetails.style.display = "none";
            error404.style.display = "block";
            error404.classList.add("fadeIn");
            return;
         }

         error404.style.display = "none";
         error404.classList.remove("fadeIn");

         const image = document.querySelector(".weather-box img");
         const temperature = document.querySelector(".weather-box .temperature");
         const description = document.querySelector(".weather-box .description");
         const humidity = document.querySelector(".weather-details .humidity span");
         const wind = document.querySelector(".weather-details .wind span");

         switch (json.weather[0].main) {
            case "Clear":
               image.src = "images/clear.png";
               break;

            case "Rain":
               image.src = "images/rain.png";
               break;

            case "Snow":
               image.src = "images/snow.png";
               break;

            case "Clouds":
               image.src = "images/cloud.png";
               break;

            case "Haze":
               image.src = "images/mist.png";
               break;

            default:
               image.src = "";
         }

         temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
         description.innerHTML = `${json.weather[0].description}`;
         humidity.innerHTML = `${json.main.humidity}%`;
         wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

         weatherBox.style.display = "";
         weatherDetails.style.display = "";
         weatherBox.classList.add("fadeIn");
         weatherDetails.classList.add("fadeIn");
         container.style.height = "590px";
      });
});

// const pointsPer48 = (ppg, mpg) => {
//    let points;
//    const fullGame = 48;
//    if (ppg === 0 || mpg === 0) {
//       return 0;
//    }
//    points = (ppg / mpg) * fullGame;
//    return Number(points.toFixed(1));
// };
// console.log(pointsPer48(12, 20));
// pgg очки за игру
//mpg минуты за игру

// pgg / mpg * 48

// isIsogram "Dermatoglyphics" = true; нет повтор букв
// isIsogram "moose" = false; есть повтор буквы
// isIsogram "aba" = false;

// function isIsogram(str){
//     let arr = str.split('');
//     let count = 0;
//     // return test
// }
// console.log(isIsogram('Dermatoglyphics'));

// const isIsogram = (str) => {
//     let i, j;
//     str = str.toLowerCase();
//     for (i = 0; i < str.length; i++) {
//         for (j = i + 1; j < str.length; j++) {
//         if(str[i] === str[j]) {
//           return false;
//         }
//       }
//     }
//     return true;
//  }

//  console.log(isIsogram('moose'));

// Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.
// const evenOrOdd = (number) => {
//    if (number % 2 === 0) {
//       return "Even";
//    }
//    return "Odd";
// };

// Создайте функцию, которая возвращает значение, умноженное на 50 и увеличенное на 6. Если введенное значение является строкой, оно должно возвращать «Ошибка».

const problem = (x) => {
   if (typeof x === 'string') 
      return 'Error'
   return x = (x * 50) + 6; 
}
console.log(problem('str'))