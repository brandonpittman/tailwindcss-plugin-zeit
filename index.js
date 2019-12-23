module.exports = function ({addUtilities}) {
  let colors = {
    "accent-1": "#FAFAFA",
    "accent-2": "#EAEAEA",
    "accent-3": "#999",
    "accent-4": "#888",
    "accent-5": "#666",
    "accent-6": "#444",
    "accent-7": "#333",
    "accent-8": "#111",
    "error-light": "#FF1A1A",
    "error": "#E00",
    "error-dark": "#C00",
    "success-light": "#3291FF",
    "success": "#0070F3",
    "success-dark": "#0366D6",
    "warning-light": "#F7B955",
    "warning": "#F5A623",
    "warning-dark": "#F49B0B",
    "alert": "#FF0080",
    "purple": "#F81CE5",
    "violet": "#7928CA",
    "cyan": "#79FFE1",
  }

  let utilities = {}

  for (let [key, value] of Object.entries(colors)) {
    utilities[`.bg-${key}`] = {
      backgroundColor: value
    }
  }

  addUtilities(utilities, ['responsive', 'hover'])
}
