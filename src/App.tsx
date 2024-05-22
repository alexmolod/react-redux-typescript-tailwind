import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editRadio, addComment } from "./features/componentsSlice.ts";

import Input from "./components/Input";
import TextArea from './components/TextArea';
import CodeButton from "./components/CodeButton";
import RadioButton from './components/RadioButton';

const options = [
  { value: 1, label: 'Option A' },
  { value: 2, label: 'Option B' },
  { value: 3, label: 'Option C' },
];

const mockedCode = 'NEWCODE123';

const App = () => {
  const dispatch = useDispatch();
  const initialOption = useSelector((state: any) => state.formData.radioButton);

  const [selectedValue, setSelectedValue] = useState<number>(initialOption);

  const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(+event.target.value);
    dispatch(editRadio(+event.target.value));
  };

  const handleChangeTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(addComment(event.target.value));
  };

  return (
    <div className="container m-auto p-6">

      <div className="mb-4">
        <span className="mb-4 block">Select option</span>
        {options.map((option) => (
          <RadioButton
            option={option}
            name="radioGroup"
            key={option.value}
            onChange={handleChangeRadio}
            isChecked={selectedValue === option.value}
          />
        ))}
      </div>
 
      <Input
        placeholder="Enter Discount Code"
      />
      <CodeButton
        mockedCode={mockedCode}
        btnText="Generate Discount Code"
      />
      <TextArea
        name="textArea"
        placeholder="Add Comment"
        onChange={handleChangeTextArea}
      />

    </div>
  );
};

export default App;
