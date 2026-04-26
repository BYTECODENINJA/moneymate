import { useSearchParams } from "react-router-dom";

const useEditTransactionDrawer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const open = searchParams.get("edit") === "true";
  const transactionId = searchParams.get("transactionId") || "";

  const onOpenDrawer = (id: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("edit", "true");
    params.set("transactionId", id);
    setSearchParams(params);
  };

  const onCloseDrawer = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("edit");
    params.delete("transactionId");
    setSearchParams(params);
  };

  return {
    open,
    transactionId,
    onOpenDrawer,
    onCloseDrawer,
  };
};

export default useEditTransactionDrawer;