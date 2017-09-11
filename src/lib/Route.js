'use strict'

module.exports = function()
{
	return (handler) => (req, res, next) => Promise.resolve(handler).then(result => res.send(result), next);
}