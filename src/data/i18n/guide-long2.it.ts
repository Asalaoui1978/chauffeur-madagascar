import type { GuideLong } from './types';

const mnp = "Guida obbligatoria; tariffe di Madagascar National Parks raddoppiate il 1° novembre 2026, verificare alla biglietteria";

export const guideLong2: Record<string, GuideLong> = {
  antananarivo: {
    sections: [
      { h: 'Una capitale su dodici colline', p: [
        "Antananarivo, che tutti chiamano Tana, sorge su colline tra le quali si stendono risaie, in piena città. Il Rova, l'antico palazzo della regina, domina la città alta; più in basso la città moderna si organizza intorno al viale dell'Indipendenza e al quartiere di Analakely.",
        "Molti viaggiatori ci passano soltanto, ma basta una giornata per coglierne l'anima: la città alta con le case in mattoni, le scalinate animate, i mercati e la vista dal Rova su tutta la pianura.",
      ]},
      { h: 'Le gite intorno a Tana', p: [
        "La collina reale di Ambohimanga, patrimonio UNESCO, è a circa un'ora di strada a nord: è la culla della monarchia merina, con bastioni, porte di pietra e una vista magnifica. A sud, la RN7 comincia con villaggi di artigiani e risaie.",
        "Per una giornata nella natura, il Lemurs' Park, a ovest, permette di vedere i lemuri vicino alla capitale. E per la foresta e l'indri, Andasibe è a circa tre ore sulla RN2.",
      ]},
      { h: 'Spostarsi a Tana', p: [
        "Il traffico è la vera sfida della capitale: attraversare la città nelle ore di punta può richiedere due ore. Parto presto la mattina ed evito il centro nel tardo pomeriggio. La sera ci si sposta in auto piuttosto che a piedi.",
      ]},
    ],
    pratique: [
      ['Aeroporto', "Ivato, da 30 minuti a più di un'ora dal centro secondo il traffico"],
      ['Durata consigliata', '1 giorno per la città, 1 giorno per Ambohimanga'],
      ['Da non perdere', 'Il Rova, la città alta, Ambohimanga'],
      ['Consiglio', 'Partire presto, evitare le ore di punta'],
    ],
  },
  ambatolampy: {
    sections: [
      { h: 'La città delle pentole', p: [
        "Ambatolampy è la prima vera sosta della RN7, a circa 70 km da Tana. Tutta la città vive della fusione dell'alluminio: si recuperano lattine, pezzi di motore e vecchie pentole, si fondono e si cola il metallo in stampi di sabbia per fabbricare le pentole presenti in tutte le cucine del Madagascar.",
        "La visita di un laboratorio è impressionante: tutto si fa a mano, sul fuoco di legna o carbone, con una rapidità sorprendente. Gli artigiani fanno anche piccoli souvenir, zebù, baobab o portachiavi, colati davanti a voi.",
      ]},
      { h: 'Intorno alla città', p: [
        "La zona è coperta di pinete e risaie, con mercati colorati lungo la strada. Una breve pausa qui spezza il tragitto tra Tana e Antsirabe, ed è il posto ideale per comprare il miglior ricordo della RN7: una piccola pentola.",
      ]},
    ],
    pratique: [
      ['Distanza da Tana', 'Circa 70 km sulla RN7, 1 h 30 - 2 h'],
      ['Durata della visita', '30 min - 1 h'],
      ['Da non perdere', 'Un laboratorio di fusione dell\'alluminio'],
      ['Rispetto', 'Chiedere prima di fotografare gli artigiani'],
    ],
  },
  ambositra: {
    sections: [
      { h: 'La capitale del legno', p: [
        "Ambositra è la città dell'intarsio e della scultura su legno. Nella via principale, negozi e laboratori propongono scatole, quadri e oggetti in legno pregiato intarsiato, lavorati a mano. Le facciate scolpite delle case danno il tono fin dall'arrivo.",
        "È una tappa breve tra Antsirabe e Ranomafana, ideale per una notte o un pranzo, con una bella vista sulle risaie a terrazze.",
      ]},
      { h: 'I villaggi zafimaniry', p: [
        "Nelle montagne a est vivono gli Zafimaniry, il cui sapere nella lavorazione del legno è patrimonio immateriale dell'UNESCO: le loro case sono costruite senza un solo chiodo, e ogni porta e finestra è scolpita con motivi geometrici.",
        "Questi villaggi si raggiungono solo a piedi, dopo una strada fino ad Antoetra: contate almeno una giornata, e più giorni per un vero trekking. Vi trovo una guida locale di fiducia.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Sulla RN7, circa 90 km a sud di Antsirabe'],
      ['Durata consigliata', '1 notte; 1-3 giorni in più per gli Zafimaniry'],
      ['Da non perdere', "I laboratori d'intarsio"],
      ['Da portare', 'Buone scarpe per i villaggi zafimaniry'],
    ],
  },
  fianarantsoa: {
    sections: [
      { h: 'La città dove si impara il bene', p: [
        "Fianarantsoa, «dove si impara il bene», è la capitale intellettuale e religiosa del paese, con scuole, chiese e università. La città alta, arroccata su una collina, è uno dei più bei centri storici del Madagascar: vicoli lastricati, case in mattoni con balconi e vista sulle risaie.",
        "Nel tardo pomeriggio la luce sui tetti e sulla pianura è splendida: è il momento di salire a piedi nella città alta.",
      ]},
      { h: 'Tè, vino e treno', p: [
        "Intorno alla città si visitano le piantagioni di tè di Sahambavy, su colline di un verde intenso, e tenute vinicole che producono un vino locale sorprendente. Fianarantsoa è anche il punto di partenza del treno FCE verso Manakara, sulla costa Est, una linea mitica dagli orari irregolari: informatevi appena prima del viaggio.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Sulla RN7, circa 2 ore dopo Ranomafana'],
      ['Durata consigliata', 'Mezza giornata - 1 notte'],
      ['Da non perdere', 'La città alta a fine giornata, il tè di Sahambavy'],
      ['Treno FCE', 'Verso Manakara; orari da verificare sul posto'],
    ],
  },
  ambalavao: {
    sections: [
      { h: 'Carta antemoro e mercato degli zebù', p: [
        "Ambalavao segna la fine degli Altopiani e l'ingresso nel Sud. Qui si fabbrica la carta antemoro, dalla corteccia d'albero, decorata con fiori secchi pressati nella pasta: un artigianato antico che si vede nascere nei laboratori.",
        "La città ospita anche uno dei più grandi mercati di zebù del paese, dove gli allevatori arrivano dopo giorni di cammino. Il giorno di mercato è a metà settimana: verifico io il giorno esatto.",
      ]},
      { h: 'La riserva di Anja', p: [
        "A pochi chilometri a sud, la riserva comunitaria di Anja è gestita dagli abitanti del villaggio. Ai piedi di enormi massi di granito vivono centinaia di lemuri catta, facili da avvicinare, soprattutto la mattina quando si scaldano al sole sulle rocce.",
        "Il biglietto va direttamente al villaggio: un bell'esempio di turismo che va a beneficio degli abitanti.",
      ]},
    ],
    pratique: [
      ['Accesso', "Sulla RN7, circa un'ora a sud di Fianarantsoa"],
      ['Durata', "2-3 ore per Anja, 1 ora per la carta antemoro"],
      ['Momento migliore', 'La mattina per i lemuri catta'],
      ['Anja', 'Riserva comunitaria, guida locale sul posto'],
    ],
  },
  'plateau-horombe': {
    sections: [
      { h: 'Il far west malgascio', p: [
        "Dopo Ihosy la RN7 corre dritta attraverso l'altopiano dell'Horombe, un'immensa savana di erba dorata senza alberi e quasi senza villaggi per decine di chilometri. È uno dei paesaggi più impressionanti del viaggio: un cielo immenso, mandrie di zebù e, in lontananza, le prime creste dell'Isalo.",
        "Si fa il pieno a Ihosy, perché dopo non c'è più niente. Mi fermo sempre per una foto in mezzo al nulla: un vero momento di silenzio e di spazio.",
      ]},
    ],
    pratique: [
      ['Posizione', "Sulla RN7 tra Ihosy e Ranohira (Isalo)"],
      ['Tempo di attraversamento', 'Circa 1 h 30 - 2 h'],
      ['Consiglio', "Fare il pieno e comprare acqua a Ihosy"],
      ['Foto', 'Luce migliore a fine giornata'],
    ],
  },
  ilakaka: {
    sections: [
      { h: 'La città degli zaffiri', p: [
        "Ilakaka quasi non esisteva prima del 1998. La scoperta di zaffiri nel fiume ha scatenato una corsa: decine di migliaia di cercatori sono arrivati da tutto il paese e dall'estero, ed è nata una città lungo la RN7, con i banchi degli acquirenti e le insegne colorate.",
        "Si attraversa Ilakaka tra l'Isalo e Tulear. Ci si può fermare per vedere i pozzi dei minatori e l'atmosfera unica, ma diffidate delle pietre vendute per strada: senza certificato, meglio lasciar perdere.",
      ]},
    ],
    pratique: [
      ['Posizione', 'Sulla RN7, circa 30 minuti dopo Ranohira'],
      ['Durata', 'Sosta di 30 minuti'],
      ['Acquisto di pietre', 'Solo in negozio con certificato'],
      ['Poi', 'Zombitse e Tulear'],
    ],
  },
  zombitse: {
    sections: [
      { h: 'Una foresta di transizione', p: [
        "Il parco nazionale di Zombitse-Vohibasia protegge una foresta rara, di transizione tra la foresta secca dell'Ovest e la foresta spinosa del Sud, proprio accanto alla RN7. È un sito importante per il birdwatching, con specie che non si vedono quasi da nessun'altra parte.",
        "Una camminata di un'ora con una guida basta per vedere sifaka, lepilemuri addormentati nelle cavità degli alberi e bei baobab. È la pausa ideale tra l'Isalo e Tulear.",
      ]},
    ],
    pratique: [
      ['Posizione', 'Accanto alla RN7, tra Ilakaka e Sakaraha'],
      ['Durata', '1-2 ore'],
      ['Momento migliore', 'La mattina, per gli uccelli'],
      ['Ingresso e guida', mnp],
    ],
  },
  tulear: {
    sections: [
      { h: 'La fine della RN7', p: [
        "Tulear (Toliara) è una città calda e luminosa affacciata sul canale del Mozambico. È il capolinea della RN7 e la porta delle spiagge del sud-ovest: Ifaty e Mangily a nord, Anakao a sud in barca. È anche il punto di partenza della grande pista costiera verso Morondava.",
        "In città: il giardino botanico di Antsokay con la sua flora spinosa, il mercato delle conchiglie e i tramonti sull'oceano. La città ha un aeroporto con voli per Tana, comodo per evitare di rifare tutta la RN7.",
      ]},
      { h: 'Preparare il seguito', p: [
        "Se si prosegue verso nord lungo la costa, si prepara qui il 4x4: pieno, acqua, pezzi di ricambio. La pista di sabbia richiede diversi giorni con tappe ad Andavadoaka, Morombe e Belo-sur-Mer, solo nella stagione secca.",
      ]},
    ],
    pratique: [
      ['Distanza da Tana', 'Circa 930 km sulla RN7'],
      ['Durata consigliata', '1 notte prima delle spiagge o della pista'],
      ['Da non perdere', 'Giardino di Antsokay, tramonto'],
      ['Ritorno', 'Voli Tulear-Tana possibili'],
    ],
  },
  anakao: {
    sections: [
      { h: 'Un villaggio vezo in riva al mare', p: [
        "Anakao è un villaggio di pescatori vezo a sud di Tulear, raggiungibile in barca. Il ritmo rallenta subito: una spiaggia immensa, piroghe a bilanciere e alloggi semplici o di charme davanti all'oceano.",
        "Di fronte, l'isolotto di Nosy Ve è un sito di nidificazione dei fetonti dalla coda rossa, magnifici uccelli marini, e un buon posto per lo snorkeling. Si può anche uscire in piroga con i pescatori o esplorare la costa fino a Saint-Augustin.",
      ]},
      { h: 'Arrivarci', p: [
        "La barca parte dal porto di Tulear; la traversata dura circa un'ora secondo il mare. Vi lascio al porto e vi riprendo al ritorno: niente auto durante i giorni di spiaggia.",
      ]},
    ],
    pratique: [
      ['Accesso', "Barca da Tulear, circa un'ora"],
      ['Durata consigliata', '2-3 notti'],
      ['Da non perdere', 'Nosy Ve e i suoi uccelli marini'],
      ['Veicolo', 'Il 4x4 resta a Tulear'],
    ],
  },
  andavadoaka: {
    sections: [
      { h: 'La fine del mondo', p: [
        "Andavadoaka è un villaggio vezo isolato sulla pista di sabbia tra Tulear e Morombe. Lagune turchesi, barriere coralline, baobab e quasi nessun turista: è una delle tappe più belle della costa Ovest. Il villaggio è noto per la tutela del mare gestita dalle comunità.",
        "Ci si viene per la calma, le immersioni e lo snorkeling, le uscite in piroga e i tramonti sull'oceano.",
      ]},
      { h: 'La pista', p: [
        "La pista da Tulear è lunga e sabbiosa: si parte all'alba, solo in 4x4 e nella stagione secca. Andavadoaka è una tappa naturale della grande traversata costiera Tulear-Morondava.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Pista di sabbia da Tulear, una lunga giornata in 4x4'],
      ['Durata consigliata', '2 notti'],
      ['Stagione', 'Da aprile a novembre'],
      ['Veicolo', '4x4 obbligatorio'],
    ],
  },
  morombe: {
    sections: [
      { h: 'Tappa prima del Mangoky', p: [
        "Morombe è l'ultima vera città prima della grande traversata verso nord. Piccola città costiera con i suoi dhow e il lungomare, permette di rifornirsi e riposarsi tra due giornate di pista.",
        "Subito dopo bisogna attraversare il Mangoky, uno dei fiumi più grandi dell'isola. La traversata dipende dal livello dell'acqua e dalla stagione: verifico sempre il giorno prima con i traghettatori. Intorno alla città, belle foreste di baobab meritano una sosta.",
      ]},
    ],
    pratique: [
      ['Posizione', 'Sulla pista costiera tra Andavadoaka e Belo-sur-Mer'],
      ['Durata consigliata', '1 notte'],
      ['Punto chiave', 'Traversata del Mangoky, da verificare il giorno prima'],
      ['Veicolo', '4x4 obbligatorio'],
    ],
  },
  'belo-sur-tsiribihina': {
    sections: [
      { h: 'Il passaggio del fiume', p: [
        "Belo-sur-Tsiribihina è la tappa obbligata sulla strada degli Tsingy. Qui il 4x4 sale su un traghetto per attraversare l'ampio fiume Tsiribihina tra le piroghe: un momento d'avventura che resta impresso a tutti.",
        "È anche il punto d'arrivo delle discese del fiume in piroga o chiatta da Miandrivazo, un altro modo originale di raggiungere l'Ovest. Il traghetto ha i suoi orari e i suoi capricci: teniamo margine e pranziamo al villaggio.",
      ]},
    ],
    pratique: [
      ['Posizione', 'Sulla pista Morondava-Tsingy, circa 100 km a nord di Morondava'],
      ['Traversata', 'Traghetto sulla Tsiribihina'],
      ['Stagione', 'Stagione secca per la pista'],
      ['Veicolo', '4x4 obbligatorio'],
    ],
  },
  mananjary: {
    sections: [
      { h: 'La costa Est e il canale', p: [
        "Mananjary è una città della costa Est, sull'oceano Indiano e sul canale delle Pangalanes. È la terra degli Antambahoaka, famosa per il Sambatra, una grande cerimonia collettiva di circoncisione che si tiene circa ogni sette anni e riunisce migliaia di persone.",
        "Ci si arriva scendendo da Ranomafana per la strada dell'Est. La città offre belle passeggiate lungo la spiaggia (il bagno è spesso pericoloso per le correnti) e sul canale in piroga.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Su strada da Ranomafana'],
      ['Durata consigliata', '1 notte'],
      ['Da non perdere', 'Un giro in piroga sulle Pangalanes'],
      ['Mare', 'Bagno spesso pericoloso (correnti)'],
    ],
  },
  'canal-des-pangalanes': {
    sections: [
      { h: "Una via d'acqua di oltre 600 km", p: [
        "Il canale delle Pangalanes costeggia la costa Est del Madagascar per centinaia di chilometri, collegando laghi, lagune e fiumi con tratti scavati a mano. I villaggi di pescatori si susseguono sulle sue rive, tra palme da cocco, ravinala e piroghe.",
        "Navigare sul canale significa scoprire la vita della costa Est al ritmo dell'acqua: pesca, trasporto merci, bambini che fanno il bagno. Il paesaggio è molto diverso da quello degli Altopiani e del Sud.",
      ]},
      { h: 'Come scoprirlo', p: [
        "Da Manakara o Mananjary si fa un giro in piroga di mezza giornata o di un giorno intero. Più a nord, alcuni lodge sul canale permettono di passare una o due notti in tranquillità. Vi consiglio secondo il vostro itinerario.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Da Manakara, Mananjary o dalla zona di Tamatave'],
      ['Durata', 'Mezza giornata - 2 notti'],
      ['Periodo migliore', 'Da aprile a dicembre; più pioggia da gennaio a marzo'],
      ['Attività', 'Piroga con un piroghiere locale'],
    ],
  },
  manakara: {
    sections: [
      { h: 'Capolinea del treno e della costa Est', p: [
        "Manakara è la città d'arrivo del treno FCE da Fianarantsoa e una tappa piacevole della costa Est. Il lungomare battuto dalle onde dell'oceano Indiano e la foce dove il canale delle Pangalanes incontra il mare la rendono molto fotogenica.",
        "Si fanno giri in piroga sul canale, si visitano i villaggi di pescatori e le piantagioni di spezie e frutta dei dintorni. Il bagno in mare è pericoloso, ma il canale offre momenti di calma.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Su strada (RN25 e RN12) o con il treno FCE da Fianarantsoa'],
      ['Durata consigliata', '1-2 notti'],
      ['Da non perdere', 'Il canale delle Pangalanes in piroga'],
      ['Mare', 'Bagno pericoloso'],
    ],
  },
  ankarafantsika: {
    sections: [
      { h: 'La foresta secca del Nord-Ovest', p: [
        "Il parco nazionale di Ankarafantsika protegge una grande foresta secca lungo la RN4, sulla strada per Mahajanga. Si vedono facilmente i sifaka di Coquerel, con il loro mantello bianco e marrone, lemuri bruni, molti uccelli e, di notte, diverse specie di microcebi.",
        "Il lago Ravelobe, nel cuore del parco, ospita coccodrilli e attira gli uccelli. I sentieri sono pianeggianti e facili, ideali per le famiglie.",
      ]},
      { h: 'Una tappa sulla strada del Nord', p: [
        "Ankarafantsika è la prima grande tappa sulla strada da Tana a Mahajanga e Nosy Be. Una notte sul posto permette l'escursione notturna e una camminata la mattina dopo, quando il caldo è ancora sopportabile.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Sulla RN4, a circa 450 km da Tana'],
      ['Durata consigliata', '1 notte'],
      ['Periodo migliore', 'Da aprile a novembre'],
      ['Ingresso e guida', mnp],
    ],
  },
  mahajanga: {
    sections: [
      { h: 'La città portuale del Nord-Ovest', p: [
        "Mahajanga, o Majunga, è una città portuale calda e cosmopolita sul canale del Mozambico. Il suo enorme baobab, piantato in mezzo a una rotonda vicino al lungomare, ne è il simbolo. La sera tutti si ritrovano sulla passeggiata a mare per il tramonto e gli spiedini.",
        "La città ha una lunga storia di commerci con l'Africa orientale, l'India e il mondo arabo, che si legge nei vecchi quartieri e nelle porte scolpite.",
      ]},
      { h: 'Il Circo Rosso', p: [
        "A una quindicina di chilometri, il Cirque Rouge è un anfiteatro di falesie erose dai colori rosso, ocra e bianco, con camini delle fate. Si visita nel tardo pomeriggio, quando la luce accende i colori, e si può scendere fino alla spiaggia.",
      ]},
    ],
    pratique: [
      ['Accesso', 'Sulla RN4 da Tana (circa 560 km) o volo interno'],
      ['Durata consigliata', '1-2 notti'],
      ['Da non perdere', 'Il Cirque Rouge a fine giornata, il lungomare'],
      ['Poi', 'Strada verso Antsohihy, Ambanja e Nosy Be'],
    ],
  },
  antsohihy: {
    sections: [
      { h: 'Una tappa sulla RN6', p: [
        "Antsohihy è una piccola città in fondo a una baia, sulla RN6 verso nord. È una tappa di transito sulla strada per Nosy Be, utile per spezzare un lungo tragitto e riposarsi.",
        "La strada intorno ad Antsohihy può essere molto dissestata secondo gli anni: è qui che il 4x4 e l'esperienza dell'autista fanno la differenza. Si parte presto per viaggiare di giorno.",
      ]},
    ],
    pratique: [
      ['Posizione', 'Sulla strada Mahajanga-Ambanja (RN6)'],
      ['Durata', '1 notte di transito'],
      ['Strada', 'Tratti dissestati, 4x4 consigliato'],
      ['Stagione', 'Stagione secca consigliata'],
    ],
  },
  ambanja: {
    sections: [
      { h: 'La valle del cacao', p: [
        "Ambanja è la porta della valle del Sambirano, dove crescono alcuni dei migliori cacao del mondo, oltre a vaniglia, pepe e ylang-ylang. Visitare una piantagione, vedere i frutti sugli alberi e assaggiare le fave fermentate è una bella scoperta prima di arrivare a Nosy Be.",
        "A pochi chilometri, il porto di Ankify è il punto d'imbarco per Nosy Be. Ci si può anche dormire davanti al mare, con vista sulle isole.",
      ]},
    ],
    pratique: [
      ['Posizione', 'Sulla RN6, a circa 20 km dal porto di Ankify'],
      ['Durata', '1 notte o mezza giornata'],
      ['Da non perdere', 'Una piantagione di cacao del Sambirano'],
      ['Poi', 'Barca Ankify-Nosy Be (≈ 45 min)'],
    ],
  },
};
