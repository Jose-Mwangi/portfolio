# Joseph Mwangi - Portfolio Website

Professional portfolio showcasing data science, cloud engineering, AI/ML, and backend development projects.

## Features

- Responsive design (mobile, tablet, desktop)
- Clean, modern UI with smooth animations
- Dynamic project showcase
- Contact information with social links
- Fast loading and optimized performance

## Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles
│   └── responsive.css     # Mobile/tablet responsive styles
├── js/
│   ├── main.js           # Navigation & animations
│   └── projects.js       # Project data & rendering
├── images/
│   ├── profile/          # Profile images
│   └── projects/         # Project screenshots
└── README.md             # This file
```

## Setup Instructions

1. **Download/Clone** this repository to your local machine

2. **Add Your Images**:
   - Add your profile photo to `images/profile/`
   - Add project screenshots to `images/projects/` with names:
     - `project-1.jpg` through `project-15.jpg`
   - Recommended image size: 800x600px

3. **Customize Content**:
   - Open `js/projects.js` to update project descriptions
   - Update GitHub links to your actual repositories
   - Modify `index.html` for any text changes

4. **Open in Browser**:
   - Simply open `index.html` in your web browser
   - Or use VS Code Live Server for development

## Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* Add your custom colors */
}
```

### Add More Projects
Add new project objects to the `projects` array in `js/projects.js`:
```javascript
{
    id: 16,
    title: "Your Project",
    description: "Description here",
    image: "images/projects/project-16.jpg",
    github: "https://github.com/Jose-Mwangi/your-project",
    tags: ["Tag1", "Tag2"]
}
```

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## License

All rights reserved © 2024 Joseph Mwangi

## Contact

- **Email**: josephkamenya289@gmail.com
- **Phone**: +254 719 432 446 / +254 734 772 818
- **GitHub**: [Jose-Mwangi](https://github.com/Jose-Mwangi)
- **LinkedIn**: [Joseph Mwangi](https://www.linkedin.com/in/joseph-mwangi-6089042bb/)
