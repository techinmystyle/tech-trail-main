import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/dsa-course' },
  { label: 'Topics', to: '/dsa-course/topics' },
  { label: 'Practice', to: '/dsa-course/tasks' },
  { label: 'About', to: '/dsa-course/about' },
];

export default function DsaFooter() {
  return (
    <CourseFooter
      courseName="DSA IN MY STYLE"
      courseRoute="/dsa-course"
      tagline="Master Data Structures and Algorithms — interactive visualizers, code examples, and interview prep."
      logoImg="/img/DSA.png"
      color="#2e7d32"
      color2="#43a047"
      colorRgb="46,125,50"
      quickLinks={QUICK_LINKS}
    />
  );
}
