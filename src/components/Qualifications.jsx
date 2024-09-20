/* eslint-disable react/prop-types */
import React from 'react';
import '../Style/Qualifications.css';

function Qualifications() {
  const qualifications = [
    {
      name: '丙種危険物取扱免状',
      date: '令和2年 04月　',
      org: '　主催:一般財団法人消防試験研究センター',
    },
    {
      name: '情報処理技術者認定試験 2級',
      date: '令和4年 07月　',
      org: '　主催:サーティファイ情報処理能力認定委員会',
    },
    {
      name: 'Microsoft Office Specialist Word365&2019',
      date: '令和4年 09月　',
      org: '　主催:Microsoft',
    },
    {
      name: 'Microsoft Office Specialist PowerPoint365&2019',
      date: '令和5年 07月　',
      org: '　主催:Microsoft',
    },
    {
      name: 'Webクリエイター認定試験スタンダード',
      date: '令和5年 10月　',
      org: '　主催:サーティファイWeb利用・技術認定委員会',
    },
    {
      name: '基本情報技術者試験',
      date: '令和6年 05月　',
      org: '　主催:IPA 独立行政法人 情報処理推進機構',
    },
  ];

  const learning = [
    {
      name: '応用情報技術者試験',
      date: '令和5年 07月~　',
      org: '　主催:IPA 独立行政法人 情報処理推進機構',
    },
    {
      name: 'AWS Cloud Practitioner',
      date: '令和6年 05月~　',
      org: '　主催:Amazon',
    },
    {
      name: 'TOEIC',
      date: '令和6年 09月~　',
      org: '　主催:ETS',
    },
  ];

  return (
    <div className="container">
      <Section title="取得済みの資格・免許" items={qualifications} />
      <Section title="学習中の資格" items={learning} />
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="list">
        {items.map((item, index) => (
          <div key={index} className="item">
            <span className="date">{item.date}</span>
            <span className="name">{item.name}</span>
            <span className="org">{item.org}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualifications;
