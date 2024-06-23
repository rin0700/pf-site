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

const cards = [
  {
    id: 'html',
    imgSrc: imageHTML,
    title: 'HTML',
    description: '長く使用しているマークアップ言語であり、その能力を証明するWebクリエイター認定試験を取得しています。',
    category: 'Frontend'
  },
  {
    id: 'css',
    imgSrc: imageCSS,
    title: 'CSS',
    description: 'HTMLと共にWebページのデザインを構築するためのスタイルシート言語として利用。ある程度使い慣れている。',
    category: 'Frontend'
  },
  {
    id: 'js',
    imgSrc: imageJS,
    title: 'JavaScript',
    description: 'Reactと同時に学習していき、最近使用する機会が増えているプログラミング言語。',
    category: 'Frontend'
  },
  {
    id: 'react',
    imgSrc: imageReact,
    title: 'React',
    description: '現在積極的に学習しており、このポートフォリオサイトもReactを使用して作成しています。その他コンテストでの使用経験あり。',
    category: 'Frontend'
  },
  {
    id: 'aws',
    imgSrc: imageAWS,
    title: 'Amazon Web Services',
    description: '最近のトレンドであるクラウドサービスの一つであることを知り、学習を開始。現在はAWS認定クラウドプラクティショナーを学習中。',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'docker',
    imgSrc: imageDocker,
    title: 'Docker',
    description: 'コンテストでの使用経験あり。コンテナ型仮想化技術を利用して開発環境を構築するために使用。',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'github',
    imgSrc: imageGithub,
    title: 'GitHub',
    description: '2024/5から積極的に使用し始め、基本的な操作は問題なく行えると思います。',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'java',
    imgSrc: imageJava,
    title: 'Java',
    description: 'プログラミング言語を学習した最初の言語であり、学習を開始したばかりの頃に使用していました。',
    category: 'Backend'
  },
  {
    id: 'swift',
    imgSrc: imageSwift,
    title: 'Swift',
    description: '独学で学習中のプログラミング言語。iOSアプリ開発に使用される言語であり、将来的にはiOSアプリ開発を行いたいと考えています。',
    category: 'Backend'
  },
  {
    id: 'vscode',
    imgSrc: imageVsCode,
    title: 'Visual Studio Code',
    description: 'プログラミング勉強した頃から使用しているテキストエディタ。拡張機能を利用して効率的に開発を行っています。',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'mysql',
    imgSrc: imageMySQL,
    title: 'MySQL',
    description: '授業やweb開発で使用した経験があり、少し苦手意識はあるが今後、開発で使用する予定',
    category: 'Backend'
  },
  {
    id: 'jquery',
    imgSrc: imageJquery,
    title: 'jQuery',
    description: '個人開発で使用した経験があり、簡単なアニメーションやイベント処理を行う際に使用していました。',
    category: 'Frontend'
  },
  {
    id: 'php',
    imgSrc: imagePhp,
    title: 'PHP',
    description: '授業で使用した経験があり、web開発やデータベースの処理に使用していました。',
    category: 'Backend'
  },
  {
    id: 'c#',
    imgSrc: imageCSharp,
    title: 'C#',
    description: 'ゲーム開発で使用した経験があり、Unityを使用してゲームを開発する際に使用していました。',
    category: 'Backend'
  },
  {
    id: 'swiftUI',
    imgSrc: imageSwiftUI,
    title: 'SwiftUI',
    description: '個人開発でiOSアプリの制作にSwiftUIを採用していました。理解度は高いと思います。',
    category: 'Frontend'
  },
  {
    id: 'unity',
    imgSrc: imageUnity,
    title: 'Unity',
    description: 'ゲーム開発での経験があり、C#を使用してゲームを開発する際に使用し、3Dゲームの開発に使用していました。',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'blender',
    imgSrc: imageBlender,
    title: 'Blender',
    description: '3Dモデリングやアニメーションを趣味で行なっていました。',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'figma',
    imgSrc: imageFigma,
    title: 'Figma',
    description: 'Figma is a vector graphics editor and prototyping tool which is primarily web-based, with additional offline features enabled by desktop applications for macOS and Windows.',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'xcode',
    imgSrc: imageXCode,
    title: 'Xcode',
    description: 'Xcode is an integrated development environment for macOS containing a suite of software development tools developed by Apple for developing software for macOS, iOS, iPadOS, watchOS, and tvOS.',
    category: 'ToolsAndEnvironments'
  },
  {
    id: 'canva',
    imgSrc: imageCanva,
    title: 'Canva',
    description: 'Canva is a graphic design platform that allows users to create social media graphics, presentations, posters, documents and other visual content.',
    category: 'ToolsAndEnvironments'
  }
];

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

export default LanguageCard;
