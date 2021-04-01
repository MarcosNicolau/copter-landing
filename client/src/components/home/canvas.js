function Star(ctx, canvas) {
	const x = Math.random() * canvas.offsetWidth;
	const y = Math.random() * canvas.offsetHeight;
	const maxShadow = 10;
	const minShadow = 1;
	let shadowblur = Math.floor(Math.random() * 10) + 1;
	let incrementer = 1;

	this.draw = () => {
		ctx.fillStyle = "white";
		ctx.beginPath();
		ctx.arc(x, y, 1.5, 0, 2 * Math.PI);
		ctx.fill();
		ctx.shadowColor = "white";
		ctx.shadowBlur = shadowblur;
	};

	this.update = () => {
		if (shadowblur === maxShadow) incrementer = -1;
		if (shadowblur === minShadow) incrementer = +1;
		shadowblur += incrementer;
		this.draw();
	};

	this.draw();
}

const drawCanvas = (canvas, windowWidth) => {
	const ctx = canvas.getContext("2d");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	const number = windowWidth <= 1000 ? 15 : 200;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const stars = [];
	for (let i = 0; i <= number; i++) {
		stars.push(new Star(ctx, canvas));
	}
	const updateCanvas = () => {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		stars.forEach((star) => star.update());
	};
	if (window.animation) window.clearInterval(window.animation);
	window.animation = window.setInterval(updateCanvas, 100);
};

export default drawCanvas;
