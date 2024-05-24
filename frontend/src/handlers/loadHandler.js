import dom from '../dom.js';
import getRecipes from '../../apis/getRecipes.js';
import createRecipe from '../components/createRecipe.js';

const loadHandler = async () => {
    //get
    const recipes = await getRecipes();
    console.log(recipes);

    //dom
    recipes.forEach((recipe) => {
        const recipeDom = createRecipe(recipe);
    });
};

export default loadHandler;
