import zipCodes from './zip-codes';

const selectCountryValidate = ({
  countryElement,
  countrySpanElement,
  didNotSelect,
  zipCodeInput,
}) => {
  const country = document.querySelector(countryElement);
  const countrySpan = document.querySelector(countrySpanElement);
  const zipCodeElement = document.querySelector(zipCodeInput);

  // when user leaves the country selection without even selecting an option from the list
  const didNotSelectAnyCountry = () => {
    if (country.validity.valueMissing) {
      countrySpan.textContent = didNotSelect;
      countrySpan.setAttribute('style', 'color: red;');
    }
  };

  const selectedCountry = () => {
    if (country.validity.valid) {
      countrySpan.textContent = '';
      countrySpan.setAttribute('style', 'color: black;');

      // you want to set a pattern for zip code input
      zipCodeElement.setAttribute(
        'pattern',
        `${zipCodes[country.value].pattern}`,
      );
    }
  };

  const countrySelectionCases = () => {
    didNotSelectAnyCountry();
    selectedCountry();
  };

  const focusOutFromCountry = () =>
    country.addEventListener('focusout', () => {
      countrySelectionCases();
    });

  return { focusOutFromCountry };
};

export default selectCountryValidate;
