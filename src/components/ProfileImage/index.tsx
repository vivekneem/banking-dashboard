import React, { useRef } from "react";
import { ProfileImageProps } from "./types";
import LoadingSpinner from "../ui/LoadingSpinner";
import { Pencil } from "lucide-react";

const ProfileImage: React.FC<ProfileImageProps> = ({
  imageUrl,
  onImageUpdate,
  isUploading,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size should be less than 5MB");
        return;
      }
      onImageUpdate(file);
    }
  };

  return (
    <div className="relative w-24 h-24 mb-6 lg:mb-0 lg:mr-8">
      <img
        src={imageUrl}
        alt="Profile"
        className="rounded-full w-full h-full object-cover"
      />
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
      <button
        type="button"
        onClick={handleClick}
        disabled={isUploading}
        className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 disabled:opacity-50"
      >
        {isUploading ? (
          <LoadingSpinner />
        ) : (
          <Pencil className="w-4 h-4 text-gray-600" />
        )}
      </button>
    </div>
  );
};

export default ProfileImage;
