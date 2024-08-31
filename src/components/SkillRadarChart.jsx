import React from 'react';
import '../Style/SkillRadarChart.css';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const hardSkill = [
  { subject: 'SwiftUI', A: 5, fullMark: 5 },
  { subject: 'HTML', A: 4, fullMark: 5 },
  { subject: 'Java', A: 4, fullMark: 5 },
  { subject: 'JavaScript', A: 3, fullMark: 5 },
  { subject: 'Unity', A: 5, fullMark: 5 },
  { subject: 'C#', A: 3, fullMark: 5 },
  { subject: 'Swift', A: 3, fullMark: 5 },
  { subject: 'Blender', A: 2, fullMark: 5 },
];

const softSkill = [
  { subject: 'Problem solving', A: 5, fullMark: 5 },
  { subject: 'WBS', A: 4, fullMark: 5 },
  { subject: 'Proactive', A: 4, fullMark: 5 },
  { subject: 'Communication', A: 3, fullMark: 5 },
  { subject: 'Support', A: 4, fullMark: 5 },
];

const SkillRadarChart = () => {
  return (
    <>
      <h1 className="textCenter">My Skills</h1>
      <div className="chartContainer">
        <div className="chartWrapper">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={hardSkill}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} />
              <Radar
                name="HARD SKILLS"
                dataKey="A"
                stroke="#8884d8"
                fill="#8884d8"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="chartWrapper">
          <ResponsiveContainer width="100%" height={400}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={softSkill}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 5]} tickCount={6} />
              <Radar
                name="SOFT SKILLS"
                dataKey="A"
                stroke="#82ca9d"
                fill="#82ca9d"
                fillOpacity={0.6}
              />
              <Legend />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default SkillRadarChart;
