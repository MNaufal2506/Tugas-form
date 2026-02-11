import { Profiler } from "react";
import { createContext } from "react";

export const ProfileContext = createContext({
  name: "",
  address: "",
  setName: () => {},
  setAddress: () => {}
});
