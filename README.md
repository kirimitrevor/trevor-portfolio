# Trevor Kirimi - Personal Portfolio

## About the Project

This is a personal portfolio website created for the CSN 1101: Web Technologies and Internet Applications assignment at KCA University.

The website introduces me, provides information about my interests in Cyber Security and Digital Forensics, and includes my contact information and professional links.

## Assignment 1 - Personal Portfolio

The first assignment focused on creating the basic personal portfolio website using HTML and CSS.

### Technologies Used

* HTML5
* CSS3

### Website Sections

The original portfolio contains:

* Home
* About Me
* Projects
* Contact

## Assignment 2 - Projects, Skills & Services

Assignment 2 extends the personal portfolio created in Assignment 1. The existing portfolio was maintained while additional pages, features, and JavaScript functionality were added.

### Assignment 2 Additions

* Skills section with visual proficiency bars
* Three project cards with descriptions and technologies
* Project thumbnails and placeholder visuals
* Services section
* JavaScript Show More/Show Less interaction
* Contact form with client-side validation
* Valid email format checking
* Updated navigation linking to the Projects page
* Responsive layout support

### Technologies Used

* HTML5
* CSS3
* JavaScript

## Assignment 3 - Live Data & Production Polish

Assignment 3 connects the portfolio to a live public API and applies security and performance practices.

### Lighthouse Performance Score (Mobile)

| Run | Performance |
|-----|-------------|
| Before optimisation | 96 |
| After optimisation | 99 |

Both scores were measured with Chrome Lighthouse (Mobile, Navigation) on the same laptop. The "before" score is the previous Vercel deployment (original images) and the "after" score is the current deployment (compressed images and lazy loading). Results can vary slightly between runs.

### Assignment 3 Additions

* Live API integration: the GitHub REST API (Fetch API) lists my public repositories on the Projects page, with a loading state and a friendly error message
* Security review: no API keys or secrets in the code, dynamic content inserted with textContent (no innerHTML), and both sites served over HTTPS
* Image compression and lazy loading

## Project Structure

```text
trevor-portfolio/
│
├── index.html
├── projects.html
├── style.css
├── script.js
├── github.js
├── README.md
│
└── assets/
    ├── headshot.jpg
    ├── Personal Portfolio.png
    ├── cybersecurity.jpg
    └── login.jpg
```

## Live Website

### GitHub Pages

https://kirimitrevor.github.io/trevor-portfolio/

### Vercel

https://trevor-portfolio-nine.vercel.app/

## GitHub Repository

https://github.com/kirimitrevor/trevor-portfolio

## Author

**Trevor Kirimi**

Cyber Security and Digital Forensics Student