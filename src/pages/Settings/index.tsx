import React, { useState } from "react";
import { Camera } from "lucide-react";
import Tabs from "../../components/ui/Tabs";
import type { UserProfile } from "./types";

const Settings: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Charlene Reed",
    userName: "Charlene Reed",
    email: "charlenereed@gmail.com",
    dateOfBirth: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  const ProfileContent = (
    <>
      <div className="mb-6">
        <div className="relative w-24 h-24 mx-auto">
          <img
            src="/api/placeholder/96/96"
            alt="Profile"
            className="rounded-full w-full h-full object-cover"
          />
          <button
            type="button"
            className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50"
          >
            <Camera className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(profile).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {key.charAt(0).toUpperCase() +
                  key.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) =>
                  setProfile((prev) => ({ ...prev, [key]: e.target.value }))
                }
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90"
          >
            Save Changes
          </button>
        </div>
      </form>
    </>
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
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">Settings</h1>

      <div className="bg-white rounded-lg shadow-sm">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};

export default Settings;
