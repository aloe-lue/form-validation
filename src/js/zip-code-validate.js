import zipCodes from './zip-codes';

const zipCodeValidate = ({
  zipCodeElement,
  zipCodeSpanElement,
  selectedCountry,
  missingZipCodeMsg,
  noSelectedCountryMsg,
}) => {
  const zipCode = document.querySelector(zipCodeElement);
  const zipCodeSpan = document.querySelector(zipCodeSpanElement);
  const selectedCountryElement = document.querySelector(selectedCountry);
  zipCodeSpan.setAttribute('class', 'zip-code-span');

  const didNotSelectAnyCountry = () => {
    // tell the user after they type that they need to select country to check wether their zip code is valid or not
    if (selectedCountryElement.validity.valueMissing) {
      zipCodeSpan.textContent = noSelectedCountryMsg;
    }
  };

  const zipCodeIsMissing = () => {
    // even if they selected country but didn't input zip code value
    if (
      !selectedCountryElement.validity.valueMissing &&
      zipCode.validity.valueMissing
    ) {
      zipCodeSpan.textContent = missingZipCodeMsg;
    }
  };

  const zipCodeIsInValid = () => {
    // tell user that the zipCode that they have input is invalid and doesn't match therefore guide the user to write
    if (
      !selectedCountryElement.validity.valueMissing &&
      !zipCode.validity.valueMissing &&
      !zipCode.validity.valid
    ) {
      zipCodeSpan.textContent =
        zipCodes[selectedCountryElement.value].formatGuide;
    }
  };

  const zipCodeIsValid = () => {
    if (
      !selectedCountryElement.validity.valueMissing &&
      !zipCode.validity.valueMissing &&
      zipCode.validity.valid
    ) {
      zipCodeSpan.textContent = '';
    }
  };

  const zipCodeCasesOnFocusout = () => {
    didNotSelectAnyCountry();
    zipCodeIsMissing();
    zipCodeIsInValid();
    zipCodeIsValid();
  };

  const focusoutFromZipCode = () =>
    zipCode.addEventListener('focusout', zipCodeCasesOnFocusout);

  return { focusoutFromZipCode };
};

export default zipCodeValidate;
