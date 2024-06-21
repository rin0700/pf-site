import React from 'react';
import '../Style/LanguageCard.css';
import imageAWS from '../img/amazon.svg';
import imageBlender from '../img/Blender.svg';
import imageCSharp from '../img/CSharp.svg';
import imageCanva from '../img/Canva.svg';
import imageCSS from '../img/css.svg';
import imageDocker from '../img/docker.svg';
import imageFigma from '../img/Figma.svg';
import imageGithub from '../img/github.svg';
import imageHTML from '../img/html.svg';
import imageJava from '../img/java.svg';
import imageJS from '../img/javascript.svg';
import imageJquery from '../img/jquery.svg';
import imageMySQL from '../img/mysql.svg';
import imagePhp from '../img/php.png';
import imageReact from '../img/react.svg';
import imageSwift from '../img/Swift.svg';
import imageSwiftUI from '../img/SwiftUI.svg';
import imageUnity from '../img/Unity.svg';
import imageVsCode from '../img/vscode.svg';
import imageXCode from '../img/XCode.svg';

function LanguageCard() {
  const frontendCards = cards.filter(card => card.category === 'Frontend');
  const backendCards = cards.filter(card => card.category === 'Backend');
  const toolsAndEnvironments = cards.filter(card => card.category === 'ToolsAndEnvironments');

  return (
    <div className='category__title'>
      <h1>開発・学習に使用した技術</h1>
      <CategorySection title="Frontend" cards={frontendCards} />
      <CategorySection title="Backend" cards={backendCards} />
      <CategorySection title="Tools and Environments" cards={toolsAndEnvironments} />
      </div>
  );
}

export default LanguageCard