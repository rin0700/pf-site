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
  return (
    <section id="card1" class="card">
      <img src={imageHTML} alt="HTML" />
      <div class="card__content">
        <p class="card__title">Lorem Ipsum</p>
        <p class="card__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae
          justo vel lorem tincidunt ultrices at non nunc. Donec in sapien viverra,
          tincidunt augue id, efficitur massa.
        </p>
      </div>
    </section>

  )
}

export default LanguageCard