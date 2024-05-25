import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";

import "~/styles/tailwind.css";
import "~/styles/app.css";
import { appConfig } from "./config/app";

export default function App() {
	return (
		<Router
			root={(props) => {
				return (
					<MetaProvider>
						<Title>{appConfig.title.default}</Title>
						<Suspense>{props.children}</Suspense>
					</MetaProvider>
				);
			}}
		>
			<FileRoutes />
		</Router>
	);
}
