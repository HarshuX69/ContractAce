// src/utils/swalUtils.js
import Swal from 'sweetalert2';

// Utility function for showing alerts
export const showAlert = (title, text, icon = 'info') => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText: 'OK',
  });
};

// Example of another utility function
export const showSuccessAlert = (message) => {
  return showAlert('Success', message, 'success');
};

export const showErrorAlert = (message) => {
  return showAlert('Error', message, 'error');
};
