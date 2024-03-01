const onSubmitValidate = ({
  button,
  email,
  select,
  zipCode,
  password,
  confirmPassword,
}) => {
  const submitBtn = document.querySelector(button);
  const emailInput = document.querySelector(email);
  const selectCountry = document.querySelector(select);
  const zipCodeInput = document.querySelector(zipCode);
  const userPassword = document.querySelector(password);
  const userConfirmPassword = document.querySelector(confirmPassword);

  const isEmailValid = () => {
    if (!emailInput.validity.valid) {
      emailInput.reportValidity();
      return 1;
    }
    return 0;
  };

  const didSelectACountry = () => {
    if (selectCountry.validity.valueMissing) {
      selectCountry.reportValidity();
      return 1;
    }
    return 0;
  };

  const isZipCodeValid = () => {
    if (!zipCodeInput.validity.valid) {
      zipCodeInput.reportValidity();
      return 1;
    }
    return 0;
  };

  const isPasswordMatched = () => {
    if (
      userPassword.value !== userConfirmPassword.value ||
      // report validity even when their value is missing
      (userConfirmPassword.validity.valueMissing &&
        userPassword.validity.valueMissing)
    ) {
      userConfirmPassword.reportValidity();
      userPassword.reportValidity();
      return 1;
    }
    return 0;
  };

  const getTotal = (array) => array.reduce((acc, currVal) => acc + currVal, 0);

  const dontSendToServer /** ayiie */ = (e) => {
    const toSubmit = [
      isPasswordMatched(),
      isZipCodeValid(),
      didSelectACountry(),
      isEmailValid(),
    ];

    if (getTotal(toSubmit) > 0) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  submitBtn.addEventListener('click', (e) => {
    dontSendToServer(e);
  });
};

export default onSubmitValidate;
