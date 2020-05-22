var Pawn = function (objectConstructor) {
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this.firstMove = true;
	this._selected = false;
};

Pawn.prototype.render = function(context) {
	
	var x = 100 * this.x;
	var y = 100 * this.y;
	var image = new Image();

	if (this.color == Config.figures_color.white) {
		image.src = Config.white_figures.pawn;
	} else {
		image.src = Config.black_figures.pawn;
	}

	image.onload = function () {
		context.drawImage(image, x, y, 100, 100);
	};
};

Pawn.prototype.clicked = function (x, y){
	let figureCoordX = this.x * 100;
	let figureCoordY = this.y * 100;

	if((x>figureCoordX) && (x<figureCoordX + 100)
	&& (y>figureCoordY) && (y<figureCoordY + 100)) {
		this._selected = true;
		return true;
	}
	return false;
}

Pawn.prototype.selected = function(){
	return this._selected;
}

Pawn.prototype.setSelected = function(value){
	this._selected = value;
}

Pawn.prototype.move = function(x, y){
	let convertedX = Board.convertCoord(x);
	let convertedY = Board.convertCoord(y);
	
	if(this.firstMove) {
	//	console.log("proba");
	//	console.log("convertedY:" + convertedY);
	//	console.log("fColor" +this.color);
		if((convertedY >= (this.y - 2) && this.x == convertedX)
		&& this.color == Config.figures_color.white){
			console.log("1");
			this.x = convertedX;
			this.y = convertedY;
			this._selected = false;
			Board.rePaint();
			this.firstMove = false;
			return true;
		} else if ((convertedY <= (this.y + 2) && this.x == convertedX)
		&& this.color == Config.figures_color.black){
			console.log("2");
			this.x = convertedX;
			this.y = convertedY;
			this._selected = false;
			Board.rePaint();
			this.firstMove = false;
			return true;
		}
	} else {
		if((convertedY >= (this.y - 1) && this.x == convertedX)
		&& this.color == Config.figures_color.white){
			console.log("3");
			this.x = convertedX;
			this.y = convertedY;
			this._selected = false;
			Board.rePaint();
			this.firstMove = false;
			return true;
		} else if ((convertedY <= (this.y + 1) && this.x == convertedX)
			&& this.color == Config.figures_color.black){
				console.log("4");
				this.x = convertedX;
				this.y = convertedY;
				this._selected = false;
				Board.rePaint();
				this.firstMove = false;
				return true;
			}
	}
//	this.x = convertedX;
//	this.y = convertedY;
//	this._selected = false;
//	Board.rePaint();
	return false;
}