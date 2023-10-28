import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('with additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with two modes (true false)', () => {
    const expected = 'someClass class1 class2 hover';
    expect(classNames(
      'someClass',
      { hover: true, scroll: false },
      ['class1', 'class2'])
    ).toBe(expected);
  });
});
