module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
          Oswald: ["Oswald", "sans-serif"]
        }, 
        backgroundImage: {
          'quiz-time': "url('../images/quiztime.jpg')"
        }
    }
  },
  plugins: [],
}