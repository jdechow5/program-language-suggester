$(document).ready(function () {
  $("form#languageForm").submit(function (event) {
    event.preventDefault();
    const yourName = $("#name").val();
    const animalChoice = $("select#animal").val();
    const colorChoice = $("select#color").val();
    const locationChoice = $("select#studyLocation").val();
    const musicChoice = $("select#music").val();
    const beverageChoice = $("select#beverage").val();

    let javaScriptCounter = 0;
    let pythonCounter = 0;
    let rustCounter = 0;

    //Question 1 
    if (animalChoice === "Dog") {
      javaScriptCounter += 1;
    } else if (animalChoice === "Cat") {
      rustCounter += 1;
    } else if (animalChoice === "Lizard") {
      pythonCounter += 1;
    }

    //Question 2
    if (colorChoice === "Blue") {
      javaScriptCounter += 1;
    } else if (colorChoice === "Green") {
      rustCounter += 1;
    } else if (colorChoice === "Purple") {
      pythonCounter += 1;
    }

    //Question 3
    if (locationChoice === "Home Office") {
      javaScriptCounter += 1;
    } else if (locationChoice === "A Coffee Shop") {
      rustCounter += 1;
    } else if (locationChoice === "The Library") {
      pythonCounter += 1;
    }

    //Question 4
    if (musicChoice === "Classical") {
      javaScriptCounter += 1;
    } else if (musicChoice === "Indie") {
      rustCounter += 1;
    } else if (musicChoice === "Metal") {
      pythonCounter += 1;
    }

    //Question 5
    if (beverageChoice === "Coffee") {
      javaScriptCounter += 1;
    } else if (beverageChoice === "Beer") {
      rustCounter += 1;
    } else if (beverageChoice === "Cocktail") {
      pythonCounter += 1;
    }

    //Results
    if (javaScriptCounter > rustCounter && javaScriptCounter > pythonCounter) {
      result = "Hey, " + yourName + " your programming language is JavaScript";
    } else if (rustCounter > javaScriptCounter && rustCounter > pythonCounter) {
      result = "Hey, " + yourName + " your programming language is Rust";
    } else if (pythonCounter > javaScriptCounter && pythonCounter > rustCounter) {
      result = "Hey, " + yourName + " your programming language is Python";
    }
    $("#result").text(result);
    $("#result").fadeIn();

  })
})