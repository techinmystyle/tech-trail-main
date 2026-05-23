import React from 'react';
import { Link } from 'react-router-dom';
import { ALL_COURSES } from '../shared/courseLinks';
import './ExploreAllCourses.css';

/* Per-course accent color used for the left accent bar */
const COURSE_COLOR = {
  '/html-course':                    '#e44d26',
  '/css-course':                     '#264de4',
  '/js-basic-course':                '#f7df1e',
  '/js-int-course':                  '#f0a500',
  '/js-adv-course':                  '#d97706',
  '/java-course':                    '#f89820',
  '/python-course':                  '#3572A5',
  '/c-course':                       '#0069c0',
  '/ai-course':                      '#e91e63',
  '/ml-course':                      '#5c6bc0',
  '/dl-course':                      '#9c27b0',
  '/nlp-course':                     '#7b1fa2',
  '/genai-course':                   '#c62828',
  '/dsc-course':                     '#0097a7',
  '/dsa-course':                     '#2e7d32',
  '/database-course':                '#e65100',
  '/os-course':                      '#546e7a',
  '/system-design-course':           '#3949ab',
  '/fullstack-python-course':        '#1b5e20',
  '/fullstack-java-platform-course': '#ff6f00',
};

export default function ExploreAllCourses() {
  return (
    <div className="eac-wrapper">
      <div className="eac-inner">
        {/* Header */}
        <div className="eac-header">
          <div className="eac-header__left">
            <div className="eac-header__icon">
              <i className="bi bi-grid-3x3-gap-fill" aria-hidden="true" />
            </div>
            <h4 className="eac-header__title">Explore All Courses</h4>
          </div>
          <span className="eac-header__count">{ALL_COURSES.length} Courses</span>
        </div>

        {/* 4-column grid of course links */}
        <div className="eac-grid">
          {ALL_COURSES.map((c) => {
            const color = COURSE_COLOR[c.href] || '#6366f1';
            return (
              <Link
                key={c.href}
                to={c.href}
                className="eac-chip"
                style={{ '--chip-color': color }}
                aria-label={c.label}
              >
                <span className="eac-chip__bar" aria-hidden="true" />
                <span className="eac-chip__text">{c.label}</span>
                <i className="bi bi-arrow-right eac-chip__arrow" aria-hidden="true" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
