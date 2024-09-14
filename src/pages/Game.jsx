import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "../styles/Game.css";


const Game = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Hook to navigate programmatically

    // Parse query parameters from the URL
    const params = new URLSearchParams(location.search);
    const gameType = params.get('Game');

    
    const neverHaveIEverStatements = useMemo(() =>[
        "Never have I ever \nhad sex with an object",
        "Never have I ever \nmade out with someone the same day I met them",
        "Never have I ever \nstolen cigarettes and / or alcohol",
        "Never have I ever \nbeen a victim of wardrobe malfunction",
        "Never have I ever \neaten whipped cream off somebody",
        "Never have I ever \nworn the same underwear for two straight days",
        "Never have I ever \nslept in the middle of having sex",
        "Never have I ever \nregretted helping someone",
        "Never have I ever \nswallowed a chewing gum",
        "Never have I ever \nslept while sexting",
        "Never have I ever \npeed in a bottle",
        "Never have I ever \nbeen caught while masturbating",
        "Never have I ever \nhad sex on the roof",
        "Never have I ever \nused a condom for something other than sex",
        "Never have I ever \ngot aroused by any food item",
        "Never have I ever \nbeen attracted to a uniformed person",
        "Never have I ever \nlied to someone about their appearance",
        "Never have I ever \nwatched porn on TV in the living room",
        "Never have I ever \nbeen satisfied after a haircut",
        "Never have I ever \nresponded to a late booty call",
        "Never have I ever \ndated someone famous",
        "Never have I ever \npeeked at someone else while they were changing",
        "Never have I ever \nhad phone sex",
        "Never have I ever \nmade a kid cry purposely",
        "Never have I ever \ncried while having wax",
        "Never have I ever \ncheated on someone",
        "Never have I ever \nmade an excuse to break up with someone/broken up with someone virtually",
        "Never have I ever \nseen Game of Thrones for the sex scenes",
        "Never have I ever \nhad a hit-and-run accident",
        "Never have I ever \nbeen turned on by feet",
        "Never have I ever \nbribed a government employee/official",
        "Never have I ever \nhidden something I broke",
        "Never have I ever \nlied about an injury",
        "Never have I ever \npretended to like someone just to get work done",
        "Never have I ever \npretended to call someone by mistake",
        "Never have I ever \nbroken school property",
        "Never have I ever \nasked my partner to wash up before sex",
        "Never have I ever \nkissed a person of the same gender on the lips",
        "Never have I ever \ndone shit on a plane/boat/train/bus",
        "Never have I ever \nread an adult magazine",
        "Never have I ever \nused a pet to impress someone",
        "Never have I ever \nused sex toys",
        "Never have I ever \nrun away from home",
        "Never have I ever \nfinished a book in less than a day",
        "Never have I ever \nhurt myself during sex"
    ],[]);

    const mostLikelyToStatements = useMemo(() => [
        "Who is most likely to \nhave the biggest porn collection?",
        "Who is most likely to \nforget their password?",
        "Who is most likely to \nhave STDs?",
        "Who is most likely to \ndate two guys/girls at once?",
        "Who is most likely to \nget laid tonight?",
        "Who is most likely to \nhave a one-night stand?",
        "Who is most likely to \ncrash their vehicle/get into an accident?",
        "Who is most likely to \nmake an Onlyfans account?",
        "Who is most likely to \nleave this party first?",
        "Who is most likely to \ndonate sperm for money?",
        "Who is most likely to \nget arrested for urinating in public?",
        "Who is most likely to \nmoan the loudest during sex?",
        "Who is most likely to \nmake a sex tape?",
        "Who is most likely to \npass out tonight?",
        "Who is most likely to \nsleep with someone on the first date?",
        "Who is most likely to \ndiscover new places first in the group?",
        "Who is most likely to \nbe a future influencer/content creator?",
        "Who is most likely to \nown a bar?",
        "Who is most likely to \nmurder someone?",
        "Who is most likely to \nget bankrupt?",
        "Who is most likely to \ngo to a strip club?",
        "Who is most likely to \nfall in love with every person they date?",
        "Who is most likely to \ncomplain about every small thing in their life?",
        "Who is most likely to \nskip bathing for a week?",
        "Who is most likely to \ntry BDSM in bed?",
        "Who is most likely to \npuke after drinking?",
        "Who is most likely to \nhave a foot fetish?",
        "Who is most likely to \ngive an honest answer for every question asked?",
        "Who is most likely to \ncry during an emotional scene/moment?",
        "Who is most likely to \ndrunk dial/drunk text their boss?",
        "Who is most likely to \nhit on a married man/woman?",
        "Who is most likely to \ncheat on their partner?",
        "Who is most likely to \nmove on the next day after a breakup?",
        "Who is most likely to \nforget the name of the person they hooked up with?",
        "Who is most likely to \nend up in jail?",
        "Who is most likely to \nmake the first move while approaching someone in the club?",
        "Who is most likely to \nforget someone's birthday?",
        "Who is most likely to \nhook up with their boss?",
        "Who is most likely to \nflirt their way out of a ticket?",
        "Who is most likely to \ndance crazily the whole night without having a sip of drink?",
        "Who is most likely to \nget an embarrassing tattoo?",
        "Who is most likely to \nhave a corny tinder profile?",
        "Who is most likely to \nget caught hooking up with someone in public?",
        "Who is most likely to \ntry a threesome?",
        "Who is most likely to \nget caught cheating?",
        "Who is most likely to \nfall asleep during sex?",
        "Who is most likely to \nhave a revolutionary idea for a startup?"
    ],[]);

    const thisOrThatQuestions = useMemo(() => [
        { this: "A third eye?", that: "A third arm?" },
        { this: "A time machine?", that: "A teleportation device?" },
        { this: "Give up sex?", that: "Give up showering?" },
        { this: "Lights on?", that: "Lights off?" },
        { this: "Pet dinosaur?", that: "Pet alien?" },
        { this: "Public proposal?", that: "Private proposal?" },
        { this: "Live in a with wifi?", that: "Live in a mansion without wifi?" },
        { this: "Empty inbox", that: "Full inbox?" },
        { this: "No lube?", that: "Yes lube?" },
        { this: "Drive yourself?", that: "Get driven around?" },
        { this: "A magic carpet that flies?", that: "A see-through submarine?" },
        { this: "Night out with friends?", that: "Night in with Netflix?" },
        { this: "Whiskey as mouthwash?", that: "Chilli sauce as hand sanitizer?" },
        { this: "Breathe underwater?", that: "Walk on clouds?" },
        { this: "Watch the movie?", that: "Read the book?" },
        { this: "Watch porn every night?", that: "Never watch porn again?" },
        { this: "Be a famous villain?", that: "Be an unknown superhero?" },
        { this: "Surprise weekend getaway?", that: "Planned vacation together?" },
        { this: "Eat a live spider?", that: "Put a snake down your pants?" },
        { this: "Walk barefoot on hot coals?", that: "Skinny dip in the arctic?" },
        { this: "Shave your head?", that: "Dye your hair neon green?" },
        { this: "Eat a raw onion like an apple?", that: "Drink a glass of vinegar?" },
        { this: "Have permanent hiccups?", that: "Have an itch that you cannot scratch?" },
        { this: "Get catfished by someone?", that: "Get scammed by someone for money?" },
        { this: "Have the ability to control dreams?", that: "Have the ability to read minds?" },
        { this: "Skinny dipping?", that: "Streaking?" },
        { this: "A personal clone?", that: "A personal robot?" },
        { this: "Be a vampire?", that: "Be a werewolf?" },
        { this: "Be able to freeze time?", that: "Be able to speed up time?" },
        { this: "Wear wet socks?", that: "Sleep in a damp bed?" },
        { this: "Submissive?", that: "Dominant?" },
        { this: "Kiss a stranger?", that: "Kiss your ex?" },
        { this: "Marry Janice?", that: "Laugh like Janice forever?" },
        { this: "Your mom sets up your dating profile?", that: "Your ex sets up your dating profile?" },
        { this: "Date your far-away cousin?", that: "Date a murderer?" },
        { this: "Jail for 1 night?", that: "Lockdown for 1 year?" },
        { this: "Friendzone?", that: "Ghosting?" },
        { this: "Discover a hidden portal to a parallel universe?", that: "Stumble upon a forgotten civilization?" },
        { this: "A tattoo of your ex's name?", that: "A piercing on your tongue?" },
        { this: "Have a photographic memory?", that: "Have the ability to forget anything you want?" }
    ],[]);

    const matchTheWord = useMemo(() => [
        "cat",
        "ice",
        "air",
        "key",
        "lime",
        "sun",
        "news",
        "night",
        "note",
        "out",
        "over",
        "phone",
        "paper",
        "pass",
        "pot",
        "shoe",
        "short",
        "shop",
        "shut",
        "step",
        "book",
        "sport",
        "some",
        "sweet"
    ],[]);

    const Charades = useMemo(() => [
        // Hindi Movies
        'Dilwale Dulhania Le Jayenge',
        'Kabhi Khushi Kabhie Gham',
        'Sholay',
        '3 Idiots',
        'Zindagi Na Milegi Dobara',
        'Dangal',
        'Bajrangi Bhaijaan',
        'Lagaan',
        'Chennai Express',
        'Queen',
        'Piku',
        'Barfi!',
        'Jab We Met',
        'Andhadhun',
        'Bajirao Mastani',
        'PK',
        'Tamasha',
        'Gully Boy',
        'Dostana',
        'Kapoor & Sons',
        'Zindagi Na Milegi Dobara',
        
        // // Animals
        // 'Elephant',
        // 'Kangaroo',
        // 'Penguin',
        // 'Giraffe',
        // 'Cheetah',
        // 'Dolphin',
        // 'Squirrel',
        // 'Octopus',
        // 'Koala',
        // 'Hummingbird',
        
        // // Objects
        // 'Umbrella',
        // 'Television',
        // 'Bicycle',
        // 'Clock',
        // 'Laptop',
        // 'Spoon',
        // 'Cellphone',
        // 'Couch',
        // 'Guitar',
        // 'Camera',
        
        // // Cafe-Related
        // 'Espresso',
        // 'Croissant',
        // 'Latte',
        // 'Muffin',
        // 'Bagel',
        // 'Cappuccino',
        // 'Tiramisu',
        // 'Café Latte',
        // 'Macchiato',    
    ],[]);

    const EmojiQuiz = useMemo(() => [
        // Hindi Movies
        "🎤💔🎶", // Aashiqui 2
        "🦁👑", // Sher Shah
        "🍬👶", // Barfi
    
        // Marvel Movies
        "🦸‍♂️🧠", // Doctor Strange
        "🕷️🕸️", // Spider-Man
        "👩‍💼🖤", // Black Widow
        "🦸‍♂️💥🔨", // Thor
    
        // English Movies
        "🧑‍🎤🚀", // Rocketman
        "🎩🐰", // Alice in Wonderland
        "👻🏚️", // Ghostbusters
        "🚢💔", // Titanic
    
        // Hindi Actors
        "👑🎭💃", // Shah Rukh Khan
        "🎬🔥", // Ranveer Singh
        "👑👩‍🎤", // Kangana Ranaut
    
        // Movie Emoji Puzzles
        "🍽️🙏❤️", // Eat. Pray. Love
        "🌅🧛‍♂️🐺", // Twilight
        "🚢💔❄️", // Titanic
        "👸🌹🐻", // Beauty and the Beast
        "📓❤️💑☔", // The Notebook
    
        // Disney Movies
        "🧞‍♂️🕌🚂🐒", // Aladdin
        "❄️👭⛄", // Frozen
        "🧜‍♀️🐠🌊", // The Little Mermaid
        "👃🤥🐳", // Pinocchio
        "👸🐸💚", // The Princess and The Frog
        "👠🕛🎃", // Cinderella
        "🎈🏠👴👦", // Up
        "🐉👩⚔️", // Mulan
        "🤠🤖🧸", // Toy Story
        "🐘🎪🎩", // Dumbo
        "👸🍎7️⃣", // Snow White
        "👸💤🧙‍♀️", // Sleeping Beauty
        "🦁👑🌅", // The Lion King
        "🌹🐻👸", // Beauty and the Beast (duplicate - you might want to remove or change it)
        "🐠👨‍👦🌊", // Finding Nemo
    
        // Other Movies
        "🎤🎶🏫❤️", // High School Musical
        "5️⃣👣💔", // Five Feet Apart
        "🍽️🍳💍🖤", // Breakfast at Tiffany's
        "👠🎃🕛", // Cinderella (duplicate - you might want to remove or change it)
        "🔟❤️❌🙎‍♂️🙎‍♀️", // 10 Things I Hate About You
        "👑📖🎓", // The Princess Diaries
        "⭐💔📝", // The Fault in Our Stars
        "🔟➕3️⃣👗🎉", // 13 Going on 30
        "🎤👰💍🎉", // The Wedding Singer
    
    ], []);
    

    const [sequence, setSequence] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(-1); 

    useEffect(() => {
        const getStatementsArray = () => {
            if (gameType === 'NHIE') {
                return neverHaveIEverStatements;
            } else if (gameType === 'WIMLT') {
                return mostLikelyToStatements;
            } else if (gameType === 'TOT') {
                return thisOrThatQuestions.map(question => `${question.this}\n\nOR\n\n${question.that}?`);
            }else if (gameType === 'MTW') {
                return matchTheWord;
            }else if (gameType === 'CH') {
                return Charades;
            }else if (gameType === 'EQ') {
                return EmojiQuiz;
            }
            return [];
        };

        const statements = getStatementsArray();
        const randomSequence = statements.sort(() => Math.random() - 0.5); 
        setSequence(randomSequence);
    }, [gameType, neverHaveIEverStatements, mostLikelyToStatements, thisOrThatQuestions, matchTheWord, Charades, EmojiQuiz]);

    const handleNext = () => {
        if (currentIndex < sequence.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > -1) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleExit = () => {
        navigate('/Games'); 
    };

    const renderCardContent = () => {
        if (currentIndex === -1) {
            if (gameType === 'NHIE') {
                return (
                    <div className="instruction-card">
                        <h1>Welcome to the Never Have I Ever!</h1>
                        <p>Read the question displayed on the screen. If you have done what the question asks, respond accordingly or share a story. Continue with the next question when everyone has had their turn.</p>
                        <br/><p>Press Next to start</p>
                    </div>
                );
            } else if (gameType === 'WIMLT') {
                return (
                    <div className="instruction-card">
                        <h1>Welcome to the Who Is Most Likely To!</h1>
                        <p>Read the question displayed on the screen. Each player votes for who they think is most likely to do what the question asks. Share your reasons if you like. Continue to the next question when everyone has voted.</p>
                        <br/><p>Press Next to start</p>
                    </div>
                );
            } else if (gameType === 'TOT') {
                return (
                    <div className="instruction-card">
                        <h1>Welcome to the This Or That!</h1>
                        <p>Two options will be displayed on the screen. Choose the one you prefer, then compare your choice with the others. Move on to the next pair of options when everyone has made their choice.</p>
                        <br/><p>Press Next to start</p>
                    </div>
                );
            }else if (gameType === 'MTW') {
                return (
                    <div className="instruction-card">
                        <h1>Welcome to the Match The Word!</h1>
                        <p>The first word of a compound word will be displayed. Your task is to match it with the correct second word from the given options to form a complete compound word. Continue to the next pair after making your match.</p>
                        <br/><p>Press Next to start</p>
                    </div>
                );
            }else if (gameType === 'CH') {
                return (
                    <div className="instruction-card">
                        <h1>Welcome to the Charades!</h1>
                        <p>One player will look away while a word or phrase is displayed on the screen. The others act it out without speaking, and the guessing player has to figure it out. Once they guess correctly or time runs out, move to the next round.</p>
                        <br/><p>Press Next to start</p>
                    </div>
                );
            }else if (gameType === 'EQ') {
                return (
                    <div className="instruction-card">
                        <h1>Welcome to the Emoji Quiz!</h1>
                        <p>Look at the emojis on the screen. Guess the movie or actor they represent. Share your guess when everyone is ready. Move to the next emoji when all guesses are in.</p>
                        <br/><p>Press Next to start</p>
                    </div>
                );
            } 
        } else if (currentIndex >= sequence.length) {
            return (
                <div className="end-card">
                    <h1>Game Over!</h1>
                    <p>Thanks for playing.</p>
                </div>
            );
        } else {
            return <pre>{sequence[currentIndex]}</pre>;
        }
    };

    return (
        <div>
        <div className="game-container">
            <button className="exit-button" onClick={handleExit}>X</button>
            <div className={`game-card ${gameType}`}>
                {renderCardContent()}
            </div>
        </div>
        <div className="navigation-buttons">
                <button onClick={handlePrevious} disabled={currentIndex <= -1} className='PreviousButton'>&lt;</button>
                <button onClick={handleNext} disabled={currentIndex >= sequence.length} className='NextButton'>&gt;</button>
            </div>
        </div>
    );
};

export default Game;

