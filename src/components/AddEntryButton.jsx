const AddEntryButton = ({ onClick }) => {
    return (
    <button
    type="button"
    onClick={onClick}
    className="rounded-full bg-stone-800 px-6 py-3 text-sm font-medium text-stone-50 shadow-sm transition hover:bg-stone-700"
    >
        Add Entry
    </button>
    );
};

export default AddEntryButton;