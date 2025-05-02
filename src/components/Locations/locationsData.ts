// components/Locations/locationsData.ts
import { zonasMap } from './zonasMap'; 

export interface Location {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  phone: string[];
  whatsapp: string;
  mapLink: string;
  image: string;
  zona: string;
  bairro: string;
  zonaRelacionada?: string[]; // Zonas relacionadas para recomendação
  bairroRelacionado?: string[]; // Bairros relacionados para recomendação
}

export const locations: Location[] = [
  {
    id: 1,
    title: 'Santuário São José Operário',
    subtitle: 'Projeto Acolhe-Dor',
    description: 'Atendimento presencial gratuito: sábado\nHorário: 9h às 11h\nSem necessidade de agendamento;\nAtendimento por ordem de chegada;\nLocalização: Av. Visc. de Porto Alegre, 806 - Centro.',
    phone: ['92 98859-4464'],
    whatsapp: '+55 92 98859-4464',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.871906641593!2d-60.01448894313049!3d-3.128546284391889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c056feed82323%3A0xdd4248b2f3f7c5a!2sSantu%C3%A1rio%20Arquidiocesano%20S%C3%A3o%20Jos%C3%A9%20Oper%C3%A1rio!5e0!3m2!1spt-BR!2sbr!4v1746038454884!5m2!1spt-BR!2sbr',
    image: '/images/Santuariosaojose.png',
    zona: 'Zona Sul',
    bairro: 'Centro',
    zonaRelacionada: ['Zona Centro-Sul', 'Zona Oeste', 'Zona Centro-Oeste'],
    bairroRelacionado: [
        ...zonasMap['Sul'], 
        ...zonasMap['Centro-Sul'], 
        ...zonasMap['Oeste'], 
        ...zonasMap['Centro-Oeste']
      ],
  },
  {
    id: 2,
    title: 'Centro de Atendimento ao Cidadão Edson Junior - CAC',
    subtitle: '',
    description: 'Atendimento presencial gratuito: segunda, quarta e quinta-feira;\nLocalização: R. Guapirama, 25-19 - Cidade Nova.',
    phone: ['92 99306-2121', '92 3085-9268'],
    whatsapp: '+55 92 99306-2121',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2283883588666!2d-59.99449814606324!3d-3.0332978037230878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1baf2b5c37fd%3A0x34c7b6e4a876a719!2sCentro%20de%20Atendimento%20ao%20Cidad%C3%A3o%20Edson%20Junior%20-%20CAC!5e0!3m2!1spt-BR!2sbr!4v1746043536062!5m2!1spt-BR!2sbr',
    image: '/images/CACEdsonJunior.png',
    zona: 'Zona Norte',
    bairro: 'Cidade Nova',
    bairroRelacionado: [
        ...zonasMap['Norte'], 
        ...zonasMap['Leste'], 
        ...zonasMap['Oeste'], 
        ...zonasMap['Centro-Sul']       
    ],
  },
  {
    id: 3,
    title: 'Clínicas FAMETRO',
    subtitle: 'Escola de Psicologia',
    description: 'Atendimento presencial gratuito\nHorários: segunda a sexta-feira, das 8h às 12h\ne das 13h às 17h.\nSábado de 8h às 12h.\n<strong>E-mail:clinicas.agendamento@fametro.edu.br</strong>\nLocalização: Av. Constantino Nery, 22 - Chapada.',
    phone: ['92 3090-3019'],
    whatsapp: '+55 92 98646-1141',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.0012760994805!2d-60.02895669104919!3d-3.0943186402590097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c100807a871ef%3A0x17b92ef70f65ca98!2sCl%C3%ADnicas%20FAMETRO!5e0!3m2!1spt-BR!2sbr!4v1746043445790!5m2!1spt-BR!2sbr',
    image: '/images/ClinicasFametro.png',
    zona: 'Zona Centro-Sul',
    bairro: 'Chapada',
    zonaRelacionada: ['Zona Centro-Oeste', 'Zona Oeste', 'Zona Sul'],
    bairroRelacionado: [
    ...zonasMap['Centro-Oeste'], 
    ...zonasMap['Oeste'], 
    ...zonasMap['Centro-Sul']      
],
  },
  {
    id: 4,
    title: 'FAMETRO Norte',
    subtitle: 'Escola de Psicologia',
    description: 'Atendimento presencial\nHorários: segunda a sexta-feira, das 8h às 12h e das 13h às 17h.\nSábado de 8h às 12h.\nLocalização: Av. Margarita, 05 - Nova Cidade.',
    phone: ['92 2101-1000', '92 98474-8569'],
    whatsapp: '+55 92 98403-0633',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3295998834424!2d-59.97736370691936!3d-3.0057055044902885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c19588870c33f%3A0x377766f64ed818f5!2sFATEC!5e0!3m2!1spt-BR!2sbr!4v1746043333767!5m2!1spt-BR!2sbr',
    image: '/images/FametroNorte.png',
    zona: 'Zona Norte',
    bairro: 'Nova Cidade',
    zonaRelacionada: ['Zona Centro-Oeste', 'Zona Oeste'],
    bairroRelacionado: [
    ...zonasMap['Centro-Oeste'], 
    ...zonasMap['Oeste']      
],
  },
  {
    id: 5,
    title: 'Serviço de psicologia aplicada',
    subtitle: 'UFAM - CSPA',
    description: 'Atendimento com hora marcada\nAo ligar, informe ou digite o ramal 2582 ;\nLocalização: Setor Sul da UFAM (minicampus), Bloco X - Coroado I.',
    phone: ['92  3305-1181 ', '92 3305-4121'],
    whatsapp: '',
    mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.9726399616006!2d-59.974864100000005!3d-3.1019274999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b2b00226781%3A0x835e0727a367b953!2sFaculdade%20de%20Psicologia%20-%20FAPSI!5e0!3m2!1spt-BR!2sbr!4v1746122778882!5m2!1spt-BR!2sbr',
    image: '/images/UFAMCSPA.png',
    zona: 'Zona Leste',
    bairro: 'Coroado',
    zonaRelacionada: ['Zona Centro-Oeste', 'Zona Centro-Sul'],
    bairroRelacionado: [ 'Norte', 'Leste', 'Centro-Oeste', 'Centro-Sul'],
  }
];
