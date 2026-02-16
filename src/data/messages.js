

const openers = [
  "Mon cœur,", "Ma chérie,", "Ma princesse,", "Mon amour,", "Mon tout,", 
  "Toi que j'aime,", "Ma belle,", "Mon trésor,", "Ma vie,"
];

const closers = [
  "Je t'aime.", "Je t'aime plus que tout.", "Tu es ma vie.", "Je suis à toi.", 
  "Bisous mon cœur.", "Courage, je t'aime.", "À tout de suite.", 
  "Je pense fort à toi.", "Ton homme qui t'aime."
];

const contents = {
  lonely: [
    "même si je ne suis pas physiquement là, mon esprit est collé à toi.",
    "ferme les yeux et imagine que je te serre très fort dans mes bras.",
    "cette distance n'est rien comparée à l'amour que j'ai pour toi.",
    "tu me manques aussi terriblement, mais on sera bientôt réunis.",
    "sache que je regarde le même ciel que toi en ce moment.",
    "je compte les secondes avant de te revoir.",
    "tu n'es jamais vraiment seule car je vis dans ton cœur.",
    "imagine ma voix qui te murmure des mots doux.",
    "je suis avec toi, à chaque battement de ton cœur.",
    "si je pouvais, je me téléporterais là tout de suite.",
    "la distance ne fait que renforcer ce que je ressens pour toi.",
    "je t'envoie toute ma force et tout mon amour à travers ces mots.",
    "nous sommes connectés, peu importe les kilomètres.",
    "mon cœur bat au rythme du tien, où que tu sois.",
    "bientôt, je te serrerai dans mes bras pour ne plus te lâcher.",
    "tu es présente dans chacune de mes pensées.",
    "rien ne pourra jamais nous séparer, pas même la distance.",
    "je suis là, tout près, dans tes souvenirs et tes espoirs.",
    "attends-moi, j'arrive toujours vers toi.",
    "tu es mon foyer, peu importe où nous sommes."
  ],
  sad: [
    "ton sourire est la plus belle chose au monde, ne le laisse pas s'éteindre.",
    "je déteste te savoir triste, je voudrais prendre ta peine.",
    "tu es la femme la plus forte que je connaisse, ça va passer.",
    "pleure si tu en as besoin, je recueillerai chaque larme.",
    "demain est un autre jour, et je serai là pour l'illuminer.",
    "rappelle-toi de notre dernier fou rire, accroche-toi à ça.",
    "tu es une merveille, ne laisse pas la tristesse te faire croire le contraire.",
    "je suis là pour t'écouter, tout me raconter.",
    "ta tristesse est passagère, mon amour pour toi est éternel.",
    "respire doucement, je suis ton rocher.",
    "laisse-moi porter ce fardeau pour toi un instant.",
    "cette douleur n'est qu'un nuage, le soleil reviendra vite.",
    "je t'aime plus que les mots ne peuvent le dire.",
    "tu as le droit d'être triste, je t'aime quand même tout autant.",
    "viens te blottir contre moi en pensée.",
    "je te promets que ça ira mieux.",
    "tu n'es pas seule face à ça.",
    "je t'envoie un câlin géant qui guérit tout.",
    "regarde comme tu es courageuse.",
    "je suis ta force quand tu en manques."
  ],
  attention: [
    "tu es absolument magnifique, ne l'oublie jamais.",
    "j'ai une chance incroyable de t'avoir dans ma vie.",
    "tu es la raison de mon bonheur, chaque jour.",
    "je pourrais passer ma vie à te regarder dormir.",
    "rien n'est plus important pour moi que toi.",
    "tu es parfaite, avec tes qualités et tes petits défauts.",
    "je suis fou de toi, depuis le premier jour.",
    "mon monde tourne autour de toi.",
    "tu es l'étoile qui guide ma vie.",
    "je n'ai d'yeux que pour toi ma beauté.",
    "ton rire est ma mélodie préférée.",
    "ta présence est mon plus beau cadeau.",
    "je ne peux pas imaginer ma vie sans toi.",
    "tu es la plus belle personne que je connaisse, à l'intérieur comme à l'extérieur.",
    "mon amour pour toi grandit de seconde en seconde.",
    "tu es mon âme sœur, ma complice, ma tout.",
    "j'aime la façon dont tu me regardes.",
    "tu es mon rêve devenu réalité.",
    "je suis tellement fier d'être ton homme.",
    "chaque moment avec toi est précieux."
  ],
  afraid: [
    "n'aie pas peur, je suis ton bouclier.",
    "rien ne peut t'arriver, je veille sur toi.",
    "je suis ta protection, ton refuge.",
    "respire, tu es en sécurité avec moi.",
    "je suis là, je ne laisserai rien ni personne te faire du mal.",
    "chasse ces mauvaises pensées, je prends le relais.",
    "tu es en sécurité, je te tiens la main.",
    "la peur n'est qu'une ombre, je suis ta lumière.",
    "ferme les yeux, je monte la garde.",
    "je suis à tes côtés, invisible mais puissant.",
    "tu es plus forte que ta peur.",
    "je suis ton havre de paix.",
    "rien n'est plus fort que nous deux.",
    "imagine une bulle de protection autour de toi, c'est mon amour.",
    "je suis le gardien de ton cœur.",
    "laisse ta peur s'envoler, je la chasse.",
    "tu ne crains rien tant que je suis là.",
    "écoute ma voix qui te rassure.",
    "je suis ton calme dans la tempête.",
    "tout va bien se passer, je te le promets."
  ],
  nightmare: [
    "ce n'était qu'un rêve, je suis bien réel et je t'aime.",
    "réveille-toi doucement, je suis là pour chasser les monstres.",
    "tu es en sécurité maintenant, dans la réalité de notre amour.",
    "respire un bon coup, les cauchemars n'ont aucun pouvoir sur nous.",
    "je te serre fort pour que tu te rendormes paisiblement.",
    "pense à nous, à nos moments heureux, et oublie ce mauvais rêve.",
    "je suis ton attrape-rêves, je ne garde que le beau.",
    "rien ne peut t'atteindre, je veille sur ton sommeil.",
    "rendors-toi, je suis là pour veiller sur tes songes.",
    "ce mauvais moment est passé, le soleil va se lever."
  ],
  ugly: [
    "tu es la plus belle femme du monde à mes yeux, ne l'oublie jamais.",
    "ta beauté illumine mes journées, même quand tu ne le vois pas.",
    "je t'aime pour tout ce que tu es, à l'intérieur et à l'extérieur.",
    "tu es magnifique, point final. Ne laisse pas ton miroir te mentir.",
    "chaque détail de ton visage est une œuvre d'art pour moi.",
    "tu es parfaite, exactement comme tu es.",
    "je ne changerais rien chez toi, tu es mon idéal.",
    "ton charme me fait craquer chaque jour un peu plus.",
    "tu es rayonnante, croies-moi.",
    "pour moi, tu es l'incarnation de la beauté."
  ],
  doubt: [
    "nous deux, c'est pour toujours, n'en doute jamais.",
    "mon amour pour toi est solide comme le roc.",
    "on traversera tout ensemble, main dans la main.",
    "tu es ma certitude dans ce monde incertain.",
    "je te choisis toi, encore et encore, chaque jour.",
    "rien ne pourra jamais nous séparer.",
    "notre histoire est la plus belle, et elle ne fait que commencer.",
    "fais-moi confiance, je ne vais nulle part.",
    "tu es ma moitié, mon destin.",
    "je t'aime d'un amour inconditionnel et infini."
  ],
  hug: [
    "je t'envoie un câlin virtuel si fort qu'il te coupera le souffle.",
    "imagine mes bras t'envelopper de chaleur et de douceur.",
    "pose ta tête sur mon épaule, repose-toi.",
    "je te serre contre mon cœur, sens-tu ses battements ?",
    "un câlin infini pour la fille la plus précieuse.",
    "blottis-toi contre moi, tout va bien.",
    "je te couvre de baisers et de tendresse.",
    "ressens ma chaleur, je suis tout près.",
    "je ne te lâche pas, je te tiens fort.",
    "mon amour t'enveloppe comme une couverture chaude."
  ]
};

const connectors = [
  " Et sache que ", " Rappelle-toi que ", " N'oublie pas : ", " Écoute-moi : ", " Je te le promets, "
];

export const getRandomMessage = (category) => {
  const cat = contents[category] ? category : 'attention';

  const opener = openers[Math.floor(Math.random() * openers.length)];
  const content1 = contents[cat][Math.floor(Math.random() * contents[cat].length)];
  
  let content2 = "";
     if (Math.random() > 0.5) {
     const conn = connectors[Math.floor(Math.random() * connectors.length)];
     const mixCategory = Math.random() > 0.5 ? cat : 'attention';
     const extra = contents[mixCategory][Math.floor(Math.random() * contents[mixCategory].length)];
     content2 = conn + extra;
  }

  const closer = closers[Math.floor(Math.random() * closers.length)];

  return `${opener} ${content1}${content2} ${closer}`;
};
