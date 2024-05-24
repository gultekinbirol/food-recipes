const createRecipe = (recipe) => {
    //container
    const container = document.createElement('div');
    container.id = recipe._id;
    container.classList.add('container');
};

export default createRecipe;
