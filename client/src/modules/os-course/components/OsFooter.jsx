import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/os-course' },
  { label: 'Topics', to: '/os-course/topics' },
  { label: 'About', to: '/os-course/about' },
];

export default function OsFooter() {
  return (
    <CourseFooter
      courseName="OS IN MY STYLE"
      courseRoute="/os-course"
      tagline="Master Operating Systems — processes, memory management, file systems, and security."
      logoImg="/img/TECH.png"
      color="#546e7a"
      color2="#607d8b"
      colorRgb="84,110,122"
      quickLinks={QUICK_LINKS}
    />
  );
}
