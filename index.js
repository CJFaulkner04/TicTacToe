const boxes = document.querySelectorAll('.box');

let xWin = document.getElementById('xWin');
let oWin = document.getElementById('oWin');
let draws = document.getElementById('draw');

// buttons
const resBtn = document.querySelector('.restart');
const clearBtn = document.querySelector('.clear');
const xFirstBtn = document.getElementById('x-first');
const oFirstBtn = document.getElementById('o-first');

// grid animation
let column1 = document.querySelector('.grid div:nth-child(10)');
let column2 = document.querySelector('.grid div:nth-child(11)');
let row1 = document.querySelector('.grid div:nth-child(12)');
let row2 = document.querySelector('.grid div:nth-child(13)');

let turn = true;
let xTurn = true;
let oTurn = false;
let winner = false;
let draw = false;
let won = '';
let xCount = 0;
let oCount = 0;
let drawCount = 0;
let xWinCount = 0;
let oWinCount = 0;

boxes.forEach(b =>{
    b.addEventListener('click', () => {
        if(b.innerText == '' && !winner && !draw){
            //x turn
            if(turn){
                b.innerText = 'X';
                b.classList.add('x');
                xCount++;
                turn = false;
                checkWin()
                if(winner){
                    won = 'X';
                    xWinCount++;
                    xWin.innerText=xWinCount;
                }
            } 
            //o turn
            else {
                b.innerText = 'O';
                b.classList.add('o');
                oCount++;
                turn = true;
                checkWin()
                if(winner){
                    won = 'O';
                    oWinCount++;
                    oWin.innerText=oWinCount;
                }
            }
            
            checkDraw()
            
        }      
    })
});

  let checkWin = () => {
      if(boxes[0].innerText != '' && ((boxes[0].innerText == boxes[1].innerText) && boxes[1].innerText == boxes[2].innerText)||boxes[3].innerText != '' && ((boxes[3].innerText == boxes[4].innerText) && boxes[4].innerText == boxes[5].innerText)||boxes[6].innerText != '' &&((boxes[6].innerText == boxes[7].innerText) && boxes[7].innerText == boxes[8].innerText)
        || boxes[0].innerText != '' && ((boxes[0].innerText == boxes[3].innerText) && boxes[3].innerText == boxes[6].innerText)|| boxes[1].innerText != '' && ((boxes[1].innerText == boxes[4].innerText) && boxes[4].innerText == boxes[7].innerText)|| boxes[2].innerText != '' && ((boxes[2].innerText == boxes[5].innerText) && boxes[5].innerText == boxes[8].innerText)
        || boxes[0].innerText != '' && ((boxes[0].innerText == boxes[4].innerText) && boxes[4].innerText == boxes[8].innerText)|| boxes[2].innerText != '' && ((boxes[2].innerText == boxes[4].innerText) && boxes[4].innerText == boxes[6].innerText)){
        console.log('winner');
        xCount = 0;
        oCount = 0;
        winner = true;
      }
      
  } 

  let checkDraw = () => {
    if((xCount == 5 || oCount == 5) && !winner){
        console.log('draw');
        drawCount++;
        draws.innerText = drawCount;
        draw = true;
        xCount = 0;
        oCount = 0;
    }
  }

  let restart = () => {
    boxes.forEach(b => {
        b.innerText = '';
        b.classList.remove('o');
        b.classList.remove('x');
    })

    winner = false;
    draw = false;
    xCount = 0;
    oCount = 0;

    if(xTurn){
        turn = true;
    } else {
        turn = false
    }
  }

  let clear = () => {
    boxes.forEach(b => {
        b.innerText = '';
        b.classList.remove('o');
        b.classList.remove('x');
    })

    winner = false;
    draw = false;
    drawCount = 0;
    xWinCount = 0;
    oWinCount = 0;
    xCount = 0;
    oCount = 0;
    draws.innerText = drawCount;
    oWin.innerText=oWinCount;
    xWin.innerText=xWinCount;

    if(xTurn){
        turn = true;
    } else {
        turn = false
    }

    //animation
    column1.style.animation = "none";
    column2.style.animation = "none";
    row1.style.animation = "none";
    row2.style.animation = "none";

    void column1.offsetWidth;
    void column2.offsetWidth;
    void row1.offsetWidth;
    void row2.offsetWidth;

    column1.style.animation = "heightGrow .3s ease-out 0s forwards";
    column2.style.animation = "heightGrow .3s ease-out 0s forwards";
    row1.style.animation = "widthGrow .3s ease-out 0s forwards";
    row2.style.animation = "widthGrow .3s ease-out 0s forwards";
    
  }

  let xFirst = () => {
    turn = true;
    xTurn = true;
    oTurn = false;
    xFirstBtn.style.backgroundColor = '#6ff1e4';
    oFirstBtn.style.backgroundColor = '#bbeae6';
  }

  let oFirst = () => {
    turn = false;
    oTurn = true;
    xTurn = false;
    oFirstBtn.style.backgroundColor = '#6ff1e4';
    xFirstBtn.style.backgroundColor = '#bbeae6';
  }

  resBtn.addEventListener('click', () => {
    restart()
  });

  clearBtn.addEventListener('click', () => {
    clear()
  });

  xFirstBtn.addEventListener('click', () => {
    xFirst()
    // restart()
  });
  oFirstBtn.addEventListener('click', () => {
    oFirst()
    // restart()
  });