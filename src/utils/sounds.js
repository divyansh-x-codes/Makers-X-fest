const sounds = {
  firework: 'https://assets.mixkit.co/active_storage/sfx/2007/2007-preview.mp3',
  hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3',
  click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3',
  register: 'https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3'
};

export const playSound = (soundName) => {
  if (!sounds[soundName]) return;
  const audio = new Audio(sounds[soundName]);
  audio.volume = soundName === 'firework' ? 0.7 : 0.2;
  audio.play().catch(e => {
    // Silently catch autoplay block errors
    console.debug(`Sound ${soundName} blocked by browser`);
  });
};
