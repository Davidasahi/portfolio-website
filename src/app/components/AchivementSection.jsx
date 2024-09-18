'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const achievementsList = [
  {
    metric: 'Projects',
    value: '5',
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: '1,000',
  },
  {
    metric: 'Certifications',
    value: '4',
  },
  {
    metric: 'Years',
    value: '3',
  },
];

const AchivementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, indes) => {
          return (
            <div
              key={indes}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-4xl font-bold">
                {achievement.value}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchivementSection;
