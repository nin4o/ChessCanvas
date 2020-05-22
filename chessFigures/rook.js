var Rook = function (objectConstructor) {
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Rook.prototype.render = function(context) {
	
	var x = 100 * this.x;
	var y = 100 * this.y;
	var image = new Image();

	if (this.color == Config.figures_color.white) {
		image.src = Config.white_figures.rook;
	} else {
		image.src = Config.black_figures.rook;
	}

	image.onload = function () {
		context.drawImage(image, x, y, 100, 100);
	};
};

Rook.prototype.clicked = function (x, y){
	let figureCoordX = this.x * 100;
	let figureCoordY = this.y * 100;

	if((x>figureCoordX) && (x<figureCoordX + 100)
	&& (y>figureCoordY) && (y<figureCoordY + 100)) {
		this._selected = true;
		return true;
	}
	return false;
}

Rook.prototype.selected = function(){
	return this._selected;
}

Rook.prototype.setSelected = function(value){
	this._selected = value;
}

Rook.prototype.move = function(x, y){
	let convertedX = Board.convertCoord(x);
	let convertedY = Board.convertCoord(y);
	let figureCoordX = this.x;
	let figureCoordY = this.y;

	if(figureCoordX == convertedX){
		if(figureCoordY < convertedY){
			this.y = convertedY;
			Board.rePaint();
			return true;
		} else{
			this.y = convertedY;
			Board.rePaint();
			return true;
		}
	} else if (figureCoordY == convertedY){
		if(figureCoordX < convertedX){
			this.x = convertedX;
			Board.rePaint();
			return true;
		} else{
			this.x = convertedX;
			Board.rePaint();
			return true;
		}
	}

//	this.x = convertedX;
//	this.y = convertedY;
//	this._selected = false;
	Board.rePaint();
	
}