export const getFormData = () => {
  const nodes = document.querySelectorAll(".input");
  
  const data: Record<string, unknown> = {};

  nodes.forEach((el: HTMLInputElement) => {
    data[el.name] = el.value;
  });

  console.log(data);
};

