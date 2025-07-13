import { useState } from 'react';
import { contactAPI } from '../services/api';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const response = await contactAPI.submitContactForm(formData);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to submit contact form');
      console.error('Error submitting contact form:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setError(null);
    setSuccess(false);
    setLoading(false);
  };

  return {
    submitForm,
    loading,
    error,
    success,
    reset
  };
};