import { createContext } from "react";
import { ContextType } from "./SelectedProductsContextProvider";

export const SelectedProductsContext = createContext<ContextType | null>(null);
