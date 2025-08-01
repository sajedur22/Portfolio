'use client';

import React from 'react';
import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
  { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
  { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
  { name: 'Express.js', icon: <SiExpress color="#000000" /> },
  { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
];

export default function Skills() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-5">My Skills</h1>
      <div className="row g-4 justify-content-center">
        {skills.map(({ name, icon }, index) => (
          <div key={index} className="col-6 col-md-4 col-lg-3">
            <div className="card shadow-sm p-3 text-center h-100">
              <div className="mb-3" style={{ fontSize: '3rem' }}>
                {icon}
              </div>
              <h5 className="card-title">{name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
