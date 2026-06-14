import AddEntryButton from "./AddEntryButton";

const Header = ({ onOpenModal }) => {
    return (
    <header className="mb-10 flex flex-col gap-6 border-b border-stone-300 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-stone-500">
                Inner Compass
            </p>
            
            <h1 className="font-serif text-4xl leading-tight text-stone-800 md:text-5xl">
                A quiet place for your thoughts.
            </h1>
            
            <p className="mt-4 max-w-2xl text-stone-600">
                Write one reflection per day and let your inner direction slowly reveal itself.
            </p>
            
        </div>
        
        <AddEntryButton onClick={onOpenModal} />
    </header>
    );
};

export default Header;