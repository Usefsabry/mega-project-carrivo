import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/CareerHub.css';

// Import images from assets folder
import cvResumeImg from '../assets/images/cv-resume.png';
import jobInterviewImg from '../assets/images/job-interview.png';
import networkingImg from '../assets/images/networking.png';
import internshipImg from '../assets/images/internship.png';
import careerPathImg from '../assets/images/career-path.png';
import mentorImg from '../assets/images/mentor.png';
import cvWritingImg from '../assets/images/cv-writing.png';
import interviewPrepImg from '../assets/images/interview-prep.png';
import connectionsImg from '../assets/images/connections.png';
import firstInternshipImg from '../assets/images/first-internship.png';
import careerDesignImg from '../assets/images/career-design.png';
import professionalMentorImg from '../assets/images/professional-mentor.png';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const CareerHub = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const articles = [
    {
      id: 1,
      title: 'Crafting a Standout CV & Resume',
      description: 'Tips and Tricks to Make Recruiters Notice You',
      category: 'CV & Resume',
      readTime: '6 min read',
      image: cvResumeImg,
      route: '/career-hub/cv-resume-guide'
    },
    {
      id: 2,
      title: 'Mastering the Job Interview',
      description: 'Proven Strategies to Answer with Confidence and Impress Employers',
      category: 'Interview Tips',
      readTime: '5 min read',
      image: jobInterviewImg,
      route: '/career-hub/interview-mastery'
    },
    {
      id: 3,
      title: 'Building a Powerful Professional Network',
      description: 'How to Connect, Engage, and Grow Your Career Opportunities',
      category: 'Networking',
      readTime: '4 min read',
      image: networkingImg,
      route: '/career-hub/professional-network'
    },
    {
      id: 4,
      title: 'Making the Most of Your Internship',
      description: 'Learn, Contribute, and Set Yourself Up for Future Career Success',
      category: 'Internship',
      readTime: '7 min read',
      image: internshipImg,
      route: '/career-hub/internship-guide'
    },
    {
      id: 5,
      title: 'Planning Your Career Path',
      description: 'Steps to Identify Goals, Skills, and Opportunities for Growth',
      category: 'Career Planning',
      readTime: '8 min read',
      image: careerPathImg,
      route: '/career-hub/career-planning'
    },
    {
      id: 6,
      title: 'Finding and Leveraging a Mentor',
      description: 'How Guidance and Advice Can Accelerate Your Professional Journey',
      category: 'Mentorship',
      readTime: '6 min read',
      image: mentorImg,
      route: '/career-hub/mentorship-guide'
    },
    {
      id: 7,
      title: 'Writing a CV That Speaks for You',
      description: 'How to Present Your Skills Clearly and Professionally',
      category: 'CV & Resume',
      readTime: '5 min read',
      image: cvWritingImg,
      route: '/career-hub/cv-writing-tips'
    },
    {
      id: 8,
      title: 'The Smart Way to Prepare for Interviews',
      description: 'Subtle Techniques That Boost Your Confidence and Performance',
      category: 'Interview Tips',
      readTime: '7 min read',
      image: interviewPrepImg,
      route: '/career-hub/interview-preparation'
    },
    {
      id: 9,
      title: 'The Hidden Power of Meaningful Connections',
      description: 'Turning Simple Conversations into Career Opportunities',
      category: 'Networking',
      readTime: '4 min read',
      image: connectionsImg,
      route: '/career-hub/meaningful-connections'
    },
    {
      id: 10,
      title: 'Your First Internship: What Really Matters',
      description: 'Practical Lessons That Shape Your Early Career',
      category: 'Internship',
      readTime: '6 min read',
      image: firstInternshipImg,
      route: '/career-hub/first-internship'
    },
    {
      id: 11,
      title: 'Designing a Career That Fits Your Future',
      description: 'A Practical Framework to Map Goals, Skills, and Next Steps',
      category: 'Career Planning',
      readTime: '8 min read',
      image: careerDesignImg,
      route: '/career-hub/career-design'
    },
    {
      id: 12,
      title: 'Why Every Professional Needs a Mentor',
      description: 'Real Guidance That Accelerates Growth and Opens New Paths',
      category: 'Mentorship',
      readTime: '6 min read',
      image: professionalMentorImg,
      route: '/career-hub/why-mentor'
    }
  ];

  const filters = ['All', 'CV & Resume', 'Interview Tips', 'Networking', 'Internship', 'Career Planning', 'Mentorship'];

  const filteredArticles = articles.filter(article => {
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <>
    <Navbar/>
    <div className="career-hub">
      <div className="career-hub-header">
        <h1>Career Hub</h1>
        <p>Explore expert articles, practical tips, and real-world guidance to help you grow confidently in your chosen career path</p>
      </div>

      <div className="search-container">
        <div className="search-box">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24.0414 22.1561L29.7517 27.8663L27.8661 29.7519L22.1558 24.0417C20.1026 25.6843 17.4987 26.667 14.6667 26.667C8.04275 26.667 2.66675 21.291 2.66675 14.667C2.66675 8.04299 8.04275 2.66699 14.6667 2.66699C21.2907 2.66699 26.6667 8.04299 26.6667 14.667C26.6667 17.499 25.6841 20.1029 24.0414 22.1561ZM21.3663 21.1667C22.9967 19.4865 24.0001 17.1945 24.0001 14.667C24.0001 9.51032 19.8234 5.33366 14.6667 5.33366C9.51008 5.33366 5.33341 9.51032 5.33341 14.667C5.33341 19.8237 9.51008 24.0003 14.6667 24.0003C17.1942 24.0003 19.4862 22.997 21.1665 21.3666L21.3663 21.1667Z" fill="#4D4D60"/>
          </svg>
          <input 
            type="text" 
            placeholder="Search articles by topic or skill"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="filters-container">
        {filters.map(filter => (
          <button 
            key={filter}
            className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="articles-grid">
        {filteredArticles.map(article => (
          <div 
            key={article.id} 
            className="article-card"
            onClick={() => handleCardClick(article.route)}
          >
            <div className="article-image">
              <img src={article.image} alt={article.title} />
            </div>
            <div className="article-content">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <div className="article-footer">
                <span className="category-badge">{article.category}</span>
                <span className="read-time">
                  <svg width="16" height="16" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2.66699C8.63621 2.66699 2.66675 8.63645 2.66675 16.0003C2.66675 23.3642 8.63621 29.3337 16 29.3337C23.3639 29.3337 29.3334 23.3642 29.3334 16.0003C29.3334 8.63645 23.3639 2.66699 16 2.66699ZM16 26.667C10.1052 26.667 5.33341 21.8952 5.33341 16.0003C5.33341 10.1055 10.1052 5.33366 16 5.33366C21.8949 5.33366 26.6667 10.1055 26.6667 16.0003C26.6667 21.8952 21.8949 26.667 16 26.667ZM17.3334 16.0003H21.3334V18.667H14.6667V9.33366H17.3334V16.0003Z" fill="#666"/>
                  </svg>
                  {article.readTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CareerHub;