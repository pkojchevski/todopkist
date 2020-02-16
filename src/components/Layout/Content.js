import React from "react";
import { SideBar } from "./SideBar";
import { Tasks } from "../Tasks";
export const Content = () => (
  <section className="content">
    <SideBar />
    <Tasks />
  </section>
);
