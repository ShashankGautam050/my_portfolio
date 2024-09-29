import React, { useState, useEffect } from 'react';

// Sample list of articles
const articles = [
  { id: 1, title: 'Navigating the Storm: Why Freshers in Software Development Feel Overwhelmed', 
    content: (
        <>
       <b className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl">Introduction</b>
<br/>
<p>New grads may experience a combination of <span className="text-blue-600 font-semibold">enthusiasm</span> and <span className="text-red-600 font-semibold">fear</span> when entering the software development industry. While the thought of beginning a career in technology is exciting, it also presents various hurdles that might be intimidating.</p>
<br/>
<p>Freshers frequently find themselves navigating <span className="text-green-600 font-semibold">unfamiliar technologies</span>, adjusting to new working environments, and dealing with <span className="text-orange-600 font-semibold">high expectations</span>. This transition from academia to a working environment can cause feelings of discomfort and <span className="text-red-600 font-semibold">self-doubt</span>, especially when faced with a steep learning curve.</p>
<br/>
<p>Understanding these typical experiences is critical for both freshers and employers to promote a healthy and productive workplace. Freshers are usually new grads or those with less than two years of professional experience.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl">Understanding the Freshers' Experience</b>
<br/>
<p>They typically begin the job as <span className="text-blue-600 font-semibold">junior developers</span> or interns, where they are expected to contribute meaningfully to real-world projects right away. This expectation can put strain on new employees, who must immediately acclimate to their new surroundings, master the technology in use, and collaborate effectively with more experienced colleagues. The sudden transition can be intimidating, but it also provides an excellent opportunity for new graduates to apply their academic knowledge in real-world settings and hone their skills in the software development industry.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl">Reasons for Overwhelm</b>
<br/>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">A. High Expectations</b>
<br/>
<p>Freshers enter the tech business with great expectations of becoming the next big tech prodigy. However, they rapidly find that there is a lot of pressure to prove their worth. This pressure comes not just from themselves, but also from their bosses and colleagues. The IT business is recognized for emphasizing quick learning and adaptability, which can exacerbate feelings of anxiousness. New developers may feel obligated to demonstrate their abilities immediately, resulting in stress and burnout. It might be difficult to balance these expectations while also increasing their confidence. This fight might create an ongoing sense of urgency. Finally, freshers must handle these demands in order to succeed.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">B. Steep Learning Curve</b>
<br/>
<p>The high learning curve is one of the most significant obstacles that new software developers confront. As they begin their new positions, they are frequently confronted with novel <span className="text-green-600 font-semibold">technology</span> and <span className="text-green-600 font-semibold">programming languages</span>. The expectation of rapid adaptation to these instruments can be daunting and overwhelming. Freshers may feel like they're racing against the clock to catch up with their more experienced colleagues. This sense of urgency can leave you feeling inadequate and frustrated. The constant urge to acquire new concepts and implement them right away might be tiring. Furthermore, the fast-paced setting may impair their capacity to completely comprehend fundamental skills. Overcoming this steep learning curve is critical to long-term success.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">C. Imposter Syndrome</b>
<br/>
<p>One common problem among newly hired software development engineers (SDEs) is <span className="text-blue-600 font-semibold">imposter syndrome</span>. Despite possessing the qualifications to succeed, many first-year students struggle with feelings of inadequacy and doubt about their ability. Comparing oneself to more seasoned professions frequently causes self-doubt and a dread of being exposed as "frauds." They can fear that they don't belong and wonder if they have the right to be in the role. Their confidence and willingness to contribute may be hampered by this internal conflict. Being "found out" is a concern that might inhibit risk-taking and creativity. It is imperative that freshmen address imposter syndrome in order to cultivate a positive mentality. They can get over these emotions and prosper if they accept their strengths and accomplishments.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">D. Navigating Workplace Culture</b>
<br/>
<p>For new hires, making the switch from an academic to a corporate atmosphere can be difficult. The dynamic and even unpredictable nature of corporate culture contrasts dramatically with the regimented nature of education. As they learn about <span className="text-blue-600 font-semibold">team dynamics</span> and <span className="text-blue-600 font-semibold">communication styles</span>, newcomers could feel disoriented. It might be unsettling to adjust to new people's personalities and working styles. They could feel confused about how to blend in and make a meaningful contribution during this transitional phase. Moreover, their discomfort may be exacerbated by their unfamiliarity with corporate protocols. Comprehending the subtleties of work environment culture is crucial for establishing connections and encouraging cooperation. This shift can be facilitated and confidence raised in a supportive environment.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">E. Time Management Challenges</b>
<br/>
<p>When they first start the tech business, <span className="text-blue-600 font-semibold">time management</span> is a crucial skill that many freshmen find difficult to master. It can be quite difficult to strike a balance between the requirement for ongoing learning and project deadlines. They frequently find themselves balancing a number of obligations, which can cause stress and burnout. Setting priorities might be difficult in development work because of its fast-paced nature. Many first-year students feel exhausted and unproductive as they attempt to meet expectations and take in new material. This difficulty may cause them to lose enthusiasm and self-assurance. Maintaining productivity and lowering overwhelm require mastering efficient time management strategies. Taking an organized approach can make it easier for new hires to handle their tasks.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">F. Fear of Feedback</b>
<br/>
<p>Though many new hires fear it, receiving <span className="text-blue-600 font-semibold">feedback</span> is a crucial component of professional development. Being afraid of being criticized can lead to a great deal of discomfort and worry. New SDEs can be concerned that any unfavorable comments will draw attention to their shortcomings. This fear may cause them to be reluctant to ask for help or to show others their work. However, constructive feedback is vital for improvement and skill development. Learning to view feedback as an opportunity rather than a setback is crucial for freshers. By fostering a growth mindset, they can embrace criticism as a valuable tool for advancement. Creating a culture of open communication can also alleviate some of this fear. Ultimately, overcoming the fear of feedback is essential for their long-term success.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl">Coping Strategies</b>
<br/>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">A. Seeking Mentorship</b>
<br/>
<p>In the tech world, finding a <span className="text-blue-600 font-semibold">mentor</span> may be a life-changing experience for newcomers. An encouraging mentor provides priceless advice and insights, assisting newcomers in overcoming the many obstacles they encounter. They can help newcomers avoid typical problems, offer constructive criticism, and share their experiences. A newcomer's confidence and ability to make decisions might be greatly enhanced by having a confidante. Mentors can also introduce freshers to professional networks and opportunities for growth. This relationship fosters personal and professional development, encouraging freshers to reach their potential. Ultimately, mentorship is a powerful tool for overcoming obstacles and achieving success.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">B. Embracing Continuous Learning</b>
<br/>
<p>For recent graduates hoping to succeed in the fast-paced tech industry, lifelong learning is essential. Technical abilities can be greatly improved by devoting time to online classes, <span className="text-blue-600 font-semibold">coding bootcamps</span>, or programming challenges. Time spent on self-improvement can help new hires feel better prepared to take on the challenges of their roles. They are able to keep up with evolving technologies and market trends because to their proactive attitude. Additionally, adopting a continual learning mindset gives employees a sense of control and empowerment over their professional growth. Gaining confidence and professional satisfaction can also result from experimenting with new ideas outside of the workplace. After all, the secret to success in the tech industry is lifelong learning.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">C. Setting Realistic Goals</b>
<br/>
<p>Freshmen must set reasonable and attainable goals in order to manage their expectations and alleviate some of their pressure. These goals may be based on both their personal growth and their professional objectives. It is essential to break large tasks into manageable portions, allowing for continuous advancement and achievement. Celebrating small victories fosters motivation and encourages perseverance. Establishing clear objectives promotes focus and keeps newcomers on track despite distractions. Time management techniques can also be enhanced through reasonable goal-setting. Newcomers may feel a greater sense of direction and purpose if they understand that growth takes time.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">D. Building a Support Network</b>
<br/>
<p>Developing a solid support system can help recent graduates adjust to their new positions and minimize stress. These relationships can be with coworkers, friends, or other recent graduates who share similar experiences. Sharing feelings, challenges, and successes with others can help lessen the feeling of isolation. The reassurance of camaraderie promotes resilience and boosts confidence. Networking events, hackathons, and community meetups can provide freshers with opportunities to meet like-minded people. These connections can lead to new insights, collaborations, and support throughout their careers. Building a strong support network is a key factor in overcoming challenges and achieving success in the tech industry.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">E. Practicing Self-Care</b>
<br/>
<p>Self-care is essential for newcomers to the tech industry who want to maintain their mental and emotional well-being. Finding time for hobbies, exercise, and relaxation is essential to reduce stress and prevent burnout. Prioritizing <span className="text-blue-600 font-semibold">self-care</span> fosters a sense of balance and encourages a positive mindset. Engaging in mindfulness practices, meditation, or simple relaxation exercises can aid in maintaining emotional resilience. Additionally, nurturing social connections outside of work provides a sense of belonging and support. A strong sense of well-being enables newcomers to navigate their careers with confidence and enthusiasm.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-xl">F. Seeking Feedback</b>
<br/>
<p>Finally, embracing feedback is a critical component of growth for newcomers. Encouraging open communication with managers and colleagues helps reduce fear and stigma surrounding feedback. Creating a culture where constructive criticism is welcomed fosters a sense of safety and allows new hires to seek help when needed. Actively seeking feedback enables recent grads to identify areas for improvement and recognize their strengths. This proactive approach empowers them to take ownership of their professional development, facilitating continuous growth and confidence in their abilities. Ultimately, overcoming challenges in the tech industry requires a willingness to learn and adapt.</p>
<br/>
<b className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl">Conclusion</b>
<br/>
<p>In conclusion, while new graduates entering the tech industry may face a variety of challenges and feelings of apprehension, they can equip themselves with the skills necessary to thrive. By understanding common challenges, seeking mentorship, embracing continuous learning, and building a support network, freshers can develop the resilience needed to navigate their new environments. Ultimately, a proactive approach to their careers will help them embrace the opportunities that await.</p>

  </>
      )
    }
  // Add more articles as needed
];

