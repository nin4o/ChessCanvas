var canvas = document.getElementById("myCanvas");

var ctx=canvas.getContext("2d");

Board.init(ctx);

canvas.addEventListener("click", function (click) {
    let x = click.x;
    let y = click.y;

    let figureClicked = Board.figureClicked(x, y);
    let selected = Board.selected(x, y);

    //console.log(figureClicked);
   // console.log(selected);

    if(selected && !figureClicked){
        Board.move(x, y);
    }
});