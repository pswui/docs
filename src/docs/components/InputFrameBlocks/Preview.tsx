import { Button } from "@pswui/Button";
import { Input, InputFrame } from "@pswui/Input";

export function InputFrameDemo() {
  return (
    <InputFrame>
      <Input
        type="text"
        unstyled
      />
      <Button
        preset="success"
        size="icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.2em"
          height="1.2em"
          viewBox="0 0 24 24"
        >
          <title>Search</title>
          <path
            fill="currentColor"
            d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5l-1.5 1.5l-5-5v-.79l-.27-.27A6.52 6.52 0 0 1 9.5 16A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3m0 2C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"
          />
        </svg>
      </Button>
    </InputFrame>
  );
}
