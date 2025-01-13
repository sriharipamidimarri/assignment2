Assignment 2: CDP Chatbot

This project implements a chatbot to answer "how-to" questions related to four Customer Data Platforms (CDPs): Segment, mParticle, Lytics, and Zeotap. The chatbot extracts relevant information from official documentation to guide users on performing tasks and configurations within each platform.

Features

1. Answering "How-to" Questions

Understands user questions about using features or completing tasks in Segment, mParticle, Lytics, and Zeotap.

Example questions:

"How do I set up a new source in Segment?"

"How can I create a user profile in mParticle?"

"How do I build an audience segment in Lytics?"

2. Documentation-Based Responses

Extracts instructions from the official documentation of the mentioned CDPs.

Navigates and retrieves relevant content based on the query context.

3. Handling Question Variations

Processes long questions without breaking.

Handles non-CDP-related questions with appropriate responses.

Bonus Features (Implemented)

Cross-CDP Comparisons: Answers comparative questions like:

"How does Segment's audience creation differ from Lytics'?"

Advanced How-To Guidance: Provides detailed configurations and complex use cases.

Tech Stack

Backend

Python Flask: Serves chatbot responses.

OpenAI API: Processes user queries using GPT-based natural language understanding.

Frontend

React.js: A simple interface for user interaction.

Data Structures

Document Indexing: Utilizes keyword matching or an NLP model for efficient query handling.

Question Parsing: Analyzes query structure to determine relevant content sections.

Instructions

Setup

Clone the repository: git clone https://github.com/sriharipamidimarri/assignment2.

Navigate to the backend directory and install dependencies:

pip install flask openai
python app.py

Run the frontend React app:

npm install
npm start

Usage

Enter a question about a supported CDP in the provided input field.

View the chatbot's response, sourced from official documentation.

Improvements

Data Persistence: Implement caching for frequently asked questions.

Enhanced NLP: Integrate advanced NLP libraries for better semantic understanding.

Error Handling: Robust handling for incomplete or ambiguous questions.

Bonus Features (Planned)

Save/Export Chat History: Allow users to download chat transcripts.

Speech Recognition: Add voice input support.

Future Enhancements

Add detailed analytics for chatbot interactions.

Improve UI responsiveness and visual design.

For detailed implementation, visit the GitHub Repository.

