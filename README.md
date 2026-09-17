# 🎓 UniGrade — JNTUK Academic Calculator

> A simple, responsive academic calculator designed to help engineering students calculate **SGPA** and **CGPA** quickly.

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-222222?logo=github)](https://pages.github.com/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌐 Live Project

**UniGrade:**
https://tejeshdimmiti5-crypto.github.io/unigrade-jntu-academic-calculator/

**Source Code:**
https://github.com/tejeshdimmiti5-crypto/unigrade-jntu-academic-calculator

---

## 📌 About the Project

**UniGrade** is a lightweight web application for students who want a convenient way to calculate academic performance without installing software.

The project currently provides:

- 📊 SGPA calculation using subject credits and grade points
- 📈 CGPA calculation using semester credits and SGPA
- 🎯 Equivalent percentage display
- 🎓 JNTUK R23-oriented academic interface
- 📱 Responsive design for desktop and mobile screens
- 🔗 Simple navigation between academic pages
- ⚡ Fast, static, browser-based calculations
- 🆓 Free to use and easy to deploy with GitHub Pages

---

## ✨ Features

### SGPA Calculator

Enter the credit value and grade for each subject. UniGrade calculates the weighted SGPA based on the entered academic data.

**Grade-point mapping currently used by the calculator:**

| Grade | Grade Point |
|---|---:|
| S | 10 |
| A+ | 9 |
| A | 8 |
| B | 7 |
| C | 6 |
| D | 5 |
| E | 4 |
| F | 0 |

### CGPA Calculator

Enter semester credits and SGPA values. The calculator uses a credit-weighted calculation to produce the overall CGPA.

### Percentage

The application also displays an equivalent percentage based on the conversion implemented in the calculator.

> **Academic note:** Always verify the applicable university regulation and official academic records before using a calculated value for examinations, applications, or other official purposes.

---

## 🖥️ Pages

| Page | Purpose |
|---|---|
| 🏠 Home | Introduction and calculator navigation |
| 📊 SGPA | Calculate semester GPA |
| 📈 CGPA | Calculate cumulative GPA |
| ℹ️ About | Information about UniGrade |
| 📩 Contact | Project/contact information |

---

## 🛠️ Technology Stack

UniGrade is intentionally lightweight and does not require a backend server for its calculator functionality.

- **HTML5** — page structure
- **CSS3** — responsive UI and styling
- **JavaScript** — calculator logic and interactions
- **GitHub Pages** — static deployment

---

## 📂 Project Structure

```text
unigrade-jntu-academic-calculator/
│
├── index.html
│
├── pages/
│   ├── sgpa.html
│   ├── cgpa.html
│   ├── about.html
│   └── contact.html
│
├── js/
│   ├── sgpa.js
│   ├── cgpa.js
│   └── subjects.js
│
├── css/
│   ├── style.css
│   ├── navbar.css
│   ├── calculator.css
│   └── responsive.css
│
└── README.md
```

---

## 🚀 Run Locally

### Option 1 — Open directly

1. Clone the repository.
2. Open the project folder.
3. Open `index.html` in your browser.

### Option 2 — Use a local server

If you have Python installed:

```bash
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

Using a local server is recommended because it more closely matches a deployed static website environment.

---

## 📥 Clone the Repository

```bash
git clone https://github.com/tejeshdimmiti5-crypto/unigrade-jntu-academic-calculator.git
cd unigrade-jntu-academic-calculator
```

---

## 🧮 Calculation Concept

### SGPA

SGPA is calculated using the weighted average of grade points and credits:

```text
SGPA = Σ(Credit × Grade Point) / Σ(Credit)
```

### CGPA

The calculator uses semester credits to weight each semester's SGPA:

```text
CGPA = Σ(Semester Credit × SGPA) / Σ(Semester Credit)
```

The implementation uses only the values entered by the user.

---

## 🎯 Current Scope

The repository currently contains the calculator foundation and JNTUK R23-oriented UI, including the available AI & DS I-I subject dataset.

Subject names, credits, regulations, branches, and grading rules can be expanded as the project develops.

### Planned Improvements

- [ ] Add more JNTUK R23 semesters
- [ ] Add more branches
- [ ] Add additional JNTU regulations
- [ ] Add more universities
- [ ] Add saved calculation history
- [ ] Add downloadable result reports
- [ ] Improve accessibility
- [ ] Add automated browser testing
- [ ] Add dark mode
- [ ] Add PWA/offline support

---

## 🤝 Contributing

Contributions and suggestions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the calculator and navigation.
5. Commit your changes.
6. Open a pull request.

Example:

```bash
git checkout -b feature/new-semester
```

---

## ⚠️ Disclaimer

UniGrade is an educational utility and is not an official university examination or academic-record system.

Calculation results depend on the subject credits, grades, SGPA values, and rules implemented in the application. Users should verify important academic calculations against the latest applicable university documentation.

---

## 👨‍💻 Developer

**Tejesh Dimmiti**

B.Tech — Artificial Intelligence & Data Science

Seshadri Rao Gudlavalleru Engineering College (SRGEC)

---

## ⭐ Support the Project

If you find UniGrade useful, consider giving the repository a ⭐ on GitHub and sharing it with fellow students.

**Made for students. Built with HTML, CSS & JavaScript. 🎓**
