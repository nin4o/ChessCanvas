var Board = {};

Board.init = function(ctx){
    this.figuresCollection = [];
    this.paintBoard(ctx);
    this.loadBoard(ctx);
    this.ctx = ctx;
    this.playerTurn = Config.figures_color.white;
};

Board.paintBoard = function(ctx){
    for(i=0;i<8;i++){
        for(j=0;j<8;j++){
            ctx.moveTo(0,100*j);
            ctx.lineTo(800,100*j);
            ctx.stroke();
     
        ctx.moveTo(100*i,0);
        ctx.lineTo(100*i,800);
        ctx.stroke();
        var left = 0;
    for(var a=0;a<8;a++) {
        for(var b=0; b<8;b+=2) {
          startX = b * 100;
          if(a%2==0) startX = (b+1) * 100;
          ctx.fillStyle = "#d3d3d3";
          ctx.fillRect(startX + left,(a*100) ,100,100);
        }}
    }}
}

Board.loadBoard = function(ctx){

    var loadFigures = function () {
		var pawnWhiteConstructor_1 = {
			color: Config.figures_color.white,
			x: 0,
			y: 6
        };

        var pawnWhiteConstructor_2 = {
			color: Config.figures_color.white,
			x: 1,
			y: 6
        };

        var pawnWhiteConstructor_3 = {
			color: Config.figures_color.white,
			x: 2,
			y: 6
        };

        var pawnWhiteConstructor_4 = {
			color: Config.figures_color.white,
			x: 3,
			y: 6
        };

        var pawnWhiteConstructor_5 = {
			color: Config.figures_color.white,
			x: 4,
			y: 6
        };

        var rookWhiteConstructor = {
            color: Config.figures_color.white,
            x: 4,
            y: 7
        };

        var knightWhiteConstructor = {
            color: Config.figures_color.white,
            x: 3,
            y: 7
        };

        var bishopWhiteConstructor = {
            color: Config.figures_color.white,
            x: 2,
            y: 7
        };

        var queenWhiteConstructor = {
            color: Config.figures_color.white,
            x: 1,
            y: 7
        };

        var kingWhiteConstructor = {
            type: Config.white_figures.king,
            color: Config.figures_color.white,
            x: 0,
            y: 7
        };

        var pawnBlackConstructor_1 = {
			color: Config.figures_color.black,
			x: 0,
			y: 1
        };

        var pawnBlackConstructor_2 = {
			color: Config.figures_color.black,
			x: 1,
			y: 1
        };

        var pawnBlackConstructor_3 = {
			color: Config.figures_color.black,
			x: 2,
			y: 1
        };

        var pawnBlackConstructor_4 = {
			color: Config.figures_color.black,
			x: 3,
			y: 1
        };

        var pawnBlackConstructor_5 = {
			color: Config.figures_color.black,
			x: 4,
			y: 1
        };

        var rookBlackConstructor = {
            color: Config.figures_color.black,
            x: 4,
            y: 0
        };

        var knightBlackConstructor = {
            color: Config.figures_color.black,
            x: 3,
            y: 0
        };

        var bishopBlackConstructor = {
            color: Config.figures_color.black,
            x: 2,
            y: 0
        };

        var queenBlackConstructor = {
            color: Config.figures_color.black,
            x: 1,
            y: 0
        };

        var kingBlackConstructor = {
            color: Config.figures_color.black,
            x: 0,
            y: 0
        };
    
        
        var pawn_1 = new Pawn(pawnWhiteConstructor_1);
        var pawn_2 = new Pawn(pawnWhiteConstructor_2);
        var pawn_3 = new Pawn(pawnWhiteConstructor_3);
        var pawn_4 = new Pawn(pawnWhiteConstructor_4);
        var pawn_5 = new Pawn(pawnWhiteConstructor_5);
        var whiteRook = new Rook(rookWhiteConstructor);
        var whiteKnight = new Knight(knightWhiteConstructor);
        var whiteBishop = new Bishop(bishopWhiteConstructor);
        var whiteQueen = new Queen(queenWhiteConstructor);
        var whiteKing = new King(kingWhiteConstructor);

        var pawn_1b = new Pawn(pawnBlackConstructor_1);
        var pawn_2b = new Pawn(pawnBlackConstructor_2);
        var pawn_3b = new Pawn(pawnBlackConstructor_3);
        var pawn_4b = new Pawn(pawnBlackConstructor_4);
        var pawn_5b = new Pawn(pawnBlackConstructor_5);
        var blackRook = new Rook(rookBlackConstructor);
        var blackKnight = new Knight(knightBlackConstructor);
        var blackBishop = new Bishop(bishopBlackConstructor);
        var blackQueen = new Queen(queenBlackConstructor);
        var blackKing = new King(kingBlackConstructor);

        Board.figuresCollection.push(pawn_1);
        Board.figuresCollection.push(pawn_2);
        Board.figuresCollection.push(pawn_3);
        Board.figuresCollection.push(pawn_4);
        Board.figuresCollection.push(pawn_5);
        Board.figuresCollection.push(whiteRook);
        Board.figuresCollection.push(whiteKnight);
        Board.figuresCollection.push(whiteBishop);
        Board.figuresCollection.push(whiteQueen);
        Board.figuresCollection.push(whiteKing);


        Board.figuresCollection.push(pawn_1b);
        Board.figuresCollection.push(pawn_2b);
        Board.figuresCollection.push(pawn_3b);
        Board.figuresCollection.push(pawn_4b);
        Board.figuresCollection.push(pawn_5b);
        Board.figuresCollection.push(blackRook);
        Board.figuresCollection.push(blackKnight);
        Board.figuresCollection.push(blackBishop);
        Board.figuresCollection.push(blackQueen);
        Board.figuresCollection.push(blackKing);

        Board.paintFigures();
     };
        loadFigures();
};

