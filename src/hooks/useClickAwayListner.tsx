import { useEffect, useRef, useState } from "react";

export const useClickAwayListener = () => {

  const [hideVisibleNode, setHideVisibleNode] = useState<boolean>(false);

  const nodeRef = useRef<any>();

  function handleClickAway(e: any): void {
    if(nodeRef.current && !nodeRef.current.contains(e.target)) {
      setHideVisibleNode(false);
    };
  };

  useEffect(() => {
    document.addEventListener("click", handleClickAway, true);
    
    return(() => {
        document.removeEventListener("click", handleClickAway, true);
      }
    );
  }, [nodeRef]);
  
  return { nodeRef, hideVisibleNode, setHideVisibleNode };
}