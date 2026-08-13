/* ===================================================
   MARSELUS PHARMACEUTICALS — FORMS
   Validation for contact & careers forms
   =================================================== */

export function initForms() {
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', handleSubmit);
    
    // Real-time validation on blur
    form.querySelectorAll('.form-input').forEach(input => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => clearError(input));
    });
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const inputs = form.querySelectorAll('.form-input[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (isValid) {
    // Show success state
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sent Successfully!';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';
      
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        form.reset();
      }, 3000);
    }
  }
}

function validateField(input) {
  const value = input.value.trim();
  let error = '';

  if (input.required && !value) {
    error = 'This field is required';
  } else if (input.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      error = 'Please enter a valid email address';
    }
  } else if (input.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\-+()]{7,15}$/;
    if (!phoneRegex.test(value)) {
      error = 'Please enter a valid phone number';
    }
  }

  if (error) {
    showError(input, error);
    return false;
  }

  clearError(input);
  return true;
}

function showError(input, message) {
  clearError(input);
  input.style.borderColor = 'var(--color-error)';
  const errorEl = document.createElement('div');
  errorEl.className = 'form-error';
  errorEl.textContent = message;
  errorEl.setAttribute('role', 'alert');
  input.parentNode.appendChild(errorEl);
}

function clearError(input) {
  input.style.borderColor = '';
  const existing = input.parentNode.querySelector('.form-error');
  if (existing) existing.remove();
}
