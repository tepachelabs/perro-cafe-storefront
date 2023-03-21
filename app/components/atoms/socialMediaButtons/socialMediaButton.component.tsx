import {FC} from 'react';
import {ButtonProps, StyledButton} from './socialMediaButton.styles';
import InstagramIconSVG from '../../../img/instagram-line.svg';
import FacebookIconSVG from '../../../img/facebook-fill.svg';
import TwitterIconSVG from '../../../img/twitter-fill.svg';


export const Button: FC<ButtonProps> = ({ children, ...props}) => {
  let icon;
  switch(children){
    case 'Instagram':
      icon = <img src={InstagramIconSVG} alt= "Instagram"/>
    break;
    case 'Facebook':
      icon = <img src={FacebookIconSVG} alt= "Facebook"/> 
    break; 
    case 'Twitter':
      icon = <img src={TwitterIconSVG} alt= "Twitter"/> 
    break;
  }
  return <StyledButton {...props}>{icon}</StyledButton>;
};
