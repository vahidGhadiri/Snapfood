import React, { useRef, useState } from "react";

interface PropsInterface {
  children: React.ReactNode;
  onNext: () => void;
  endMessage: string;
  height: string;
  isEnd: boolean;
}

const DataList: React.FC<PropsInterface> = (props) => {
  const ref = useRef<HTMLDivElement>();
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const onEnd = () => {
    if (ref.current) {
      const { scrollTop, clientHeight, scrollHeight } = ref.current;
      if (scrollTop + clientHeight === scrollHeight) {
        setIsSpinnerVisible(!isSpinnerVisible);
        return !props.isEnd && props.onNext();
      }
    }
  };

  return (
    <div
      style={{ height: `${props.height}`, overflowY: "auto" }}
      ref={ref}
      onScroll={onEnd}
    >
      {props.children}
      {props.isEnd ? <span>{props.endMessage}</span> : <div>...</div>}
    </div>
  );
};

export default DataList;
