function App() {

    return (
        <div style={{color: 'white', backgroundColor: 'black',padding: '20px', paddingLeft: '25px'}}>
        <h1>Quick Start </h1>
        <p style={{fontSize: '20px'}}>Welcome to the react documentation! This page will give you an introduction to the 80% of React concept thsat you will use a day basis</p>
        <div className = "box">
            <h2>You will learn</h2>
            <ul>
                <li>How to create and nest components</li>
                <li>How to add markup and styles</li>
                <li>How to display data</li>
                <li>How to render conditions and lists</li>
                <li>How to respond to events and update this screen</li>
                <li>How to share data between components</li>

            </ul>
        </div>
        </div>
    )
}

ReactDOM.createRoot(document.querySelector('.root'))
    .render(<App />)
