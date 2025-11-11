import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  console.log(users);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="p-4 flex-1 bg-gray-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            User Directory
          </h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white hover:bg-blue-800 transition">
            Add User
          </button>
        </div>

        {/* User Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {users?.map((user: UserProps, index: number) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Fetch user data from API at build time
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;
