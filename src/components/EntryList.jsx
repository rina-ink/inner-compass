import EntryCard from "./EntryCard";

const EntryList = ({ entries, onSelectEntry }) => {
    if (entries.length === 0) {
        return (
        <p className="mt-12 text-stone-600">
        Your diary entries will appear here.
        </p>
        );
    }
    
    return (
    <section className="mt-12 grid gap-6 md:grid-cols-2">
        {entries.map((entry) => {
            return (
            <EntryCard
            key={entry.date}
            entry={entry}
            onSelectEntry={onSelectEntry}
            />
        );
        })}
        </section>
        );
    };

export default EntryList;