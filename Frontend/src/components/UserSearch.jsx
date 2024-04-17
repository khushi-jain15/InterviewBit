/* The code `import React, { useState } from 'react';` is importing the `useState` hook from the React
library. The `useState` hook is a function that allows functional components to have state
variables. */
import React, { useState } from 'react';
import axios from 'axios';

/* The code snippet is defining a functional component named `UserSearch` using arrow function syntax.
Within this component, it is utilizing the `useState` hook from React to manage state within the
component. */
const UserSearch = ({ onUserSelect }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  /**
   * The function `handleSearch` makes an asynchronous request to the GitHub API to search for users
   * based on a given query and updates the search results accordingly.
   */
  const handleSearch = async () => {
    try {
/* The line `const response = await axios.get(`https://api.github.com/search/users?q=`);`
is making an asynchronous GET request to the GitHub API to search for users based on the
`searchQuery` variable. The `` part is dynamically inserting the value of the
`searchQuery` state variable into the URL to perform the search based on the user input. */
      const response = await axios.get(`https://api.github.com/search/users?q=${searchQuery}`);
      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

 /* The `return (` statement in the code snippet is the start of the JSX (JavaScript XML) block within
 the `UserSearch` functional component. JSX allows you to write HTML-like code within JavaScript,
 making it easier to create UI components in React. */
  return (
    
    /* The `div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">` is defining a `<div>`
    element with multiple CSS classes applied to it. Here's a breakdown of what each class is
    doing: */
    /* This code block represents the JSX (JavaScript XML) structure within the `UserSearch` functional
    component in a React application. Let's break down what each part of this JSX code is doing: */
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">

      <input
        type="text"
        placeholder="Search GitHub users"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded focus:outline-none focus:border-blue-400"
      />
      <button onClick={handleSearch} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>
      <div className="mt-4">
        {searchResults.map((user) => (
          <div key={user.id} onClick={() => onUserSelect(user)} className="flex items-center mt-2 cursor-pointer hover:bg-gray-100 p-2 rounded">
            <img src={user.avatar_url} alt={user.login} className="w-10 h-10 rounded-full mr-2" />
            <p className="text-lg">{user.login}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

/* `export default UserSearch;` is exporting the `UserSearch` functional component as the default
export from this JavaScript module. This allows other parts of the application to import and use the
`UserSearch` component. When another file imports this module, they can simply import it as the
default export without needing to specify a specific name for the import. */
export default UserSearch;
