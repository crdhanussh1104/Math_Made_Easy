const STORAGE_KEY = 'MATH_MADE_EASY_STATE_V2';

export const initialGameState = {
  selectedClass: 'class4',
  xp: 0,
  level: 1,
  streak: 1, // Real streak initialized dynamically
  lastLoginDate: new Date().toISOString().split('T')[0],
  gems: 0,
  equippedAvatar: {
    skin: 'default',
    hat: 'none',
    glasses: 'none',
    outfit: 'explorer',
    pet: 'none'
  },
  unlockedInventory: ['hat_none', 'glasses_none', 'outfit_explorer', 'pet_none'],
  completedChapters: [],
  completedLessons: [],
  claimedMissions: [],
  bookmarks: [],
  accuracyHistory: [],
  visited3DLab: false,
  askedPiBot: false,
  soundMuted: false,
  voiceEnabled: true,
  theme: 'daylight'
};

export const loadGameState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    const today = new Date().toISOString().split('T')[0];

    const yesterdayDate = new Date();
    yesterdayDate.setDate(yesterdayDate.getDate() - 1);
    const yesterday = yesterdayDate.toISOString().split('T')[0];

    if (!saved) {
      const state = {
        ...initialGameState,
        streak: 1,
        lastLoginDate: today
      };
      saveGameState(state);
      return state;
    }

    const state = JSON.parse(saved);
    const lastDate = state.lastLoginDate;

    // Real Daily Streak Calculation Logic
    if (lastDate === today) {
      state.streak = Math.max(1, state.streak || 1);
    } else if (lastDate === yesterday) {
      state.streak = (state.streak || 0) + 1;
      state.lastLoginDate = today;
    } else {
      state.streak = 1;
      state.lastLoginDate = today;
    }

    saveGameState(state);
    return state;
  } catch (err) {
    console.error('Failed to load state from localStorage', err);
    return {
      ...initialGameState,
      streak: 1,
      lastLoginDate: new Date().toISOString().split('T')[0]
    };
  }
};

export const saveGameState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Failed to save state to localStorage', err);
  }
};
