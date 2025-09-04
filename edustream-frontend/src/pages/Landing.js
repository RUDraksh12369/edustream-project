import React, { useEffect, useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

const Landing = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    setCourses([
      {
        _id: "1",
        title: "React for Beginners",
        mediaType: "video",
        media: "https://www.w3schools.com/html/mov_bbb.mp4",
        price: 20,
      },
      {
        _id: "2",
        title: "Tailwind CSS Basics",
        mediaType: "image",
        media: "https://via.placeholder.com/300x150.png?text=Tailwind+Course",
        price: 15,
      },
      {
        _id: "3",
        title: "JavaScript Essentials",
        mediaType: "video",
        media: "https://www.w3schools.com/html/movie.mp4",
        price: 25,
      },
    ]);
  }, []);

  return (
    <div className="p-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Courses
        </h1>
        <DarkModeToggle />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((c) => (
          <div
            key={c._id}
            className="border rounded p-4 shadow bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          >
            <h2 className="text-xl font-semibold">{c.title}</h2>
            {c.mediaType === "video" ? (
              <video src={c.media} controls className="w-full mt-2 rounded" />
            ) : (
              <img src={c.media} alt={c.title} className="w-full mt-2 rounded" />
            )}
            <p className="mt-2 font-bold">${c.price}</p>
            <button className="mt-2 w-full bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
