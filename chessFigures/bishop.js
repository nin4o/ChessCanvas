var Bishop = function (objectConstructor) {
	this.color = objectConstructor.color;
	this.x = objectConstructor.x;
	this.y = objectConstructor.y;
	this._selected = false;
};

Bishop.prototype.render = function(context) {
	
	var x = 100 * this.x;
	var y = 100 * this.y;
	var image = new Image();

	if (this.color == Config.figures_color.white) {
		image.src = Config.white_figures.bishop;
	} else {
		image.src = Config.black_figures.bishop;
	}

	image.onload = function () {
		context.drawImage(image, x, y, 100, 100);
	};
};

Bishop.prototype.clicked = function (x, y){
	let figureCoordX = this.x * 100;
	let figureCoordY = this.y * 100;

	if((x>figureCoordX) && (x<figureCoordX + 100)
	&& (y>figureCoordY) && (y<figureCoordY + 100)) {
	//	this._selected = true;
		return true;
	}
	return false;
}

Bishop.prototype.selected = function(){
	return this._selected;
}

Bishop.prototype.setSelected = function(){
	this._selected = true;
}

Bishop.prototype.move = function(x, y){
	let convertedX = Board.convertCoord(x);
	let convertedY = Board.convertCoord(y);

	this.x = convertedX;
	this.y = convertedY;
	this._selected = false;
	Board.rePaint();
	return true;
}