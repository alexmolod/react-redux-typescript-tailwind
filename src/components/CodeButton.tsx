import { FC, useState } from "react";

interface ButtonProps {
  btnText: string;
  mockedCode: string;
}

const CodeButton: FC<ButtonProps> = ({
  btnText,
  mockedCode,
}) => {
  const [discountCode, setDiscountCode] = useState("");

  return (
    <>
      <button
        className="w-60 bg-blue-500 hover:bg-blue-700 font-bold text-white py-2 px-4 mb-4 rounded"
        onClick={() => setDiscountCode(mockedCode)}
      >
        {btnText}
      </button>
      
      <span className="px-4">{discountCode}</span>
    </>
  );
};

export default CodeButton;
