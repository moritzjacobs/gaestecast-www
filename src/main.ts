import "./style.css";

type Vector = [number, number];

const normalizeVec = ([x, y]: Vector) => {
	const len = Math.sqrt(x * x + y * y);
	return [x / len, y / len];
};

const main = () => {
	let hasMouseEvent = false;
	const followEls = document.querySelectorAll("[data-follow-mouse]");

	followEls.forEach((el) => {
		if (!(el instanceof SVGElement)) return;
		const setting = el.dataset.followMouse;
		if (!setting) return;
		const maxDistanceSetting = parseInt(setting);
		if (Number.isNaN(maxDistanceSetting)) return;

		let pos: Vector | null = null;

		const locate = () => {
			const { x, y } = el.getBoundingClientRect();
			pos = [x, y];
		};

		locate();

		window.addEventListener("resize", locate);

		const move = ({ clientX, clientY }: MouseEvent) => {
			if (!pos) return;
			const [x, y] = pos;

			const [fullVectorX, fullVectorY] = [
				clientX - (x ?? 0),
				clientY - (y ?? 0),
			];

			const maxDistance = Math.min(
				Math.sqrt(
					Math.sqrt(
						fullVectorX * fullVectorX + fullVectorY * fullVectorY,
					),
				),
				maxDistanceSetting,
			);

			const [vectorX, vectorY] = normalizeVec([fullVectorX, fullVectorY]);
			const newX = vectorX * maxDistance;
			const newY = vectorY * maxDistance;
			el.style.transform = `translate(${newX}px, ${newY}px)`;

			if (!hasMouseEvent) {
				setTimeout(() => {
					el.style.transition = "none";
				}, 300);
			}

			hasMouseEvent = true;
		};

		window.addEventListener("mousemove", move);
	});
};
main();
