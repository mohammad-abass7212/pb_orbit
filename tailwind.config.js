/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/AdminFlow/Add_Community.jsx",
    "./components/AdminFlow/AdminDrawer.jsx",
    "./components/AdminFlow/CardCommunities.jsx",
    "./components/AdminFlow/CardDetail.jsx",
    "./components/AdminFlow/CardReservations.jsx",
    "./components/AdminFlow/Communities.jsx",
    "./components/AdminFlow/LoyoutDror.jsx",
    "./components/AdminFlow/CardRequest.jsx",
    "./pages/communityFrameFlow/index.js",
    "./pages/protectedRoutes/adminDashboard.jsx",
    "./pages/fresUserFlow/AddCommunityPage.jsx",
    "./components/AdminFlow/Community_addition.jsx",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
};
