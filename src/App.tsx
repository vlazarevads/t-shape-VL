import React from "react";
import {ThemeProvider} from "styled-components"
import {Badge} from "./lib/badge"
import { GlobalStyle, lightTheme
 } from "./lib/theme";
import {Button} from "./lib/button";
import {Card} from "./lib/card";
import {Icon} from "./lib/icon";

function App() {
	const switcher = false;
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyle />
			<main>
				<Badge mode="emerald" outline text="Badge text"/>
				<Button
					iconBefore="user"
					iconAfter="user"
					mode="primary"
					size="small"
					text="Button"
				/>
				<Card text="Hello T-shape" mode="orange" textSize="large">
					<p>Some text children</p>
				</Card>
					
			</main>
		</ThemeProvider>
	);
}

export default App;
