import { useState } from "react";

import AddEntryModal from "./components/AddEntryModal";
import EntryList from "./components/EntryList";
import Header from "./components/Header";

export default function App() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3ead8] text-stone-800">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <Header onOpenModal={() => setIsAddModalOpen(true)} />

        <EntryList
          entries={[]}
          onSelectEntry={() => {}}
        />

        {isAddModalOpen && (
          <AddEntryModal
            onClose={() => setIsAddModalOpen(false)}
          />
        )}
      </div>
    </main>
  );
}