// 实现Array.flat(Infinity)

const isArray = Array.isArray

const flat = arr => {
    return arr.reduce((acc, val) => acc.concat(isArray(val) ? flat(val) : val), []);
}

flat([1, 2, [3, [4, [5, 6]]]]);
// [1, 2, 3, 4, 5, 6]