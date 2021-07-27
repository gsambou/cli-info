const alert = require('./index');

alert();

alert({
	type: `warning`,
	msg: `All done!`,
});
alert({
	type: `success`,
	msg: `All done!`,
	name: `Done`,
});
alert({
	type: `info`,
	msg: `All done!`,
});
alert({
	type: `error`,
	msg: `All done!`,
});
