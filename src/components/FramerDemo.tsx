import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FramerDemo() {
  const [activeTab, setActiveTab] = useState<'card' | 'interactive'>('card');
  const [counter, setCounter] = useState(0);

  return (
    <div className="demo-box framer-box">
      <div className="badge">Framer Motion Component</div>
      <div className="tabs">
        <button
          className={activeTab === 'card' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('card')}
        >
          Gesture & Spring
        </button>
        <button
          className={activeTab === 'interactive' ? 'tab-btn active' : 'tab-btn'}
          onClick={() => setActiveTab('interactive')}
        >
          AnimatePresence
        </button>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'card' ? (
          <motion.div
            key="card"
            className="framer-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3>Interactive Physics Card</h3>
            <p>Hover and tap to trigger spring motion gestures.</p>
            <motion.div
              className="pulse-chip"
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(99, 102, 241, 0.4)',
                  '0 0 0 12px rgba(99, 102, 241, 0)',
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.8 }}
            >
              Framer Motion Active
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="counter"
            className="framer-card"
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3>Reactive State Transitions</h3>
            <div className="counter-actions">
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="action-btn"
                onClick={() => setCounter((c) => c + 1)}
              >
                Trigger Pulse: {counter}
              </motion.button>
            </div>
            <motion.div
              key={counter}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="counter-visual"
            >
              State Cycle #{counter}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
