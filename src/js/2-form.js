const formData = {
    email: "",
    message: "",
  };

const form = document.querySelector(`.feedback-form`);
const STORAGE_KEY = 'feedback-form-state';
console.log(STORAGE_KEY);

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const populateForm = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
  }
  
};

form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value; 
  saveToLocalStorage(); 
});

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  } console.log('Submitted form data:', formData);
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
  form.reset();
}
)

document.addEventListener('DOMContentLoaded', populateForm);