import React, { useState } from "react";

export default function BadgeApp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phoneNumber: "",
    favoriteFood: "",
    description: "",
    badgeList: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidForm()) {
      // Create new badge object
      const newBadge = { ...formData };
      // Add the new badge to the badgeList
      setFormData((prevFormData) => ({
        ...prevFormData,
        badgeList: [...prevFormData.badgeList, newBadge],
      }));

      // Clear the form, excludes badgeList
      setFormData((prevFormData) => ({
        ...prevFormData,
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phoneNumber: "",
        favoriteFood: "",
        description: "",
      }));
    } else {
      alert("Please fill in all fields and ensure the phone number contains only digits.");
    }
  };

  const isValidForm = () => {
    // Check if all fields have a length of at least 3 characters
    for (const key in formData) {
      if (key !== "badgeList" && (formData[key].length < 3)) {
        return false;
      }
    }
    return true;
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          onChange={handleChange}
          name="firstName"
          value={formData.firstName}
          minLength={3}
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={handleChange}
          name="lastName"
          value={formData.lastName}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
          value={formData.email}
        />
        <input
          type="text"
          placeholder="Place of Birth"
          onChange={handleChange}
          name="placeOfBirth"
          value={formData.placeOfBirth}
        />
        <input
          type="number"
          placeholder="Phone Number"
          onChange={handleChange}
          name="phoneNumber"
          value={formData.phoneNumber}
        />
        <input
          type="text"
          placeholder="Favorite Food"
          onChange={handleChange}
          name="favoriteFood"
          value={formData.favoriteFood}
        />
        <textarea
          placeholder="Description"
          onChange={handleChange}
          name="description"
          value={formData.description}
        />
        <button type="submit" >
          Submit
        </button>
      </form>

      <div className="badge-list">
        {formData.badgeList.map((badge, index) => (
          <div key={index} className="badge">
            <h2>Badge #{index + 1}</h2>
            <p>
              Name: {badge.firstName} {badge.lastName}
            </p>
            <p>Email: {badge.email}</p>
            <p>Place of Birth: {badge.placeOfBirth}</p>
            <p>Phone Number: {badge.phoneNumber}</p>
            <p>Favorite Food: {badge.favoriteFood}</p>
            <p>Description: {badge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
