/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import { Startpage } from "./Startpage";
import { Navigate, Route, Router } from "@solidjs/router";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

const Layout = (props: any) => {
  return (
    <>
      <nav class="bg-gray-800 p-4 flex items-center space-x-2 justify-between">
        <p>todo: theme</p>
      </nav>
      <main class="h-4/5 m-4 flex flex-col grow justify-around place-items-center">
        {props.children}
      </main>
      <footer class="bg-gray-800 px-2 py-1 flex shrink-0 justify-between font-semibold tracking-wide select-none">
        <p class="text-white">
          &copy; {new Date().getFullYear()} by <span>someone</span>
        </p>
        <p class="text-white/50 text-xs place-self-center">
          made with <span class="text-red-500">&hearts;</span> by Patrick Miller
        </p>
      </footer>
    </>
  );
};

render(
  () => (
    <Router root={Layout}>
      <Route path="/" component={() => <Navigate href="/home" />} />
      <Route path="/:page" component={Startpage} />
    </Router>
  ),
  root!,
);
