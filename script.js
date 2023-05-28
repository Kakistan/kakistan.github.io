var sources = [
    // Tier 1
    { name: 'David Ornstein', type: 'journalist', tier: 1, specialty: 'Global', link: 'David_Ornstein' },
    { name: 'Henry Winter', type: 'journalist', tier: 1, specialty: 'Premier League', link: 'henrywinter' },
    { name: 'Simon Stone', type: 'journalist', tier: 1, specialty: 'Premier League', link: 'sistoney67' },
    { name: 'Matt Hughes', type: 'journalist', tier: 1, specialty: 'Premier League', link: 'MattHughesDM' },
    { name: 'Mike McGrath', type: 'journalist', tier: 1, specialty: 'Premier League', link: 'mcgrathmike' },
    { name: 'John Percy', type: 'journalist', tier: 1, specialty: 'Premier League', link: 'JPercyTelegraph' },
    { name: 'Sami Mokbel', type: 'journalist', tier: 1, specialty: 'Premier League', link: 'SamiMokbel81_DM' },
    { name: 'Paul Joyce', type: 'journalist', tier: 1, specialty: 'Everton/Liverpool', link: '_pauljoyce' },
    { name: 'Ahmed Shooble', type: 'journalist', tier: 1, specialty: 'Bournemouth/Fulham', link: 'AhmedShooble' },
    { name: 'Charles Watts', type: 'journalist', tier: 1, specialty: 'Arsenal', link: 'charles_watts' },
    { name: 'Mark McAdam', type: 'journalist', tier: 1, specialty: 'Bournemouth', link: 'markmcadamtv' },
    { name: 'Kris Temple', type: 'journalist', tier: 1, specialty: 'Bournemouth', link: 'jaydmharris' },
    { name: 'Jay Harris', type: 'journalist', tier: 1, specialty: 'Brentford', link: 'kristemple' },
    { name: 'Andy Naylor', type: 'journalist', tier: 1, specialty: 'Brighton', link: 'AndyNaylorBHAFC' },
    { name: 'Charlie Parker-Turner', type: 'journalist', tier: 1, specialty: 'Brighton', link: 'CParkerTurner' },
    { name: 'Andy Jones', type: 'journalist', tier: 1, specialty: 'Burnley', link: 'adjones_journo' },
    { name: 'Matt Law', type: 'journalist', tier: 1, specialty: 'Chelsea', link: 'Matt_Law_DT' },
    { name: 'Simon Johnson', type: 'journalist', tier: 1, specialty: 'Chelsea', link: 'SJohnsonSport' },
    { name: 'Matt Woosnam', type: 'journalist', tier: 1, specialty: 'Crystal Palace', link: 'MattWoosie' },
    { name: 'Sam Lee', type: 'journalist', tier: 1, specialty: 'Man City', link: 'SamLee' },
    { name: 'Jack Gaughan', type: 'journalist', tier: 1, specialty: 'Man City', link: 'Jack_Gaughan' },
    { name: 'Laurie Whitwell', type: 'journalist', tier: 1, specialty: 'Man Utd', link: 'lauriewhitwell' },
    { name: 'George Caulkin', type: 'journalist', tier: 1, specialty: 'Newcastle', link: 'GeorgeCaulkin' },
    { name: 'Jacob Whitehead', type: 'journalist', tier: 1, specialty: 'Newcastle', link: 'jwhitey98' },
    { name: 'Paul Taylor', type: 'journalist', tier: 1, specialty: 'Nottingham Forest', link: 'nottmtails' },
    { name: 'Nathan Hemmingham', type: 'journalist', tier: 1, specialty: 'Sheffield United', link: 'NathanH79' },
    { name: 'Alasdair Gold', type: 'journalist', tier: 1, specialty: 'Tottenham', link: 'AlasdairGold' },
    { name: 'Dan Kilpatrick', type: 'journalist', tier: 1, specialty: 'Tottenham', link: 'Dan_KP' },
    { name: 'Roshane Thomas', type: 'journalist', tier: 1, specialty: 'West Ham', link: 'RoshaneSport' },
    { name: 'Mohamed Bouhafsi', type: 'journalist', tier: 1, specialty: 'France', link: 'mohamedbouhafsi' },
    { name: 'Mike Verweij', type: 'journalist', tier: 1, specialty: 'Netherlands', link: 'MikeVerweij' },
    { name: 'Jose Luis Sanchez', type: 'journalist', tier: 1, specialty: 'Real Madrid', link: 'JLSanchez78' },
    { name: 'Phil Hay', type: 'journalist', tier: 1, specialty: 'Leeds', link: 'PhilHay_' },
    { name: 'Graham Smyth', type: 'journalist', tier: 1, specialty: 'Leeds', link: 'GrahamSmyth' },
    { name: 'BBC', type: 'media', tier: 1, link: 'BBCSport' },
    { name: 'The Athletic', type: 'media', tier: 1, link: 'TheAthleticFC' },
    // Tier 2
    { name: 'Fabrizio Romano', type: 'journalist', tier: 2, specialty: 'Global', link: 'FabrizioRomano' },
    { name: 'Alex Crook', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'alex_crook' },
    { name: 'Ryan Taylor', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'RyanTaylorSport' },
    { name: 'Dominic King', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'DominicKing_DM' },
    { name: 'Daniel Taylor', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'DTathletic' },
    { name: 'Tom Collomosse', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'TomCollomosse' },
    { name: 'Matt Maher', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'mjmarr_star' },
    { name: 'Pete O\'Rourke', type: 'journalist', tier: 2, specialty: 'Premier League', link: 'SportsPeteO' },
    { name: 'Jacob Steinberg', type: 'journalist', tier: 2, specialty: 'Chelsea/West Ham', link: 'JacobSteinberg' },
    { name: 'Simon Collings', type: 'journalist', tier: 2, specialty: 'Arsenal', link: 'sr_collings' },
    { name: 'Charlie Haffenden', type: 'journalist', tier: 2, specialty: 'Brighton', link: 'JournoHaff' },
    { name: 'Nizaar Kinsella', type: 'journalist', tier: 2, specialty: 'Chelsea', link: 'NizaarKinsella' },
    { name: 'Liam Twomey', type: 'journalist', tier: 2, specialty: 'Chelsea', link: 'liam_twomey' },
    { name: 'Adam Newson', type: 'journalist', tier: 2, specialty: 'Chelsea', link: 'AdamNewson' },
    { name: 'Ed Aarons', type: 'journalist', tier: 2, specialty: 'Crystal Palace', link: 'ed_aarons' },
    { name: 'The Bobble', type: 'journalist', tier: 2, specialty: 'Everton', link: 'ElBobble' },
    { name: 'Patrick Boyland', type: 'journalist', tier: 2, specialty: 'Everton', link: 'Paddy_Boyland' },
    { name: 'Neil Jones', type: 'journalist', tier: 2, specialty: 'Liverpool', link: 'neiljonesgoal' },
    { name: 'James Pearce', type: 'journalist', tier: 2, specialty: 'Liverpool', link: 'JamesPearceLFC' },
    { name: 'Dan Sheldon', type: 'journalist', tier: 2, specialty: 'Man City/Man Utd', link: 'dansheldonsport' },
    { name: 'Mark Critchley', type: 'journalist', tier: 2, specialty: 'Man City/Man Utd', link: 'mjcritchley' },
    { name: 'Simon Mullock', type: 'journalist', tier: 2, specialty: 'Man City', link: 'MullockSMirror' },
    { name: 'Simon Bajkowski', type: 'journalist', tier: 2, specialty: 'Man City', link: 'spbajko' },
    { name: 'Samuel Luckhurst', type: 'journalist', tier: 2, specialty: 'Man Utd', link: 'samuelluckhurst' },
    { name: 'James Ducker', type: 'journalist', tier: 2, specialty: 'Man Utd', link: 'TelegraphDucker' },
    { name: 'Chris Waugh', type: 'journalist', tier: 2, specialty: 'Newcastle', link: 'ChrisDHWaugh' },
    { name: 'Craig Hope', type: 'journalist', tier: 2, specialty: 'Newcastle', link: 'CraigHope_DM' },
    { name: 'Keith Downie', type: 'journalist', tier: 2, specialty: 'Newcastle', link: 'SkySports_Keith' },
    { name: 'Charlie Eccleshare', type: 'journalist', tier: 2, specialty: 'Tottenham', link: 'CDEccleshare' },
    { name: 'Jack Pitt-Brooke', type: 'journalist', tier: 2, specialty: 'Tottenham', link: 'JackPittBrooke' },
    { name: 'Liam Keen', type: 'journalist', tier: 2, specialty: 'Wolves', link: 'LiamKeen_Star' },
    { name: 'Steve Madeley', type: 'journalist', tier: 2, specialty: 'Wolves', link: 'SteveMadeley78' },
    { name: 'Stephen McGowan', type: 'journalist', tier: 2, specialty: 'Scotland', link: 'mcgowan_stephen' },
    { name: 'Matteo Moretto', type: 'journalist', tier: 2, specialty: 'Spain', link: 'MatteMoretto' },
    { name: 'Edu Polo', type: 'journalist', tier: 2, specialty: 'Spain', link: 'EduPolo' },    
    { name: 'Christian Falk', type: 'journalist', tier: 2, specialty: 'Bayern', link: 'cfbayern' },
    { name: 'Lee Sobot', type: 'journalist', tier: 2, specialty: 'Leeds', link: 'LeeSobotYEP' },
    { name: 'Beren Cross', type: 'journalist', tier: 2, specialty: 'Leeds', link: 'BerenCross' },
    { name: 'Joe Donnohue', type: 'journalist', tier: 2, specialty: 'Leeds', link: 'JoeDonnohue' },
    { name: 'The Times', type: 'media', tier: 2, link: 'TimesSport' },
    { name: 'COPE', type: 'media', tier: 2, link: 'COPE' },
    { name: 'BILD', type: 'media', tier: 2, link: 'BILD_Sport' },   
    // Tier 3
    { name: 'Santi Aouna', type: 'journalist', tier: 3, specialty: 'Global', link: 'Santi_J_FM' },
    { name: 'Mark Ogden', type: 'journalist', tier: 3, specialty: 'Premier League', link: 'MarkOgden_' },
    { name: 'FPLVillan', type: 'journalist', tier: 3, specialty: 'Aston Villa', link: 'FPLVillan' },
    { name: 'Gerard Romero', type: 'journalist', tier: 3, specialty: 'Barcelona', link: 'gerardromero' },
    { name: 'Gianluca Di Marzio', type: 'journalist', tier: 3, specialty: 'Italy', link: 'DiMarzio' },
    { name: 'The Independent', type: 'media', tier: 3, link: 'IndySport' },
    { name: 'Sky Sports', type: 'media', tier: 3, link: 'SkyFootball' },
    { name: 'The Guardian', type: 'media', tier: 3, link: 'guardian_sport' },
    { name: 'The Telegraph', type: 'media', tier: 3, link: 'TelegraphSport' },
    // Tier 4
    { name: 'Pedro Almeida', type: 'shitposter', tier: 4, link: 'pedrogva6' },
    { name: 'Nicolo Schira', type: 'shitposter', tier: 4, link: 'NicoSchira' },
    { name: 'Indykaila', type: 'shitposter', tier: 4, link: 'indykaila' },
    { name: 'Owen O\'Brien', type: 'shitposter', tier: 4, link: 'SportOwenO' },
    { name: 'Miguel Delaney', type: 'shitposter', tier: 4, link: 'MiguelDelaney' },
    { name: 'Julien Laurens', type: 'shitposter', tier: 4, link: 'LaurensJulien' },
    { name: 'Daily Mail', type: 'media', tier: 4, link: 'MailSport' },
    { name: 'The Sun', type: 'media', tier: 4, link: 'TheSunFootball' },
    { name: 'Daily Mirror', type: 'media', tier: 4, link: 'MirrorFootball' },
    { name: 'Caught Offside', type: 'media', tier: 4, link: 'caughtoffside' },
    { name: '90min', type: 'media', tier: 4, link: '90min_Football' },
    { name: 'SportWitness', type: 'media', tier: 4, link: 'Sport_Witness' },
    { name: 'SPORT', type: 'media', tier: 4, link: 'sport' },
    { name: 'ESPN', type: 'media', tier: 4, link: 'ESPNFC' },
    { name: 'Canal+', type: 'media', tier: 4, link: 'CANALPLUS_SPORT' },
    { name: 'Metro', type: 'media', tier: 4, link: 'Metro_Sport' },
    { name: 'Mundo Deportivo', type: 'media', tier: 4, link: 'mundodeportivo' },
    { name: 'Marca', type: 'media', tier: 4, link: 'marca' },
    { name: 'Daily Express', type: 'media', tier: 4, link: 'DExpress_Sport' },
    { name: 'Daily Star', type: 'media', tier: 4, link: 'DailyStar_Sport' },
];

sources.forEach(source => {
    document.querySelector(`.tier-${source.tier} .tier-content`).appendChild(
        document.createRange().createContextualFragment(
            `<a class="source ${source.type === 'journalist' ? 'journalist' : source.type === 'media' ? 'media' : 'shitposter'}" href="https://twitter.com/${source.link}" target="_blank">
            ${source.type == 'journalist' ? `${source.name} <span class="specialty">(${source.specialty})</span>` : source.name}
            </a>`
        )
    );
})

document.querySelectorAll('.tier-content').forEach(node => {
    const element = node.querySelector('.media, .aggregator');
    if (element && element.classList.contains('media')) {
        node.insertBefore(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
    else if (element && element.classList.contains('aggregator')) {
        node.appendChild(document.createRange().createContextualFragment('<div class="flex-break"></div>'), element);
    }
})