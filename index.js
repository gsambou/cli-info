/**
 * CLI Alerts.
 *
 * Cross platform CLI Alerts with colors.
 * Works on macOS, Linux, and Windows.
 * Alerts: `success`, `info`, `warning`, `error`.
 * and add Custum Alert
 *
 * @author gsambou <https://gsambou.com/>
 */

const chalk = require('chalk');
const sym = require('log-symbols');

const alert = (options) => {
	const defaultOptions = {
		type: `error`,
		msg: `You forgot to define all options.`,
		name: ``,
	};
	const params = { ...defaultOptions, ...options };
	const { type, msg, name } = params;
	const icons = {
		success: sym.success,
		warning: sym.warning,
		info: sym.info,
		error: sym.error,
	};
	const colors = {
		success: chalk.green,
		warning: chalk.keyword('orange'),
		info: chalk.blue,
		error: chalk.red.bold,
	};
	const color = colors[type];
	const colorBg = color.inverse;
	const icon = icons[type];
	const status = name ? ` ${name.toUpperCase()} ` : ` ${type.toUpperCase()} `;

	console.log(`\n${icon}  ${colorBg(status)}  ${color(msg)}\n`);
};

module.exports = alert;
