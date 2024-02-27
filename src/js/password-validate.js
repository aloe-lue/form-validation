// todo: you want to make this code loose and later on do it with the other modules too

// guide the user to input a good password
const passwordValidate = ({
  passwordInput,
  passwordSpan,
  missingValueMsg,
  passwordGuide,
}) => {
  const password = document.querySelector(passwordInput);
  const passwordSpanElement = document.querySelector(passwordSpan);
  passwordSpanElement.setAttribute('style', 'color: red;');

  // this passwordRegExp does what you want but it doesn't include symbols such as _
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

  const noValue = () => {
    // let user to input a value on the field before validating them
    if (password.validity.valueMissing) {
      // tell user that this field is required
      passwordSpanElement.textContent = missingValueMsg;
    }
  };

  const invalidPassword = () => {
    // let user input but check if it satisfies the password regExp
    if (
      !password.validity.valueMissing &&
      !passwordRegExp.test(password.value)
    ) {
      passwordSpanElement.textContent = passwordGuide;
    }
  };

  const validPassword = () => {
    if (
      !password.validity.valueMissing &&
      passwordRegExp.test(password.value)
    ) {
      passwordSpanElement.textContent = '';
    }
  };

  const passwordCases = () => {
    noValue();
    invalidPassword();
    validPassword();
  };

  const focusoutPassword = () =>
    password.addEventListener('focusout', passwordCases);

  return { focusoutPassword };
};

export default passwordValidate;
