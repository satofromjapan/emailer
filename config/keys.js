if (process.env.NODE_ENV === 'production') {
	//for prod
	module.exports = require('./prod');
} else {
	//for dev
	module.exports = require('./dev');
}
