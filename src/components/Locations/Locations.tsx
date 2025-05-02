'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import styles from './Locations.module.css';
import { locations, Location } from './locationsData';
import { zonasMap } from './zonasMap';

// Função para pegar a zona de um bairro
const getZonaFromBairro = (bairro: string) => {
  for (const zona in zonasMap) {
    if (zonasMap[zona].includes(bairro)) {
      return zona;
    }
  }
  return ''; // Retorna uma string vazia se não encontrar a zona
};

const Locations: React.FC = () => {
  const searchParams = useSearchParams(); 
  const initialSearchTerm = searchParams.get('search') || ''; 

  const [searchTerm, setSearchTerm] = useState(initialSearchTerm); 
  const [filteredLocations, setFilteredLocations] = useState<any[]>([]); 
  const [noResultsMessage, setNoResultsMessage] = useState(''); 
  const [showAll, setShowAll] = useState(false); 
  const [openMapId, setOpenMapId] = useState<number | null>(null); 

  // Função para lidar com mudanças no input de pesquisa
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term); 
  };

  // Função chamada ao pressionar Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchTerm(e.currentTarget.value); 
    }
  };

  // Função para filtrar os locais de acordo com a pesquisa
  const filterLocations = () => {
    if (searchTerm === '') {
      setFilteredLocations(locations.slice(0, 5)); 
      setNoResultsMessage('');
    } else {
      const filtered = locations.filter((location) =>
        location.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.zona.toLowerCase().includes(searchTerm.toLowerCase()) ||
        location.bairro.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLocations(filtered);

      if (filtered.length === 0) {
        setNoResultsMessage('Por favor, pesquise por um local da lista.');
      } else {
        setNoResultsMessage('');
      }
    }
  };

  // Função para recomendar locais baseados na zona
  const getRecommendedLocations = (searchTerm: string) => {
    let recommendedZonas: string[] = [];
    let recommendedBairros: string[] = [];
  
    // Verificando se é um bairro que existe no zonasMap
    Object.keys(zonasMap).forEach((zona) => {
      if (zonasMap[zona].includes(searchTerm)) {
        recommendedZonas.push(zona);
        recommendedBairros.push(...zonasMap[zona]); // Incluindo todos os bairros da zona
      }
    });
  
    return locations.filter((location) => {
      return recommendedZonas.includes(location.zona) || recommendedBairros.includes(location.bairro);
    });
  };

  // Lógica de recomendação para quando não encontrar resultados
  useEffect(() => {
    filterLocations(); 

    if (searchTerm !== '') {
      const bairro = searchTerm.trim().toLowerCase();
      const zonaRelacionada = getZonaFromBairro(bairro); // Obtemos a zona do bairro pesquisado

      if (zonaRelacionada) {
        // Usando a função correta para pegar as recomendações da zona
        const recommendedLocations = getRecommendedLocations(zonaRelacionada); // Busca locais na zona relacionada

        if (recommendedLocations.length > 0) {
          setFilteredLocations(recommendedLocations); // Se encontrarmos locais, recomendamos
        }
      }
    }
  }, [searchTerm]);

  const handleShowMore = () => {
    setShowAll(true); 
  };

  const toggleMap = (id: number) => {
    setOpenMapId(openMapId === id ? null : id); 
  };

  return (
    <section className={styles.container}>
      <div className={styles.titleArea}>
        <div className={styles.Title}>Busque ajuda nestes locais:</div>
        <div className={styles.Subtitle}>*Por favor, nos contate para adicionarmos mais locais.</div>
      </div>

      <div className={styles.bannerLocations}>
        <div className={styles.searchBanner}>
          <div className={styles.pointerContainer}>
            <img
              src="/assets/PointerMapAzul.svg"
              alt="Pointer Map"
              className={styles.pointerIcon}
            />
            <span className={styles.locationManaus}>Manaus - AM</span>
          </div>

          <div className={styles.searchInputWrapper}>
            <input
              type="text"
              placeholder="Pesquise um local..."
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              className={styles.searchInput}
            />
            <div className={styles.searchIconWrapper}>
              <img
                src="/assets/LupaPesquisa.svg"
                alt="Lupa Pesquisa"
              />
            </div>
          </div>
        </div>

        {noResultsMessage && (
          <div className={styles.noResultsMessage}>
            <p>{noResultsMessage}</p>
          </div>
        )}

        <div className={styles.recommendedLocations}>
          {filteredLocations.slice(0, showAll ? filteredLocations.length : 5).map((location) => (
            <div key={location.id} className={styles.locationCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={location.image}
                  alt={location.title}
                  width={423}
                  height={323}
                  className={styles.locationImage}
                />
              </div>

              <div className={styles.infoContainer}>
                <div className={styles.infoContainerTitleSubtitle}>
                  <div className={styles.locationTitle}>{location.title}</div>
                  {location.subtitle && (
                    <div className={styles.locationSubtitle}>{location.subtitle}</div>
                  )}
                </div>

                <p
                  className={styles.locationDescription}
                  dangerouslySetInnerHTML={{
                    __html: location.description.replace(/\n/g, '<br />'),
                  }}
                />

                <div className={styles.buttonsArea}>
                  <a href={`tel:${location.phone}`} className={styles.phoneButton}>
                    <img src="/assets/Telefone.svg" alt="Telefone" className={styles.buttonIcon} />
                    Telefone
                  </a>
                  <a
                    href={`https://wa.me/${location.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.whatsappButton}
                  >
                    <img src="/assets/Whatsapp.svg" alt="WhatsApp" className={styles.buttonIcon} />
                    WhatsApp
                  </a>

                  <button
                    onClick={() => toggleMap(location.id)}
                    className={openMapId === location.id ? styles.mapButtonClosed : styles.mapButton}
                  >
                    <img
                      src={openMapId === location.id ? "/assets/Closed.svg" : "/assets/MapIcon.svg"}
                      alt="Mapa"
                      className={styles.buttonIcon}
                    />
                    {openMapId === location.id ? 'Fechar mapa' : 'Ver no mapa'}
                  </button>
                </div>
              </div>

              {openMapId === location.id && (
                <div className={styles.mapContainer}>
                  <div className={styles.mapArea}>
                    <iframe
                      src={location.mapLink}
                      width="100%"
                      height="100%"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
