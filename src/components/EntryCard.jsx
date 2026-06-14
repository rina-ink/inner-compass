const EntryCard = ({ entry, onSelectEntry }) => {
    return (
    <article className="cursor-pointer rounded-2xl border border-stone-300 bg-[#f8f2e6] p-5 shadow-sm transition hover:shadow-md"
    onClick={() => onSelectEntry(entry)}
    >
        <img
        src={entry.imageUrl}
        alt={entry.title}
        className="mb-4 h-48 w-full rounded-xl object-cover"
        />
        
        <p className="mb-2 text-sm text-stone-500">
            {entry.date}
        </p>
        
        <h2 className="text-xl font-medium text-stone-800">
            {entry.title}
        </h2>
    </article>
    );
};

export default EntryCard;