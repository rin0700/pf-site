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
  {
    id: 'html',
    imgSrc: imageHTML,
    title: 'HTML',
    description: 'HTML is the standard markup language for creating web pages.',
    category: 'Frontend'
  },

const CategorySection = ({ title, cards }) => (
  <div className="category">
    <h2 className="category-title">{title}</h2>
    <div className="cards-container">
      {cards.map(card => (
        <section key={card.id} id={card.id} className="card">
          <img src={card.imgSrc} alt={card.title} />
          <div className="card__content">
            <p className="card__title">{card.title}</p>
            <p className="card__description">{card.description}</p>
          </div>
        </section>
      ))}
    </div>
  </div>
);

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