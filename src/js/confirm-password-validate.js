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

  const spanElement = document.querySelector(confirmSpan);
  const passwordElement = document.querySelector(passwordInput);
  const confirmPasswordElement = document.querySelector(confirmInput);

  spanElement.setAttribute('style', 'color: red;');

  const isNoValue = () => {
    if (passwordElement.validity.valueMissing) {
      spanElement.textContent = noValue;
    }

    if (!passwordElement.validity.valueMissing) {
      spanElement.textContent = '';
    }
  };

  const isNotValid = () => {
    if (
      !passwordElement.validity.valueMissing &&
      !passwordRegExp.test(passwordElement.value)
    ) {
      spanElement.textContent = invalidPassword;
    }
  };

  const isNotMatch = () => {
    if (
      passwordElement.value !== confirmPasswordElement.value &&
      !passwordElement.validity.valueMissing &&
      !confirmPasswordElement.validity.valueMissing
    ) {
      spanElement.textContent = notMatch;
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
    isNoValue();
    isNotValid();
    isNotMatch();
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
