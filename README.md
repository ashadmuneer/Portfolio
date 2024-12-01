# Portfolio Website

Welcome to my portfolio repository! This is my personal portfolio website where I showcase my skills, projects, and experience as a Frontend Developer. The website is built with modern web technologies and is designed to be fully responsive across all devices. It serves as a platform to present my work, including open-source contributions, UI/UX designs, and projects from my learning journey.

## Demo

You can view the live version of my portfolio here: [Portfolio](https://ashadmuneer.netlify.app/)

## Features

- **Responsive Design**: The website is fully responsive, adapting to different screen sizes, including mobile, tablet, and desktop.
- **Interactive Sections**: It contains sections for About Me, Projects, Skills, Contact, and Blog.
- **Dark Mode**: The website supports both light and dark themes, allowing users to toggle between them for enhanced user experience.
- **Real-time Chatbot**: A chatbot feature is integrated using **Mento context API** for managing conversation context and **Gemini AI API** for generating intelligent responses to user queries.
- **Email Contact Form**: Integrated Email.js to allow visitors to contact me easily through a simple and functional contact form.

## Tech Stack

### Frontend
- **React.js**: The main JavaScript library used for building the user interface.
- **React Router**: Used for navigation between different sections of the portfolio.
- **Tailwind CSS**: A utility-first CSS framework used for styling the application.
- **React Context API**: For managing global state, particularly for theme toggling and chatbot interaction.
- **Email.js**: Used to handle email submissions from the contact form.

### APIs
- **Mento Context API**: Helps manage conversation state for the chatbot, allowing it to understand and maintain the context throughout the conversation.
- **Gemini AI API**: Powers the chatbot with AI-driven natural language processing, enabling it to understand user queries and provide intelligent responses.

## Setup Instructions

### Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js**: Recommended version 16 or higher.

### Installation
   ```bash
   git clone https://github.com/ashadmuneer/portfolio.git
   cd portfolio
   npm start
```
## How the Chatbot Works

The chatbot integrated into this portfolio uses two key technologies to provide a seamless, interactive experience for users:

### **Mento Context API**
The **Mento Context API** is used to manage the chatbot's state, enabling it to remember the context of previous interactions. This allows the chatbot to offer personalized responses based on past conversations, creating a more engaging and intelligent user experience. The context is stored and updated as users interact with the bot.

### **Gemini AI API**
The **Gemini AI API** is responsible for the natural language understanding and processing aspect of the chatbot. It converts user input into actionable data, which the chatbot then uses to generate human-like responses. With its AI-driven capabilities, the chatbot can respond to a wide variety of user queries, making the conversation feel natural and informative.

## Additional Features

- **Project Showcase**: Displays the projects I have worked on, including descriptions, technologies used, and links to the source code on GitHub.
- **Skills Section**: Highlights the programming languages, frameworks, tools, and platforms I am proficient in, giving an overview of my technical expertise.
- **Contact Form**: Allows users to easily reach out to me with inquiries, feedback, or collaboration proposals. This form is connected to Email.js for efficient email handling.

## Contributing

I welcome contributions to this project! If you’d like to improve the portfolio, add features, or suggest enhancements, feel free to fork the repository, make changes, and submit a pull request.

Here are some ideas for contribution:

- Fixing bugs or improving code quality
- Enhancing the UI/UX design
- Adding new features or sections
- Improving chatbot functionality

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---
