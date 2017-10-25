var playlist = new Object({KDot: "F*** Your Ethnicity"});

function updatePlaylist(playlist,artistName,songTitle) {
//  playlist[artistName]=songTitle;
  return playlist.assign({kDot: "F*** Your Ethnicity"},{artistName: songTitle});
}
