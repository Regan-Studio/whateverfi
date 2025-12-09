
import { Idea } from '../types';
import { INITIAL_IDEAS } from '../constants';

// This service is deprecated in favor of the API.
// Keeping it as a stub to prevent build errors if referenced, 
// but it should not be used for data persistence.

export const storageService = {
  getIdeas: (): Idea[] => {
    return [];
  },

  saveIdeas: (ideas: Idea[]) => {
    // No-op
  },

  reset: () => {
    return [];
  }
};
