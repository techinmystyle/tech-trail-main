import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home',       to: '/html-course'           },
  { label: 'Topics',     to: '/html-course/topics'    },
  { label: 'Tags A–Z',   to: '/html-course/reference' },
  { label: 'Practice',   to: '/html-course/tasks'     },
  { label: 'About',      to: '/html-course/about'     },
];

export default function HtmlFooter() {
  return (
    <CourseFooter
      courseName="HTML"
      courseRoute="/html-course"
      tagline="Learn HTML and web development the right way — with clear explanations, interactive examples, and hands-on practice."
      logoImg="/img/HTML.png"
      color="#e44d26"
      color2="#f16529"
      colorRgb="227,79,38"
      quickLinks={QUICK_LINKS}
    />
  );
}
