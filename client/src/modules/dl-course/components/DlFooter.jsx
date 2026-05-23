import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/dl-course' },
  { label: 'Topics', to: '/dl-course/topics' },
  { label: 'Practice', to: '/dl-course/tasks' },
  { label: 'About', to: '/dl-course/about' },
];

export default function DlFooter() {
  return (
    <CourseFooter
      courseName="DEEP LEARNING"
      courseRoute="/dl-course"
      tagline="Dive into deep learning — neural networks, CNNs, RNNs, backpropagation, and hands-on projects."
      logoImg="/img/DL.png"
      color="#9c27b0"
      color2="#ab47bc"
      colorRgb="156,39,176"
      quickLinks={QUICK_LINKS}
    />
  );
}
