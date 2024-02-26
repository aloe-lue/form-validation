const emailValidation = ({
  emailElement,
  emailSpanElement,
  missingValueMsg,
  invalidEmailMsg,
}) => {
  const email = document.querySelector(emailElement);
  const emailSpan = document.querySelector(emailSpanElement);

  const invalidValue = () => {
    if (!email.validity.valid) {
      emailSpan.textContent = invalidEmailMsg;
      emailSpan.setAttribute('style', 'color: red;');
    }
  };

  const noValue = () => {
    if (email.validity.valueMissing) {
      emailSpan.textContent = missingValueMsg;
      emailSpan.setAttribute('style', 'color: red;');
    }
  };

  const validValue = () => {
    if (email.validity.valid) {
      emailSpan.textContent = '';
      emailSpan.setAttribute('style', 'color: red;');
    }
  };

  const emailCases = () => {
    invalidValue();
    validValue();
    noValue();
  };

  const focusoutEmail = () =>
    email.addEventListener('focusout', () => {
      emailCases();
    });

  return { focusoutEmail };
};

export default emailValidation;
