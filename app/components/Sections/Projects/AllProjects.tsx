"use client";

import { ProjectsData } from "@/app/data/ProjectsData";
import styles from "./projects.module.css";
import { useState } from "react";
import Project from "./Project";

const AllProjects = () => {
  // getting all tags from the data
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const allTags = Array.from(
    new Set(ProjectsData.flatMap((item) => item.tags))
  );

  // Handle toggling of tags
  const toggleTag = (tag: string) => {
    // if tag is already included in previous tag then remove it else add it
    setSelectedTags(
      (prevSelectedTags: string[]) =>
        prevSelectedTags.includes(tag)
          ? prevSelectedTags.filter((t: string) => t !== tag) // Deselect tag
          : [...prevSelectedTags, tag] // Select tag
    );
  };

  // Filter items based on selected tags
  const filteredItems = ProjectsData.filter((item) => {
    if (selectedTags.length === 0) return true; // If no tags selected, show all items
    for (const tag of selectedTags) {
      if (!item.tags.includes(tag)) {
        return false; // If any selected tag is not in item tags, exclude the item
      }
    }
    return true; // Include the item if all selected tags are in item tags
  });

  const toggleAllTags = () => {
    setSelectedTags([]);
  };

  // console.log(selectedTags);

  return (
    <div className={styles.allProjects}>
      <div className={styles.tagButtons}>
        <button
          onClick={() => toggleAllTags()}
          className={styles.buttonTag}
          style={{
            backgroundColor: selectedTags.length === 0 ? "crimson" : "#333",
            borderColor: selectedTags.length === 0 ? "#ff254e" : "#333",
          }}
        >
          All
        </button>
        {allTags.map((tag: string) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={styles.buttonTag}
            style={{
              backgroundColor: selectedTags.includes(tag) ? "crimson" : "#333",
            }}
          >
            {tag}
          </button>
        ))}
      </div>
      {filteredItems.length > 0 ? (
        <div className={styles.project}>
          {filteredItems.map((project) => (
            <Project
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              images={project.images}
              liveLink={project.liveLink}
              gitHubLink={project.gitHubLink}
            />
          ))}
        </div>
      ) : (
        <div className={styles.notFound}>
          <p>No projects match the selected tags.</p>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
