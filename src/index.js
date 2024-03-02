import './style/style.css';
import emailValidation from './js/email-validation';
import selectCountryValidate from './js/select-country-validate';
import zipCodeValidate from './js/zip-code-validate';
import passwordValidate from './js/password-validate';
import confirmPasswordValidate from './js/confirm-password-validate';
import showPassword from './js/show-password';
import onSubmitValidate from './js/on-submit-validate';

window.addEventListener('DOMContentLoaded', () => {
  emailValidation({
    emailElement: 'input[id="email-address"]',
    emailSpanElement: 'input[id="email-address"] + span',
    missingValueMsg: 'This is required!',
    invalidEmailMsg: 'This is an invalid email!',
  }).focusoutEmail();

  selectCountryValidate({
    countryElement: 'select[id="select-country"]',
    countrySpanElement: 'select[id="select-country"] + span',
    zipCodeInput: 'input[id="zip-code"]',
    didNotSelect: 'Select your country from the list',
  }).focusOutFromCountry();

  zipCodeValidate({
    zipCodeElement: 'input[id="zip-code"]',
    zipCodeSpanElement: 'input[id="zip-code"] + span',
    missingZipCodeMsg: 'This is required!',
    selectedCountry: 'select[id="select-country"]',
    noSelectedCountryMsg: 'Select your country first!',
  }).focusoutFromZipCode();

  passwordValidate({
    passwordInput: 'input[id="user-password"]',
    passwordSpan: 'input[id="user-password"] + span',
    passwordGuide:
      "Password should have lowercase and uppercase letters, number, symbol, and minimum of 8 characters and 30 maximum! You don't want to use space! ",
    missingValueMsg: 'This is required!',
  }).focusoutPassword();

  confirmPasswordValidate({
    confirmInput: 'input[id="confirm-password"]',
    confirmSpan: 'input[id="confirm-password"] + span',
    passwordInput: 'input[id="user-password"]',
    noValue: 'This is required!',
    invalidPassword:
      "Password should have lowercase and uppercase letters, number, symbol, and minimum of 8 characters and 30 maximum! You don't want to use space! ",
    notMatch: 'Passwords do not match',
  }).focusoutConfirmPassword();

  showPassword({
    imageDiv: 'span[class="user-password"]',
    passwordInput: 'input[id="user-password"]',
  });

  showPassword({
    imageDiv: 'span[class="confirm-password"]',
    passwordInput: 'input[id="confirm-password"]',
  });

  onSubmitValidate({
    button: 'button[type="submit"]',
    email: 'input[type="email"]',
    select: 'select[id="select-country"]',
    zipCode: 'input[id="zip-code"]',
    password: 'input[id="user-password"]',
    confirmPassword: 'input[id="confirm-password"]',
  });
});
