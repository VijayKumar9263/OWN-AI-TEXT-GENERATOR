# OWN AI Text Generator

This project is a simple AI text generator that uses the OpenAI API to generate responses based on user input. The user interface consists of an input box where users can enter their queries, and upon clicking the submit button, the AI will generate and display a response.

## Features

- Simple and intuitive user interface
- Uses OpenAI API for text generation
- Real-time response generation based on user input

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- OpenAI API Key

### Installation

1. **Clone the repository**

    ```sh
    git clone https://github.com/VijayKumar9263/OWN-AI-TEXT-GENERATOR.git
    cd OWN-AI-TEXT-GENERATOR
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory and add your OpenAI API key:

    ```plaintext
    OPENAI_API_KEY=your_openai_api_key_here
    ```

### Running the Application

To start the application, run:

```sh
npm start
```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter your query in the input box.
3. Click the submit button.
4. Wait for the AI to generate and display the response.

## Project Structure
- `index.html` - The main HTML file containing the user interface.
- `style.css` - The CSS file for styling the user interface.
- `app.js` - The JavaScript file containing the logic for handling user input and making API requests.
- `server.js` - The Node.js server file to serve the application.
- `.env` - The environment file containing the OpenAI API key.

## Screenshots

### UI 
![image](https://github.com/VijayKumar9263/OWN-AI-TEXT-GENERATOR/assets/134833144/114166f5-254e-4d9f-b543-212275e0ce6a)

### ENTERING QUERY
![image](https://github.com/VijayKumar9263/OWN-AI-TEXT-GENERATOR/assets/134833144/2859d727-ec9a-4991-8b1f-f31add140938)

### AI RESPONSE
![image](https://github.com/VijayKumar9263/OWN-AI-TEXT-GENERATOR/assets/134833144/74c64008-59c8-42f4-9055-c91f3301bfe0)


## Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Inspiration from various PHP and MySQL tutorials.
- Thanks to the open-source community for their valuable resources.
