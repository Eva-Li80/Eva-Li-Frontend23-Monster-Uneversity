import React from "react";
import Button from "@mui/material/Button";

type ButtonComponentProps = {
    onClick: () => void
    children: React.ReactNode
}

const ButtonComponent = ({onClick, children}:ButtonComponentProps) => {
  return (
    <>
      <Button
        className="btn"
        variant="contained"
        color="secondary"
        size="large"
        onClick={onClick}
      >
       {children}
      </Button>
    </>
  );
};

export default ButtonComponent;
