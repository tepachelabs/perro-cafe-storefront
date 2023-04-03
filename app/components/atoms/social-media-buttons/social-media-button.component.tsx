import {FC} from 'react';

import {ButtonProps, StyledButton} from './social-media-button.styles';

export const SocialMediaButton: FC<ButtonProps> = ({
  socialMediaIcon,
  ...props
}) => {
  let icon;
  switch (socialMediaIcon) {
    case 'Instagram':
      icon = (
        <a
          href="https://www.instagram.com/cultoperrocafe/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="socialMedia">
            <svg
              className="socialMediaIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 19.13 19.13"
            >
              <g id="diseño">
                <path
                  d="m14.63,3.42c-.62,0-1.12.5-1.12,1.12s.5,1.12,1.12,1.12,1.12-.5,1.12-1.12-.5-1.12-1.12-1.12Z"
                  className="iconColorSVG"
                />
                <path
                  d="m9.65,4.85c-2.6,0-4.71,2.11-4.71,4.71s2.11,4.71,4.71,4.71,4.71-2.11,4.71-4.71-2.11-4.71-4.71-4.71Zm0,7.73c-1.66,0-3.02-1.35-3.02-3.02s1.35-3.02,3.02-3.02,3.02,1.35,3.02,3.02-1.35,3.02-3.02,3.02Z"
                  className="iconColorSVG"
                />
                <path
                  d="m13.39,19.13h-7.64c-3.17,0-5.75-2.58-5.75-5.75v-7.64C0,2.58,2.58,0,5.75,0h7.64c3.17,0,5.75,2.58,5.75,5.75v7.64c0,3.17-2.58,5.75-5.75,5.75ZM5.75,1.8c-2.18,0-3.95,1.77-3.95,3.95v7.64c0,2.18,1.77,3.95,3.95,3.95h7.64c2.18,0,3.95-1.77,3.95-3.95v-7.64c0-2.18-1.77-3.95-3.95-3.95h-7.64Z"
                  className="iconColorSVG"
                />
              </g>
            </svg>
          </div>
        </a>
      );
      break;
    case 'Facebook':
      icon = (
        <a
          href="https://www.facebook.com/cultoperrocafe"
          target="_blank"
          rel="noreferrer"
        >
          <div className="socialMedia">
            <svg
              className="socialMediaIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 10.46 19.68"
            >
              <g id="diseño">
                <path
                  d="m9.78,10.99l.54-3.53h-3.39v-2.29c0-.97.47-1.91,1.99-1.91h1.54V.24s-1.4-.24-2.74-.24C4.93,0,3.1,1.69,3.1,4.76v2.69H0v3.53h3.1v8.54c.62.1,1.26.15,1.91.15s1.29-.05,1.91-.15v-8.54h2.85Z"
                  className="iconColorSVG"
                />
              </g>
            </svg>
          </div>
        </a>
      );
      break;
    case 'Twitter':
      icon = (
        <a
          href="https://twitter.com/cultoperrocafe"
          target="_blank"
          rel="noreferrer"
        >
          <div className="socialMedia">
            <svg
              className="socialMediaIcon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 23.47 19.31"
            >
              <g id="diseño">
                <path
                  d="m23.37,2.32c-.75.34-1.57.54-2.37.68.38-.06.94-.76,1.17-1.03.34-.43.63-.91.79-1.44.02-.04.04-.09,0-.12-.05-.02-.08,0-.13.01-.9.48-1.83.83-2.81,1.08-.08.02-.14,0-.19-.05-.08-.09-.16-.18-.25-.25-.42-.35-.86-.63-1.36-.84-.66-.27-1.38-.38-2.09-.34-.69.04-1.37.24-1.98.56-.61.32-1.16.77-1.6,1.31-.45.56-.78,1.22-.96,1.91-.16.67-.15,1.34-.05,2.02.02.11,0,.13-.1.11-3.86-.58-7.07-1.96-9.67-4.92-.11-.13-.17-.13-.27,0-1.14,1.71-.59,4.45.84,5.79.19.18.38.36.59.52-.08.02-1.02-.09-1.87-.52-.11-.07-.17-.03-.18.1-.01.18,0,.35.03.55.22,1.73,1.42,3.33,3.06,3.95.19.08.41.15.62.19-.37.08-.76.14-1.83.06-.13-.03-.18.04-.13.17.81,2.19,2.54,2.85,3.84,3.22.17.03.35.03.52.07-.01.02-.02.02-.03.03-.43.66-1.93,1.15-2.63,1.39-1.27.44-2.65.64-3.99.51-.21-.03-.26-.03-.32,0-.06.04,0,.09.06.14.27.18.55.34.83.49.85.45,1.74.81,2.67,1.07,4.79,1.32,10.19.35,13.78-3.22,2.82-2.81,3.81-6.68,3.81-10.55,0-.15.18-.24.29-.32.73-.55,1.33-1.21,1.88-1.95.12-.17.12-.31.12-.37v-.02c0-.06,0-.04-.1,0Z"
                  className="iconColorSVG"
                />
              </g>
            </svg>
          </div>
        </a>
      );
      break;
  }
  return <StyledButton {...props}>{icon}</StyledButton>;
};
