import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/css-course' },
  { label: 'Topics', to: '/css-course/topics' },
  { label: 'About', to: '/css-course/about' },
];

export default function CssPageFooter() {
  return (
    <CourseFooter
      courseName="CSS IN MY STYLE"
      courseRoute="/css-course"
      tagline="Master modern CSS — layouts, animations, Flexbox, Grid, and responsive design with hands-on practice."
      logoImg="/img/CSS.png"
      color="#264de4"
      color2="#2965f1"
      colorRgb="38,77,228"
      quickLinks={QUICK_LINKS}
    />
  );
}
