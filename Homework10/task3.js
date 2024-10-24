// 3) write a function that takes 2 parameter the height and width
// you draw that rectangle with #
// eg: 2, 2 =>
// ##
// ##

// eg: 3:4
// ####
// ####
// ####

function drawRect(h, w) {
  let result="";
  for (let i = 0; i < h; i++) {
    if(i>0) {
        result+="\n"
    }

    for (let l = 0; l < w; l++) {
        result+="#"
    }
  }
  console.log(result);
}

drawRect(3,4);
