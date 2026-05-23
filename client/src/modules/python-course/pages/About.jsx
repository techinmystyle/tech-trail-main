import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import './About.css'

const VALUES = [
  { icon: '\ud83c\udf0d', title: 'Accessible', desc: 'Free, open learning for everyone regardless of background or experience level.' },
  { icon: '\u2b50', title: 'Quality', desc: 'Carefully crafted content reviewed and updated to reflect best practices.' },
  { icon: '\ud83e\udd1d', title: 'Community', desc: 'A supportive community of learners and educators growing together.' },
]

export default function About() {
  return (
    <div className="py-about-page">
      <PythonNavbar showTasks />
      <div className="py-about-hero">
        <span className="py-chip">&#x2139;&#xfe0f; About Us</span>
        <h1>About <span>Python in my style</span></h1>
        <p>Learn about our mission, our story, and the platform behind your Python journey.</p>
      </div>
      <main className="py-about-body">
        <div className="py-about-mission">
          <div className="py-mico">&#x1f3af;</div>
          <h2>Our Mission</h2>
          <p>
            At Python in my style, we&apos;re dedicated to making Python learning accessible,
            engaging, and personalized. We believe programming education should adapt to different
            learning styles. Our goal is to provide comprehensive resources that help beginners
            and experienced developers alike master Python and apply it to real-world problems.
          </p>
        </div>
        <div className="py-about-cards">
          <div className="py-about-card">
            <div className="py-aco">&#x1f4d6;</div>
            <h2>Our Story</h2>
            <p>
              Python in my style began in 2025 when a group of Python enthusiasts recognized the
              need for a more personalized approach to Python education. Frustrated with
              one-size-fits-all tutorials, we set out to create a platform that adapts to different
              learning styles.
            </p>
            <p>
              What started as a small collection of tutorials has grown into a comprehensive
              learning platform serving thousands of students worldwide.
            </p>
          </div>
          <div className="py-about-card">
            <div className="py-aco">&#x1f52c;</div>
            <h2>Our Approach</h2>
            <p>
              We believe in learning by doing. Our content is designed to be hands-on, with
              plenty of examples, exercises, and real-world applications. We cover Python from
              the ground up, assuming no prior programming knowledge, but also dive deep into
              advanced topics.
            </p>
            <p>Our curriculum is constantly updated to reflect the latest Python developments and best practices.</p>
          </div>
        </div>
        <div className="py-about-vals">
          {VALUES.map(v => (
            <div key={v.title} className="py-val-item">
              <div className="py-vi">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <PythonFooter />
    </div>
  )
}
