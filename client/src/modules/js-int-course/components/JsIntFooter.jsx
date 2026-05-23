import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/js-int-course' },
  { label: 'Topics', to: '/js-int-course/topics' },
  { label: 'Practice', to: '/js-int-course/tasks' },
  { label: 'About', to: '/js-int-course/about' },
];

export default function JsIntFooter() {
  return (
    <CourseFooter
      courseName="JAVASCRIPT INTERMEDIATE"
      courseRoute="/js-int-course"
      tagline="Level up with ES6+, async/await, closures, APIs, and advanced DOM techniques."
      logoImg="/img/JS-INT.png"
      color="#f0a500"
      color2="#f7bf00"
      colorRgb="240,165,0"
      quickLinks={QUICK_LINKS}
    />
  );
}
