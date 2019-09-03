const odex = require('odex');

let s = new odex.Solver(1);

const f = function(x, y) {
	return y;
};

//s.solve(f, 0, [1], 1, (n,x0,x1,y) => console.log(n,x0,x1,y)).y

const LotkaVolterra = (a, b, c, d) => (
	(x, y) => ([ a * y[0] - b * y[0] * y[1], c * y[0] * y[1] - d * y[1] ])
);

s2 = new odex.Solver(2);
//console.log(s2.solve(LotkaVolterra(2/3, 4/3, 1, 1), 0, [1, 1], 6));

var airy = function(x, y) {
	return [y[1], x * y[0]];
};

const systemTest = (x, y) => [
	2 * y[0] - 5 * y[1] + 3,
	5 * y[0] - 6 * y[1] + 1,
];

console.log(
	s2.solve(systemTest, 0, [6, 5], 1)
);
