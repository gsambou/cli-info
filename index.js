/**
 * CLI info.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 * and add Custum Alert
 *
 * @author gsambou <https://gsambou.com/>
 */

import chalk from 'chalk';
import sym from 'log-symbols';

const alert = (...options) => {
	const params = [...options];
	const [type, msg, name] = params;
	const types = new Set(['success', 'error', 'warning', 'info']);
	const icons = {
		success: sym.success,
		warning: sym.warning,
		info: sym.info,
		error: sym.error,
	};

	try {
		const colors = {
			success: chalk.green,
			warning: chalk.keyword('orange'),
			info: chalk.blue,
			error: chalk.red.bold,
		};

		const data = {
			color: colors[type],
			icon: icons[type],
			colorBg: types.has(type) ? colors[type].inverse : chalk.red.bold.inverse,
			status: name ? `${name.toUpperCase()}` : `${type.toUpperCase()}`,
		};
		if (!types.has(type)) {
			throw new Error(`${icons.error} ${data.colorBg(type)} is not supported now`);
		}
		console.log(`\n${data.icon}  ${data.colorBg(data.status)}  ${data.color(msg)}\n`);
	} catch ({ message }) {
		console.log(message);
	}
};

/**
 * usage:
 *      alert(`status`, `message`, [`custom status name`]);
 *      alert(`success`, `message`, `validated`);
 *      alert(`success`, `message`);
 *
 */
export default alert;
