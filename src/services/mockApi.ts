import { mockData } from "../mocks/data";

const delay = (ms: number = 800) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const mockApi = {
  get: async (endpoint: string) => {
    await delay();

    const endpointMap: { [key: string]: any } = {
      "/cards": mockData.cards,
      "/transactions": mockData.transactions,
      "/expense-statistics": mockData.expenseStats,
      "/weekly-activity": mockData.weeklyActivity,
      "/balance-history": mockData.balanceHistory,
      "/quick-transfer/contacts": mockData.quickTransferContacts,
      "/user/profile": mockData.userProfile,
    };

    const data = endpointMap[endpoint];
    if (data) return { data };
    throw new Error(`Endpoint ${endpoint} not found`);
  },

  put: async (endpoint: string, data: any) => {
    await delay();

    // Handle profile image update
    if (endpoint === "/user/profile/image") {
      mockData.userProfile = {
        ...mockData.userProfile,
        profileImage: data.profileImage,
      };
      return { data: mockData.userProfile };
    }

    // Handle general profile update
    if (endpoint === "/user/profile") {
      mockData.userProfile = {
        ...mockData.userProfile,
        ...data,
      };
      return { data: mockData.userProfile };
    }

    return { data };
  },

  post: async (endpoint: string, data: any) => {
    await delay();
    return { data };
  },
};
