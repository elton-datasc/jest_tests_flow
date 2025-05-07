import { soma, subtrai } from '../src/math.js';

describe('Funções matemáticas', () => {
  test('soma dois números', () => {
    expect(soma(2, 3)).toBe(5);
  });

  test('subtrai dois números', () => {
    expect(subtrai(5, 3)).toBe(2);
  });
});
