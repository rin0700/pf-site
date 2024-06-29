import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../page/main';
import Mail from '../page/Mail';
import Works from '../page/Works';
import Avatar from '../page/Avatar';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/mail" element={<Mail />} />
      <Route path="/works" element={<Works />} />
      <Route path="/avatar" element={<Avatar />} />
    </Routes>
  );
};

export default Root;
