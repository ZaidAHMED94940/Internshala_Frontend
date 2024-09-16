import React, { useState,useEffect } from 'react';
import axios from  "axios"
import { useNavigate } from 'react-router-dom';

const EducationProfessionalForm = () => {
  const navigate=useNavigate()
  const emailid=localStorage.getItem('email')
  console.log(emailid,"emaileail")
  const [formData, setFormData] = useState({
    college: '',
    degree: '',
    stream: '',
    percentage: '',
    training: '',
    organization: '',
    description: '',
    link: '',
    hiringReason: '',
    availability: '',
    rating: '',
    email:''
  });
  useEffect(() => {
    const emailid = localStorage.getItem('email');
    console.log(emailid, "email from localStorage");
    if (emailid) {
      setFormData(prevState => ({
        ...prevState,
        email: emailid  // Set the email in formData after retrieving it from localStorage
      }));
    }
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try{
        axios({
            method:"POST",
            url:"http://localhost:5000/api/education",
            data:formData
        }).then(res=>{
            console.log(res.data,"Response submited succesfully")
            alert("Form sumbitted successfully")
            navigate('/InternshalaDetails')
        }).catch((error) => {
            // Handle error
            console.error("Error submitting form:", error);
          })
    }catch{
        console.log("error while form submition")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-1/2 space-y-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Education and Professional Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">College</label>
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="degree" className="block text-sm font-medium text-gray-700">Degree</label>
            <input
              type="text"
              id="degree"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="stream" className="block text-sm font-medium text-gray-700">Stream</label>
            <input
              type="text"
              id="stream"
              name="stream"
              value={formData.stream}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="percentage" className="block text-sm font-medium text-gray-700">Percentage</label>
            <input
              type="text"
              id="percentage"
              name="percentage"
              value={formData.percentage}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="training" className="block text-sm font-medium text-gray-700">Training</label>
            <input
              type="text"
              id="training"
              name="training"
              value={formData.training}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="organization" className="block text-sm font-medium text-gray-700">Organization</label>
            <input
              type="text"
              id="organization"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="link" className="block text-sm font-medium text-gray-700">Github Link</label>
            <input
              type="url"
              id="link"
              name="link"
              value={formData.link}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="hiringReason" className="block text-sm font-medium text-gray-700">Why should we hire you?</label>
            <textarea
              id="hiringReason"
              name="hiringReason"
              value={formData.hiringReason}
              onChange={handleChange}
              required
              rows="3"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            ></textarea>
          </div>
          <div>
            <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
            <input
              type="text"
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              required
              min="1"
              max="5"
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EducationProfessionalForm;
 