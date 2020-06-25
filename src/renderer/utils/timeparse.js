const timeParse = time => {
	const hh = Math.floor(time / 3600) || null;
	const mm = Math.floor((time % 3600) / 60);
	const ss = Math.floor((time % 60));
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

export default timeParse;