import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`🚀 API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`✅ API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// Projects API
export const projectsAPI = {
  // Get all projects
  getProjects: async (featured = false) => {
    const response = await apiClient.get('/projects', {
      params: featured ? { featured: true } : {}
    });
    return response.data;
  },

  // Get single project
  getProject: async (id) => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
  },

  // Create project
  createProject: async (projectData) => {
    const response = await apiClient.post('/projects', projectData);
    return response.data;
  },

  // Update project
  updateProject: async (id, projectData) => {
    const response = await apiClient.put(`/projects/${id}`, projectData);
    return response.data;
  },

  // Delete project
  deleteProject: async (id) => {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
  }
};

// Contact API
export const contactAPI = {
  // Submit contact form
  submitContactForm: async (messageData) => {
    const response = await apiClient.post('/contact', messageData);
    return response.data;
  },

  // Get contact messages (admin only)
  getContactMessages: async (limit = 100) => {
    const response = await apiClient.get('/contact', {
      params: { limit }
    });
    return response.data;
  },

  // Mark message as read
  markMessageAsRead: async (messageId) => {
    const response = await apiClient.patch(`/contact/${messageId}/read`);
    return response.data;
  }
};

// Skills API
export const skillsAPI = {
  // Get all skills
  getSkills: async () => {
    const response = await apiClient.get('/skills');
    return response.data;
  },

  // Create skill category
  createSkillCategory: async (skillData) => {
    const response = await apiClient.post('/skills', skillData);
    return response.data;
  },

  // Update skill category
  updateSkillCategory: async (category, skills) => {
    const response = await apiClient.put(`/skills/${category}`, skills);
    return response.data;
  }
};

// Biography API
export const biographyAPI = {
  // Get biography
  getBiography: async () => {
    const response = await apiClient.get('/biography');
    return response.data;
  },

  // Create or update biography
  createOrUpdateBiography: async (bioData) => {
    const response = await apiClient.post('/biography', bioData);
    return response.data;
  }
};

// Health check
export const healthAPI = {
  check: async () => {
    const response = await apiClient.get('/');
    return response.data;
  }
};

export default {
  projects: projectsAPI,
  contact: contactAPI,
  skills: skillsAPI,
  biography: biographyAPI,
  health: healthAPI
};