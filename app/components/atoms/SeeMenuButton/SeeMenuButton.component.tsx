import {FC} from 'react';
import {SeeMenuButtonProps, StyledSeeMenuButton} from './SeeMenuButton.styles';

export const SeeMenuButton: FC<SeeMenuButtonProps> = ({children, ...props}) => {
  return (
    <StyledSeeMenuButton {...props}>
      <span className="button-front">
        <svg
          version="1.1"
          id="Layer_2_00000093889474085133927160000002058561383302725017_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 122.4 134.1"
          xmlSpace="preserve"
        >
          <g id="diseño">
            <path
              className="st0"
              d="M83.4,118.2c-31.5,12.3-67-3.2-79.3-34.7c-1.1-2.9-2-5.8-2.7-8.8c0.2,6.7,1.6,13.4,4.1,19.9
		c9,23.1,30.8,38,55.6,38c7.4,0,14.7-1.4,21.7-4.1c14.8-5.8,26.5-17,33-31.6c3.1-7.1,4.8-14.6,5-22.1
		C116.5,93.8,103.1,110.5,83.4,118.2L83.4,118.2z"
            />
            <circle className="st1" cx="61.2" cy="61.2" r="60.1" />
            <path
              className="st2"
              d="M37,54.4c0,0,7,17.8,8.3,21.1c1.3,3.3,4.4,8.9,10,10l5.6,1.1c0,0,2.4,4.3,4.3,3.5c1.9-0.8,1-3.8,1-3.8
		s0.2-1.1,0.9-0.6s1,3.2,2.7,3c1.7-0.2,2.4-2.4,2-4.2c-0.5-1.7,1.1-1.1,1.4-0.4s1,2,3.4,1.2c1.1-0.4,1.1-2.1,0.8-4.3
		c-0.3-2.2,3.1-2.4,4.2-4.9c1.1-2.5-0.4-9-1.2-11.7c-0.8-2.7-7.2-21.7-8.1-23.7s-14.1,0.6-21.3,3.6C43.7,47.3,36.1,52,37,54.4
		L37,54.4z"
            />
            <path
              className="st3"
              d="M108.1,70.3c-0.5-0.1-1.1,0.2-1.2,0.8c-3.4,15.4-14.1,28-28.8,33.7c-14.6,5.7-31,3.8-43.8-5.1
		c-0.5-0.3-1.1-0.2-1.4,0.3c-0.3,0.5-0.2,1.1,0.3,1.4C41.5,107,51.2,110,61,110c6,0,12.1-1.1,17.8-3.3c15.3-6,26.6-19.1,30.1-35.1
		C109,71,108.7,70.4,108.1,70.3L108.1,70.3z"
            />
            <path
              className="st3"
              d="M66.7,76.4c0,0-3.2,0.9-3,2.5s1.5,2,2.6,1.5c1.1-0.5,2-0.7,3.2-1.3s1.6-1.6,1.3-2C70.5,76.8,69,74.6,66.7,76.4
		L66.7,76.4z"
            />
            <path
              className="st3"
              d="M52.5,71.2c0,0-1.3,3.3-0.2,4.9s3,2.6,4.1,2.8c1.1,0.2,4.9-1.1,4.1-4C59.7,72.1,56.3,67.2,52.5,71.2L52.5,71.2
		z"
            />
            <path
              className="st3"
              d="M71.8,64.2c-1-0.3-5,0.3-4.7,3.2c0.2,2.9,2.8,8.3,7.3,5c0,0,1.8-3.1,1-4.8C74.5,65.9,72.8,64.6,71.8,64.2z"
            />
            <path
              className="st3"
              d="M88.3,62c0.6-3.1-0.2-6.2-2.2-8.1C83,50.7,78.7,51,77,51.2c-1.7-5.1-3.4-9.9-3.8-10.9c-0.2-0.5-0.8-0.8-1.5-1
		c-0.3-0.2-0.7-0.2-1.2-0.2c0,0-0.1,0-0.1,0c-5.2-0.3-15.8,2.7-19.7,4.3c-1.4,0.6-11.3,4.9-14,8.8c-0.1,0.1-0.1,0.2-0.2,0.3
		c-0.4,0.8-0.6,1.5-0.3,2.2c0.1,0.2,7,17.8,8.3,21.1c1.4,3.4,4.6,9.4,10.7,10.6l5.2,1c0.7,1.2,2.5,3.7,4.4,3.7
		c0.3,0,0.6-0.1,0.9-0.2c1.2-0.5,1.7-1.6,1.8-2.7c0.5,0.8,1.3,1.5,2.5,1.3c0.9-0.1,1.7-0.6,2.2-1.4c0.5-0.8,0.8-1.8,0.8-2.8
		c0.6,0.8,1.8,1.5,4,0.8c2.1-0.7,1.6-3.8,1.4-5.3c-0.1-0.5,0.2-0.7,1.3-1.5c0.9-0.6,2.1-1.4,2.8-2.9c0.7-1.7,0.5-4.7,0-7.3
		C85.5,67.8,87.7,65.2,88.3,62L88.3,62z M38.4,53.7c-0.2-0.2-0.1-0.4-0.1-0.5c1.2-1.6,5.5-4.8,13-8c6.1-2.6,14.9-4.3,18.5-4.3
		c0.2,0,0.3,0,0.4,0c0.1,0,0.1,0,0.2,0s0.1,0,0.2,0c-0.2,0.8-1.8,2.8-5.6,4.8c-1.8-0.2-5.3-0.2-10.4,1.8c-4.3,1.7-9.4,5-10.8,6
		c-1.3,0.3-2.3,0.5-3.1,0.5C39,54.2,38.5,53.8,38.4,53.7L38.4,53.7z M80.6,75.8c-0.4,0.9-1.2,1.5-2.1,2c-1.1,0.7-2.4,1.6-2.2,3.4
		c0.4,3-0.1,3.2-0.1,3.2c-1.5,0.5-1.8-0.1-2.2-0.8c-0.4-0.7-1.5-1.4-2.5-1.1c-0.4,0.2-1.2,0.7-0.8,2.2c0.2,0.8,0.1,1.7-0.3,2.3
		c-0.2,0.3-0.5,0.5-0.8,0.6c-0.3,0.1-0.6-0.4-1.1-1.4c-0.2-0.6-0.5-1-0.8-1.3c-0.6-0.6-1.2-0.4-1.4-0.4c-0.8,0.3-1,1.2-1.1,1.5
		c0,0.2,0,0.3,0,0.4c0,0,0.6,2.2-0.5,2.7c-0.6,0.2-2.2-1.4-3-3c-0.1-0.3-0.4-0.4-0.7-0.5l-5.6-1.1c-5.2-1-8-6.3-9.3-9.4
		c-0.6-1.4-2.2-5.6-3.9-9.8c0.1,0,0.2,0.1,0.2,0.1c0.6,0.1,1.1,0.1,1.6,0c0.4,0.4,0.8,0.7,1.3,1c0.5,0.4,1.2,0.8,2,0.6
		c1-0.3,0.1-1.5-0.4-1.9c-0.1-0.1-0.3-0.3-0.4-0.4c1.3-0.6,2.6-1.2,4-1.1c0.6,0.1,0.9-0.7,0.4-1c-2.7-1.4-5.3,1-7.8,1
		c-0.6-0.2-1.3-0.6-2-1c-1-2.6-2-5-2.6-6.6c0.5,0.1,0.9,0.2,1.5,0.2c0.2,0,0.4,0,0.7,0c4.4-0.3,18.6-5,24.8-8.3
		c2.9-1.6,5.2-3.4,6.2-5c1.8,5.1,6.6,19.3,7.4,22C80.4,68.2,81.5,73.8,80.6,75.8L80.6,75.8z M81.2,64.1c-0.3-1-1.3-4.1-2.5-7.7
		c1-0.3,2.1-0.2,2.9,0.3c1,0.5,1.7,1.5,1.9,2.8C84,61.2,82.4,63.1,81.2,64.1z M82.3,67.1L82.1,66c1.2-1,4.2-3.7,3.5-6.9
		c-0.4-1.8-1.4-3.3-2.9-4.1c-0.8-0.5-1.7-0.7-2.7-0.7c-0.2-0.2-0.3-0.3-0.4-0.5c-0.2-0.3-0.2-0.5-0.2-0.7c1.6,0.1,3.7,0.5,5.3,2.1
		c1.5,1.5,2.1,3.9,1.6,6.4C86,63,85.1,65.5,82.3,67.1L82.3,67.1z"
            />
            <path
              className="st4"
              d="M122.1,67c0.9-9.2-0.3-18.8-3.9-28.1C108.7,14.8,85.6,0,61.2,0l0,0c-7.4,0-14.9,1.4-22.2,4.2
		C12.9,14.4-2.3,40.5,0.3,67l0,0c-0.9,9.2,0.3,18.8,3.9,28.1c9.4,24.2,32.5,38.9,57,38.9c7.4,0,14.9-1.4,22.2-4.2
		C109.5,119.7,124.6,93.6,122.1,67L122.1,67z M82.4,127c-6.8,2.7-13.9,4-21.2,4c-11.6,0-22.8-3.4-32.5-9.9
		c-9.9-6.6-17.4-16-21.8-27.1c-1.5-3.8-2.6-7.8-3.2-11.8l0,0c0.2,0.4,0.3,0.8,0.4,1.2c9.4,24.2,32.5,38.9,57,38.9
		c7.4,0,14.9-1.3,22.2-4.2c2-0.8,4-1.7,5.8-2.7v8.2h0.2C87.2,125,84.8,126.1,82.4,127L82.4,127z M97.4,118.4
		c-1.6,1.3-3.3,2.5-5.1,3.6v-8.1c1.8-1,3.4-2.2,5.1-3.3C97.4,110.5,97.4,118.4,97.4,118.4z M118.6,82.4
		c-2.2,12.8-8.5,24.6-18.2,33.4v-7.7C108.7,101.3,114.9,92.3,118.6,82.4L118.6,82.4L118.6,82.4z M82.4,115.4c-6.8,2.7-13.9,4-21.2,4
		c-11.6,0-22.8-3.4-32.5-9.9c-9.9-6.6-17.4-16-21.8-27.1C-4.7,52.5,10.1,18.7,40,7c6.8-2.7,13.9-4,21.2-4l0,0l0,0
		C72.8,3,84,6.4,93.6,12.9c9.9,6.6,17.4,16,21.8,27.1C127.1,69.9,112.2,103.7,82.4,115.4L82.4,115.4z"
            />
            <path
              className="st3"
              d="M20.5,92.7l5-6.3L18,89.1l-1.9-2.7l11.5-3.4l1.8,2.5l-7,9.8L20.5,92.7L20.5,92.7z"
            />
            <path
              className="st3"
              d="M19.8,72.8l2.5-1l3,7.5l-10.6,4.1L11.8,76l2.5-1l1.8,4.5l1.5-0.6l-1.5-3.8l2.4-0.9l1.5,3.8l1.7-0.7L19.8,72.8
		L19.8,72.8z"
            />
            <path
              className="st3"
              d="M22,70.7l-11.3,1.4l-0.7-5.2c-0.1-0.6,0-1.1,0.1-1.6c0.2-0.5,0.4-0.9,0.7-1.3s0.7-0.7,1.2-1s0.9-0.4,1.4-0.5
		c0.4-0.1,0.9,0,1.3,0c0.4,0.1,0.8,0.2,1.2,0.4s0.7,0.5,1,0.8l3.8-2.9l0.4,3.4L18,66.8l0.2,1.2l3.5-0.4L22,70.7L22,70.7z M15.5,68.4
		l-0.2-1.9c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.3-0.2-0.4-0.2s-0.4-0.1-0.7,0s-0.5,0.1-0.6,0.2c-0.2,0.1-0.3,0.2-0.4,0.4
		s-0.1,0.3-0.1,0.4l0.2,1.9L15.5,68.4L15.5,68.4z"
            />
            <path
              className="st3"
              d="M16.7,52.4l5.4,1.3l-0.7,3l-11-2.7l0.6-2.4l6.7-3.1L12,47.3l0.7-3l11,2.7l-0.6,2.4L16.7,52.4L16.7,52.4z"
            />
            <path
              className="st3"
              d="M26.9,41.4c-0.5,0.8-1,1.4-1.6,1.8c-0.6,0.4-1.2,0.7-1.9,0.8s-1.3,0-2-0.1s-1.3-0.5-2-0.8l-5.1-2.9l1.6-2.7
		l5,2.9c0.3,0.2,0.6,0.3,1,0.4c0.3,0.1,0.6,0.2,1,0.2c0.3,0,0.6-0.1,0.9-0.2s0.5-0.4,0.7-0.7c0.2-0.3,0.3-0.6,0.3-0.9
		c0-0.3-0.1-0.6-0.2-0.8c-0.2-0.3-0.4-0.5-0.6-0.8c-0.3-0.2-0.5-0.4-0.9-0.6l-5-2.9l1.6-2.7l5.1,2.9c0.7,0.4,1.3,0.8,1.8,1.4
		c0.5,0.5,0.9,1.1,1.1,1.7s0.3,1.3,0.2,2S27.3,40.6,26.9,41.4L26.9,41.4z"
            />
            <path
              className="st3"
              d="M33.9,28l1.9,1.9l-5.7,5.7l-8.1-8l5.6-5.6l1.9,1.9l-3.4,3.4l1.1,1.1l2.9-2.9l1.8,1.8l-2.9,2.9l1.3,1.3L33.9,28
		z"
            />
            <path
              className="st3"
              d="M38.5,19.2c-0.4,0-0.8,0-1.1,0.1c-0.3,0-0.7,0.1-1,0.2c-0.4,0.1-0.7,0.2-1,0.4c-0.2,0.1-0.4,0.3-0.5,0.5
		s-0.1,0.3,0,0.5c0.1,0.2,0.2,0.2,0.5,0.2s0.5,0,0.8-0.1s0.7-0.2,1.1-0.3c0.7-0.2,1.3-0.3,1.9-0.3c0.6,0,1.1,0,1.6,0.3
		c0.5,0.2,0.9,0.6,1.2,1.2c0.4,0.6,0.5,1.1,0.6,1.6c0,0.5,0,1-0.3,1.5s-0.5,0.9-0.9,1.2c-0.4,0.4-0.8,0.7-1.2,1
		c-0.5,0.3-1,0.5-1.5,0.8c-0.6,0.2-1.1,0.4-1.7,0.5c-0.6,0.1-1.1,0.2-1.7,0.2l-0.3-3c0.5,0,0.9,0,1.3-0.1s0.8-0.1,1.2-0.2
		c0.4-0.1,0.8-0.3,1.2-0.5c0.3-0.2,0.5-0.3,0.5-0.5c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.2-0.3-0.3-0.6-0.2s-0.6,0.1-1,0.2
		c-0.4,0.1-0.8,0.2-1.3,0.3c-0.7,0.2-1.3,0.2-1.8,0.2c-0.5,0-1-0.1-1.3-0.4c-0.4-0.2-0.7-0.6-1-1c-0.4-0.7-0.6-1.4-0.6-2.1
		c0-0.7,0.2-1.3,0.7-1.9s0.9-1.1,1.5-1.5c0.5-0.3,1-0.5,1.5-0.7c0.5-0.2,1-0.3,1.5-0.4c0.5-0.1,0.9-0.1,1.3-0.2L38.5,19.2L38.5,19.2
		z"
            />
            <path
              className="st3"
              d="M50.7,13.4l-3.1,1l2.7,8.2l-3,1l-2.7-8.2l-3.1,1l-0.8-2.6l9.2-3C49.8,10.8,50.7,13.4,50.7,13.4z"
            />
            <path
              className="st3"
              d="M54.1,21.6l-0.8-11.3l5.2-0.4c0.5,0,1.1,0,1.5,0.2s0.9,0.5,1.3,0.8c0.4,0.4,0.7,0.8,0.9,1.2s0.3,0.9,0.4,1.4
		c0,0.4,0,0.9-0.1,1.3c-0.1,0.4-0.3,0.8-0.5,1.1c-0.2,0.4-0.5,0.7-0.8,0.9l2.7,4l-3.4,0.2l-2.2-3.4L57,17.9l0.2,3.5L54.1,21.6
		L54.1,21.6z M56.8,15.2l2-0.1c0.1,0,0.2-0.1,0.4-0.2c0.1-0.1,0.2-0.2,0.3-0.4c0.1-0.2,0.1-0.4,0.1-0.7c0-0.3-0.1-0.5-0.2-0.6
		s-0.2-0.3-0.4-0.4c-0.1-0.1-0.3-0.1-0.4-0.1l-1.9,0.1L56.8,15.2L56.8,15.2z"
            />
            <path
              className="st3"
              d="M69.3,22.1c-0.8-0.2-1.6-0.5-2.2-1c-0.6-0.5-1.1-1-1.5-1.7c-0.4-0.6-0.6-1.3-0.8-2.1c-0.1-0.7-0.1-1.4,0-2.2
		c0.2-0.7,0.4-1.4,0.9-2c0.4-0.6,0.9-1.1,1.6-1.6c0.6-0.4,1.3-0.7,2.1-0.9s1.6-0.1,2.4,0c0.8,0.2,1.6,0.5,2.2,1s1.1,1,1.5,1.7
		s0.6,1.3,0.8,2.1c0.1,0.7,0.1,1.5,0,2.2c-0.2,0.7-0.4,1.4-0.8,2c-0.4,0.6-0.9,1.1-1.6,1.5s-1.3,0.7-2.1,0.9
		C71,22.3,70.2,22.3,69.3,22.1L69.3,22.1z M68,15.9c-0.1,0.4-0.1,0.8-0.1,1.1s0.1,0.7,0.3,1c0.2,0.3,0.4,0.6,0.7,0.8
		s0.7,0.4,1.1,0.5c0.4,0.1,0.8,0.1,1.2,0s0.7-0.3,0.9-0.5c0.3-0.2,0.5-0.5,0.7-0.9s0.3-0.7,0.4-1c0.1-0.4,0.1-0.8,0.1-1.1
		c0-0.4-0.1-0.7-0.3-1c-0.2-0.3-0.4-0.6-0.7-0.8c-0.3-0.2-0.7-0.4-1.1-0.5c-0.4-0.1-0.8-0.1-1.2,0c-0.3,0.1-0.7,0.3-0.9,0.5
		s-0.5,0.5-0.7,0.8C68.2,15.2,68.1,15.6,68,15.9L68,15.9z"
            />
            <path
              className="st3"
              d="M86.2,29.9l3.4-4.9l-4,2.4l-1.4-1l0.8-4.5l-3.4,4.9L79.2,25l6.5-9.3l2.8,2l-1,5.8l5.1-3l2.8,1.9l-6.5,9.3
		L86.2,29.9L86.2,29.9z"
            />
            <path
              className="st3"
              d="M97,37.5l-2.1,1.7l-5.1-6.3l8.8-7.2l5,6.1l-2.1,1.7l-3.1-3.7l-1.2,1l2.6,3.2l-2,1.6l-2.6-3.2l-1.4,1.1L97,37.5
		L97,37.5z"
            />
            <path
              className="st3"
              d="M101.9,40.6l-5.1,2.3l-1.3-2.8l10.3-4.7l1,2.2l-3.4,6.5l5.3-2.4l1.3,2.8l-10.3,4.7l-1-2.3
		C98.7,47,101.9,40.6,101.9,40.6z"
            />
            <path
              className="st3"
              d="M100.8,55.7c-0.1-0.9-0.1-1.7,0.1-2.4c0.2-0.7,0.5-1.3,1-1.8s1-0.9,1.7-1.1s1.3-0.5,2.1-0.6l5.8-0.8l0.4,3.1
		l-5.8,0.8c-0.4,0-0.7,0.1-1,0.3s-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.4-0.5,0.7s-0.2,0.6-0.1,0.9c0.1,0.4,0.2,0.7,0.4,0.9
		c0.2,0.2,0.4,0.4,0.7,0.5s0.6,0.2,1,0.2c0.3,0,0.7,0,1.1,0l5.8-0.8l0.4,3.1L107,60c-0.8,0.1-1.5,0.1-2.2,0
		c-0.7-0.1-1.3-0.3-1.9-0.7c-0.6-0.3-1-0.8-1.4-1.4S100.9,56.5,100.8,55.7L100.8,55.7z M112.7,55l0.2-2l2.4,0.5l0.4,2.7L112.7,55
		L112.7,55z"
            />
          </g>
          <circle className="st5" cx="61.2" cy="61.9" r="59.4" />
        </svg>
      </span>
    </StyledSeeMenuButton>
  );
};
