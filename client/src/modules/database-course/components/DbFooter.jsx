import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/database-course' },
  { label: 'Topics', to: '/database-course/topics' },
  { label: 'SQL Editor', to: '/database-course/editor' },
  { label: 'About', to: '/database-course/about' },
];

export default function DbFooter() {
  return (
    <CourseFooter
      courseName="DATABASE IN MY STYLE"
      courseRoute="/database-course"
      tagline="Master SQL and MongoDB — live query execution, visualizers, and interview preparation."
      logoImg="/img/DBMS.png"
      color="#e65100"
      color2="#f57c00"
      colorRgb="230,81,0"
      quickLinks={QUICK_LINKS}
    />
  );
}
