import React, { useState, useEffect, Suspense, lazy } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  fetchUserProfile,
  updateUserProfile,
  updateProfileImage,
} from "../../store/slices/userSlice";
import LoadingSpinner from "../../components/ui/LoadingSpinner";
import ErrorMessage from "../../components/ui/ErrorMessage";
import { FormData as FormDetails } from "../../types/form";
import { FORM_FIELDS } from "../../components/Form/FormFields";

const Tabs = lazy(() => import("../../components/ui/Tabs"));
const FormInput = lazy(() => import("../../components/Form/FormInput"));
const ProfileImage = lazy(() => import("../../components/ProfileImage"));

const FormFieldsWrapper: React.FC<{
  formData: FormDetails;
  onChange: (key: keyof FormDetails, value: string) => void;
}> = ({ formData, onChange }) => (
  <Suspense fallback={<LoadingSpinner />}>
    {FORM_FIELDS.map((field) => (
      <FormInput
        key={field.key}
        field={field}
        value={formData[field.key]}
        onChange={onChange}
      />
    ))}
  </Suspense>
);

const Settings: React.FC = () => {
  const dispatch = useAppDispatch();
  const profileData = useAppSelector((state) => state.user);
  const [formData, setFormData] = useState<FormDetails | null>(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        const result = await dispatch(fetchUserProfile()).unwrap();
        setFormData(result as FormDetails);
      } catch (err) {
        console.error("Failed to fetch UserProfile data:", err);
      }
    };

    fetchUserProfileData();
  }, [dispatch]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData) return;

    try {
      await dispatch(
        updateUserProfile(formData as unknown as Record<string, unknown>)
      ).unwrap();
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

  const handleInputChange = (key: keyof FormDetails, value: string) => {
    if (!formData) return;
    setFormData((prev) => (prev ? { ...prev, [key]: value } : null));
  };

  const handleImageUpdate = async (file: File) => {
    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      await dispatch(updateProfileImage(formData)).unwrap();
    } catch (error) {
      console.error("Failed to update profile image:", error);
    } finally {
      setIsUploadingImage(false);
    }
  };

  if (profileData.loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (profileData.error) {
    return (
      <div className="w-full">
        <ErrorMessage message={profileData.error || "An error occurred"} />
        <button
          onClick={() => dispatch(fetchUserProfile())}
          className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!formData) {
    return (
      <div className="text-center py-8 text-gray-500">
        No profile data available
      </div>
    );
  }

  const ProfileContent = (
    <div className="lg:flex p-4 lg:p-6">
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:space-x-6 mb-6">
        <Suspense fallback={<LoadingSpinner />}>
          <ProfileImage
            imageUrl={profileData.profile.profileImage}
            onImageUpdate={handleImageUpdate}
            isUploading={isUploadingImage}
          />
        </Suspense>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <FormFieldsWrapper formData={formData} onChange={handleInputChange} />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={profileData.loading}
            className="w-full lg:w-auto px-8 py-3 bg-secondary text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );

  const tabs = [
    {
      id: "edit-profile",
      label: "Edit Profile",
      content: ProfileContent,
    },
    {
      id: "preferences",
      label: "Preferences",
      content: (
        <div className="text-center text-gray-500">
          Preferences settings coming soon
        </div>
      ),
    },
    {
      id: "security",
      label: "Security",
      content: (
        <div className="text-center text-gray-500">
          Security settings coming soon
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-4xl">
      <div className="bg-white rounded-lg shadow-sm">
        <Suspense fallback={<LoadingSpinner />}>
          <Tabs tabs={tabs} />
        </Suspense>
      </div>
    </div>
  );
};

export default Settings;
