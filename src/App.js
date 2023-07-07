/* eslint-disable react/jsx-no-comment-textnodes */
import logo from './logo.svg';
import './App.css';

function App() {
	// императивный стиль, функция и в ней расписываем логику
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<div className="Year">{new Date().getFullYear()}</div>
			</header>
		</div>
	);
}
// текущий год - декларатив, хотим результат - получаем
export default App;
