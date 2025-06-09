const sumar = require('./index');

test('suma 2 + 2 es igual a 4', () => {
  expect(sumar(2, 2)).toBe(4);
});