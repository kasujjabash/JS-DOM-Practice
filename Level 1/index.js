// store each id in a variable 
let textFontFamily = document.getElementById('fontFamily')
let textFontSize = document.getElementById('fontSize')
let paragraphTextColor = document.getElementById('textColor')
let textFieldArea = document.getElementById('text-area')
let textCounter = document.getElementById('counter')
let maxCharacters = 200 // maximum characters allowed

//function to update the text style
function updateTextStyle(){
    let fontFamily = textFontFamily.value // getting the VALUE of selected for the font
    let fontSize = textFontSize.value
    let textColor = paragraphTextColor.value

    //applying the style for the values got from the selected dropdowns to the paragraph
    paragraph.style.fontFamily = fontFamily
    paragraph.style.fontSize = fontSize
    paragraph.style.color = textColor
}


//function to update the counter on text typing
function updateCounter(){
    let textLength = textFieldArea.value.length // getting the length of the text typed in the textarea
    let charactersLeft = maxCharacters - textLength // calculating the characters left

    // updating the counter display
    textCounter.textContent = charactersLeft

    // if the characters left is less than 0, then we will set it to 0
    if(charactersLeft < 0){
        textCounter.textContent = 0
        // Also limit the text input to the max characters allowed
        textFieldArea.value = textFieldArea.value.substring(0, maxCharacters);
    }else {
        textCounter.textContent = charactersLeft;
    }

}

// listeners 
fontFamily.addEventListener('change', updateTextStyle)
fontSize.addEventListener('change', updateTextStyle)
textColor.addEventListener('change', updateTextStyle)
textFieldArea.addEventListener('input', updateCounter);



