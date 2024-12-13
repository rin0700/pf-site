import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../page/main';
import Mail from '../page/Mail';
import Works from '../page/Works';
import Avatar from '../page/Avatar';
import Metaverse from '../page/Metaverse';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mail" element={<Mail />} />
      <Route path="/works" element={<Works />} />
      <Route path="/avatar" element={<Avatar />} />
      <Route path="/metaverse" element={<Metaverse />} />
    </Routes>
  );
};

export default Root;
