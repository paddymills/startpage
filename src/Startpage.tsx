import { useParams } from "@solidjs/router";
import type { Component } from "solid-js";

export const Startpage: Component = () => {
  const params = useParams();
  return <h1>welcome to startpage for {params.page}</h1>;
};
