import type { GuideLong } from './types';

const tariffe = "I biglietti d'ingresso dei parchi gestiti da Madagascar National Parks sono raddoppiati il 1° novembre 2026. Prima dell'aumento, un visitatore straniero pagava circa 45.000 ariary al giorno nella maggior parte dei parchi: verificate la nuova tariffa alla biglietteria, dove si paga in contanti, in ariary.";

export const guideLong: Record<string, GuideLong> = {
  andasibe: {
    sections: [
      { h: "Il canto dell'indri", p: [
        "Andasibe è prima di tutto un suono. Al mattino un richiamo lungo e struggente attraversa la foresta e rimbalza da una collina all'altra: è l'indri, il più grande lemure vivente, che sopravvive solo in libertà. Le famiglie di indri della riserva di Analamazaotra sono abituate alla presenza umana, così con una buona guida l'incontro è quasi certo.",
        "Il parco nazionale di Andasibe-Mantadia comprende due settori. Analamazaotra, accanto al villaggio, è il più accessibile: sentieri da una a quattro ore, poco dislivello e gli indri all'appuntamento. Mantadia, più lontano lungo una pista, è una foresta primaria più selvaggia e ripida, per chi vuole camminare a lungo e vedere il sifaka diademato, uno dei lemuri più belli dell'isola.",
      ]},
      { h: 'Cosa si vede in una giornata', p: [
        "Oltre agli indri si incontrano spesso lemuri bruni, apalemuri grigi, camaleonti giganti (tra cui il camaleonte di Parson), rane colorate e numerosi uccelli endemici. La foresta è umida tutto l'anno: la vegetazione è fitta, con felci arboree e orchidee ovunque.",
        "La sera, un'escursione notturna ai margini della foresta permette di vedere i microcebi, i camaleonti addormentati sui rami e gli insetti sorprendenti della foresta pluviale. Spesso è il momento preferito dei bambini.",
      ]},
      { h: 'Quanto tempo prevedere?', p: [
        "Andasibe è l'escursione ideale da Tana, all'inizio o alla fine del viaggio. Una notte sul posto è davvero consigliata: si arriva nel pomeriggio, si fa l'escursione notturna e si entra nella foresta il mattino seguente, quando gli indri cantano. In giornata è fattibile, ma si passa più tempo in strada che nella foresta.",
        "Con due notti si aggiunge Mantadia o una riserva comunitaria vicina, e magari l'isola dei lemuri di Vakona, più turistica ma amata dalle famiglie.",
      ]},
      { h: 'La strada da Tana', p: [
        "Si lascia la capitale verso est e si segue la RN2, la strada per Tamatave. È asfaltata e attraversa colline, risaie e villaggi lungo la strada dove si compra la frutta. Sono circa 150 km, da tre a quattro ore secondo il traffico all'uscita di Tana e i camion che salgono dal porto.",
      ]},
    ],
    pratique: [
      ['Distanza da Tana', 'Circa 150 km sulla RN2, 3-4 ore di strada'],
      ['Durata consigliata', '1 notte minimo, 2 notti per Mantadia'],
      ['Periodo migliore', "Tutto l'anno; da settembre a dicembre spesso più secco e piacevole"],
      ['Ingresso e guida', 'Guida locale obbligatoria. ' + tariffe],
      ['Dove dormire', 'Lodge e hotel nel villaggio di Andasibe, per tutte le tasche'],
    ],
  },

  isalo: {
    sections: [
      { h: 'Uno scenario western nel cuore del Sud', p: [
        "Dopo le risaie degli Altopiani e il vuoto dell'altopiano dell'Horombe, l'Isalo si alza come una muraglia di arenaria scolpita dal vento e dall'acqua. Il massiccio è solcato da canyon profondi dove scorrono ruscelli orlati di palme e pandani: in pochi minuti si passa da un paesaggio desertico a un'oasi.",
        "È uno dei parchi più visitati del Madagascar, e lo merita. Piace a tutti: agli escursionisti per i sentieri, alle famiglie per le piscine naturali, ai fotografi per i colori al tramonto.",
      ]},
      { h: 'Le escursioni da non perdere', p: [
        "La Piscina naturale è il percorso classico: qualche ora di cammino sull'altopiano, poi una vasca d'acqua limpida ai piedi di una piccola cascata, circondata da pandani. Ci si può fare il bagno. Il circuito unisce spesso la Piscina naturale ai belvedere sul massiccio.",
        "Il Canyon dei Lemuri e il Canyon dei Ratti si addentrano in una gola stretta e fresca. Si incontrano spesso lemuri bruni e sifaka di Verreaux che saltano da un albero all'altro. Per i buoni camminatori ci sono circuiti di un'intera giornata e anche trekking di più giorni con notti in tenda.",
        "A fine giornata tutti si ritrovano alla Finestra dell'Isalo, un arco naturale nella roccia attraverso cui si guarda il sole tramontare. Vi porto in auto, non si cammina quasi.",
      ]},
      { h: 'Ranohira, il villaggio base', p: [
        "Il villaggio di Ranohira, sulla RN7, è la porta d'ingresso del parco: qui si paga l'ingresso e si incontra la guida. Gli alloggi vanno dalla piccola camera in affitto al lodge di alto livello, alcuni incastonati tra le rocce con una vista splendida.",
        "Consiglio due notti: una giornata intera nel parco e mezza giornata per la Finestra e il relax. Con una sola notte si vede solo una parte dell'Isalo e si riparte delusi.",
      ]},
      { h: 'Caldo e organizzazione', p: [
        "A metà giornata fa molto caldo, soprattutto da ottobre a marzo. Si parte presto, con molta acqua, cappello e crema solare. Le scarpe da trekking chiuse sono indispensabili, i sentieri sono sassosi. Vi aspetto all'arrivo dell'escursione con acqua fresca.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Sulla RN7, circa 240 km prima di Tulear; ingresso del parco a Ranohira'],
      ['Durata consigliata', '2 notti a Ranohira'],
      ['Periodo migliore', 'Da aprile a novembre; molto caldo da dicembre a marzo'],
      ['Ingresso e guida', 'Guida locale obbligatoria. ' + tariffe],
      ['Da portare', 'Acqua, cappello, crema solare, costume, scarpe chiuse'],
    ],
  },

  'tsingy-de-bemaraha': {
    sections: [
      { h: "Una foresta di pietra patrimonio UNESCO", p: [
        "Gli Tsingy de Bemaraha sono un immenso altopiano calcareo che la pioggia ha scavato per milioni di anni fino a formare guglie taglienti come lame. «Tsingy» significherebbe «dove non si può camminare a piedi nudi». Il sito è patrimonio mondiale dell'UNESCO e, per molti viaggiatori, il momento più intenso del viaggio.",
        "Il villaggio di Bekopaka, sulla riva del fiume Manambolo, è la base per visitare il parco. Ci si ferma almeno due notti per fare i due grandi circuiti senza fretta.",
      ]},
      { h: 'Grandi Tsingy e Piccoli Tsingy', p: [
        "I Grandi Tsingy sono a circa un'ora di pista a nord di Bekopaka. Il percorso è aereo: si avanza con l'imbragatura su passaggi di via ferrata, si salgono scale, si attraversano ponti sospesi sopra i crepacci e si arriva su belvedere che dominano un mare di guglie grigie. Serve una buona forma fisica e non soffrire di vertigini.",
        "I Piccoli Tsingy, vicinissimi al villaggio, sono più accessibili e danno già un'ottima idea del sito. Sono adatti alle famiglie e a chi non vuole la via ferrata. Spesso si aggiunge una discesa in piroga nelle gole del Manambolo, tra falesie e grotte.",
        "Nella foresta secca del parco vivono i sifaka di Decken, tutti bianchi, lemuri bruni e numerosi uccelli.",
      ]},
      { h: "L'accesso: una vera avventura in 4x4", p: [
        "Da Morondava si risale verso nord sulla pista: circa 200 km, una lunga giornata di 8-10 ore. Si attraversa la Tsiribihina in traghetto a Belo-sur-Tsiribihina, poi il Manambolo poco prima di Bekopaka. La pista è polverosa, a volte dissestata: un 4x4 in buono stato con un autista che la conosce è indispensabile.",
        "Si può spezzare il viaggio dormendo vicino alla foresta di Kirindy o a Belo-sur-Tsiribihina. In tutto servono almeno quattro giorni andata e ritorno da Morondava, e una settimana da Tana su strada.",
      ]},
      { h: 'Quando partire?', p: [
        "Il parco è accessibile solo nella stagione secca, in genere da maggio a metà novembre. L'apertura dipende dallo stato della pista dopo la stagione delle piogge: a inizio maggio alcuni circuiti possono essere ancora chiusi e gli hotel di fascia alta a volte aprono più tardi. Da dicembre ad aprile la pista è quasi sempre impraticabile. Ogni anno verifico le date esatte prima di confermare un circuito.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Da Morondava: circa 200 km di pista, 8-10 ore in 4x4, 2 traversate in traghetto'],
      ['Durata consigliata', 'Almeno 4 giorni andata e ritorno da Morondava, di cui 2 notti a Bekopaka'],
      ['Stagione', 'Solo stagione secca, in genere da maggio a metà novembre (da verificare ogni anno)'],
      ['Ingresso e guida', "Guida obbligatoria; l'ingresso agli Tsingy costa più degli altri parchi. " + tariffe],
      ['Da portare', 'Guanti, scarpe chiuse con buona suola, torcia frontale, acqua'],
    ],
  },

  'allee-des-baobabs': {
    sections: [
      { h: "L'immagine del Madagascar", p: [
        "A una ventina di chilometri da Morondava, una pista di terra rossa passa tra una ventina di baobab giganti allineati. Sono Adansonia grandidieri, la specie più maestosa dei baobab malgasci, con tronchi lisci e dritti alti oltre 25 metri. Alcuni avrebbero diversi secoli. Il sito è protetto come monumento naturale.",
        "I baobab sono i sopravvissuti di un'antica foresta fitta, disboscata nel tempo per le coltivazioni. Restano in piedi in mezzo a risaie e campi, il che rende la loro sagoma ancora più forte.",
      ]},
      { h: 'Tramonto o alba?', p: [
        "Il tramonto è il momento più famoso: i tronchi diventano arancioni, il cielo si infiamma dietro gli alberi e i carretti trainati dagli zebù passano sulla pista. Ma è anche il momento in cui ci sono tutti.",
        "Il mio consiglio: tornate all'alba. C'è pochissima gente, la luce è morbida e i riflessi nelle pozze dopo la stagione delle piogge sono magnifici. I fotografi spesso preferiscono il mattino.",
      ]},
      { h: 'Intorno al Viale', p: [
        "A pochi chilometri ci sono i «Baobab innamorati», due tronchi intrecciati legati a una bella leggenda, e il baobab sacro, circondato di offerte, che si visita con rispetto seguendo le indicazioni degli abitanti.",
        "Il Viale è sulla strada per Kirindy e gli Tsingy: spesso lo si visita la prima sera, arrivando a Morondava, e lo si riattraversa ripartendo verso nord. Si abbina bene anche a un giro in piroga nelle mangrovie di Morondava.",
      ]},
      { h: 'Serve un 4x4?', p: [
        "No, il Viale si raggiunge in auto da Morondava con una strada in buono stato e poi qualche chilometro di pista. Il 4x4 diventa indispensabile se si prosegue verso Kirindy, Belo-sur-Tsiribihina o gli Tsingy, e per la grande pista costiera verso Belo-sur-Mer.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Circa 20 km a nord di Morondava, 30-45 minuti'],
      ['Momento ideale', 'Alba (tranquilla) o tramonto (atmosfera)'],
      ['Durata', '1-2 ore sul posto'],
      ['Veicolo', 'Basta un\'auto; 4x4 per proseguire verso Kirindy e gli Tsingy'],
      ['Rispetto', 'Non salire sugli alberi né sulle tombe; chiedere prima di fotografare le persone'],
    ],
  },

  ranomafana: {
    sections: [
      { h: 'La foresta pluviale a due passi dalla RN7', p: [
        "Ranomafana significa «acqua calda» in malgascio, per le sorgenti termali del villaggio. Il parco nazionale protegge una foresta pluviale di montagna, patrimonio mondiale dell'UNESCO insieme alle altre foreste dell'Atsinanana. È stato creato dopo la scoperta, nel 1986, del lemure dorato del bambù, una specie fino ad allora sconosciuta.",
        "Si lascia la RN7 dopo Ambositra e in pochi chilometri il paesaggio cambia completamente: le colline spoglie lasciano il posto a una foresta fitta, torrenti e cascate.",
      ]},
      { h: 'Cosa si vede', p: [
        "Con una guida locale si va alla ricerca dei lemuri del bambù (il dorato e il grande apalemure), del sifaka di Milne-Edwards, dei lemuri dal ventre rosso e dei lemuri bruni. La foresta è anche un paradiso per camaleonti, rane e uccelli.",
        "L'escursione notturna, lungo la strada ai margini del parco, è un grande momento: le guide scovano camaleonti addormentati, gechi dalla coda a foglia quasi invisibili e microcebi che vengono a nutrirsi.",
      ]},
      { h: 'Quanto fermarsi?', p: [
        "Due notti sono l'ideale: si arriva nel pomeriggio per l'escursione notturna, si dedica la mattina seguente al parco e a fine giornata ci si gode le piscine d'acqua calda del villaggio. I circuiti vanno da due ore a una giornata intera, secondo la forma.",
        "Ranomafana è anche una buona base per le piantagioni di tè di Sahambavy e la città alta di Fianarantsoa, a circa due ore di strada.",
      ]},
      { h: 'Preparare la visita', p: [
        "Piove spesso, anche nella stagione secca: portate una giacca impermeabile e scarpe che facciano presa, i sentieri sono scivolosi e ripidi. Nella stagione umida ci sono le sanguisughe: calze alte e pantaloni infilati. Partite presto la mattina, i lemuri sono più attivi.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Deviazione dalla RN7 per la RN25, tra Ambositra e Fianarantsoa'],
      ['Durata consigliata', '2 notti'],
      ['Periodo migliore', 'Da aprile a dicembre; più pioggia da gennaio a marzo'],
      ['Ingresso e guida', 'Guida locale obbligatoria. ' + tariffe],
      ['Da portare', 'Giacca antipioggia, scarpe da trekking, torcia per la notte'],
    ],
  },

  'nosy-be': {
    sections: [
      { h: "L'isola dei profumi", p: [
        "Nosy Be è la grande isola del nord-ovest, nota per le spiagge, le acque calde e il profumo dell'ylang-ylang, i cui fiori servono alla profumeria. È la meta balneare più sviluppata del Madagascar, con hotel per tutte le tasche, e il punto di partenza di molte escursioni in barca.",
        "La maggior parte dei viaggiatori ci arriva in aereo. Con Tripack potete anche andarci su strada da Tana: un vero viaggio di una settimana attraverso l'ovest e il nord, che finisce in barca.",
      ]},
      { h: 'Cosa fare a Nosy Be?', p: [
        "Salire al Mont Passot, il punto più alto dell'isola, per il tramonto sui laghi vulcanici. Visitare le distillerie di ylang-ylang e le piantagioni di vaniglia e pepe. Passeggiare nel parco nazionale di Lokobe, una foresta primaria dove vivono lemuri neri e camaleonti pantera.",
        "Intorno all'isola, le escursioni in barca portano a Nosy Komba, l'isola dei lemuri, a Nosy Tanikely, riserva marina ideale per lo snorkeling con le tartarughe, e a Nosy Iranja con il suo banco di sabbia. A fine anno si avvistano spesso squali balena al largo: informatevi sul posto sulla stagione.",
      ]},
      { h: 'La strada da Tana', p: [
        "Su strada sono circa 1.100 km. Si passa dal parco di Ankarafantsika e dalle sue foreste secche, dalla città portuale di Mahajanga e dal suo circo rosso, poi la RN6 fino ad Ambanja e alla valle del Sambirano, dove cresce il miglior cacao dell'isola. L'auto si ferma al porto di Ankify, da dove una barca veloce raggiunge Hell-Ville in circa 45 minuti.",
        "Una parte della RN6 è molto dissestata: il 4x4 è consigliato e la strada si fa nella stagione secca. Vi lascio alla barca e posso riprendervi al ritorno per proseguire verso Diego-Suarez o rientrare a Tana.",
      ]},
      { h: 'Quanti giorni?', p: [
        "Sull'isola contate almeno quattro o cinque giorni per godervi le spiagge e fare due o tre escursioni in barca. Con la strada da Tana, un viaggio completo sta in due settimane.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Aereo da Tana, oppure strada fino ad Ankify (circa 1.100 km) e poi barca (≈ 45 min)'],
      ['Durata consigliata', "4-5 giorni sull'isola; 5-6 giorni di strada da Tana"],
      ['Periodo migliore', 'Da aprile a dicembre; stagione delle piogge da gennaio a marzo'],
      ['Sul posto', "Il 4x4 resta ad Ankify; sull'isola taxi, scooter e barche"],
      ['Parco di Lokobe', 'Guida obbligatoria. ' + tariffe],
    ],
  },

  morondava: {
    sections: [
      { h: 'La capitale del Menabe', p: [
        "Morondava è una piccola città costiera, calda e tranquilla, affacciata sul canale del Mozambico. È il capoluogo della regione del Menabe e la base di partenza delle più belle escursioni dell'ovest: il Viale dei Baobab, la foresta di Kirindy, gli Tsingy de Bemaraha e, a sud, Belo-sur-Mer.",
        "La città vive di pesca, risicoltura e turismo. Il lungomare, la spiaggia di Nosy Kely e i tramonti sull'oceano ne fanno una tappa piacevole tra due giornate di pista.",
      ]},
      { h: 'Da vedere in città e dintorni', p: [
        "Il Viale dei Baobab, a una ventina di chilometri, al tramonto o all'alba. Le mangrovie, da scoprire in piroga con i pescatori. Il villaggio di pescatori di Betania, dall'altra parte dell'estuario, raggiungibile in piroga. Le tombe sakalava, decorate con sculture, da visitare con rispetto e con una guida.",
        "Più lontano, la foresta di Kirindy (circa 60 km) è il posto migliore del paese per vedere il fossa, e il punto di partenza verso gli Tsingy.",
      ]},
      { h: 'Arrivare a Morondava', p: [
        "Su strada da Tana si scende la RN7 fino ad Antsirabe, poi la RN34 e la RN35 passando per Miandrivazo: circa 650 km, due giorni di strada con una tappa. La strada è asfaltata ma alcuni tratti sono rovinati.",
        "Ci sono anche voli tra Tana e Morondava. Se arrivate in aereo posso venirvi a prendere all'aeroporto di Morondava (il tragitto di avvicinamento del veicolo è allora incluso nel preventivo), oppure lasciarvi lì a fine circuito per evitare il ritorno su strada.",
        "Per gli avventurosi, la grande pista costiera collega Morondava a Tulear passando per Belo-sur-Mer, Morombe e Andavadoaka, in 4x4 e nella stagione secca.",
      ]},
    ],
    pratique: [
      ['Distanza da Tana', 'Circa 650 km, 2 giorni di strada; voli interni possibili'],
      ['Durata consigliata', '2 notti per la città e i baobab; 5-6 giorni con gli Tsingy'],
      ['Periodo migliore', 'Da aprile a novembre; piste difficili nella stagione delle piogge'],
      ['Veicolo', 'Auto fino a Morondava; 4x4 per Kirindy, gli Tsingy e Belo-sur-Mer'],
      ['Vedi anche', 'Pagine Viale dei Baobab, Kirindy, Tsingy de Bemaraha e Belo-sur-Mer'],
    ],
  },

  antsirabe: {
    sections: [
      { h: 'La città termale degli Altopiani', p: [
        "A 1.500 metri di altitudine, Antsirabe è una città dal clima fresco, fondata alla fine dell'Ottocento da missionari norvegesi attirati dalle sue sorgenti termali. I grandi viali, il vecchio hotel delle terme e la stazione le danno un fascino un po' d'altri tempi, e la città è piena di risciò colorati.",
        "È la prima grande tappa della RN7, a circa 170 km da Tana, e il luogo ideale per una prima notte dopo l'arrivo in Madagascar.",
      ]},
      { h: 'Gli artigiani di Antsirabe', p: [
        "Antsirabe è la città dell'ingegno e del riciclo. In risciò si visitano i laboratori dove si fabbricano oggetti in corno di zebù, caramelle artigianali, miniature di biciclette e risciò in latta riciclata, ricami e pietre lavorate.",
        "È il modo migliore per scoprire la città e sostenere le famiglie di artigiani. Contrattate gentilmente il prezzo del risciò prima di salire e lasciate una mancia se il conducente è stato simpatico.",
      ]},
      { h: 'I laghi vulcanici', p: [
        "La regione è vulcanica. Il lago Tritriva, a una ventina di chilometri, è un lago di cratere dalle acque scure circondato da pareti ripide e da leggende di amori impossibili. Il giro a piedi richiede circa un'ora. Il lago Andraikiba, più grande e aperto, si presta a una passeggiata tranquilla.",
        "Il mercato di Antsirabe, molto animato, è anche l'occasione per scoprire frutta, verdura e spezie degli Altopiani.",
      ]},
      { h: 'I miei consigli', p: [
        "Le serate sono fresche, anzi fredde da giugno ad agosto: un pile è indispensabile. Se avete tempo, prevedete due notti per i laghi e gli artigiani senza fretta. Sulla strada da Tana ci fermiamo sempre ad Ambatolampy dai fonditori di alluminio.",
      ]},
    ],
    pratique: [
      ['Distanza da Tana', 'Circa 170 km sulla RN7, 3-4 ore di strada'],
      ['Durata consigliata', '1-2 notti'],
      ['Clima', "Fresco tutto l'anno, freddo la sera da giugno ad agosto"],
      ['Da non perdere', 'Giro degli artigiani in risciò, lago Tritriva'],
      ['Tappa successiva', 'Ambositra (≈ 90 km), poi Ranomafana'],
    ],
  },

  'belo-sur-mer': {
    sections: [
      { h: 'Il villaggio dei maestri d\'ascia', p: [
        "Belo-sur-Mer è un villaggio vezo alla fine di una pista di sabbia, a circa 80 km a sud di Morondava. Sulla spiaggia i carpentieri costruiscono ancora a mano grandi golette di legno, senza progetti, con tecniche tramandate da marinai venuti da lontano due secoli fa. Vedere questi scafi giganti posati sulla sabbia è uno spettacolo unico.",
        "Il villaggio vive al ritmo del mare e delle maree: pesca, saline, cabotaggio. Non ci sono grandi hotel né folla, solo qualche alloggio semplice e un'atmosfera fuori dal tempo.",
      ]},
      { h: 'Cosa fare a Belo-sur-Mer?', p: [
        "Visitare i cantieri navali e chiacchierare con i carpentieri. Passeggiare nelle saline, dove il sale si raccoglie a mano. Partire in piroga verso gli isolotti al largo per lo snorkeling, le spiagge deserte e la pesca con i Vezo. Esplorare la laguna e le mangrovie.",
        "Accanto, il parco nazionale di Kirindy-Mitea protegge foreste secche, baobab, laghi e dune, con lemuri, molti uccelli e paesaggi molto vari.",
      ]},
      { h: 'Arrivarci', p: [
        "Da Morondava servono da quattro a sei ore di pista di sabbia in 4x4, a volte con passaggi delicati secondo le maree e la stagione. Belo-sur-Mer è anche una tappa della grande pista costiera tra Morondava e Tulear, passando per Morombe e Andavadoaka.",
        "È il mio villaggio preferito della costa Ovest. Restate almeno due notti: il viaggio è lungo e il villaggio si scopre lentamente. Per sapere tutto su villaggio, alloggi e attività, consultate il sito visitbelosurmer.com.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Circa 80 km a sud di Morondava, 4-6 ore di pista in 4x4'],
      ['Durata consigliata', 'Almeno 2 notti'],
      ['Periodo migliore', 'Da aprile a novembre (stagione secca)'],
      ['Veicolo', '4x4 obbligatorio'],
      ['Per saperne di più', 'visitbelosurmer.com, il sito dedicato al villaggio'],
    ],
  },

  ifaty: {
    sections: [
      { h: 'La spiaggia dopo la strada', p: [
        "Dopo una settimana sulla RN7, Ifaty e Mangily sono la ricompensa: villaggi di pescatori vezo, spiagge di sabbia bianca e acqua turchese protetta da una barriera corallina. Si trovano a circa un'ora a nord di Tulear, su strada asfaltata.",
        "L'atmosfera è rilassata, con hotel per tutte le tasche, piccoli ristoranti di pesce e piroghe a bilanciere che partono all'alba.",
      ]},
      { h: 'La foresta spinosa di Reniala', p: [
        "Dietro le dune cresce una foresta unica al mondo: la foresta spinosa del sud-ovest. La riserva di Reniala protegge baobab a forma di bottiglia, Didiereaceae irte di spine e moltissime piante adattate alla siccità. Si visita con una guida, meglio di primo mattino, quando gli uccelli sono attivi e il caldo sopportabile.",
        "È anche un ottimo sito di birdwatching, con diverse specie che si vedono solo nel sud-ovest del Madagascar.",
      ]},
      { h: 'Mare e attività', p: [
        "Snorkeling e immersioni sulla barriera, uscite in piroga con i pescatori e, circa da luglio a settembre, osservazione delle megattere che risalgono il canale del Mozambico (la stagione esatta varia, informatevi sul posto). La sera, il tramonto sull'oceano chiude perfettamente la giornata.",
        "Il mare è più piacevole con l'alta marea: i centri immersioni e gli hotel affiggono gli orari delle maree.",
      ]},
      { h: 'Ifaty o Anakao?', p: [
        "Ifaty si raggiunge in auto e offre più scelta di alloggi. Anakao, a sud di Tulear, si raggiunge in barca ed è più selvaggia, con l'isolotto di Nosy Ve. Entrambe sono ottime per finire la RN7; vi consiglio in base ai vostri desideri.",
      ]},
    ],
    pratique: [
      ['Accesso', "Circa un'ora a nord di Tulear, strada asfaltata"],
      ['Durata consigliata', '2-3 notti per riposarsi dopo la RN7'],
      ['Periodo migliore', 'Da aprile a novembre; balene circa da luglio a settembre'],
      ['Da non perdere', 'Foresta di Reniala di primo mattino, snorkeling sulla barriera'],
      ['Ritorno', 'Strada verso Tana o volo da Tulear'],
    ],
  },

  kirindy: {
    sections: [
      { h: 'Il regno del fossa', p: [
        "La foresta di Kirindy è una foresta secca decidua a circa 60 km a nord di Morondava. È gestita da tempo per la ricerca e l'ecoturismo ed è uno dei posti migliori del Madagascar per osservare il fossa, il più grande predatore dell'isola, una specie di grande felino che non lo è.",
        "Il fossa è più facile da vedere nella stagione secca, soprattutto a fine anno, periodo della riproduzione, quando a volte si avvicina alle strutture del sito.",
      ]},
      { h: 'Di giorno e di notte', p: [
        "Di giorno si cammina su sentieri pianeggianti alla ricerca di sifaka di Verreaux, lemuri dalla fronte rossa e numerosi uccelli. Nella stagione secca gli alberi perdono le foglie e la foresta prende tinte dorate; i baobab sono un po' ovunque.",
        "Di notte è un'altra foresta. Si possono vedere il microcebo di Madame Berthe, uno dei primati più piccoli del mondo, lemuri notturni, camaleonti e a volte il ratto saltatore gigante, una specie rara che vive solo in questa regione.",
      ]},
      { h: 'Organizzare la visita', p: [
        "Kirindy è sulla pista per gli Tsingy de Bemaraha: ci si ferma all'andata o al ritorno. L'ideale è dormirci una notte per l'escursione notturna e una camminata la mattina dopo. Gli alloggi sul posto e nei dintorni sono semplici.",
        "La pista da Morondava passa per il Viale dei Baobab. Il 4x4 è vivamente consigliato e l'accesso diventa difficile nella stagione delle piogge.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Circa 60 km a nord di Morondava sulla pista degli Tsingy'],
      ['Durata consigliata', "1 notte per l'escursione notturna"],
      ['Periodo migliore', 'Stagione secca, da aprile a novembre; fossa più visibile a fine anno'],
      ['Veicolo', '4x4 consigliato'],
      ['Visita', 'Guida obbligatoria; tariffe da verificare sul posto'],
    ],
  },
};
