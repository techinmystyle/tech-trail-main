import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/c-course' },
  { label: 'Topics', to: '/c-course/topics' },
  { label: 'Practice', to: '/c-course/tasks' },
  { label: 'About', to: '/c-course/about' },
];

export default function CFooter() {
  return (
    <CourseFooter
      courseName="C IN MY STYLE"
      courseRoute="/c-course"
      tagline="Learn C programming from scratch — memory management, pointers, data structures, and systems programming."
      logoImg="/img/C.png"
      color="#0069c0"
      color2="#1976d2"
      colorRgb="0,105,192"
      quickLinks={QUICK_LINKS}
    />
  );
}
