import { Routes, Route } from 'react-router-dom'
import AiHome from './pages/AiHome'
import AiTopics from './pages/AiTopics'
import AiSubtopicPage from './pages/AiSubtopicPage'
import './styles/ai-style.css'

export default function AiCourseRoutes() {
  return (
    <div className="ai-course-root">
      <Routes>
        <Route path="/" element={<AiHome />} />
        <Route path="/topics" element={<AiTopics />} />
        <Route path="/topics/:category/:slug" element={<AiSubtopicPage />} />
      </Routes>
    </div>
  )
}
