import { UserProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header with Avatar */}
      <div className="flex items-center space-x-4 mb-4">
        <Image
          src="../../public/vercel.svg"
          alt={`${name}'s avatar`}
          width={60}
          height={60}
          className="rounded-full border border-gray-200"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
          <p className="text-gray-500">@{username}</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="text-gray-600 space-y-2">
        <p>
          <span className="font-semibold">📧 Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">📞 Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">🌐 Website:</span>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Company Section */}
      <div className="mt-6 border-t pt-4 flex items-start space-x-4">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-lg font-bold">
            {company.name[0]}
          </span>
        </div>
        <div>
          <p className="font-semibold text-gray-700">{company.name}</p>
          <p className="italic text-gray-500">"{company.catchPhrase}"</p>
          <p className="text-xs uppercase text-gray-400">{company.bs}</p>
        </div>
      </div>

      {/* Address */}
      <div className="mt-6 border-t pt-4 text-sm text-gray-500">
        <p className="font-semibold text-gray-700 mb-1">📍 Address:</p>
        <p>
          {address.suite}, {address.street}
        </p>
        <p>
          {address.city}, {address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
