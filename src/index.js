import foods from './foods';
import { choice, remove } from './helpers';

function App() {
    let randFruit = choice(foods);

    console.log(`I'd like one ${randFruit}, please`);
    console.log(`Here you go: ${randFruit}`);
    console.log(`Delicious! May I have another?`);

    let remainingFruit = remove(foods, randFruit);

    console.log(`I'm sorry, we're all out. We have ${remainingFruit.length} left.`);
    
};

App()

export default App;