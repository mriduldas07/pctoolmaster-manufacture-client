module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#818cf8",

          "secondary": "#0d9488",

          "accent": "#38bdf8",

          "neutral": "#1B151E",

          "base-100": "#EDEBEF",

          "info": "#9FD7E5",

          "success": "#10b981",

          "warning": "#facc15",

          "error": "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
