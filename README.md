# 🍳 Chef Mixtral

Chef Mixtral is an AI-powered recipe page that utilizes the Hugging Face AI Model Mixtral to generate and manage interactive recipes. Built with React and Vite, this project demonstrates the use of state, props, and other modern React concepts to create a dynamic user experience.

---

## 🚀 Features

- AI-powered recipe suggestions using Hugging Face's Mixtral model.
- Users can add ingredients, and based on a minimum of 4 ingredients, the AI generates a recipe.
- Interactive and responsive design.
- Dynamic Markdown rendering for recipe content.
- Environment variable management using dotenv.
- Built with cutting-edge React features.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://reactjs.org/) (Version 19.0.0)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **State Management**: React State and Props
- **Packages Used**:
  - `@huggingface/inference` (v3.0.0)
  - `dotenv` (v16.4.7)
  - `react-markdown` (v8.0.6)
  - `react` (v19.0.0)
  - `react-dom` (v19.0.0)

---

## 📦 Installation

To run Chef Mixtral locally, follow these steps:

1. **Clone the Repository**:
   ```bash
   [git clone] (https://github.com/Priyanshu-Iron/Chef-Mixtral)
   cd chef-mixtral
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a `.env` file in the root directory.
   - Add your Hugging Face API key:
     ```env
     REACT_APP_HUGGINGFACE_API_KEY=your_api_key_here
     ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## 📸 Preview

![Chef Mixtral Screenshot](https://res.cloudinary.com/dkslm53fp/video/upload/v1737700092/Screen_Recording_2025-01-24_at_11.55.39_AM_d7psnp.mov)

---

## 🤖 How It Works

1. The app fetches recipe suggestions from the Hugging Face Mixtral model.
2. Users can input ingredients into the app. When a minimum of 4 ingredients are provided, the AI generates a recipe suggestion.
3. User input is handled dynamically with React state and props.
4. Recipes are displayed in a beautifully rendered Markdown format.

---

## 👨‍🏫 Learning Journey

This project was inspired by the lessons on [Scrimba](https://scrimba.com/) taught by [Bob Ziroll]. The primary focus was on learning interactive web development using:
- State management.
- Prop drilling.
- Integration of external APIs.

---

## 🛡️ License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- [Hugging Face](https://huggingface.co/) for the Mixtral AI model.
- [Scrimba](https://scrimba.com/) for providing excellent learning resources.
- [Bob Ziroll] for his insightful tutorials.

---

## 📬 Contact

For any inquiries or contributions, reach out at:
- **Email**: ps2894944@gmail.com
- **GitHub**: [Priyanshu-Iron](https://github.com/Priyanshu-Iron)

---

Happy Cooking! 🍲
