var turn, winner = null;
var selectedWinner = document.getElementById('winner')
var currentPlayer = document.getElementById('current-player')
changeTurn('x');
var squares = document.getElementsByClassName('square')

function chooseSquare(element) {
  if(winner == null){

    if (element.innerHTML !== '-') {
      return
    }
    element.innerHTML = turn
    element.style.color = '#000'
    if(turn === 'x') {
      turn = 'o'
    } else {
      turn = 'x'
    }
    changeTurn(turn)
    checkWinner()
  }
}

function changeTurn(value){
  turn = value
  currentPlayer.innerHTML = turn
}


function checkWinner() {
  var square1 = document.getElementById(1) 
  var square2 = document.getElementById(2)
  var square3 = document.getElementById(3)
  var square4 = document.getElementById(4)
  var square5 = document.getElementById(5)
  var square6 = document.getElementById(6)
  var square7 = document.getElementById(7)
  var square8 = document.getElementById(8)
  var square9 = document.getElementById(9)
  
  if (checkSequence(square1, square2, square3)) {
    changeColor(square1, square2, square3)
    changeWinner(square1)
    return
  } 
  
  if (checkSequence(square4, square5, square6)) {
    changeColor(square4, square5, square6)
    changeWinner(square4)
    return
  }

  if (checkSequence(square7, square8, square9)) {
    changeColor(square7, square8, square9)
    changeWinner(square7)
    return
  }

  if (checkSequence(square1, square4, square7)) {
    changeColor(square1, square4, square7)
    changeWinner(square1)
    return
  }

  if (checkSequence(square2, square5, square8)) {
    changeColor(square2, square5, square8)
    changeWinner(square2)
    return
  }

  if (checkSequence(square3, square6, square9)) {
    changeColor(square3, square6, square9)
    changeWinner(square3)
    return
  }

  if (checkSequence(square1, square5, square9)) {
    changeColor(square1, square5, square9)
    changeWinner(square1)
    return
  }

  if (checkSequence(square3, square5, square7)) {
    changeColor(square3, square5, square7)
    changeWinner(square3)
    
  }
  
}

function changeWinner(square) {
  winner = square.innerHTML
  selectedWinner.innerHTML += winner
}

function changeColor(square1, square2, square3  ) {
  square1.style.color = '#0f0'
  square2.style.color = '#0f0'
  square3.style.color = '#0f0'
  selectedWinner.style.fontSize = '3.8rem'
}

function checkSequence(square1, square2, square3) {
  var equals = false
  if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
    equals = true
    return true
  }
}

function reset() {
  winner = null
  selectedWinner.innerHTML = 'Winner: '
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '-'
    squares[i].style.color = '#eec'
  }
  changeTurn('x')
}
