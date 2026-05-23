import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/java-course' },
  { label: 'Topics', to: '/java-course/topics' },
  { label: 'Practice', to: '/java-course/tasks' },
  { label: 'About', to: '/java-course/about' },
];

export default function JavaFooter() {
  return (
    <CourseFooter
      courseName="JAVA IN MY STYLE"
      courseRoute="/java-course"
      tagline="Comprehensive Java programming — from basics to OOP, data structures, and real-world applications."
      logoImg="/img/JAVA.png"
      color="#f89820"
      color2="#f0a500"
      colorRgb="248,152,32"
      quickLinks={QUICK_LINKS}
    />
  );
}
