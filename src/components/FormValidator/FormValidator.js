export const requaired = (value) => {
  if (value) return undefined;
  return "Field is requaired";
};
export const maxlength = (maxLength) => (value) => {
  if (value.length > maxLength) return `Maximum length ${maxLength} symbol`;
  return undefined;
};

export const emailValidate = (value) => {
  if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value))
    return "Invalid email address";
  return undefined;
};
