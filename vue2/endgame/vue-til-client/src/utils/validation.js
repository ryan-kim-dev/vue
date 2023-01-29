/** @ 은 영어 소문자만, @ 필수, . 필수, @ 앞뒤로는 영어 소문자와 - 만 허용 */
export const validateEmail = (email) => {
  return email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/);
};

/** 영어 소문자, 숫자 포함  8자 이상 */
export const validatePassword = (password) => {
  return password.match(/(?=.*\d)(?=.*[a-z]).{8,}/);
};
