"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard'); // Redirect to the dashboard
  }, [router]); // Ensure this runs once after the component mounts

  return null; // Prevent rendering of the current page
}
