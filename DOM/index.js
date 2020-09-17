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
