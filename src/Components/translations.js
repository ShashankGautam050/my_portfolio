import React, { useState, useEffect } from 'react';

// Sample list of articles
const articles = [
  { id: 1, title: 'Navigating the Storm: Why Freshers in Software Development Feel Overwhelmed', 
    content: (
        <>
        <b  className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl" >Introduction</b>

        <br/>
        
          <p>New grads may experience a combination of enthusiasm and fear when entering the software development industry. While the thought of beginning a career in technology is exciting, it also presents various hurdles that might be intimidating.</p>
          <br/>
          <p>Freshers frequently find themselves navigating unfamiliar technologies, adjusting to new working environments, and dealing with high expectations. This transition from academia to a working environment can cause emotions of discomfort and self-doubt, especially when faced with a steep learning curve.</p>
          <br/>
          <p>Understanding these typical experiences is critical for both freshers and employers to promote a healthy and productive workplace. Freshers are usually new grads or those with less than two years of professional experience. </p>
          <br/>
          <b  className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl" >Understanding the Freshers' Experience</b>
        <br/>
          <p>
          They typically begin the job as junior developers or interns, where they are expected to contribute meaningfully to real-world projects right away.This expectation can put strain on new employees, who must immediately acclimate to their new surroundings, master the technology in use, and collaborate effectively with more experienced colleagues. The sudden transition can be intimidating, but it also provides an excellent opportunity for new graduates to apply their academic knowledge in real-world settings and hone their skills in the software development industry.</p>
          <br/>
          <b  className="text-2xl font-bold mb-6 text-gray-800 md:text-2xl" >Reasons for Overwhelm</b>
          <br/>
          <br/>
          <b  className="text-2xl font-bold mb-6 text-gray-800 md:text-xl" >A. High Expectations</b>
        <br/>

        <p>
        Freshers enter the tech business with great expectations of becoming the next big tech prodigy. However, they rapidly find that there is a lot of pressure to prove their worth. This pressure comes not just from themselves, but also from their bosses and colleagues. The IT business is recognized for emphasizing quick learning and adaptability, which can exacerbate feelings of anxiousness. New developers may feel obligated to demonstrate their abilities immediately, resulting in stress and burnout. It might be difficult to balance these expectations while also increasing their confidence. This fight might create an ongoing sense of urgency. Finally, freshers must handle these demands in order to succeed.
        </p>

        <br/>


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
