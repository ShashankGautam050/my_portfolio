import { useState, useEffect } from 'react';

// Sample tutorials data
const bestPractices = [
  {
    id: 1,
    title: 'Mastering JavaScript: Best Practices for Beginners',
    content: `
      <div class="tutorial-wrapper">
        <div class="tutorial-content">
          <h2 class="text-xl font-bold text-gray-800 mb-4">JavaScript Basics</h2>
          <p class="text-gray-700 mb-4">Welcome to JavaScript! This tutorial is your first step into the world of one of the most powerful and widely-used programming languages. JavaScript enables you to create dynamic and interactive experiences, making it a cornerstone of modern web development. By the end, you’ll feel confident and ready to explore its endless possibilities.</p>
          
          <div class="alert alert-warning mb-4">
            <strong>Pro Tip:</strong> Focus on understanding the basics thoroughly. They are the foundation for mastering more advanced topics later.
          </div>
          
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Why Learn JavaScript?</h3>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>JavaScript is essential for front-end web development.</li>
            <li>It powers frameworks like React, Angular, and Vue.</li>
            <li>Knowledge of JavaScript opens up opportunities in backend development with Node.js.</li>
            <li>It's supported by a massive community and has abundant resources.</li>
          </ul>

          <h3 class="text-lg font-semibold text-gray-800 mb-2">Learning Steps</h3>
          <ol class="list-decimal pl-6 mb-4">
            <li>Understand the different data types in JavaScript (string, number, boolean, object, array).</li>
            <li>Learn how to use functions, loops, and conditional statements.</li>
            <li>Explore how JavaScript interacts with HTML and CSS using the DOM (Document Object Model).</li>
            <li>Work with asynchronous code using promises and async/await.</li>
            <li>Familiarize yourself with ES6+ features like arrow functions, template literals, and destructuring.</li>
            <li>Learn to debug your code using browser developer tools.</li>
          </ol>
          
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Common Challenges</h3>
          <p class="text-gray-700 mb-4">
            Every developer faces challenges, especially when starting out. Here are some tips to overcome them:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>If you're stuck, break down the problem into smaller pieces.</li>
            <li>Use online resources like MDN Web Docs and Stack Overflow.</li>
            <li>Practice solving coding problems on platforms like Codewars or LeetCode.</li>
            <li>Don't hesitate to ask for help from the developer community.</li>
          </ul>

          <h3 class="text-lg font-semibold text-gray-800 mb-2">Practice Makes Perfect</h3>
          <p class="text-gray-700 mb-4">
            Mistakes are an essential part of the learning process. The more you practice, the more confident you'll become in writing clean and efficient JavaScript code. Try building small projects such as:
          </p>
          <ul class="list-disc pl-6 mb-4 text-gray-700">
            <li>A simple to-do list application.</li>
            <li>A calculator with basic arithmetic functions.</li>
            <li>A personal portfolio website showcasing your work.</li>
          </ul>

          <div class="bg-gray-100 p-4 rounded-lg mt-6">
            <p class="text-gray-700"><strong>Important Note:</strong> Learning JavaScript takes time and consistent effort. Don’t rush through the topics—master each concept before moving on. Start small and gradually take on more complex projects as your skills improve.</p>
          </div>
          
          <h3 class="text-lg font-semibold text-gray-800 mb-2">Recommended YouTube Channels</h3>
          <div class="bg-blue-50 p-4 rounded-lg mt-6 border-l-4 border-blue-500">
            <p class="text-gray-700"><strong>For Hindi Tutorials:</strong></p>
            <ul class="list-disc pl-6 text-gray-700">
              <li><a href="https://www.youtube.com/@CodeWithHarry" class="text-blue-600 underline" target="_blank">Code With Harry</a> - Simplified tutorials in Hindi covering JavaScript and other technologies.</li>
              <li><a href="https://www.youtube.com/@chaiaurcode" class="text-blue-600 underline" target="_blank">Chai aur Code</a> - Learn coding concepts in Hindi with a casual approach.</li>
              <li><a href="https://www.youtube.com/@SheriyansCodingSchool" class="text-blue-600 underline" target="_blank">Sheriyans Coding School</a> - Hindi tutorials on web development, including JavaScript.</li>
            </ul>

            <p class="text-gray-700 mt-4"><strong>For English Tutorials:</strong></p>
            <ul class="list-disc pl-6 text-gray-700">
              <li><a href="https://www.youtube.com/@TraversyMedia" class="text-blue-600 underline" target="_blank">Traversy Media</a> - One of the best channels for web development tutorials.</li>
              <li><a href="https://www.youtube.com/@programmingwithmosh" class="text-blue-600 underline" target="_blank">Programming with Mosh</a> - High-quality tutorials on JavaScript and other programming languages.</li>
              <li><a href="https://www.youtube.com/@javascriptmastery" class="text-blue-600 underline" target="_blank">JavaScript Mastery</a> - Advanced JavaScript tutorials and projects for mastering the language.</li>
            </ul>
          </div>

          <div class="bg-blue-50 p-4 rounded-lg mt-6 border-l-4 border-blue-500">
            <p class="text-gray-700"><strong>Additional Resources:</strong> Here are some valuable resources to deepen your knowledge:</p>
            <ul class="list-disc pl-6 text-gray-700">
              <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" class="text-blue-600 underline" target="_blank">MDN Web Docs</a> - Comprehensive documentation for JavaScript.</li>
              <li><a href="https://javascript.info/" class="text-blue-600 underline" target="_blank">JavaScript.info</a> - A modern tutorial on JavaScript basics and beyond.</li>
              <li><a href="https://www.freecodecamp.org/" class="text-blue-600 underline" target="_blank">freeCodeCamp</a> - Hands-on coding exercises and projects.</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }
];




const Tutorials = () => {
  const [currentTutorial, setCurrentTutorial] = useState(bestPractices[0]); // Default to the first tutorial
  const [drawerVisible, setDrawerVisible] = useState(false); // Track if drawer is visible
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Filter tutorials based on the search query
  const filteredTutorials = bestPractices.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Function to handle tutorial selection
  const handleTutorialClick = (tutorial) => {
    setCurrentTutorial(tutorial); // Set the clicked tutorial as the current tutorial
    setDrawerVisible(false); // Close the drawer after selecting a tutorial
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
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Best Practices</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search for topic..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg text-gray-700"
        />

        <ul>
          {filteredTutorials.length === 0 ? (
            <li>No tutorials found</li>
          ) : (
            filteredTutorials.map((tutorial) => (
              <li key={tutorial.id} className="mb-2">
                <div
                  className={`block p-2 rounded-lg shadow hover:bg-gray-200 cursor-pointer transition duration-300
                  ${currentTutorial.id === tutorial.id ? 'border-2 border-blue-500 bg-blue-100' : 'bg-gray-100'}`}
                  onClick={() => handleTutorialClick(tutorial)}
                >
                  <span className="text-gray-800 font-semibold">{tutorial.title}</span>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Main content area for tutorial details */}
      <div className={`w-full md:w-4/5 p-4 flex flex-col overflow-y-hidden`} style={{ height: '80vh' }}>
        <div className="bg-white rounded-lg shadow-lg flex-grow overflow-y-auto p-6" style={{ border: '2px solid #e2e8f0' }}>
          <h1 className="text-3xl font-bold mb-6 text-gray-800 md:text-4xl" style={{ fontFamily: 'Dancing Script' }}>
            {currentTutorial.title}
          </h1>
          <div
            className="text-sm text-gray-700 leading-relaxed md:text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: currentTutorial.content || 'This tutorial is currently empty.' }}
          />
        </div>
      </div>

      {/* Overlay when drawer is visible */}
      {drawerVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setDrawerVisible(false)}></div>
      )}

      {/* Navigation Drawer for mobile view */}
      <div className={`fixed inset-y-0 left-0 transform transition-transform duration-300 bg-white shadow-lg z-50 w-3/4 h-full ${drawerVisible ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 overflow-y-auto h-full">
          <h2 className="text-xl font-bold mb-4 text-gray-800">Tutorials</h2>

          {/* Search Input for mobile */}
          <input
            type="text"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 mb-4 border rounded-lg text-gray-700"
          />

          <ul className="space-y-2">
            {filteredTutorials.length === 0 ? (
              <li>No tutorials found</li>
            ) : (
              filteredTutorials.map((tutorial) => (
                <li key={tutorial.id}>
                  <div
                    className={`block p-4 rounded-lg shadow hover:bg-gray-200 cursor-pointer transition duration-300
                    ${currentTutorial.id === tutorial.id ? 'border-2 border-blue-500 bg-blue-100' : 'bg-gray-100'}`}
                    onClick={() => handleTutorialClick(tutorial)}
                  >
                    <span className="text-gray-800 font-semibold text-sm">{tutorial.title}</span>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg transition-all duration-300 md:hidden z-50 hover:bg-blue-600 focus:outline-none"
        onClick={toggleDrawer}
      >
        {drawerVisible ? 'Hide tutorials' : 'Show tutorials'} {/* Toggle text based on drawer visibility */}
      </button>
    </div>
  );
};

export default Tutorials;
