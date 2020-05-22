var Knight = function (objectConstructor) {
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Knight.prototype.render = function(context) {
	
	var x = 100 * this.x;
	var y = 100 * this.y;
	var image = new Image();

	if (this.color == Config.figures_color.white) {
		image.src = Config.white_figures.knight;
	} else {
		image.src = Config.black_figures.knight;
	}

	image.onload = function () {
		context.drawImage(image, x, y, 100, 100);
	};
};

Knight.prototype.clicked = function (x, y){
	let figureCoordX = this.x * 100;
	let figureCoordY = this.y * 100;

	if((x>figureCoordX) && (x<figureCoordX + 100)
	&& (y>figureCoordY) && (y<figureCoordY + 100)) {
		this._selected = true;
		return true;
	}
	return false;
}

Knight.prototype.selected = function(){
	return this._selected;
}

Knight.prototype.setSelected = function(){
	this._selected = true;
}

Knight.prototype.move = function(x, y){
	let convertedX = Board.convertCoord(x);
	let convertedY = Board.convertCoord(y);

	this.x = convertedX;
	this.y = convertedY;
	this._selected = false;
	Board.rePaint();
	return true;
}