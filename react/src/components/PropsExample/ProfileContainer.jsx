import React from "react";
import Profile from "./Profile";

export default function ProfileContainer() {
  const obj = {
    name: "현우",
    age: 22,
    isAdmin: true,
  };

  const obj2 = {
    name: "수진",
    age: 21,
    isAdmin: false,
  };
  
  return (
    <div>
      <Profile user={obj} />
      <Profile user={obj2} />
    </div>
  );
}
