import { useState, useEffect } from 'react';
import { biographyAPI } from '../services/api';

export const useBiography = () => {
  const [biography, setBiography] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBiography = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await biographyAPI.getBiography();
      setBiography(data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to fetch biography');
      console.error('Error fetching biography:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBiography();
  }, []);

  const refetch = () => {
    fetchBiography();
  };

  return {
    biography,
    loading,
    error,
    refetch
  };
};