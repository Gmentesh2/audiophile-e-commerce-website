import { Dispatch, SetStateAction, useMemo, useState } from "react";
import { Product } from "../pages/products/Products";
import { SelectedProductsContext } from "./SelectedProductsContext";

export type ContextType = {
  selectedItems: SelectedItem[] | undefined;
  setSelectedItems: Dispatch<SetStateAction<SelectedItem[]>>;
};

type Props = {
  children: React.ReactNode;
};

export type SelectedItem = {
  product: Product;
  amount: number;
};

const SelectedProductsContextProvider = ({ children }: Props) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

  const value = useMemo(
    () => ({
      selectedItems,
      setSelectedItems,
    }),
    [selectedItems]
  );

  return (
    <SelectedProductsContext.Provider value={value}>
      {children}
    </SelectedProductsContext.Provider>
  );
};

export default SelectedProductsContextProvider;
