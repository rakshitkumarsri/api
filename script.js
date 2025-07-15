const quizData = [
  {
    question: "1. What is a thin client in API architecture?",
    options: ["A. A full-featured standalone application", "B. A lightweight front-end relying on APIs for data", "C. An offline client with built-in logic", "D. A database with no interface"],
    answer: "B"
  },
  {
    question: "2. What is a key feature of a thin client?",
    options: ["A. Executes all business logic locally", "B. Depends on server-side APIs for operations", "C. Stores large data locally", "D. Has no user interface"],
    answer: "B"
  },
  {
    question: "3. Thin clients typically use which type of API?",
    options: ["A. Thick API", "B. Embedded API", "C. Web API (RESTful/GraphQL)", "D. Local API"],
    answer: "C"
  },
  {
    question: "4. What is one of the main benefits of using thin clients?",
    options: ["A. Local backups", "B. Offline support", "C. Easier maintenance and deployment", "D. Increased memory usage"],
    answer: "C"
  },
  {
    question: "5. What layer does a thin client usually handle?",
    options: ["A. Data storage", "B. Business logic", "C. UI/Presentation", "D. Server infrastructure"],
    answer: "C"
  },
  {
    question: "6. In thin client design, where is the business logic executed?",
    options: ["A. Client-side", "B. API gateway", "C. Server-side", "D. Mobile app"],
    answer: "C"
  },
  {
    question: "7. Which is not a benefit of thin clients in an API ecosystem?",
    options: ["A. Scalability", "B. Server-side control", "C. Heavy local processing", "D. Easy updates"],
    answer: "C"
  },
  {
    question: "8. What happens if the backend API fails in a thin client system?",
    options: ["A. The system continues offline", "B. The client remains fully functional", "C. The client becomes partially or fully non-functional", "D. The client reboots automatically"],
    answer: "C"
  },
  {
    question: "9. Which architecture style supports thin clients best?",
    options: ["A. Peer-to-peer", "B. Monolithic", "C. Client-server", "D. Ring topology"],
    answer: "C"
  },
  {
    question: "10. What is a common technology stack used with thin clients?",
    options: ["A. HTML + CSS + JavaScript + REST API", "B. C++ + SQL", "C. Java + Android SDK only", "D. Python only"],
    answer: "A"
  },
  {
    question: "11. Thin clients use APIs mainly to:",
    options: ["A. Store data locally", "B. Communicate with the server for data and logic", "C. Block server access", "D. Write OS drivers"],
    answer: "B"
  },
  {
    question: "12. Which of the following is most likely a thin client?",
    options: ["A. A game engine", "B. A mobile banking app", "C. A C++ compiler", "D. A Raspberry Pi operating system"],
    answer: "B"
  },
  {
    question: "13. In a thin client model, where does data validation usually occur?",
    options: ["A. Client UI", "B. Server API", "C. Router", "D. Browser cache"],
    answer: "B"
  },
  {
    question: "14. Why are thin clients more secure in API-based systems?",
    options: ["A. They are fireproof", "B. They hide the API", "C. Logic stays on the secure server", "D. Clients store passwords"],
    answer: "C"
  },
  {
    question: "15. What type of maintenance is easier with thin clients?",
    options: ["A. Hardware upgrades", "B. Client-side logic updates", "C. Centralized server updates", "D. UI rendering"],
    answer: "C"
  },
  {
    question: "16. Thin clients require a strong connection to:",
    options: ["A. Their printer", "B. Their storage device", "C. The server/API", "D. Other clients"],
    answer: "C"
  },
  {
    question: "17. Thin client applications are best suited for:",
    options: ["A. High-end gaming", "B. Offline travel apps", "C. Real-time dashboard apps", "D. Device drivers"],
    answer: "C"
  },
  {
    question: "18. What is a drawback of thin clients?",
    options: ["A. Complex UI", "B. Heavy on client resources", "C. Dependence on network/API availability", "D. Too much local data"],
    answer: "C"
  },
  {
    question: "19. Which type of response do thin clients usually expect from APIs?",
    options: ["A. Audio streams", "B. JSON or XML data", "C. DLL files", "D. Executables"],
    answer: "B"
  },
  {
    question: "20. Thin client architecture increases:",
    options: ["A. Client-side cost", "B. Server-side control and scalability", "C. Risk of client-side failures", "D. CPU usage on user device"],
    answer: "B"
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  document.getElementById("start-page").style.display = "none";
  document.getElementById("quiz-page").style.display = "block";
  loadQuestion();
}

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach(option => {
    const opt = document.createElement("div");
    opt.classList.add("option");
    opt.innerText = option;
    opt.onclick = () => {
      if (option.startsWith(q.answer)) score++;
      nextQuestion();
    };
    optionsDiv.appendChild(opt);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz-page").style.display = "none";
    document.getElementById("score-page").style.display = "block";
    document.getElementById("score").innerText = `Your score: ${score} out of ${quizData.length}`;
  }
}