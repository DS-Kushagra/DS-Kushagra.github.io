"use client";
import React, { useEffect } from "react";

const publications = [
  {
    title: "My Journey into the World of Data Analytics",
    description: "The starting point of my journey.",
    link: "https://medium.com/@ds-kushagra/my-journey-into-the-world-of-data-analytics-from-high-school-dreams-to-industry-certifications-9638ea7f6fff",
    date: "11-08-2024",
  },
  {
    title: "Struggles in My Data Science Journey",
    description: "Struggles which helped in building experiences.",
    link: "https://medium.com/@ds-kushagra/struggles-in-my-data-science-journey-a-story-of-persistence-and-growth-bc1dabf4d88e",
    date: "12-08-2024",
  },
  {
    title:
      "My Data Science Journey So Far: A Reflection of Growth and Achievement",
    description: "The lessons I've learnt in my journey so far.",
    link: "https://ds-kushagra.medium.com/my-data-science-journey-so-far-a-reflection-of-growth-and-achievement-ac9a3e1d0052",
    date: "27-11-2024",
  },
  // Add more publications as needed
];

const Publications = () => {
  useEffect(() => {
    // Check if window is available
    if (typeof window !== "undefined") {
      const cards = document.querySelectorAll(".publication-card");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        },
        { threshold: 0.1 }
      );

      cards.forEach((card) => {
        observer.observe(card);
      });

      return () => observer.disconnect();
    }
  }, []);

  return (
    <section className="publications-section py-16 px-4 md:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-purple">
        Publications
      </h2>
      <div className="publication-grid max-w-5xl mx-auto grid gap-8 sm:grid-cols-2">
        {publications.map((publication, index) => (
          <a
            href={publication.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="publication-card bg-gray-800 text-white rounded-xl p-6 transition duration-300 ease-in-out"
          >
            <h3 className="text-xl font-semibold mb-2">{publication.title}</h3>
            <p className="text-gray-400 mb-4">{publication.description}</p>
            <span className="text-sm text-gray-500">{publication.date}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Publications;
