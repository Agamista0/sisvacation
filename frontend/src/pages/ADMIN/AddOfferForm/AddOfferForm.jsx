import React, { useState } from 'react';
import axios from 'axios';

const AddOfferForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    location: '',
    description: '',
    product_img: '',
    included:'',
    img2: '',
    img3: '',
    img4: '',
    includes: '',
    duration: '',
    meeting: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://slsvacation.com/api/addOffer', formData);
      console.log('Offer added successfully:', response.data);
      // Reset form or show success message
      setFormData({
        title: '',
        price: '',
        location: '',
        description: '',
        highlights: '',
        product_img: '',
        img2: '',
        img3: '',
        img4: '',
        includes: '',
        duration: ''
      });
      alert('Offer added successfully!');
    } catch (error) {
      console.error('Error adding offer:', error);
      alert('Error adding offer. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
    <input
        type="text"
        name="highlights"
        value={formData.highlights}
        onChange={handleChange}
        placeholder="highlights"
        required
      />
          <input
        type="text"
        name="included"
        value={formData.included}
        onChange={handleChange}
        placeholder="yes"
        required
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder="Location"
        required
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        type="text"
        name="product_img"
        value={formData.product_img}
        onChange={handleChange}
        placeholder="Main Image URL"
        required
      />
      <input
        type="text"
        name="img2"
        value={formData.img2}
        onChange={handleChange}
        placeholder="Image 2 URL"
      />
      <input
        type="text"
        name="img3"
        value={formData.img3}
        onChange={handleChange}
        placeholder="Image 3 URL"
      />
      <input
        type="text"
        name="img4"
        value={formData.img4}
        onChange={handleChange}
        placeholder="Image 4 URL"
      />
      <textarea
        name="includes"
        value={formData.includes}
        onChange={handleChange}
        placeholder="What's included"
        required
      />
      <input
        type="text"
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration"
        required
      />
   <input
        type="text"
        name="meeting"
        value={formData.meeting}
        onChange={handleChange}
        placeholder="meeting"
        required
      />
      <button type="submit">Add Offer</button>
    </form>
  );
};

export default AddOfferForm;