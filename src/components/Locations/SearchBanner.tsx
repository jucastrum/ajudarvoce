// components/Locations/SearchBanner.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'; // Usando searchParams

interface SearchBannerProps {
  setSearchTerm: (searchTerm: string) => void;
}

const SearchBanner: React.FC<SearchBannerProps> = ({ setSearchTerm }) => {
  const searchParams = useSearchParams();
  const initialSearchTerm = searchParams.get('search') || ''; // Captura o searchTerm da URL

  const [searchTerm, setLocalSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    if (searchTerm !== initialSearchTerm) {
      setSearchTerm(searchTerm); // Atualiza o searchTerm no Locations.tsx
    }
  }, [searchTerm, initialSearchTerm, setSearchTerm]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchTerm(e.target.value); // Atualiza o valor local
  };

  return (
    <div>
      <div className="searchBanner">
        <input
          type="text"
          placeholder=""
          value={searchTerm}
          onChange={handleInputChange}
          className="searchInput"
        />
      </div>
    </div>
  );
};

export default SearchBanner;
