import { useState, useEffect } from 'react';
import { skillsAPI } from '../services/api';

export const useSkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await skillsAPI.getSkills();
      setSkills(data);
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to fetch skills');
      console.error('Error fetching skills:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const refetch = () => {
    fetchSkills();
  };

  return {
    skills,
    loading,
    error,
    refetch
  };
};