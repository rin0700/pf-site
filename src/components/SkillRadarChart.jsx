import React from 'react';
import '../Style/SkillRadarChart.css';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ResponsiveContainer
} from 'recharts';

const hardSkill = [
  { subject: 'SwiftUI', A: 5, fullMark: 5 },
  { subject: 'HTML', A: 4, fullMark: 5 },
  { subject: 'Java', A: 4, fullMark: 5 },
  { subject: 'Unity', A: 5, fullMark: 5 },
  { subject: 'Swift', A: 2, fullMark: 5 },
  { subject: 'JavaScript', A: 3, fullMark: 5 },
  { subject: 'C#', A: 3, fullMark: 5 },
];
