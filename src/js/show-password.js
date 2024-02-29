import eyeOff from '../images/eye-off-outline.svg';
import eye from '../images/eye-outline.svg';

const showPassword = ({ imageDiv, passwordInput }) => {
  const passwordElement = document.querySelector(passwordInput);

  const eyeIcon = new Image();
  const eyeOffIcon = new Image();

  eyeIcon.src = eye;
  eyeOffIcon.src = eyeOff;

  const imageContainer = document.querySelector(imageDiv);
  imageContainer.appendChild(eyeOffIcon);

  imageContainer.addEventListener('click', () => {
    if (passwordElement.type === 'password') {
      passwordElement.type = 'text';
      imageContainer.removeChild(eyeOffIcon);
      imageContainer.appendChild(eyeIcon);
    } else {
      passwordElement.type = 'password';
      imageContainer.removeChild(eyeIcon);
      imageContainer.appendChild(eyeOffIcon);
    }
  });

  return passwordElement;
};

export default showPassword;
