import { Idea } from '../types';
import { INITIAL_IDEAS } from '../constants';

const STORAGE_KEY = 'idea_archive_v1';

export const storageService = {
  getIdeas: (): Idea[] => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
      // Initialize with default data if empty
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_IDEAS));
      return INITIAL_IDEAS;
    } catch (e) {
      console.error("Storage error", e);
      return INITIAL_IDEAS;
    }
  },

  saveIdeas: (ideas: Idea[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(ideas));
    } catch (e) {
      console.error("Storage save error", e);
    }
  },

  reset: () => {
    localStorage.removeItem(STORAGE_KEY);
    return INITIAL_IDEAS;
  }
};
