import zipCodes from './zip-codes';

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

  // ? see to it that all of the value's are valid and filled properly
  const isEmailValid = () => {
    if (!emailInput.validity.valid) {
      return 1;
    }
    return 0;
  };

  // if a user has already selected a country you want to return 1 so it is true;
  const didSelectACountry = () => {
    if (selectCountry.validity.valueMissing) {
      return 1;
    }
    return 0;
  };

  // you want to check if the zip code validity is valid otherwise
  const isZipCodeValid = () => {
    if (!zipCodeInput.validity.valid) {
      return 1;
    }
    return 0;
  };

  // you want to check if the user password is match with confirm password
  const isPasswordMatched = () => {
    if (userPassword.value !== userConfirmPassword.value) {
      return 1;
    }
    return 0;
  };

  const getTotal = (array) => array.reduce((acc, currVal) => acc + currVal, 0);

  // todo: report validity heirarchy if user did not enter a valid email => reportValidity()
  /* * * * * */ // todo: next => select; next => zip code; next => passwords;

  // you want user to prevent user from submitting the form to server when to submit cases are true;
  const dontSendToServer /** ayiie */ = (e) => {
    const toSubmit = [
      isEmailValid(),
      didSelectACountry(),
      isEmailValid(),
      isZipCodeValid(),
      isPasswordMatched(),
    ];

    if (getTotal(toSubmit) > 0) {
      e.preventDefault();
      return false;
    }
    return true;
  };

  // ?  warn the user what they have left to do

  // here are the things to keep in mind to allow the submission all of the inputs including select element should return 1 otherwise might prevent this form from submitting to server side as if i have a server side hehe
  submitBtn.addEventListener('click', (e) => {
    // know that in JavaScript function can be values so iterate all of the funtions to know if all of them returns 1 then put them in the server
    dontSendToServer(e);
  });
};

export default onSubmitValidate;
