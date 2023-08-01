"use client";
import hikesAPI from "@/utils/api/hikes";

export default function Button() {
  const handleClick = async () => {
    const data = await hikesAPI.getHikes()
    console.log("data:", data)
  };
  return <button onClick={handleClick}>hello</button>;
}
