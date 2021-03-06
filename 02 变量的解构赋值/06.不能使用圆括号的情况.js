/**
 * 变量声明语句中，不能带有圆括号
 */

// 全部报错
let [(a)] = [1];

let {x: (c)} = {};
let ({x: c}) = {};
let {(x: c)} = {};
let {(x): c} = {};

let { o: ({ p: p }) } = { o: { p: 2 } };

/**
 * 函数参数中，模式不能带有圆括号
 */

// 报错
function f([(z)]) { return z; }

/**
 * 赋值语句中，不能将整个模式，或嵌套模式中的一层，放在圆括号之中
 */

// 全部报错
({ p: a }) = { p: 42 };
([a]) = [5];

// 报错
[({ p: a }), { x: c }] = [{}, {}];
