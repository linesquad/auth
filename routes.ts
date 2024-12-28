// An array of public routes
// this routes are accessible to everyone
// @type {string[]}
export const publicRoutes = ["/"];

// An array of auth routes
// this routes are used for authentication
// this routes will redirect logged in users to settings page
// @type {string[]}
export const authRoutes = ["/auth/login", "/auth/register", "/auth/error"];

// The prefix for API authentication routes
// routes that start with this prefix will be used for authentication purposes
// @type {string}
export const apiAuthPrefix = "/api/auth";

// the default path after logging in
// @type {string}
export const DEFAULT_LOGIN_REDIRECT = "/settings";
