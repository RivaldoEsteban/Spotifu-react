const songs = [
  {
    nameSong: "Dakiti",
    artista: "Bad Bunny",
    album: "Dakiti",
    track: "tracks/dakiti.mp3",
    id: "song-1",
    idTrack: "track-1",
    idIconPlay: "reproducir-1",
    cover: "images/cover1.png",
    time: "3:34",
    idIconPause: "icon-pause1",
    idButton: "button-1",
    key: 1,
  },
  {
    nameSong: "Te Mudaste",
    artista: "Bad Bunny",
    album: "El Último Tour del Mundo",
    track: "tracks/te-mudaste.mp3",
    id: "song-2",
    idTrack: "track-2",
    idIconPlay: "reproducir-2",
    cover: "images/te-mudaste-cover.png",
    time: "2:10",
    idIconPause: "icon-pause2",
    idButton: "button-2",
    key: 2,
  },
  {
    nameSong: "Vete",
    artista: "Bad Bunny",
    album: "Vete",
    track: "tracks/vete.mp3",
    id: "song-3",
    idTrack: "track-3",
    idIconPlay: "reproducir-3",
    cover: "images/vete-cover.png",
    time: "3:27",
    idIconPause: "icon-pause3",
    idButton: "button-3",
    key: 3,
  },
  {
    nameSong: "A Tu Merced",
    artista: "Bad Bunny",
    album: "A Tu Merced",
    track: "tracks/tu-merced.mp3",
    id: "song-4",
    idTrack: "track-4",
    idIconPlay: "reproducir-4",
    cover: "images/a-tu-merced-cover.png",
    time: "2:56",
    idIconPause: "icon-pause4",
    idButton: "button-4",
    key: 4,
  },
  {
    nameSong: "Haciendo que Me Ames",
    artista: "Bad Bunny",
    album: "El Último Tour Del Mundo",
    track: "tracks/ames.mp3",
    id: "song-5",
    idTrack: "track-5",
    idIconPlay: "reproducir-5",
    cover: "images/te-mudaste-cover.png",
    time: "3:38",
    idIconPause: "icon-pause5",
    idButton: "button-5",
    key: "key5",
  },
  {
    nameSong: "Si Veo a Tu Mamá",
    artista: "Bad Bunny",
    album: "YHLQMDLG",
    track: "tracks/si-veo-tu-mama.mp3",
    id: "song-6",
    idTrack: "track-6",
    idIconPlay: "reproducir-6",
    cover: "images/a-tu-merced-cover.png",
    time: "2:51",
    idIconPause: "icon-pause6",
    idButton: "button-6",
    key: "key6",
  },
  {
    nameSong: "Como Se Siente",
    artista: "Bad Bunny, Jhay Cortez",
    album: "Como Se Siente",
    track: "tracks/como-se-siente.mp3",
    id: "song-7",
    idTrack: "track-7",
    idIconPlay: "reproducir-7",
    cover: "images/como-se-siente.png",
    time: "3:47",
    idIconPause: "icon-pause7",
    idButton: "button-7",
    key: "key7",
  },
  {
    nameSong: "Como Se Siente",
    artista: "Bad Bunny, Jhay Cortez",
    album: "Como se Siente",
    track: "tracks/como-se-siente.mp3",
    id: "song-8",
    idTrack: "track-8",
    idIconPlay: "reproducir-8",
    cover: "images/como-se-siente.png",
    time: "3:47",
    idIconPause: "icon-pause8",
    idButton: "button-8",
    key: "key8",
  },
  {
    nameSong: "Callaita",
    artista: "Bad Bunny",
    album: "Callaita",
    track: "tracks/callaita.mp3",
    id: "song-9",
    idTrack: "track-9",
    idIconPlay: "reproducir-9",
    cover: "images/callaita.png",
    time: "4:12",
    idIconPause: "icon-pause9",
    idButton: "button-9",
    key: "key9",
  },
  {
    nameSong: "Ignorantes",
    artista: "Bad Bunny",
    album: "Ignorantes",
    track: "tracks/ignorantes.mp3",
    id: "song-10",
    idTrack: "track-10",
    idIconPlay: "reproducir-10",
    cover: "images/ignorantes.png",
    time: "3:31",
    idIconPause: "icon-pause10",
    idButton: "button-10",
    key: "key10",
  },
  {
    nameSong: "Dakiti",
    artista: "Bad Bunny",
    album: "Dakiti",
    track: "tracks/dakiti.mp3",
    id: "song-11",
    idTrack: "track-1",
    idIconPlay: "reproducir-1",
    cover: "images/cover1.png",
    time: "3:34",
    idIconPause: "icon-pause1",
    idButton: "button-1",
    key: "key11",
  },
  {
    nameSong: "Te Mudaste",
    artista: "Bad Bunny",
    album: "El Último Tour del Mundo",
    track: "tracks/te-mudaste.mp3",
    id: "song-12",
    idTrack: "track-2",
    idIconPlay: "reproducir-2",
    cover: "images/te-mudaste-cover.png",
    time: "2:10",
    idIconPause: "icon-pause2",
    idButton: "button-2",
    key: "key12",
  },
  {
    nameSong: "Vete",
    artista: "Bad Bunny",
    album: "Vete",
    track: "tracks/vete.mp3",
    id: "song-13",
    idTrack: "track-3",
    idIconPlay: "reproducir-3",
    cover: "images/vete-cover.png",
    time: "3:27",
    idIconPause: "icon-pause3",
    idButton: "button-3",
    key: "key13",
  },
  {
    nameSong: "A Tu Merced",
    artista: "Bad Bunny",
    album: "A Tu Merced",
    track: "tracks/tu-merced.mp3",
    id: "song-14",
    idTrack: "track-4",
    idIconPlay: "reproducir-4",
    cover: "images/a-tu-merced-cover.png",
    time: "2:56",
    idIconPause: "icon-pause4",
    idButton: "button-4",
    key: "key14",
  },
  {
    nameSong: "Haciendo que Me Ames",
    artista: "Bad Bunny",
    album: "El Último Tour Del Mundo",
    track: "tracks/ames.mp3",
    id: "song-15",
    idTrack: "track-5",
    idIconPlay: "reproducir-5",
    cover: "images/te-mudaste-cover.png",
    time: "3:38",
    idIconPause: "icon-pause5",
    idButton: "button-5",
    key: "key15",
  },
  {
    nameSong: "Si Veo a Tu Mamá",
    artista: "Bad Bunny",
    album: "YHLQMDLG",
    track: "tracks/si-veo-tu-mama.mp3",
    id: "song-16",
    idTrack: "track-6",
    idIconPlay: "reproducir-6",
    cover: "images/a-tu-merced-cover.png",
    time: "2:51",
    idIconPause: "icon-pause6",
    idButton: "button-6",
    key: "key16",
  },
  {
    nameSong: "Como Se Siente",
    artista: "Bad Bunny, Jhay Cortez",
    album: "Como Se Siente",
    track: "tracks/como-se-siente.mp3",
    id: "song-17",
    idTrack: "track-7",
    idIconPlay: "reproducir-7",
    cover: "images/como-se-siente.png",
    time: "3:47",
    idIconPause: "icon-pause7",
    idButton: "button-7",
    key: "key17",
  },
  {
    nameSong: "Como Se Siente",
    artista: "Bad Bunny, Jhay Cortez",
    album: "Como se Siente",
    track: "tracks/como-se-siente.mp3",
    id: "song-18",
    idTrack: "track-8",
    idIconPlay: "reproducir-8",
    cover: "images/como-se-siente.png",
    time: "3:47",
    idIconPause: "icon-pause8",
    idButton: "button-8",
    key: "key18",
  },
  {
    nameSong: "Callaita",
    artista: "Bad Bunny",
    album: "Callaita",
    track: "tracks/callaita.mp3",
    id: "song-19",
    idTrack: "track-9",
    idIconPlay: "reproducir-9",
    cover: "images/callaita.png",
    time: "4:12",
    idIconPause: "icon-pause9",
    idButton: "button-9",
    key: "key19",
  },
  {
    nameSong: "Ignorantes",
    artista: "Bad Bunny",
    album: "Ignorantes",
    track: "tracks/ignorantes.mp3",
    id: "song-20",
    idTrack: "track-10",
    idIconPlay: "reproducir-20",
    cover: "images/ignorantes.png",
    time: "3:31",
    idIconPause: "icon-pause20",
    idButton: "button-10",
    key: "key20",
  },
  {
    nameSong: "Yonaguni",
    artista: "Bad Bunny",
    album: "Yonaguni ",
    track: "tracks/yonaguni.mp3",
    id: "song-21",
    idIconPlay: "reproducir-21",
    cover: "images/yonaguni.png",
    time: "3:31",
    idIconPause: "icon-pause21",
    idButton: "button-21",
    key: "key21",
  },
];

export default songs;