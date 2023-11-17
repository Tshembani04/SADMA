"use client";
import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useRouter } from "next/navigation";

const page = () => {
  const route = useRouter();
  // State for form data
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const firestore = getFirestore();
      const storage = getStorage();

      // Add data to Firestore
      const docRef = await addDoc(collection(firestore, "disasterReports"), {
        name,
        location,
        title,
        description,
      });
      // Upload image to Firebase Storage (assuming you have an 'images' folder in your storage)
      if (image) {
        const storageRef = ref(storage, `images/${docRef.id}`);
        await uploadBytes(storageRef, image);
      }
      // Upload video to Firebase Storage (assuming you have a 'videos' folder in your storage)
      if (video) {
        const videoStorageRef = ref(storage, `videos/${docRef.id}`);
        await uploadBytes(videoStorageRef, video);
      }

      // Reset the form after submission
      setName("");
      setLocation("");
      setTitle("");
      setDescription("");
      setImage(null);
      setVideo(null);

      console.log("Disaster report submitted successfully!");
      route.push("/disaster-alerts");
    } catch (error) {
      console.error("Error submitting disaster report:", error);
    }
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // Function to handle video upload
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };

  return (
    <div className="bg-black">
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white shadow-lg rounded-md p-8">
          <h2 className="block mb-3 text-2xl font-bold text-center text-black">
            🚨 Disaster Report Form 🚨
          </h2>
          <form className="py-6 px-9" onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block mb-3 text-base font-medium text-indigo-900">
                Reporter's Name:
                <input
                  required
                  className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-indigo-500 focus:shadow-md"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className="block mb-3 text-base font-medium text-indigo-900">
                Location:
                <input
                  required
                  className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-indigo-500 focus:shadow-md"
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className="block mb-3 text-base font-medium text-indigo-900">
                Title:
                <input
                  required
                  className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-indigo-500 focus:shadow-md"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </div>
            <div className="mb-5">
              <label className="block mb-3 text-base font-medium text-indigo-900">
                Description:
                <textarea
                  required
                  className="w-full px-6 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md outline-none focus:border-indigo-500 focus:shadow-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>
            <div className="pt-4 mb-6">
              <label className="block mb-5 text-xl font-semibold text-indigo-900">
                📸 Image:
                <input
                  required
                  className="flex min-h-[20px] items-center justify-center rounded-md border border-dashed border-gray-300 p-2 text-center"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
            <div className="pt-4 mb-6">
              <label className="block mb-5 text-xl font-semibold text-indigo-900">
                🎥 Video:
                <input
                  className="flex min-h-[20px] items-center justify-center rounded-md border border-dashed border-gray-300 p-2 text-center"
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                />
              </label>
            </div>
            <button
              className="w-full px-8 py-3 text-base font-semibold text-center text-white bg-indigo-700 rounded-md outline-none hover:shadow-form"
              type="submit"
            >
              Submit Report
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
