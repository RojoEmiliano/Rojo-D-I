import { productsTypes } from '../../utils/productsTypes';

const products = [
  //IMPRESORAS BYN

  {
    name: 'Ricoh SP 3710dn impresora láser blanco y negro',
    model: 'SP3710dn',
    description: [
      'Extienda la productividad de impresión con un presupuesto limitado',
      'Producción de hasta 34 ppm, impresión',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 550 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/sp3710/3710-2.jpg',
      '/ricoh/img/sp3710/3710.jpg',
      '/ricoh/img/sp3710/3710-3.jpg',
      '/ricoh/img/sp3710/3710-4.jpg',
    ],
    type: productsTypes.iByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '34ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux',
        size: '37,0 x 39,2x 26,2 cm',
        weight: '13 kg',
      },
      conectivity: {
        standarConectivity: 'TX/10BASE-T, USB2.0 Tipo B ',
        netProtocols: 'TCP/IP v4, TCP/IP v6',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '52 - 162 g/m²',
        paperEntryCapacity:
          'Bandeja de 250 hojas + Bypass de 50 hojas (recomendada). 550 hojas max.',
        paperOutCapacity: '50 hojas',
      },
      modelCode: '408272',
      dataSheet: '/ricoh/dataSheet/dataSheet-3710.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/sp3710sf/sp3710sf.htm?lang=es',
    },
  },

  {
    name: 'Ricoh P311 impresora láser blanco y negro',
    model: 'P311',
    description: [
      'Mantener la productividad y el presupuesto',
      'Producción de hasta 34 ppm, impresión',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 550 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/p311-m320/311-4.jpg',
      '/ricoh/img/p311-m320/311.jpg',
      '/ricoh/img/p311-m320/311-2.jpg',
      '/ricoh/img/p311-m320/311-3.jpg',
    ],
    type: productsTypes.iByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '32ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux ',
        size: '37,5 x 41,2 x 31,1 cm',
        weight: '13 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10 base-T/100 base-TX USB2.0 Tipo B ',
        netProtocols: 'TCP/IP v4, TCP/IP v6',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '52 - 220 g/m²',
        paperEntryCapacity:
          'Bandeja de 250 hojas + Bypass de 50 hojas (recomendada). 550 hojas max.',
        paperOutCapacity: '50 hojas',
      },
      modelCode: '408525T',
      dataSheet: '/ricoh/dataSheet/dataSheet-320.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/p310/p310.htm',
    },
  },

  {
    name: 'Ricoh P502 impresora blanco y negro',
    model: 'P502',
    description: [
      'Coloque la impresión rápida, confiable y económica dentro del alcance.',
      'Producción de hasta 45 ppm, impresión',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 2.100 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/p502/502.jpg',
      '/ricoh/img/p502/502-2.jpg',
      '/ricoh/img/p502/502-3.jpg',
      '/ricoh/img/p502/502-4.jpg',
    ],
    type: productsTypes.iByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '45ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008R2, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016 , Macintosh OS X v10.10 o posterior. UNIX Sun® Solaris, HP-UX, SCO OpenServer, RedHat® Linux, IBM® AIX, Citrix XenApp ',
        size: '47,6 x 44,2x 51,0 cm',
        weight: '19,3 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10 base-T/100 base-TX/1000 base-T, USB Host 2.0',
        netProtocols: 'TCP/IP (IPv4, IPv6)',
      },
      paperHandling: {
        paperSize: ': (A4, A5, A6, B5, B6)',
        paperType:
          'Papel normal, Papel reciclado, Papel especial, Papel de color, Membrete, Papel preimpreso, Sobre, Papel de etiqueta, OHP',
        paperWeight: '52 - 220 g/m²',
        paperEntryCapacity: 'Bandeja de 500 hojas. Maximo 2.100 hojas.',
        paperOutCapacity: '250 hojas',
      },
      modelCode: '418495',
      dataSheet: '/ricoh/dataSheet/dataSheet-502.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/p501/p501.htm',
    },
  },

  {
    name: 'Ricoh P800 impresora láser blanco y negro',
    model: 'P800',
    description: [
      'Abraza el poder en un espacio más pequeño.',
      'Producción de hasta 57 ppm',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 2.600 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/p800/800.jpg',
      '/ricoh/img/p800/800-4.jpg',
      '/ricoh/img/p800/800-3.jpg',
      '/ricoh/img/p800/800-2.jpg',
    ],
    type: productsTypes.iByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '57ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '42,0 x 41,0 x 34,6 cm',
        weight: '18 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet 10 base-T / 100 base-TX / 1000 base-T, host USB Tipo miniB, host USB I / F, Dispositivo USB 2.0, Ranura para Tarjeta SD, etiqueta NFC, Bluetooth',
        netProtocols: 'TCP/IP (IPv4, IPv6)',
      },
      paperHandling: {
        paperSize: ': (A4, A5, A6, B5, B6, Legal, Carta, HLT, Ejecutivo)',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '60 - 220 g/m²',
        paperEntryCapacity: 'Bandeja de 500 hojas. Maximo 2.600 hojas.',
        paperOutCapacity: '500 hojas',
      },
      modelCode: '418460',
      dataSheet: '/ricoh/dataSheet/dataSheet-800.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/apc/model/p800/p800.htm',
    },
  },

  //MULTIFUNCIONES BYN

  {
    name: 'Ricoh SP 3710SF impresora multifunción láser blanco y negro',
    model: 'SP3710SF',
    description: [
      'Produzca un flujo de trabajo más inteligente y asequible',
      'Producción de hasta 34 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 550 páginas',
      'Doble Faz automático',
    ],
    imgs: [
      '/ricoh/img/sp3710/3710sf.jpg',
      '/ricoh/img/sp3710/3710sf-2.jpg',
      '/ricoh/img/sp3710/3710sf-3.jpg',
      '/ricoh/img/sp3710/3710sf-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '34ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux',
        size: '40,5 x 39,2x 42,0 cm',
        weight: '18 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10 base-T/100 base-TX USB2.0 Tipo B ',
        netProtocols: 'TCP/IP v4, TCP/IP v6',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '52 - 162 g/m²',
        paperEntryCapacity:
          'Bandeja de 250 hojas + Bypass de 50 hojas (recomendada). 550 hojas max.',
        paperOutCapacity: '50 hojas',
      },
      modelCode: 'M03002',
      dataSheet: '/ricoh/dataSheet/dataSheet-3710.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/sp3710sf/sp3710sf.htm?lang=es',
    },
  },

  {
    name: 'Ricoh M320 impresora multifunción láser blanco y negro',
    model: 'M320',
    description: [
      'Produzca un flujo de trabajo más inteligente y asequible',
      'Producción de hasta 34 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 550 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/p311-m320/320.jpg',
      '/ricoh/img/p311-m320/320-2.jpg',
      '/ricoh/img/p311-m320/320-3.jpg',
      '/ricoh/img/p311-m320/320-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '32ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux ',
        size: '40,5 x 39,2x 42,0 cm',
        weight: '18 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10 base-T/100 base-TX USB2.0 Tipo B ',
        netProtocols: 'TCP/IP v4, TCP/IP v6',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '52 - 162 g/m²',
        paperEntryCapacity:
          'Bandeja de 250 hojas + Bypass de 50 hojas (recomendada). 550 hojas max.',
        paperOutCapacity: '50 hojas',
      },
      modelCode: '408534T',
      dataSheet: '/ricoh/dataSheet/dataSheet-320.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/m320f/m320f.htm?lang=es',
    },
  },

  {
    name: 'M 400FW Impresora multifunción láser en blanco y negro',
    model: 'M400FW',
    description: [
      'Solución B&N A4 productiva, conectable y segura para trabajar desde casa e híbrida',
      'Imprime hasta 40 ppm (A4)/42 ppm (Carta), copia, escanea, fax',
      'Resolución de impresión máxima de 2400 x 600 ppp',
      'Capacidad de papel de hasta 900 hojas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/m400/400.jpg',
      '/ricoh/img/m400/400-2.jpg',
      '/ricoh/img/m400/400-3.jpg',
      '/ricoh/img/m400/400-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 2400 x 600 ppp',
        maxPrintSpeed: '40ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux ',
        size: '41,1 x 36,6x 33,8 cm',
        weight: '12,8 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10/100 Base TX (RJ-45) USB compatible con USB 2.0 Especificación (Type B)',
        netProtocols: 'TCP/IP v4, TCP/IP v6',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6, carta, legal',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '60 - 217 g/m²',
        paperEntryCapacity:
          'Bandeja de 350 hojas(recomendada). 900 hojas max.',
        paperOutCapacity: '150 hojas',
      },
      modelCode: 'm400',
      dataSheet: '/ricoh/dataSheet/dataSheet-400.pdf',
      drivers: 'https://www.ricoh-americalatina.com/es/drivers-m400fw',
    },
  },

  {
    name: 'Ricoh MP301 impresora multifunción láser blanco y negro',
    model: 'MP301',
    description: [
      'Eleve sus expectativas — y mejore su productividad. El modelo RICOH® Aficio® MP 301SPF ofrece capacidades avanzadas para agilizar el flujo de trabajo y reducir el costo total de propiedad.',
      'Producción de hasta 31 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 600 x 600 ppp',
      'Capacidad de papel hasta 550 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/mp301/301.jpg',
      '/ricoh/img/mp301/301-2.jpg',
      '/ricoh/img/mp301/301-3.jpg',
      '/ricoh/img/mp301/301-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '31ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux ',
        size: '47,6 x 45,0x 45,1 cm',
        weight: '26 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10 base-T/100 base-TX USB2.0 Tipo B ',
        netProtocols: 'TCP/IP v4, TCP/IP v6',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6, carta, legal',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '60 - 157 g/m²',
        paperEntryCapacity:
          'Bandeja de 250 hojas + Bypass de 100 hojas (recomendada). 600 hojas max.',
        paperOutCapacity: '250 hojas',
      },
      modelCode: '408534T',
      dataSheet: '/ricoh/dataSheet/dataSheet-301.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/apc/model/mp301/mp301.htm?lang=es',
    },
  },

  {
    name: 'Ricoh MP305 impresora multifunción láser blanco y negro',
    model: 'MP305',
    description: [
      'Un MFP A4 compacto con posibilidad de funcionalidades en A3.',
      'Producción de hasta 30 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 600 x 600 ppp',
      'Capacidad de papel hasta 550 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/mp305/305-4.jpg',
      '/ricoh/img/mp305/305.jpg',
      '/ricoh/img/mp305/305-2.jpg',
      '/ricoh/img/mp305/305-3.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '30ppm',
      },
      general: {
        os: 'Windows® 8.1, Windows® 10, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016, Macintosh OS X v10.10 o posterior. Entorno Linux ',
        size: '35,0 x 49,3x 50,5 cm',
        weight: '32 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet (puerto de red RJ-45: 10Base-T/ 100Base-TX/1000Base-T), USB 2.0 Tipo A x 2, SD ',
        netProtocols: 'TCP/IP (IPv4, IPv6)',
      },
      paperHandling: {
        paperSize: 'A3, A4, A5, A6, B5, B6, carta, legal',
        paperType:
          'Delgado, Regular, Grueso, Reciclado, De Color, Especial, Con Membrete, Preimpreso, Bond*, Cartulina* Etiquetas*, Sobres** Estándar',
        paperWeight: '52 - 163 g/m²',
        paperEntryCapacity: 'Bandeja de 250 hojas + Bypass de 10 hojas.',
        paperOutCapacity: '250 hojas',
      },
      modelCode: '417436',
      dataSheet: '/ricoh/dataSheet/dataSheet-305.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/apc/model/mp305_plus/mp305_plus.htm?lang=es',
    },
  },

  {
    name: 'Ricoh IM430 impresora multifunción láser blanco y negro',
    model: 'IM430',
    description: [
      'Haga de la productividad el ajuste perfecto.',
      'Producción de hasta 45 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 2.100 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/im430/430.jpg',
      '/ricoh/img/im430/430-2.jpg',
      '/ricoh/img/im430/430-3.jpg',
      '/ricoh/img/im430/430-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '45ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008R2, Windows® Server 2012, Windows® Server 2012R2, Windows® Server 2016 , Macintosh OS X v10.10 o posterior. UNIX Sun® Solaris, HP-UX, SCO OpenServer, RedHat® Linux, IBM® AIX, Citrix XenApp ',
        size: '47,6 x 44,2x 51,0 cm',
        weight: '30,5 kg',
      },
      conectivity: {
        standarConectivity: 'Ethernet 10 base-T/100 base-TX/1000 base-T, USB Host 2.0',
        netProtocols: 'TCP/IP (IPv4, IPv6)',
      },
      paperHandling: {
        paperSize: ': (A4, A5, A6, B5, B6)',
        paperType:
          'Papel normal, Papel reciclado, Papel especial, Papel de color, Membrete, Papel preimpreso, Sobre, Papel de etiqueta, OHP',
        paperWeight: '52 - 220 g/m²',
        paperEntryCapacity: 'Bandeja de 500 hojas. Maximo 2.100 hojas.',
        paperOutCapacity: '250 hojas',
      },
      modelCode: '418491',
      dataSheet: '/ricoh/dataSheet/dataSheet-430.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/im430f/im430f.htm',
    },
  },

  {
    name: 'Ricoh IM550 impresora multifunción láser blanco y negro',
    model: 'IM550',
    description: [
      'Haga espacio para un rendimiento dinámico.',
      'Producción de hasta 57 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 2.600 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/im550/550.jpg',
      '/ricoh/img/im550/550-2.jpg',
      '/ricoh/img/im550/550-3.jpg',
      '/ricoh/img/im550/550-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 1200 x 1200 ppp',
        maxPrintSpeed: '57ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '48,0 x 53,9x 64,4 cm',
        weight: '29 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet 10 base-T / 100 base-TX / 1000 base-T, host USB Tipo miniB, host USB I / F, Dispositivo USB 2.0, Ranura para Tarjeta SD, etiqueta NFC, Bluetooth',
        netProtocols: 'TCP/IP (IPv4, IPv6)',
      },
      paperHandling: {
        paperSize: ': (A4, A5, A6, B5, B6, Legal, Carta, HLT, Ejecutivo)',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '60 - 220 g/m²',
        paperEntryCapacity: 'Bandeja de 500 hojas. Maximo 2.600 hojas.',
        paperOutCapacity: '500 hojas',
      },
      modelCode: '418460',
      dataSheet: '/ricoh/dataSheet/dataSheet-550.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/im550/im550.htm',
    },
  },

  {
    name: 'Ricoh MP2352 impresora multifunción láser blanco y negro',
    model: 'MP2352',
    description: [
      'Produzca un flujo de trabajo más inteligente y asequible.',
      'Producción de hasta 23 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 600 x 600 ppp',
      'Capacidad de papel hasta 3.150 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/a2352-3352/2352.jpg',
      '/ricoh/img/a2352-3352/2352-2.jpg',
      '/ricoh/img/a2352-3352/2352-3.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '23ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '58,7 x 65,3x 82,9 cm',
        weight: '65 kg',
      },
      conectivity: {
        standarConectivity: 'USB 2.0, Ethernet 10 base-T/100 base-TX',
        netProtocols: 'TCP/IP (IPv4, IPv6), IPX, SPX',
      },
      paperHandling: {
        paperSize: ': A6 - A3 / 5.5" x 8.5" - 11" x 17',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '52 - 157 g/m²',
        paperEntryCapacity: 'Máximo 3.150 hojas.',
        paperOutCapacity: 'Máximo 1.650 hojas',
      },
      modelCode: 'MP2352',
      dataSheet: '/ricoh/dataSheet/dataSheet-2352.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc2/model/mp23/mp23.htm?lang=es',
    },
  },

  {
    name: 'Ricoh MP3352 impresora multifunción láser blanco y negro',
    model: 'MP3352',
    description: [
      'Produzca un flujo de trabajo más inteligente y asequible.',
      'Producción de hasta 33 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 600 x 600 ppp',
      'Capacidad de papel hasta 3.150 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/a2352-3352/2352.jpg',
      '/ricoh/img/a2352-3352/2352-2.jpg',
      '/ricoh/img/a2352-3352/2352-3.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '33ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '58,7 x 65,3x 82,9 cm',
        weight: '65 kg',
      },
      conectivity: {
        standarConectivity: 'USB 2.0, Ethernet 10 base-T/100 base-TX',
        netProtocols: 'TCP/IP (IPv4, IPv6), IPX, SPX',
      },
      paperHandling: {
        paperSize: ': A6 - A3 / 5.5" x 8.5" - 11" x 17',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '52 - 157 g/m²',
        paperEntryCapacity: 'Máximo 3.150 hojas.',
        paperOutCapacity: 'Máximo 1.650 hojas',
      },
      modelCode: 'MP3352',
      dataSheet: '/ricoh/dataSheet/dataSheet-2352.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc2/model/mp23/mp23.htm?lang=es',
    },
  },

  {
    name: 'Ricoh MP2555 impresora multifunción láser blanco y negro',
    model: 'MP2555',
    description: [
      'Convierte el dia a dia en una jornada fácil.',
      'Producción de hasta 25 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 600 x 600 ppp',
      'Capacidad de papel hasta 4.700 páginas',
      'Doble Faz automático',
    ],

    imgs: ['/ricoh/img/mp2555/2555.jpg'],

    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '25ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '58,7 x 68,4x 96,3 cm',
        weight: '76 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet 10Base-T/100Base-TX/ 1000Base-T, USB Host Tipo A I/F (2 puertos en la parte posterior del dispositivo)',
        netProtocols: 'TCP/IP (IPv4, IPv6), IPX, SPX',
      },
      paperHandling: {
        paperSize: 'Hasta doble carta (A6 - A3)',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '52 - 300 g/m²',
        paperEntryCapacity:
          '1,200 hojas (550 hojas x 2 bandejas y Bandeja Bypass de 100 hojas). Maximo 4.700 hojas',
        paperOutCapacity: 'Standar: 500 hojas. Máximo: 1.625 hojas',
      },
      modelCode: 'MP2555',
      dataSheet: '/ricoh/dataSheet/dataSheet-2555.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/mp2595/mp2595.htm?lang=es',
    },
  },

  {
    name: 'Ricoh MP2554 impresora multifunción láser blanco y negro',
    model: 'MP2554',
    description: [
      'Amplíe su negocio con la comodidad diseñada a su medida.',
      'Producción de hasta 25 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 600 x 600 ppp',
      'Capacidad de papel hasta 4.700 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/mp2554/2554.jpg',
      '/ricoh/img/mp2554/2554-2.jpg',
      '/ricoh/img/mp2554/2554-3.jpg',
      '/ricoh/img/mp2554/2554-4.jpg',
    ],
    type: productsTypes.mByN,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '25ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '58,7 x 68,0x 91,3 cm',
        weight: '68 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet 10Base-T/100Base-TX/ 1000Base-T, USB Host Tipo A I/F (2 puertos en la parte posterior del dispositivo)',
        netProtocols: 'TCP/IP (IPv4, IPv6), IPX, SPX',
      },
      paperHandling: {
        paperSize: 'Hasta doble carta (A6 - A3)',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '52 - 300 g/m²',
        paperEntryCapacity:
          '1,200 hojas (550 hojas x 2 bandejas y Bandeja Bypass de 100 hojas). Maximo 4.700 hojas',
        paperOutCapacity: 'Standar: 500 hojas. Máximo: 1.625 hojas',
      },
      modelCode: 'MP2554',
      dataSheet: '/ricoh/dataSheet/dataSheet-2554.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/mp2554/mp2554.htm',
    },
  },

  //MULTIFUNCIONES COLOR

  {
    name: 'Ricoh MP C305 impresora multifunción láser color',
    model: 'MPC305',
    description: [
      'Color atractivo y desempeño potente a su alcance.',
      'Producción de hasta 31 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 1.350 páginas',
      'Doble Faz automático',
    ],

    imgs: ['/ricoh/img/mpc305/c305.jpg'],
    type: productsTypes.mColor,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '31ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '49,8 x 53,2 x 50,5 cm',
        weight: '45 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet 10Base-T/100Base-TX/ 1000Base-T, USB Host Tipo A I/F (2 puertos en la parte posterior del dispositivo)',
        netProtocols: 'TCP/IP (IPv4, IPv6), IPX, SPX',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6, Legal, Carta, HLT, Ejecutivo',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '60 - 220 g/m²',
        paperEntryCapacity: 'Bandeja de 250 hojas y bandeja bypass 100 hojas. Maximo 1.350 hojas',
        paperOutCapacity: '100 hojas',
      },
      modelCode: 'MPC305',
      dataSheet: '/ricoh/dataSheet/dataSheet-c305.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/re2/model/mpc305/mpc305.htm?lang=en',
    },
  },

  {
    name: 'Ricoh MP C306 impresora multifunción láser color',
    model: 'MPC306',
    description: [
      'Lleva un rendimiento multifunción colorido a tu escritorio.',
      'Producción de hasta 31 ppm, impresión, copia, escaneo, envío de fax',
      'Resolución de impresión máx. 1200 x 1200 ppp',
      'Capacidad de papel hasta 1.350 páginas',
      'Doble Faz automático',
    ],

    imgs: [
      '/ricoh/img/mpc306/306.jpg',
      '/ricoh/img/mpc306/306-3.jpg',
      '/ricoh/img/mpc306/306-2.jpg',
    ],
    type: productsTypes.mColor,
    specs: {
      print: {
        printTec: 'Impresion láser',
        maxRes: 'hasta 600 x 600 ppp',
        maxPrintSpeed: '31ppm',
      },
      general: {
        os: 'Windows® 7, Windows® 8.1, Windows® 10, Windows® Server 2008, Windows® Server 2008/R2, Windows® Server 2012/R2, Windows® Server 2016, Windows® Server 2019 Entornos Mac OS Macintosh OS X Native v10.11 o posterior. UNIX Sun® Solaris (10), HP-UX (11.x, 11i v2, 11i v3), SCO Open Server (5.0.7, 6.0, 6.x), RedHat® Linux Enterprise (V4, V5, V6), IBM® AIX (V6.1, V7.1, V7.2) ',
        size: '51,0 x 58,8 x 50,5 cm',
        weight: '45 kg',
      },
      conectivity: {
        standarConectivity:
          'Ethernet 10Base-T/100Base-TX/ 1000Base-T, USB Host Tipo A I/F (2 puertos en la parte posterior del dispositivo)',
        netProtocols: 'TCP/IP (IPv4, IPv6), IPX, SPX',
      },
      paperHandling: {
        paperSize: 'A4, A5, A6, B5, B6, Legal, Carta, HLT, Ejecutivo',
        paperType:
          'Normal, Reciclar, Especial, Color, Membrete, Preimpreso, Bond, Sobres, Etiqueta y OHP',
        paperWeight: '60 - 220 g/m²',
        paperEntryCapacity: 'Bandeja de 250 hojas y bandeja bypass 100 hojas. Maximo 1.350 hojas',
        paperOutCapacity: '100 hojas',
      },
      modelCode: 'MPC306',
      dataSheet: '/ricoh/dataSheet/dataSheet-c306.pdf',
      drivers: 'http://support.ricoh.com/bb/html/dr_ut_e/rc3/model/mcp306/mcp306.htm?lang=es',
    },
  },
];

export default products;
