var playlist = new Object({KDot: "F*** Your Ethnicity"});

function updatePlaylist(playlist,artistName,songTitle) {
//  playlist[artistName]=songTitle;
  return Object.assign(playlist,{[artistName]: songTitle});
}

function removeFromPlaylist() {
  return delete playlist.artistName;
}