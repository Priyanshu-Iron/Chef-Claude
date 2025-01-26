import React from "react";
import IngredientsList from "../components/IngredientsList";
import ClaudeRecipe from "../components/ClaudeRecipe";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false); // Loading state

  async function getRecipe() {
    setIsLoading(true); // Start loading animation
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    setIsLoading(false); // Stop loading animation
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {/* Show loading animation if isLoading is true */}
      {isLoading && <div className="spinner"></div>}
      {/* Show the recipe only when loading is finished */}
      {recipe && !isLoading && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}