import CourseFooter from '../../../components/CourseFooter';

const QUICK_LINKS = [
  { label: 'Home', to: '/nlp-course' },
  { label: 'Topics', to: '/nlp-course/topics' },
  { label: 'About', to: '/nlp-course/about' },
];

export default function NlpFooter() {
  return (
    <CourseFooter
      courseName="NLP IN MY STYLE"
      courseRoute="/nlp-course"
      tagline="Master Natural Language Processing — from tokenization to transformers, with code examples and MCQs."
      logoImg="/img/NLP.png"
      color="#7b1fa2"
      color2="#9c27b0"
      colorRgb="123,31,162"
      quickLinks={QUICK_LINKS}
    />
  );
}
