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
      return {
        ...initialGameState,
        streak: 1,
        lastLoginDate: today
      };
    }

    const state = JSON.parse(saved);
    const lastDate = state.lastLoginDate;

    let updatedStreak = state.streak || 1;
    let updatedLastDate = lastDate;

    if (lastDate === today) {
      updatedStreak = Math.max(1, state.streak || 1);
    } else if (lastDate === yesterday) {
      updatedStreak = (state.streak || 0) + 1;
      updatedLastDate = today;
    } else {
      updatedStreak = 1;
      updatedLastDate = today;
    }

    return {
      ...initialGameState,
      ...state,
      streak: updatedStreak,
      lastLoginDate: updatedLastDate
    };
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
