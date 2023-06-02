import Validator from '../app';

const nameTrue = ['User-67a', 'user_7p', 'User'];
const nameFalse = ['User@56uui', 'Us!er56u', 'User55uж', '45user', 'user8', '_user', '-user', 'user-', 'user_', 'user_861254ui', 'Сергеjй'];

for (let i = 0; i < nameTrue.length; i += 1) {
  test(`Проверка на прохождение валидации ${i}`, () => {
    const validator = new Validator();
    const result = validator.validateUsername(nameTrue[i]);
    expect(result).toBeTruthy();
  });
}

for (let i = 0; i < nameFalse.length; i += 1) {
  test(`Проверка на НЕ прохождение валидации ${i}`, () => {
    const validator = new Validator();
    const result = validator.validateUsername(nameFalse[i]);
    expect(result).toBeFalsy();
  });
}
