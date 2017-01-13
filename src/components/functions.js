function formatValue(x) {
	// if (x.toString().indexOf('.') > -1) {
	x = parseFloat(Math.round(x * 100) / 100).toFixed(2);
	x = x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
	// }
	return x;
}

function SwitchView(target) {
	let views = document.getElementsByClassName('view');
	for (let i = 0; i < views.length; i++ ) {
		views[i].classList.remove('active');
	}
	if (target) {
		let id = 'view--' + target;
		document.getElementById(id).classList.add('active');
	}
}

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

export {formatValue, SwitchView, months};
