export interface UserProfile {
  name: string;
  userName: string;
  email: string;
  profileImage: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface UserProfileState {
  profile: UserProfile;
  loading: {
    cards: boolean;
  };
  error: string | null;
}
