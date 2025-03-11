"use client"; // Enable client-side rendering
import React from "react";
import { useUser } from "@clerk/nextjs";

const Profile = () => {
  const { user } = useUser(); // Fetch user details

  if (!user) {
    // Show a loading state or message if the user is not yet fetched
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6 max-w-md mx-auto border rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold">Profile Details</h2>
      <div className="space-y-2">
        <p><strong>Name:</strong> {user.fullName || "N/A"}</p>
        <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress || "N/A"}</p>
        <p><strong>ID:</strong> {user.id}</p>
      </div>
    </div>
  );
};

export default Profile;
