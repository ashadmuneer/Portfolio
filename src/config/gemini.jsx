import {
  GoogleGenerativeAI,
  
} from "@google/generative-ai";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const oneTimeString = `Ashad Muneer is a driven and passionate final-year student pursuing a Bachelor of Technology in Computer Science and Engineering at ABES Engineering College, Ghaziabad. With a current CGPA of 7.32, he is on track to graduate in July 2025. Ashad has built a strong foundation in web development, particularly frontend development, and aims to establish a career in this field.

Educational Background:
Ashad completed his secondary education at Bansraj Memorial Sunrise Public School (CBSE) in 2018 and his senior secondary education at Shivbrat Singh Children Academy (CBSE) in 2020. Despite a one-year education gap due to the COVID-19 pandemic, he utilized this time to develop skills that have significantly contributed to his academic and professional growth.

Skills:
Ashad is proficient in several programming languages and tools:
- Languages: HTML/CSS, C/C++, JavaScript, MySQL
- Frameworks: React.js, Tailwind, Bootstrap, Node.js
- Tools: Firebase, AWS, Git, GitHub Actions, Postman, Mapbox, Figma, Adobe XD
- Platforms: Linux, Windows
- Soft Skills: Active listening, teamwork, adaptability, design thinking, analytical and creative thinking

Certifications:
Ashad holds multiple certifications, including:
- Postman API Fundamentals Student Expert
- AWS Academy Graduate – AWS Academy Cloud Foundations
- Foundations of User Experience (UX) Design (Coursera)
- Problem Solving (HackerRank)
- Create a No-Code Responsive Website with Webflow

Experience & Contributions:
Ashad has participated actively in the tech community:
- Mentor in GirlScript Summer of Code (GSSOC'24) and Script Winter of Code (SWoC)
- Graphic Designer Lead at DataVerse
- Open-source contributor to projects like Front-End Projects and CSS.Effects-Designs

Achievements:
Ashad’s dedication has led to several notable achievements:
- Secured 1st place in the college-level Smart India Hackathon (SIH) among 124 teams
- Achieved 8th place in an inter-college hackathon at Bennett University, competing against 140 teams
- Ranked as a top 10 contributor in Script Winter of Code (SWoC)
- Won 2nd position in Tech Pravaah’22, organized by ABES Engineering College

Projects:
Ashad has developed practical, impactful projects:
1. Vajra: A medical emergency solutions platform using React.js, enabling seamless navigation and quick access to emergency services.
2. Portfolio: A responsive portfolio website showcasing his skills and projects, equipped with features like dark mode and smooth email integration.
3. ChitChat: A real-time chat application with Firebase authentication, Zustand state management, and media sharing capabilities.
4. Pop Crat: A fashion e-commerce platform with a robust tech stack including React.js, Node.js, MongoDB, and PayPal integration.

UI/UX Design Work:
Ashad has a keen interest in UI/UX design, demonstrated through projects such as:
- Perpetual: A web trading platform designed to simplify investment management for individual investors.
- Food Delivery App: A user-friendly app design for seamless food ordering and delivery experiences.

Hobbies & Interests:
Outside of his professional pursuits, Ashad enjoys listening to music, playing games, and spending time outdoors with friends. These activities help him relax and stay creative.

Future Goals:
Ashad aspires to start his career as a Frontend Developer, combining his technical skills, design expertise, and creativity to create user-friendly web solutions. He is currently seeking an internship opportunity from January to May 2025 to gain practical experience in a professional setting.

Contact Information:
- Email: ashadmuneerofficial@gmail.com
- LinkedIn: https://www.linkedin.com/in/ashad-muneer
- GitHub: https://github.com/ashadmuneer
- Portfolio: https://ashadmuneer.netlify.app/

This detailed profile highlights Ashad’s strengths, experiences, and aspirations, presenting him as a promising candidate for roles in web development and UI/UX design.
`;


async function run(prompt) {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      { 
        role: "user", 
        parts: [{ text: oneTimeString }] 
      },
      
    ],
  });
  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default run;
