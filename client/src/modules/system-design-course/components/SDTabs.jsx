import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SDTabs = ({ tabs, defaultTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 border-b border-indigo-200/50 pb-2 dark:border-indigo-400/20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`sd-neumorphic-btn px-4 py-2 font-medium text-sm transition-colors relative ${
              activeTab === index
                ? 'text-indigo-600 dark:text-indigo-300 ring-2 ring-indigo-400/50'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-indigo-500 dark:bg-indigo-300"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>
      
      <div className="mt-4">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          {tabs[activeTab].content}
        </motion.div>
      </div>
    </div>
  );
};

export default SDTabs;
