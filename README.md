# Zeit UI for Tailwind CSS

I'm a huge fan of [Zeit's design aesthetic](https://zeit.co/design). I wanted
to make their color palette easily available through Tailwind, so here you go.

```javascript
colors: {
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
  "cyan": "#79FFE1"
}
```

Due to how Tailwind works, including colors in a system-wide way like needs to
be done, this plugin requires features not in the latest stable Tailwind
release. As of Dec 24, 2019, it's necessary to use tailwindcss@canary. 