const ArticlesPage = () => {
  const [currentArticle, setCurrentArticle] = useState(articles[0]); // Default to the first article
  const [drawerVisible, setDrawerVisible] = useState(false); // Track if drawer is visible

  // Function to handle article selection
  const handleArticleClick = (article) => {
    setCurrentArticle(article); // Set the clicked article as the current article
    setDrawerVisible(false); // Close the drawer after selecting an article
  };

  // Function to toggle drawer visibility
  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible); // Toggle drawer visibility
  };

  // Function to handle swipe gestures
  useEffect(() => {
    const handleSwipe = (e) => {
      if (e.type === 'touchstart') {
        e.startX = e.touches[0].clientX;
      } else if (e.type === 'touchmove') {
        const deltaX = e.touches[0].clientX - e.startX;
        if (deltaX > 100) {
          setDrawerVisible(true); // Open drawer on right swipe
        } else if (deltaX < -100) {
          setDrawerVisible(false); // Close drawer on left swipe
        }
      }
    };

    window.addEventListener('touchstart', handleSwipe);
    window.addEventListener('touchmove', handleSwipe);

    return () => {
      window.removeEventListener('touchstart', handleSwipe);
      window.removeEventListener('touchmove', handleSwipe);
    };
  }, []);

  return (
    <div className="flex h-screen bg-gradient-to-r from-white via-lightgray to-lightyellow relative">
      {/* Sidebar for desktop view */}
      <div className="w-1/5 bg-white p-4 hidden md:block shadow-lg overflow-y-auto" style={{ maxHeight: 'calc(100vh - 16px)' }}>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id} className="mb-2">
              <div
                className="block p-2 bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer transition duration-300"
                onClick={() => handleArticleClick(article)}
              >
                <span className="text-gray-800 font-semibold">{article.title}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content area for article details */}
      <div className={`w-full md:w-4/5 p-4 flex flex-col overflow-y-hidden`} style={{ height: '80vh' }}>
        <div className="bg-white rounded-lg shadow-lg flex-grow overflow-y-auto p-6" style={{ border: '2px solid #e2e8f0' }}> {/* Added padding */}
          <h1 className="text-3xl font-bold mb-6 text-gray-800 md:text-4xl" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {currentArticle.title}
          </h1>
          <p className="text-sm text-gray-700 leading-relaxed md:text-lg text-justify" style={{ fontFamily: 'Dancing Script, cursive' }}>
            {currentArticle.content || 'This article is currently empty.'}
          </p>
        </div>
      </div>

      {/* Overlay when drawer is visible */}
      {drawerVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setDrawerVisible(false)}></div>
      )}

      {/* Navigation Drawer for mobile view */}
      <div className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-white shadow-lg z-50 w-3/4 h-full ${drawerVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 overflow-y-auto h-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Articles</h2>
          <ul className="space-y-2">
            {articles.map((article) => (
              <li key={article.id}>
                <div
                  className="block p-4 bg-gray-100 rounded-lg shadow hover:bg-gray-200 cursor-pointer transition duration-300"
                  onClick={() => handleArticleClick(article)}
                >
                  <span className="text-gray-800 font-semibold text-sm">{article.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 md:hidden z-50 hover:bg-blue-600 focus:outline-none"
        onClick={toggleDrawer}
      >
        {drawerVisible ? 'Hide articles' : 'Show articles'} {/* Toggle text based on drawer visibility */}
      </button>
    </div>
  );
};

export default ArticlesPage;