Board.paintFigures = function(){
    console.log(Board.figuresCollection);
    for (var i = 0; i < Board.figuresCollection.length; i++) {
        Board.figuresCollection[i].render(ctx);
    }
};

Board.figureClicked = function (x, y){
    
    for(let figure of Board.figuresCollection){
       
        if(figure.clicked(x, y)) {
            let = figureColor = figure.color;
            let = playerTurn = Board.playerTurn;
            console.log("player: " + Board.playerTurn);
            if(figureColor == playerTurn){
                for(let figure of Board.figuresCollection){
                    if(figure.selected()){
                        figure.setSelected(false);
                    }
                }
                figure.setSelected(true);
                return true;
            }
        }
       
    }
    return false;
}

Board.selected = function (){
    let count = 0;
    for(let figure of Board.figuresCollection){
        let result = figure.selected();
        if(result){
            count++;
        }
    }
    if(count > 0){
        return true;
    }
    return false;
}

Board.convertCoord = function(coordinate){
    if(coordinate < 100){
        return 0;
    }else if (coordinate > 100 && coordinate < 200){
        return 1;
    }else if (coordinate > 200 && coordinate < 300){
        return 2;
    }else if (coordinate > 300 && coordinate < 400){
        return 3;
    }else if (coordinate > 400 && coordinate < 500){
        return 4;
    }else if (coordinate > 500 && coordinate < 600){
        return 5;
    }else if (coordinate > 600 && coordinate < 700){
        return 6;
    }else {
        return 7;
    }
}

Board.rePaint = function(){
    Board.ctx.clearRect(0,0,800,800);
    Board.paintBoard(Board.ctx);
    Board.paintFigures();
}

Board.move = function (x, y){
    for(let figure of Board.figuresCollection){
        if(figure.selected()){
           let moved = figure.move(x, y);
            
           if(moved) {
               let figureColor = figure.color;
            console.log("f color: " + figureColor);
                if(figureColor == Config.figures_color.white){
                    Board.playerTurn = Config.figures_color.black;
                }   else {
                    Board.playerTurn = Config.figures_color.white;
                }
           }

        }
    }
}
