const emailValidation = ({
  emailElement,
  emailSpanElement,
  missingValueMsg,
  invalidEmailMsg,
}) => {
  const email = document.querySelector(emailElement);
  const emailSpan = document.querySelector(emailSpanElement);
  emailSpan.setAttribute('style', 'color: red;');

  const invalidValue = ({ msg }) => {
    if (!email.validity.valid) {
      emailSpan.textContent = msg;
    }
  };

  const noValue = ({ msg }) => {
    if (email.validity.valueMissing) {
      emailSpan.textContent = msg;
    }
  };

  const validValue = () => {
    if (email.validity.valid) {
      emailSpan.textContent = '';
    }
  };

  const emailCases = () => {
    invalidValue({ msg: invalidEmailMsg });
    validValue();
    noValue({ msg: missingValueMsg });
  };

  const focusoutEmail = () =>
    email.addEventListener('focusout', () => {
      emailCases();
    });

  return { focusoutEmail };
};

export default emailValidation;
