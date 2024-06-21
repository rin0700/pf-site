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
  {
    id: 'css',
    imgSrc: imageCSS,
    title: 'CSS',
    description: 'CSS is used to control the style of a web document in a simple and easy way.',
    category: 'Frontend'
  },
  {
    id: 'js',
    imgSrc: imageJS,
    title: 'JavaScript',
    description: 'JavaScript is a programming language commonly used in web development.',
    category: 'Frontend'
  },
  {
    id: 'react',
    imgSrc: imageReact,
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    category: 'Frontend'
  },
  {
    id: 'aws',
    imgSrc: imageAWS,
    title: 'Amazon Web Services',
    description: 'Amazon Web Services is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs.',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'docker',
    imgSrc: imageDocker,
    title: 'Docker',
    description: 'Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers.',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'github',
    imgSrc: imageGithub,
    title: 'GitHub',
    description: 'GitHub is a web-based hosting service for version control using Git.',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'java',
    imgSrc: imageJava,
    title: 'Java',
    description: 'Java is a high-level, class-based, object-oriented programming language.',
    category: 'Backend'
  },
  {
    id: 'swift',
    imgSrc: imageSwift,
    title: 'Swift',
    description: 'Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc.',
    category: 'Backend'
  },
  {
    id: 'vscode',
    imgSrc: imageVsCode,
    title: 'Visual Studio Code',
    description: 'Visual Studio Code is a source-code editor developed by Microsoft for Windows, Linux and macOS.',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'mysql',
    imgSrc: imageMySQL,
    title: 'MySQL',
    description: 'MySQL is an open-source relational database management system.',
    category: 'Backend'
  },
  {
    id: 'jquery',
    imgSrc: imageJquery,
    title: 'jQuery',
    description: 'jQuery is a fast, small, and feature-rich JavaScript library.',
    category: 'Frontend'
  },
  {
    id: 'php',
    imgSrc: imagePhp,
    title: 'PHP',
    description: 'PHP is a popular general-purpose scripting language that is especially suited to web development.',
    category: 'Backend'
  },
  {
    id: 'c#',
    imgSrc: imageCSharp,
    title: 'C#',
    description: 'C# is a general-purpose, multi-paradigm programming language developed by Microsoft.',
    category: 'Backend'
  },
  {
    id: 'swiftUI',
    imgSrc: imageSwiftUI,
    title: 'SwiftUI',
    description: 'SwiftUI is an innovative, exceptionally simple way to build user interfaces across all Apple platforms with the power of Swift.',
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