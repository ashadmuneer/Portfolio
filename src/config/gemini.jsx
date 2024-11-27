import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
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

const oneTimeString = `My name is Ashad Muneer, a final-year B.Tech student in Computer Science and Engineering at ABES Engineering College, affiliated with Dr. A.P.J. Abdul Kalam Technical University, Ghaziabad, India. I aspire to become a Frontend Developer and have a strong foundation in web development, UI/UX design, and open-source contributions. My technical expertise includes HTML/CSS, JavaScript, React.js, Tailwind, Node.js, and MySQL. I am also skilled in tools like Firebase, AWS, Git, Postman, and design software like Figma and AdobeXD.
I have worked on notable projects, including 'Vajra,' an emergency solutions platform; 'ChitChat,' a real-time chat app; and 'Pop Crat,' a fashion e-commerce platform. My UI/UX projects include 'Perpetual,' a web trading platform, and a food delivery app. I have won awards such as first place in the college's internal Smart India Hackathon and 8th place in an inter-college hackathon at Bennett University.
I hold certifications in areas like API development, UX design, and cloud foundations and have participated as a mentor in programs like GSSOC'24. I enjoy designing responsive and user-centric applications and am passionate about delivering creative solutions. My portfolio and work can be found on https://github.com/ashadmuneer  and https://ashadmuneer.netlify.app/ .You can reach me via email at ashadmuneerofficial@gmail.com, Linkdin https://www.linkedin.com/in/ashad-muneer/ and I also maintain a personal website at ashadmuneer.netlify.app.`;

function assessHarm(harmReport) {
  const harmCategories = [
    { category: "Hate Speech", threshold: 3, message: "Hate speech detected. Account may be suspended." },
    { category: "Violence", threshold: 1, message: "Violent content detected. Content removed and account flagged." },
    { category: "Spam", threshold: 10, message: "Excessive spam detected. Account may be temporarily banned." },
    { category: "Misinformation", threshold: 5, message: "Significant misinformation detected. Content flagged for review."}
  ];

  // Assess if the harm report exceeds the threshold
  for (const category of harmCategories) {
    if (harmReport.category === category.category && harmReport.count >= category.threshold) {
      return category.message;
    }
  }

  return "No action required."; // Default message if no threshold is exceeded.
}

async function run(prompt) {
  // Example harm report that could be checked (you can replace this with actual reports)
  // const harmReport = { category: "Spam", count: 12 }; // Example: 12 spam incidents

  // // Check if any action needs to be taken based on harm report
  // const harmAssessmentResult = assessHarm(harmReport);
  // console.log(harmAssessmentResult); // Log harm assessment result

  // Include the one-time string in the history with a 'user' role and 'parts' property
  const chatSession = model.startChat({
    generationConfig,
    history: [
      { 
        role: "user", 
        parts: [{ text: oneTimeString }] // Wrap content in 'parts' as an array
      },
      { 
        role: "user", 
        parts: [{ text: "i want give you a name and call with that name only" }] // Wrap content in 'parts' as an array
      },
      { 
        role: "user", 
        parts: [{ text: "Hello! I'm Ashad Ai, how can I assist you today?'" }] // Wrap content in 'parts' as an array
      },
    ],
  });

  // Send the main prompt to the model
  const result = await chatSession.sendMessage(prompt);

  // Log the response text
  // console.log(result.response.text());

  // Return the response text
  return result.response.text();
}

export default run;
