import { useState } from 'react';
function Main() {
    const [state, setState] = useState(0);
    return (
        <div>
            <button onClick={() => setState(state + 1)}>Click me {state}</button>
            <h2 className="test-class">React App</h2>
        </div>
    );
}

export default Main;
