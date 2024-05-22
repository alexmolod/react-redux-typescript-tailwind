import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FormDataState {
  comment: string;
  radioButton: number;
}

const initialState: FormDataState = {
  comment: '',
  radioButton: 1,
};

export const componentsSlice = createSlice({
  name: "formData",
  initialState,
  reducers: {
    editRadio: (state, action: PayloadAction<number>) => {
      state.radioButton = action.payload;
    },
    addComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
  },
});

export const { addComment, editRadio } = componentsSlice.actions;

export default componentsSlice.reducer;
