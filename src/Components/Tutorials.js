import { useState, useEffect } from 'react';

// Sample tutorials data
const tutorials = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    content: `Welcome to your first JavaScript tutorial! In this tutorial, you'll learn about the basics of JavaScript syntax and rules. 
    JavaScript is a versatile language used for both front-end and back-end development. 
    You'll explore variables, functions, loops, and data types as you get started with coding.`
  },
  {
    id: 2,
    title: 'Variables and Data Types',
    content: `In this tutorial, we will dive into how to declare and use variables, and learn about different data types available in JavaScript. 
    Variables store data values that can be modified during the execution of a program. JavaScript has several primitive data types such as strings, numbers, booleans, and more.`
  },
  {
    id: 3,
    title: 'Functions and Loops',
    content: `This tutorial focuses on understanding functions and loops. Functions allow you to organize code into reusable blocks. 
    Loops such as 'for' and 'while' are used to repeat actions multiple times, which is useful for tasks like iterating over arrays or objects.`
  }
];




const Tutorials = () => {
  const [currentTutorial, setCurrentTutorial] = useState(tutorials[0]); // Default to the first tutorial
  const [drawerVisible, setDrawerVisible] = useState(false); // Track if drawer is visible
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Filter tutorials based on the search query
  const filteredTutorials = tutorials.filter((tutorial) =>
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
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Tutorials</h2>

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search tutorials..."
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
          <p className="text-sm text-gray-700 leading-relaxed md:text-lg text-justify" style={{ fontFamily: 'Dancing Script,' }}>
            {currentTutorial.content || 'This tutorial is currently empty.'}
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
