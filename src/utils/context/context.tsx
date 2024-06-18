import { createContext } from "react";
import { CatContext } from "../types";

export const CategoryContext = createContext<CatContext | undefined>(undefined)