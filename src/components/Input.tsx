import { FC, useState } from "react";

interface InputProps {
  placeholder: string;
}

const Input: FC<InputProps> = ({placeholder}) => {
  const [discountCode, setDiscountCode] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.match(/^[a-zA-Z]{3,}[0-9]{3,}$/)) {
      setShowError(false)
    } else {
      setShowError(true)
    }

    setDiscountCode(event.target.value);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={discountCode}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-60 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />

      {showError && (
        <span className="text-xs text-red-500">
          Discount code must have min 3 letters and after 3 numbers
        </span>
      )}

    </div>
  );
};

export default Input;
