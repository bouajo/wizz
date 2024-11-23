/**
 * Save authentication token to localStorage
 * @param {string} token - The authentication token to save
 */
export const saveToken = (token) => {
  console.log("Saving token:", token); // Log the token being saved
  localStorage.setItem('auth_token', token);
};

/**
 * Retrieve authentication token from localStorage
 * @returns {string|null} The stored token or null if not found
 */
export const getToken = () => {
  const token = localStorage.getItem('auth_token');
  console.log("Retrieved token:", token); // Log the token being retrieved
  return token;
};

/**
 * Remove authentication token from localStorage
 */
export const removeToken = () => {
  console.log("Clearing authentication token"); // Log token removal
  localStorage.removeItem('auth_token');
};

// Alias for removeToken to maintain compatibility with both naming conventions
export const clearToken = removeToken;