'use client';
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const loves = [
  { id: 1, label: 'Frontend Development', icon: '💻' },
  { id: 2, label: 'Backend Development', icon: '🛠️' },
  { id: 3, label: 'JavaScript', icon: '📜' },
  { id: 4, label: 'Python', icon: '🐍' },
  { id: 5, label: 'CI/CD', icon: '🔁' },
  { id: 6, label: 'DevOps', icon: '⚙️' },
  { id: 7, label: 'MLOps', icon: '🤖' },
];

const LoveCards = () => {
  const [playAnim, setPlayAnim] = useState(true);

  useEffect(() => {
    // ৫ সেকেন্ড পর animation reset করবে
    const timer = setTimeout(() => {
      setPlayAnim(false);
      setTimeout(() => setPlayAnim(true), 100); // ১০০ মিলিসেকেন্ড পর আবার true করে দিবে
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Things I Love</h2>
      <div className="row g-4">
        {loves.map((item, index) => (
          <div className="col-6 col-md-3 col-lg-2" key={item.id}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={playAnim ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.5,
                delay: index < 4 ? 0 : (index - 3) * 0.3,
              }}
              className="card h-100 shadow-sm text-center p-4 border-0"
            >
              <div className="fs-1">{item.icon}</div>
              <h6 className="mt-3">{item.label}</h6>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoveCards;
