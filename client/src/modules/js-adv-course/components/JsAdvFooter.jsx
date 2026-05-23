import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/js-adv-course' },
  { label: 'Topics', to: '/js-adv-course/topics' },
  { label: 'Practice', to: '/js-adv-course/tasks' },
  { label: 'About', to: '/js-adv-course/about' },
];

export default function JsAdvFooter() {
  return (
    <CourseFooter
      courseName="JAVASCRIPT ADVANCED"
      courseRoute="/js-adv-course"
      tagline="Master enterprise JavaScript — design patterns, performance, architecture, and scalable systems."
      logoImg="/img/JS-ADV.png"
      color="#d97706"
      color2="#f59e0b"
      colorRgb="217,119,6"
      quickLinks={QUICK_LINKS}
    />
  );
}
