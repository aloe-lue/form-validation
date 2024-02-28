const confirmPasswordValidate = ({
  confirmInput,
  confirmSpan,
  passwordInput,
  noValue,
  invalidPassword,
  notMatch,
}) => {
  const passwordRegExp =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/;

  const isNoValue = ({ password, span, msg }) => {
    const spanElement = document.querySelector(span);
    const passwordElement = document.querySelector(password);
    spanElement.setAttribute('style', 'color: red;');

    if (passwordElement.validity.valueMissing) {
      spanElement.textContent = msg;
    }

    if (!passwordElement.validity.valueMissing) {
      spanElement.textContent = '';
    }
  };

  const isNotValid = ({ password, span, regExp, msg }) => {
    const passwordElement = document.querySelector(password);
    const spanElement = document.querySelector(span);

    if (
      !passwordElement.validity.valueMissing &&
      !regExp.test(passwordElement.value)
    ) {
      spanElement.textContent = msg;
    }
  };

  const isNotMatch = ({ password, span, confirmPassword, msg }) => {
    const passwordElement = document.querySelector(password);
    const spanElement = document.querySelector(span);
    const confirmPasswordElement = document.querySelector(confirmPassword);

    if (
      passwordElement.value !== confirmPasswordElement.value &&
      !passwordElement.validity.valueMissing &&
      !confirmPasswordElement.validity.valueMissing
    ) {
      spanElement.textContent = msg;
    }
    if (
      passwordElement.value === confirmPasswordElement.value &&
      !passwordElement.validity.valueMissing &&
      !confirmPasswordElement.validity.valueMissing
    ) {
      spanElement.textContent = '';
    }
  };

  const confirmingPasswordCases = () => {
    isNoValue({ password: confirmInput, span: confirmSpan, msg: noValue });

    isNotValid({
      password: confirmInput,
      span: confirmSpan,
      regExp: passwordRegExp,
      msg: invalidPassword,
    });

    isNotMatch({
      password: passwordInput,
      span: confirmSpan,
      confirmPassword: confirmInput,
      msg: notMatch,
    });
  };

  const focusoutConfirmPassword = () => {
    const confirmPasswordInputElement = document.querySelector(confirmInput);

    confirmPasswordInputElement.addEventListener(
      'focusout',
      confirmingPasswordCases,
    );
  };
  return { focusoutConfirmPassword };
};

export default confirmPasswordValidate;
