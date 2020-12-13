
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('quotes').del()
    .then(function () {
      // Inserts seed entries
      return knex('quotes').insert([
        {
          id: 1,
          quote: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."
        },
        {
          id: 2,
          quote: "There is no real ending. It’s just the place where you stop the story."
        },
        {
          id: 3,
          quote: "Seek freedom and become captive of your desires. Seek discipline and find your liberty."
        },
        {
          id: 4,
          quote: "Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic."
        },
        {
          id: 5,
          quote: "The mystery of life isn't a problem to solve, but a reality to experience."
        },
        {
          id: 6,
          quote: "Absolute power does not corrupt absolutely, absolute power attracts the corruptible."
        },
        {
          id: 7,
          quote: "What do you despise? By this are you truly known."
        },
        {
          id: 8,
          quote: "Education is no substitute for intelligence."
        },
        {
          id: 9,
          quote: "There is no escape—we pay for the violence of our ancestors."
        },
        {
          id: 10,
          quote: "When religion and politics travel in the same cart, the riders believe nothing can stand in their way. Their movements become headlong - faster and faster and faster. They put aside all thoughts of obstacles and forget the precipice does not show itself to the man in a blind rush until it's too late."
        },
        {
          id: 11,
          quote: "Hope clouds observation."
        },
        {
          id: 12,
          quote: "It is so shocking to find out how many people do not believe that they can learn, and how many more believe learning to be difficult."
        },
        {
          id: 13,
          quote: "Governments, if they endure, always tend increasingly toward aristocratic forms. No government in history has been known to evade this pattern. And as the aristocracy develops, government tends more and more to act exclusively in the interests of the ruling class - whether that class be hereditary royalty, oligarchs of financial empires, or entrenched bureaucracy."
        },
        {
          id: 14,
          quote: "The mind can go either direction under stress—toward positive or toward negative: on or off. Think of it as a spectrum whose extremes are unconsciousness at the negative end and hyperconsciousness at the positive end. The way the mind will lean under stress is strongly influenced by training."
        },
        {
          id: 15,
          quote: "He who controls the spice controls the universe."
        },
        {
          id: 16,
          quote: "Belief can be manipulated. Only knowledge is dangerous."
        },
        {
          id: 17,
          quote: "Without change something sleeps inside us, and seldom awakens. The sleeper must awaken."
        },
        {
          id: 18,
          quote: "The mind commands the body and it obeys. The mind orders itself and meets resistance."
        },
        {
          id: 19,
          quote: "Truth suffers from too much analysis."
        },
        {
          id: 20,
          quote: "It is impossible to live in the past, difficult to live in the present and a waste to live in the future."
        },
      ]);
    });
};
