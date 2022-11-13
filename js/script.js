const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// Question 1
const cat = {
    complain: function() {

        console.log("Meow!");
    }
}

cat.complain();

// Question 2
var heading = document.querySelector("h3");
heading.innerHTML = "Updated title";

//Question 3
heading.style.cssText = "font-size: 2em";

//Question 4
heading.classList.add("subheading");

//Question 5
let paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

//Question 6
var resultsContainer = document.querySelector(".results");
    resultsContainer.innerHTML = "<p>New paragraph</p>";
    resultsContainer.style.color = "yellow";

//Question 7
// function catsName (list) {
    
//     for (var i = 0; i < cats.length; i++) {
//         console.log(list.name[i]);
//     }
// }
// catsName(cats);

//Question 8
function createCats(cats) {

    let catsName = "";
    let catsAge = "";

    for (var i = 0; i < cats.lenght; i++) {
        catsAge = `<h5>${cats[i].name}</h5>`;
        catsName = `<p>${cats[i].age}</p>`;
    }

    const divContainer = `<div>${catsAge}</div><div>${catsName}</div>`;
    var catContainer = document.querySelector(".cat-container");
    catContainer.innerHTML = divContainer;
}

createCats(cats);