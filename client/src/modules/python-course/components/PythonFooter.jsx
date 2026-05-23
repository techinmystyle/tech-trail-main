import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home',     to: '/python-course'        },
  { label: 'Topics',   to: '/python-course/topics'  },
  { label: 'Practice', to: '/python-course/tasks'   },
  { label: 'About',    to: '/python-course/about'   },
];

export default function PythonFooter() {
  return (
    <CourseFooter
      courseName="PYTHON"
      courseRoute="/python-course"
      tagline="Learn Python for web development, data science, automation, and machine learning."
      logoImg="/img/PYTHON.png"
      color="#3572A5"
      color2="#4584bd"
      colorRgb="53,114,165"
      quickLinks={QUICK_LINKS}
    />
  );
}
