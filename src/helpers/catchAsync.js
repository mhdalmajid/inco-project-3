const catchAsync = (handler) => (...args) => handler(...args).catch(args[2])
module.exports = { catchAsync }
