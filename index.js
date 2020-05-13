window.onload = () => {
  // set currentColor
  let currentColor = 'black'
  // grab container with javascript
  let container = document.querySelector('#container')
  // create div element with .createElement
  let div = document.createElement('div')
  // add class of sqr to created element
  div.classList.add('sqr')
  // use .appendChild to add div to container
  container.appendChild(div)
  // add event listener to div
  div.addEventListener('click', function(){
    // change div backgroundColor to black
    div.style.backgroundColor = currentColor



  })
  
  let paletteColor = 'coral'
  // select canvas with javaScript
  let palette = document.querySelector('#palette')
  // change color of palette background with javascript
  palette.style.backgroundColor = paletteColor
  // add eventListener to palette
  palette.addEventListener('click', function(){
    currentColor = paletteColor
  })

}