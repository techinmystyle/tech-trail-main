import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/ai-course' },
  { label: 'Topics', to: '/ai-course/topics' },
  { label: 'About', to: '/ai-course/about' },
];

export default function AiFooter() {
  return (
    <CourseFooter
      courseName="AI IN MY STYLE"
      courseRoute="/ai-course"
      tagline="Explore AI fundamentals — intelligent agents, search algorithms, and decision-making systems."
      logoImg="/img/AI.png"
      color="#e91e63"
      color2="#f06292"
      colorRgb="233,30,99"
      quickLinks={QUICK_LINKS}
    />
  );
}
