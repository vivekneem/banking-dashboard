import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockApi } from "../../services/mockApi";

interface UserProfile {
  name: string;
  userName: string;
  email: string;
  profileImage: string;
  password: string;
  dateOfBirth: string;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

interface UserState {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  imageUploading: boolean;
}

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

export const fetchUserProfile = createAsyncThunk(
  "user/fetchProfile",
  async () => {
    const response = await mockApi.get("/user/profile");
    return response.data;
  }
);

export const updateUserProfile = createAsyncThunk(
  "user/updateProfile",
  async (data: Record<string, unknown>) => {
    const response = await mockApi.put("/user/profile", data);
    return response.data as UserProfile;
  }
);

export const updateProfileImage = createAsyncThunk(
  "user/updateProfileImage",
  async (formData: FormData) => {
    const imageFile = formData.get("image") as File;

    const base64Image = await fileToBase64(imageFile);

    const response = await mockApi.put("/user/profile/image", {
      profileImage: base64Image,
    });

    return response.data;
  }
);

const initialState: UserState = {
  profile: null,
  loading: false,
  error: null,
  imageUploading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload as UserProfile;
        state.loading = false;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch profile";
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.profile = action.payload as UserProfile;
        state.loading = false;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update profile";
      })
      .addCase(updateProfileImage.pending, (state) => {
        state.imageUploading = true;
        state.error = null;
      })
      .addCase(updateProfileImage.fulfilled, (state, action) => {
        if (state.profile) {
          state.profile.profileImage = action.payload.profileImage as string;
        }
        state.imageUploading = false;
      })
      .addCase(updateProfileImage.rejected, (state, action) => {
        state.imageUploading = false;
        state.error = action.error.message || "Failed to update profile image";
      });
  },
});

export const { actions } = userSlice;
export default userSlice.reducer;
