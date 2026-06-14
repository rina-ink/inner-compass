import { useState } from "react";

const AddEntryModal = ({ onClose, onAddEntry }) => {
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        imageUrl: "",
        content: "",
    });
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: value,
            };
        });
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (
            !formData.title ||
            !formData.date ||
            !formData.imageUrl ||
            !formData.content
        ) {
            alert("Please fill in all fields.");
            return;
        }
        
        onAddEntry(formData);
    };
    
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 px-4">
        <div className="w-full max-w-lg rounded-2xl border border-stone-200 bg-[#faf5eb] p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl text-stone-800">New Entry</h2>
                
                <button
                type="button"
                onClick={onClose}
                className="text-stone-500 hover:text-stone-800"
                >
                    ✕
                    </button>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <input
                type="url"
                name="imageUrl"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <textarea
                name="content"
                placeholder="What is moving in you today?"
                rows="6"
                value={formData.content}
                onChange={handleChange}
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <button
                type="submit"
                className="rounded-full bg-stone-800 px-6 py-3 text-white"
                >
                    Save Entry
                </button>
            </form>
        </div>
    </div>
    );
};

export default AddEntryModal;