// Ultra simple store that works immediately

export const useStore = () => {
  return {
    userProfile: null,
    isOnboarded: false,
    movements: [],
    savingGoals: [],
    savingTransactions: [],
    balanceDisplayCurrency: 'USD',
    isLoading: false,
    notifications: [],
    
    initializeStore: async () => {},
    setUserProfile: (profile: any) => {},
    updateUserProfile: (updates: any) => {},
    deleteUserProfile: () => {},
    setBalanceDisplayCurrency: (currency: any) => {},
    completeOnboarding: () => {},
    addMovement: (movement: any) => {},
    updateMovement: (id: string, updates: any) => {},
    deleteMovement: (id: string) => {},
    addSavingGoal: (goal: any) => {},
    updateSavingGoal: (id: string, updates: any) => {},
    deleteSavingGoal: (id: string) => {},
    addSavingTransaction: (transaction: any) => {},
    deleteSavingTransaction: (id: string) => {},
    updateUSDTQuote: (force?: boolean) => {},
    addNotification: (notification: any) => {},
    removeNotification: (id: string) => {},
    clearNotifications: () => {},
    setCurrentPage: (page: string) => {},
    setLoading: (loading: boolean) => {},
    resetAllData: () => {},
    resetFinancialData: () => {},
    getBalanceStats: () => ({
      totalIncome: 0,
      totalExpenses: 0,
      totalSavings: 0,
      netBalance: 0,
      currency: 'USD',
      period: 'month'
    }),
    getTotalSavings: () => 0,
  };
};

export default useStore;