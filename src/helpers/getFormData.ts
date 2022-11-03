export const getFormData = () => {

  const nodes = document.querySelectorAll("input");
  
  const data: Record<string, any> = {};

  nodes.forEach((el: HTMLInputElement) => {
    data[el.name] = el.value;
  });

  return data;
};

