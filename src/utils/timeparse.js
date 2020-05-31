const timeParse = time => {
	const hh = Math.floor(time / 36000) || null;
	const mm = Math.floor((time % 36000) / 600);
	const ss = Math.floor((time % 600) / 10);
	const list = hh? [hh, mm, ss]: [mm, ss];

	return (list.map(
		elem => {
			return elem.toLocaleString('en-US', {
				minimumIntegerDigits: 2,
				useGrouping: false
			});
		}
	)).join(":");
}

export { timeParse };