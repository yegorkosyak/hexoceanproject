import Button from "@mui/material/Button";

export const FormButton = (type, disabled, onClick, children, variant) => {
  return (
    <Button
      // type={type}
      // disabled={disabled}
      // onClick={() => onClick}
      variant={variant}
    >
      {children}
    </Button>
  );
};
