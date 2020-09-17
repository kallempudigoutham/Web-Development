alert("Hello Goutham");


//Manipulate the html elements

// Using tag name
document.getElementsByTagName('li') // gives an array of li elemets

// Using class name
document.getElementsByClassName('list'); // gives an array of listclass items

// Using id'switch
document.getElementById("title");  // gives single element


// Using query selectors
document.querySelector(".list"); // only first item having a class name of list
document.querySelectorAll(".list"); // all elements with the class name list
document.querySelector("#title"); // only element with title
document.querySelector("a").style.color = "red"; // using the tag name

// Heirarchial selectors
document.querySelector(".list a").style.color = "red";


// Ideally styles are to be applied in styles.css instead of .js file to do it

document.querySelector("button").classList.add("change-text");
// this adds the class change-text to the button and adds style from styles.class


// To change the text .textContent is the correct prperty;
document.querySelector("h1").innerHTML = "<em> Hello World </em>"; // directly targets tree
document.querySelector("h1").textContent = "Hello World"; // targets the text inside


// Managing attributes
document.querySelector("a").attributes; // gives all attributes

// getting a particular attribute
document.querySelector("a").getAttribute("href");

// setting a attributes
document.querySelector("a").setAttribute("href" , "https://www.bing.com/");
