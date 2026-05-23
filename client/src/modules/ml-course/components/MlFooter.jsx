import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/ml-course' },
  { label: 'Topics', to: '/ml-course/topics' },
  { label: 'Practice', to: '/ml-course/tasks' },
  { label: 'About', to: '/ml-course/about' },
];

export default function MlFooter() {
  return (
    <CourseFooter
      courseName="MACHINE LEARNING"
      courseRoute="/ml-course"
      tagline="Explore ML fundamentals — supervised learning, unsupervised learning, and real-world ML projects."
      logoImg="/img/ML.png"
      color="#5c6bc0"
      color2="#7986cb"
      colorRgb="92,107,192"
      quickLinks={QUICK_LINKS}
    />
  );
}
