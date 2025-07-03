import { useState } from 'react';
import { WEB3FORMS_API_URL, WEB3FORMS_ACCESS_KEY } from '../config/api';
import { toast } from 'react-toastify';

export default function useContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch(WEB3FORMS_API_URL, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message submitted successfully!");
        event.target.reset();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, handleSubmit };
}
