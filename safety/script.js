// script.js

const songs = [
    { title: "Song 1", artist: "Artist 1", src: "assets/audio/song1.mp3" },
    { title: "Song 2", artist: "Artist 2", src: "assets/audio/song2.mp3" },
    { title: "Song 3", artist: "Artist 3", src: "assets/audio/song3.mp3" }
  ];
  
  let currentSongIndex = 0;
  let isPlaying = false;
  const audio = new Audio(songs[currentSongIndex].src);
  
  // Update song info
  function updateSongInfo() {
    document.getElementById("song-title").textContent = songs[currentSongIndex].title;
    document.getElementById("song-artist").textContent = songs[currentSongIndex].artist;
  }
  
  // Play/Pause functionality
  document.getElementById("play-pause").addEventListener("click", () => {
    isPlaying ? audio.pause() : audio.play();
    isPlaying = !isPlaying;
    document.getElementById("play-pause").textContent = isPlaying ? "⏸" : "▶️";
  });
  
  // Next/Previous functionality
  document.getElementById("next").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex].src;
    audio.play();
    isPlaying = true;
    updateSongInfo();
  });
  
  document.getElementById("prev").addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex].src;
    audio.play();
    isPlaying = true;
    updateSongInfo();
  });
  
  // Populate playlist
  const songList = document.getElementById("song-list");
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener("click", () => {
      currentSongIndex = index;
      audio.src = song.src;
      audio.play();
      isPlaying = true;
      updateSongInfo();
    });
    songList.appendChild(li);
  });
  
  // Initialize
  updateSongInfo();
  