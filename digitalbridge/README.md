# DigitalBridge: Community Technology and Digital Literacy Website

## Project overview

DigitalBridge is a Professional Ethics final project for **Topic 5: Community Technology and Digital Literacy Website**. It is an educational site that helps beginners, students, parents, and community members learn basic computer skills, practice online safety, understand electronic waste, and find real public learning resources.

The tagline is **Bridging Communities Through Digital Knowledge**.

The site does not collect accounts, passwords, or quiz scores. It runs in a browser with HTML, CSS, and JavaScript only.

## Group members

Replace every placeholder before submission. Do not invent names.

| Member | Role for this project |
| --- | --- |
| [Member 1 full name] | [Assigned role] |
| [Member 2 full name] | [Assigned role] |
| [Member 3 full name] | [Assigned role] |
| [Member 4 full name] | [Assigned role] |
| [Member 5 full name] | [Assigned role] |

Add or delete rows so the table matches the real group. Record what each person actually did in `documentation/INDIVIDUAL-CONTRIBUTION-REPORT.md`.

## Website objectives

- Explain digital literacy in beginner-friendly language.
- Teach basic computer, file, browser, and search skills.
- Teach online safety without collecting secrets or showing attack tools.
- Explain electronic waste and responsible disposal using published sources.
- Point readers to real educational and government websites.
- Show how the project applies professional ethics.
- Offer a working practice quiz that does not require registration.

## Target audience

- Students and young learners.
- Beginners with limited computer knowledge.
- Parents and community members.
- People who want to learn online safety.
- People interested in responsible technology use.

## Website features

- Home page with the site purpose, audience, categories, safety introduction, responsible-use introduction, and community benefits.
- Digital Literacy lessons.
- Online Safety lessons.
- E-Waste Awareness lessons.
- Community Resources with named organizations and working links.
- Professional Ethics page tied to this website's actual behavior.
- References page.
- Ten-question quiz with answer checking, explanations, score, review, and retry.
- Shared header, footer, and mobile menu.
- Responsive layout for desktop, tablet, and phone.

## Technologies and tools used

- HTML5 for page structure.
- CSS3 for the visual design (`css/style.css` and `css/responsive.css`).
- Vanilla JavaScript for the menu (`js/main.js`) and quiz (`js/quiz.js`).
- Original SVG illustrations in `assets/`.
- A modern desktop browser, or VS Code with the Live Server extension.

Not used: SQL, MySQL, PHP, a database, a login system, a paid API, or an external analytics service.

## How the main files work

- Each HTML file contains its own header and footer so the site can run without a server-side include.
- `js/main.js` adds the class `is-enhanced` and then collapses the menu on small screens. Without JavaScript, the links remain visible.
- `js/quiz.js` stores questions in an array. `checkAnswer` compares the selected radio value with `answer`. Each correct choice adds 1 to `score`. `renderResults` shows the total out of 10. `Try again` resets the in-memory state.

## Professional ethics principles applied

- **Intellectual property:** Original lessons and drawings, with external facts cited.
- **Responsible AI use:** Documented in `documentation/AI-USE-DISCLOSURE.md`.
- **Data privacy:** No accounts and no personal questions.
- **Cybersecurity:** No credential collection and no harmful scripts.
- **Accuracy:** Figures and disposal steps follow the cited reports and the EPA page.
- **Accessibility:** Semantic headings, skip link, keyboard focus, and text feedback in the quiz.
- **Accountability:** This README, the ethics page, and the contribution template.

## References and citations

The full list, with authors, titles, and URLs, is on `pages/references.html`. Primary sources include UNESCO, LearnFree, DigitalLearn, the Public Library Association, Khan Academy, CISA, NIST, the National Cybersecurity Alliance, the U.S. Federal Trade Commission, the Internet Society, ITU, UNITAR, the U.S. EPA, the W3C Web Accessibility Initiative, and Creative Commons.

## How to run the website

1. Open the `digitalbridge` folder.
2. Double-click `index.html`, or right-click it in VS Code and choose **Open with Live Server**.
3. Use the navigation bar to open each page.
4. On a phone-sized window, use **Menu** if JavaScript is enabled. If it is not, the links stay on the page.
5. Open **Quiz**, choose an answer, press **Check answer**, then continue to the score. Press **Try again** to restart.

No installation, database, or API key is required. JavaScript must be enabled for the quiz and for the collapsible mobile menu.

## How to demonstrate the project

1. Start on the home page and state the purpose and audience.
2. Open Digital Literacy and show one lesson, such as files or browsers.
3. Open Online Safety and explain the phishing example. Point out that the site never asks for a real password.
4. Open E-Waste and cite the Global E-waste Monitor figure as a global 2022 statistic.
5. Open Community Resources and click one external link.
6. Complete at least two quiz questions, including one wrong answer, and show the final score and retry button.
7. Open Professional Ethics and References.
8. Be ready to explain `quiz.js` and to say what your group personally verified.

## Known limits

- CISA pages sometimes refuse automated link checkers. Open them in a normal browser before the presentation.
- The quiz answers are visible in `js/quiz.js` because there is no server to hide them.
- Group names and the contribution report are still placeholders until the group completes them.
