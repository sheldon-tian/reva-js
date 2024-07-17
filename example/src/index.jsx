/** @jsx Reva.createElement */
function Counter(props) {
    const [state, setState] = Reva.useState(1);
    return (
        <h1 onclick={() => setState(c => c + 1)} style={'user-select: none;'}>
            Count: {state}
        </h1>
    );
}
const element = <Counter />;
const container = document.getElementById('root');
Reva.render(element, container);