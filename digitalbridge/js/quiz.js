/* DigitalBridge practice quiz.
   How it works:
   1. questions is a list of multiple-choice items stored only in this file.
   2. state remembers the current question, the score, and which choice was picked.
   3. checkAnswer compares the selected choice with the correct index and shows an explanation.
   4. The score is a count of correct answers. It stays in memory for this page visit.
   5. Retry clears that memory and starts again.
   Nothing is saved to localStorage, a cookie, or a server. No name or contact field exists. */

(function () {
  var app = document.getElementById("quiz-app");
  if (!app) {
    return;
  }

  var questions = [
    {
      topic: "Basic computer knowledge",
      prompt: "Which item is computer hardware?",
      choices: [
        "A keyboard",
        "A web browser",
        "An operating system",
        "A saved essay file"
      ],
      answer: 0,
      explanation: "Hardware is a physical part you can touch, such as a keyboard, mouse, screen, or the computer itself. Browsers, operating systems, and essay files are software or data."
    },
    {
      topic: "Basic computer knowledge",
      prompt: "What is the main job of an operating system?",
      choices: [
        "To replace the need for electricity",
        "To manage the computer and let programs run",
        "To guarantee that every website is true",
        "To store only photographs"
      ],
      answer: 1,
      explanation: "An operating system such as Windows, macOS, ChromeOS, or a Linux distribution manages memory, files, devices, and the screen so other programs can run."
    },
    {
      topic: "Digital literacy",
      prompt: "Why should files be placed in folders?",
      choices: [
        "Folders make files impossible to delete",
        "Folders automatically encrypt every file",
        "Folders group related files so they are easier to find",
        "Folders make the computer physically faster"
      ],
      answer: 2,
      explanation: "Folders are containers for related files. Clear names, such as School and Photos, make documents easier to find later."
    },
    {
      topic: "Digital literacy",
      prompt: "What is the difference between a web browser and a search engine?",
      choices: [
        "They are two names for the same tool",
        "A browser shows web pages; a search engine helps you find pages",
        "A search engine is a hardware device inside the keyboard",
        "A browser can open only email"
      ],
      answer: 1,
      explanation: "Chrome, Firefox, Edge, and Safari are browsers. Google, Bing, and DuckDuckGo are search engines that you use inside a browser."
    },
    {
      topic: "Digital literacy",
      prompt: "Before trusting an online article, what is a responsible first step?",
      choices: [
        "Share it immediately if the headline is surprising",
        "Check who wrote it, when it was published, and whether reliable sources agree",
        "Believe it because it contains several pictures",
        "Assume every website is reviewed by a teacher"
      ],
      answer: 1,
      explanation: "Digital literacy includes checking the author, the date, the purpose of the page, and whether other credible sources support the claim."
    },
    {
      topic: "Internet safety",
      prompt: "Which password habit is safer?",
      choices: [
        "Use one short password for every account",
        "Write the password on a note stuck to the monitor",
        "Use a long, unique passphrase for each important account",
        "Share the password with a friend so they can sign in for you"
      ],
      answer: 2,
      explanation: "A long passphrase that is different for each account is harder to reuse in an attack. A password manager can store those passphrases. Multi-factor authentication adds another check when a service offers it."
    },
    {
      topic: "Internet safety",
      prompt: "Which message is a warning sign of phishing?",
      choices: [
        "A school portal notice that you opened by typing the school's known address",
        "An unexpected message that demands your password immediately",
        "A software update started from the device's official settings screen",
        "A library reminder that does not ask for secrets"
      ],
      answer: 1,
      explanation: "Phishing tries to make you click, pay, or reveal personal information. Urgency plus a request for a password is a common warning sign. Contact the organization through a website or phone number you already trust."
    },
    {
      topic: "Internet safety",
      prompt: "You opened a link and the page unexpectedly asks for your password. What should you do?",
      choices: [
        "Type the password so the warning disappears",
        "Forward the link to friends to see what happens",
        "Close the page without entering the password, then use a known official website or tell a trusted adult",
        "Turn off the device lock to save time"
      ],
      answer: 2,
      explanation: "Do not give a password to a page you reached from a surprise link. Leave the page. If you already typed the password, change it from a device you trust and tell a trusted adult, teacher, or the real organization's support channel."
    },
    {
      topic: "Responsible technology use",
      prompt: "Which social media habit better protects privacy?",
      choices: [
        "Accept every follow request",
        "Review who can see your posts and limit personal details",
        "Post your live location throughout the day",
        "Use your street name and birth year as a public username"
      ],
      answer: 1,
      explanation: "Privacy settings control the audience for your posts. Home addresses, school schedules, identification numbers, and daily location do not need to be public."
    },
    {
      topic: "Responsible technology use",
      prompt: "What is a responsible way to handle a phone you no longer use?",
      choices: [
        "Put it in the regular household trash",
        "Burn the battery so the device takes less space",
        "Throw a lithium-ion battery into the household recycling bin",
        "Delete your personal data, then reuse, repair, donate, or recycle it through a proper electronics program"
      ],
      answer: 3,
      explanation: "The U.S. Environmental Protection Agency advises people to delete personal information before donation or recycling, and says lithium-ion batteries should not go in household garbage or household recycling bins. Repair and reuse extend the life of a device."
    }
  ];

  var state = {
    index: 0,
    score: 0,
    checked: false,
    picks: []
  };

  function clear(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  function makeButton(label, className, onClick) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = className;
    button.textContent = label;
    button.addEventListener("click", onClick);
    return button;
  }

  function renderQuestion() {
    var item = questions[state.index];
    clear(app);
    state.checked = false;

    var card = document.createElement("article");
    card.className = "quiz-card";

    var progress = document.createElement("p");
    progress.className = "quiz-progress";
    progress.textContent = "Question " + (state.index + 1) + " of " + questions.length;

    var topic = document.createElement("p");
    topic.className = "quiz-topic";
    topic.textContent = item.topic;

    var heading = document.createElement("h2");
    heading.id = "quiz-question";
    heading.textContent = item.prompt;

    var group = document.createElement("div");
    group.className = "choices";
    group.setAttribute("role", "radiogroup");
    group.setAttribute("aria-labelledby", "quiz-question");

    item.choices.forEach(function (choice, choiceIndex) {
      var label = document.createElement("label");
      label.className = "choice";

      var input = document.createElement("input");
      input.type = "radio";
      input.name = "quiz-choice";
      input.value = String(choiceIndex);

      var text = document.createElement("span");
      text.textContent = choice;

      label.appendChild(input);
      label.appendChild(text);
      group.appendChild(label);
    });

    var feedback = document.createElement("div");
    feedback.id = "quiz-feedback";
    feedback.setAttribute("aria-live", "polite");

    var actions = document.createElement("div");
    actions.className = "quiz-actions";

    var checkButton = makeButton("Check answer", "btn btn-navy", function () {
      checkAnswer(item, group, feedback, checkButton, nextButton);
    });

    var nextLabel = state.index === questions.length - 1 ? "See score" : "Next question";
    var nextButton = makeButton(nextLabel, "btn btn-line", function () {
      if (!state.checked) {
        return;
      }
      if (state.index === questions.length - 1) {
        renderResults();
      } else {
        state.index += 1;
        renderQuestion();
      }
    });
    nextButton.disabled = true;

    actions.appendChild(checkButton);
    actions.appendChild(nextButton);
    card.appendChild(progress);
    card.appendChild(topic);
    card.appendChild(heading);
    card.appendChild(group);
    card.appendChild(feedback);
    card.appendChild(actions);
    app.appendChild(card);

    var firstChoice = group.querySelector("input");
    if (firstChoice) {
      firstChoice.focus();
    }
  }

  function checkAnswer(item, group, feedback, checkButton, nextButton) {
    if (state.checked) {
      return;
    }

    var selected = group.querySelector("input:checked");
    clear(feedback);
    feedback.className = "feedback";

    if (!selected) {
      feedback.classList.add("is-incorrect");
      var need = document.createElement("p");
      need.textContent = "Select one answer before checking.";
      feedback.appendChild(need);
      return;
    }

    var pick = Number(selected.value);
    var correct = pick === item.answer;
    state.checked = true;
    state.picks.push(pick);
    if (correct) {
      state.score += 1;
    }

    group.querySelectorAll("input").forEach(function (input) {
      input.disabled = true;
    });
    checkButton.disabled = true;
    nextButton.disabled = false;

    feedback.classList.add(correct ? "is-correct" : "is-incorrect");

    var status = document.createElement("p");
    var statusText = document.createElement("strong");
    statusText.textContent = correct ? "Correct." : "Incorrect.";
    status.appendChild(statusText);
    feedback.appendChild(status);

    if (!correct) {
      var right = document.createElement("p");
      right.textContent = "The better answer is: " + item.choices[item.answer];
      feedback.appendChild(right);
    }

    var why = document.createElement("p");
    why.textContent = item.explanation;
    feedback.appendChild(why);
    nextButton.focus();
  }

  function renderResults() {
    clear(app);

    var card = document.createElement("article");
    card.className = "quiz-card";

    var heading = document.createElement("h2");
    heading.textContent = "Your practice score";

    var score = document.createElement("p");
    score.className = "score-number";
    score.textContent = state.score + " / " + questions.length;

    var summary = document.createElement("p");
    var percent = Math.round((state.score / questions.length) * 100);
    summary.textContent = percent + " percent correct. This score stays on this page only. It is practice feedback, not a certificate, and DigitalBridge does not save your name or score.";

    var reviewTitle = document.createElement("h3");
    reviewTitle.textContent = "Review";

    card.appendChild(heading);
    card.appendChild(score);
    card.appendChild(summary);
    card.appendChild(reviewTitle);

    questions.forEach(function (item, index) {
      var block = document.createElement("div");
      block.className = "review-item";

      var prompt = document.createElement("p");
      var label = document.createElement("strong");
      var wasCorrect = state.picks[index] === item.answer;
      label.textContent = (wasCorrect ? "Correct: " : "Review: ") + item.prompt;
      prompt.appendChild(label);

      var yours = document.createElement("p");
      yours.textContent = "Your answer: " + item.choices[state.picks[index]];

      var explain = document.createElement("p");
      explain.textContent = item.explanation;

      block.appendChild(prompt);
      block.appendChild(yours);
      block.appendChild(explain);
      card.appendChild(block);
    });

    var actions = document.createElement("div");
    actions.className = "quiz-actions";
    actions.appendChild(makeButton("Try again", "btn btn-navy", function () {
      state.index = 0;
      state.score = 0;
      state.checked = false;
      state.picks = [];
      renderQuestion();
    }));
    card.appendChild(actions);
    app.appendChild(card);
    heading.tabIndex = -1;
    heading.focus();
  }

  renderQuestion();
})();
