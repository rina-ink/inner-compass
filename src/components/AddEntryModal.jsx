const AddEntryModal = ({ onClose }) => {
    return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
        <div className="w-full max-w-lg rounded-2xl bg-[#f8f2e6] p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl text-stone-800">
                    New Entry
                </h2>
                    
                    <button
                    type="button"
                    onClick={onClose}
                    className="text-stone-500 hover:text-stone-800"
                    >
                        ✕
                    </button>
            </div>
            
            <form className="space-y-4">
                <input
                type="text"
                placeholder="Title"
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <input
                type="date"
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <input
                type="url"
                placeholder="Image URL"
                className="w-full rounded-lg border border-stone-300 bg-white px-4 py-3"
                />
                
                <textarea
                placeholder="What is moving in you today?"
                rows="6"
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