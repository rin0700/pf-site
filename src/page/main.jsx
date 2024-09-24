import React from 'react';
import Header from '../components/Header';
import Profile from '../components/Profile';
import LanguageCard from '../components/LanguageCard';
import Qualifications from '../components/Qualifications';
import SkillRadarChart from '../components/SkillRadarChart';
import Sns from '../components/sns';
import Sheet from '../components/Sheet';

function main() {
  return (
    <>
      <Header />
      <Profile />
      <SkillRadarChart />
      <LanguageCard />
      <Qualifications />
      <Sheet />
      <Sns />
    </>
  );
}

export default main;
