import { Link } from 'react-router-dom'
import PythonNavbar from '../components/PythonNavbar'
import PythonFooter from '../components/PythonFooter'
import PopularCourses from '../../../components/PopularCourses'
import './Home.css'

function Terminal() {
  return (
    <div className="py-terminal">
      <div className="py-term-topbar">
        <div className="py-term-dots"><span/><span/><span/></div>
        <div className="py-term-title">python3 &mdash; hello.py</div>
      </div>
      <div className="py-term-body">
        <div className="py-tl"><span className="py-tl-prompt">$</span> <span className="py-tl-cmd">python3 hello.py</span></div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-comment"># Python in my style</span></div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-kw">def </span><span className="py-tl-fn">learn</span>(topic):</div>
        <div className="py-tl">{'    '}<span className="py-tl-kw">return </span><span className="py-tl-str">{'f"Mastered: {topic} \u2713"'}</span></div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-var">topics</span> = [<span className="py-tl-str">"Basics"</span>, <span className="py-tl-str">"OOP"</span>, <span className="py-tl-str">"Advanced"</span>]</div>
        <div className="py-tl"><span className="py-tl-kw">for </span><span className="py-tl-var">t </span><span className="py-tl-kw">in </span><span className="py-tl-var">topics</span>:</div>
        <div className="py-tl">{'    '}<span className="py-tl-fn">print</span>(learn(t))</div>
        <div className="py-tl-blank"/>
        <div className="py-tl-out">Mastered: Basics &#10003;</div>
        <div className="py-tl-out">Mastered: OOP &#10003;</div>
        <div className="py-tl-out">Mastered: Advanced &#10003;</div>
        <div className="py-tl-blank"/>
        <div className="py-tl"><span className="py-tl-prompt">$</span> <span className="py-tl-cmd"> </span><span className="py-cursor"/></div>
      </div>
    </div>
  )
}

const FEATURES = [
  { icon: '\ud83d\udcda', title: 'Comprehensive Curriculum', desc: 'From basics to advanced \u2014 everything structured and easy to follow.' },
  { icon: '\ud83c\udfaf', title: 'Real-World Examples', desc: 'Practical code examples and applications to solidify your understanding.' },
  { icon: '\ud83e\udde0', title: 'Interview Prep', desc: 'Curated interview questions for every topic to help you land your dream job.' },
  { icon: '\u2705', title: '30 Practice Tasks', desc: 'Hands-on coding tasks with instant validation to test your skills.' },
]

const CURRICULUM = [
  { icon: '\ud83d\udd24', title: 'Python Basics', desc: 'Variables, data types, operators, control flow, and Python syntax fundamentals.' },
  { icon: '\ud83c\udfd7\ufe0f', title: 'Object-Oriented Programming', desc: 'Classes, objects, inheritance, encapsulation, polymorphism, and abstraction.' },
  { icon: '\ud83d\udce6', title: 'Data Structures', desc: 'Lists, tuples, sets, dictionaries \u2014 basic and advanced usage patterns.' },
]

export default function PythonHome() {
  return (
    <div className="py-home">
      <PythonNavbar showTasks />

      {/* HERO */}
      <section className="py-hero">
        <div className="py-hero-inner">
          <div className="py-hero-content">
            <div className="py-hero-eyebrow">&#x1f40d; Python Learning Platform</div>
            <h1 className="py-hero-h1">Master Python<br /><span className="py-hl">Your Way</span></h1>
            <p className="py-hero-sub">
              Comprehensive, interactive Python resources &mdash; from absolute basics to advanced topics.
              Learn at your own pace with real examples.
            </p>
            <div className="py-hero-btns">
              <Link to="/python-course/topics" className="py-btn py-btn-y">Explore Topics &rarr;</Link>
            </div>
            <div className="py-hero-stats">
              <div className="py-hs-item"><div className="py-hs-n">50+</div><div className="py-hs-l">Topics</div></div>
              <div className="py-hs-item"><div className="py-hs-n">30</div><div className="py-hs-l">Practice Tasks</div></div>
              <div className="py-hs-item"><div className="py-hs-n">100%</div><div className="py-hs-l">Free</div></div>
            </div>
          </div>
          <div className="py-terminal-wrap">
            <Terminal />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-feat-sec">
        <div className="py-sec-hd">
          <span className="py-chip">&#x2728; Why Choose Us</span>
          <h2>Everything you need to learn Python</h2>
          <p>Structured curriculum, real examples, interview prep, and hands-on tasks &mdash; all in one place.</p>
        </div>
        <div className="py-feat-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="py-feat-card">
              <div className="py-feat-ico">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CURRICULUM PREVIEW */}
      <section className="py-prev-sec">
        <div className="py-prev-hd">
          <div>
            <span className="py-chip">&#x1f4d6; Curriculum</span>
            <h2>What You&apos;ll Learn</h2>
          </div>
          <Link to="/python-course/topics" className="py-btn py-btn-o">See All Topics &rarr;</Link>
        </div>
        <div className="py-prev-grid">
          {CURRICULUM.map(c => (
            <div key={c.title} className="py-prev-card">
              <div className="py-pc-ico">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-cta-sec">
        <div className="py-cta-inner">
          <h2>Ready to start your <span>Python journey?</span></h2>
          <p>Join thousands of learners mastering Python with our structured, hands-on curriculum.</p>
          <div className="py-cta-btns">
            <Link to="/python-course/topics" className="py-btn py-btn-y">Start Learning Free &rarr;</Link>
            <Link to="/python-course/tasks" className="py-btn py-btn-w">Try a Task</Link>
          </div>
        </div>
      </section>

      <PopularCourses />
      <PythonFooter />
    </div>
  )
}
