const GAME_MODES = {
  higherLower: {
    title: "Higher / Lower",
    setupDescription:
      "Vergleiche zwei Spieler. Entscheide, ob der rechte Spieler mehr oder weniger/gleich in der gewählten Statistik hat.",
    rule:
      "Vergleiche zwei Spieler anhand der gewählten Statistik. Der linke Wert ist sichtbar. Schätze, ob der rechte Spieler mehr oder weniger/gleich hat."
  },
  rankIt: {
    title: "Rank It",
    setupDescription:
      "Ordne 10 Spieler absteigend nach der gewählten Statistik in eine Rangliste ein.",
    rule:
      "Ordne 10 Spieler absteigend nach der gewählten Statistik. Ein Spieler ist bereits gesetzt. Platziere die übrigen Spieler korrekt in der Rangliste. Du hast 3 Fehler."
  },
  guessThePlayer: {
    title: "Guess the Player",
    setupDescription:
      "Errate den Spieler anhand von Nation, Position, Vereinen, Karrierewerten und Marktwert.",
    rule:
      "Errate den gesuchten Spieler anhand der Hinweise. Wähle einen Vorschlag aus oder gib den Namen ein. Eine falsche Antwort beendet die Streak."
  },
  careerPath: {
    title: "Career Path",
    setupDescription:
      "Errate den Spieler anhand seines Karrierewegs und seiner Vereinswechsel.",
    rule:
      "Errate den Spieler anhand seines Karrierewegs. Die Vereinsstationen und Wechsel geben dir Hinweise. Eine falsche Antwort beendet die Streak."
  }
};

const SCOPES = {
  top5: {
    label: "Top-5-Ligen gesamt",
    poolLabel: "Top-5-Ligen-Pool",
    files: {
      known: "data/quiz_pool_top5_known.json",
      all: "data/quiz_pool_top5_all.json"
    },
    labels: {
      apps: "Einsätze in den Top-5-Ligen",
      goals: "Tore in den Top-5-Ligen",
      assists: "Assists in den Top-5-Ligen",
      clubs: "Vereine in den Top-5-Ligen",
      seasons: "Zeitraum in den Top-5-Ligen"
    }
  },
  bundesliga: {
    label: "Bundesliga",
    poolLabel: "Bundesliga-Pool",
    files: {
      known: "data/quiz_pool_bundesliga_known.json",
      all: "data/quiz_pool_bundesliga_all.json"
    },
    labels: {
      apps: "Einsätze in der Bundesliga",
      goals: "Tore in der Bundesliga",
      assists: "Assists in der Bundesliga",
      clubs: "Vereine in der Bundesliga",
      seasons: "Zeitraum in der Bundesliga"
    }
  },
  premier_league: {
    label: "Premier League",
    poolLabel: "Premier-League-Pool",
    files: {
      known: "data/quiz_pool_premier_league_known.json",
      all: "data/quiz_pool_premier_league_all.json"
    },
    labels: {
      apps: "Einsätze in der Premier League",
      goals: "Tore in der Premier League",
      assists: "Assists in der Premier League",
      clubs: "Vereine in der Premier League",
      seasons: "Zeitraum in der Premier League"
    }
  },
  laliga: {
    label: "LaLiga",
    poolLabel: "LaLiga-Pool",
    files: {
      known: "data/quiz_pool_laliga_known.json",
      all: "data/quiz_pool_laliga_all.json"
    },
    labels: {
      apps: "Einsätze in LaLiga",
      goals: "Tore in LaLiga",
      assists: "Assists in LaLiga",
      clubs: "Vereine in LaLiga",
      seasons: "Zeitraum in LaLiga"
    }
  },
  serie_a: {
    label: "Serie A",
    poolLabel: "Serie-A-Pool",
    files: {
      known: "data/quiz_pool_serie_a_known.json",
      all: "data/quiz_pool_serie_a_all.json"
    },
    labels: {
      apps: "Einsätze in der Serie A",
      goals: "Tore in der Serie A",
      assists: "Assists in der Serie A",
      clubs: "Vereine in der Serie A",
      seasons: "Zeitraum in der Serie A"
    }
  },
  ligue_1: {
    label: "Ligue 1",
    poolLabel: "Ligue-1-Pool",
    files: {
      known: "data/quiz_pool_ligue_1_known.json",
      all: "data/quiz_pool_ligue_1_all.json"
    },
    labels: {
      apps: "Einsätze in der Ligue 1",
      goals: "Tore in der Ligue 1",
      assists: "Assists in der Ligue 1",
      clubs: "Vereine in der Ligue 1",
      seasons: "Zeitraum in der Ligue 1"
    }
  }
};

const PLAYER_POOLS = {
  known: { label: "Bekannte Spieler" },
  all: { label: "Alle Spieler" }
};

const CAREER_PATH_FILES = {
  top5: {
    known: "data/career_path_pool_top5_known.json",
    all: "data/career_path_pool_top5_all.json"
  },
  bundesliga: {
    known: "data/career_path_pool_bundesliga_known.json",
    all: "data/career_path_pool_bundesliga_all.json"
  },
  premier_league: {
    known: "data/career_path_pool_premier_league_known.json",
    all: "data/career_path_pool_premier_league_all.json"
  },
  laliga: {
    known: "data/career_path_pool_laliga_known.json",
    all: "data/career_path_pool_laliga_all.json"
  },
  serie_a: {
    known: "data/career_path_pool_serie_a_known.json",
    all: "data/career_path_pool_serie_a_all.json"
  },
  ligue_1: {
    known: "data/career_path_pool_ligue_1_known.json",
    all: "data/career_path_pool_ligue_1_all.json"
  }
};

const STATUS_FILTERS = {
  all: { label: "Alle" },
  active: { label: "Aktiv" },
  retired: { label: "Karriere beendet" }
};

const STATS = {
  scope_goals: {
    label: "Tore",
    field: "scope_goals",
    labelKey: "goals",
    formatter: formatNumber
  },
  scope_assists: {
    label: "Assists",
    field: "scope_assists",
    labelKey: "assists",
    formatter: formatNumber
  },
  scope_apps: {
    label: "Einsätze",
    field: "scope_apps",
    labelKey: "apps",
    formatter: formatNumber
  },
  peak_market_value: {
    label: "Peak-Marktwert",
    field: "peak_market_value",
    formatter: formatCurrency
  }
};

const NUMERIC_FIELDS = [
  "scope_apps",
  "scope_goals",
  "scope_assists",
  "scope_first_season_start_year",
  "scope_last_season_start_year",
  "top5_apps",
  "top5_goals",
  "top5_assists",
  "peak_market_value",
  "national_matches",
  "national_goals",
  "fame_score",
  "relevance_score",
  "career_path_club_count",
  "career_path_transfer_count"
];

const RANK_ROUND_SIZE = 10;
const RANK_CANDIDATE_COUNT = RANK_ROUND_SIZE - 1;
const RANK_MAX_ERRORS = 3;
const ACTIVE_GAME_KEY = "footballQuiz:v14:activeGame";
const LAST_GAME_KEY = "footballQuiz:lastGameMode";

const state = {
  screen: "start",
  gameMode: getInitialGameMode(),
  scopeKey: "top5",
  playerPoolKey: "known",
  statusFilterKey: "all",
  statKey: "scope_goals",
  players: [],
  highscore: 0,
  loadId: 0,
  higherLower: {
    leftPlayer: null,
    rightPlayer: null,
    streak: 0,
    roundResolved: false,
    lastCorrect: false
  },
  rankIt: {
    placedPlayers: [],
    candidateQueue: [],
    currentCandidate: null,
    score: 0,
    errors: 0,
    isOver: false
  },
  guessThePlayer: {
    targetPlayer: null,
    streak: 0,
    roundResolved: false,
    lastCorrect: false,
    selectedPlayerId: null
  },
  careerPath: {
    targetPlayer: null,
    streak: 0,
    roundResolved: false,
    lastCorrect: false,
    selectedPlayerId: null
  }
};

const elements = {
  startScreen: document.querySelector("#start-screen"),
  setupScreen: document.querySelector("#setup-screen"),
  gameScreen: document.querySelector("#game-screen"),
  resumeCard: document.querySelector("#resume-card"),
  resumeTitle: document.querySelector("#resume-title"),
  resumeSummary: document.querySelector("#resume-summary"),
  resumeButton: document.querySelector("#resume-btn"),
  discardSaveButton: document.querySelector("#discard-save-btn"),
  startGameCards: document.querySelectorAll("[data-start-game]"),
  setupBackButton: document.querySelector("#setup-back-btn"),
  setupBackSecondaryButton: document.querySelector("#setup-back-secondary-btn"),
  setupTitle: document.querySelector("#setup-title"),
  setupDescription: document.querySelector("#setup-description"),
  statSetupSection: document.querySelector("#stat-setup-section"),
  startGameButton: document.querySelector("#start-game-btn"),
  gameHomeButton: document.querySelector("#game-home-btn"),
  appTitle: document.querySelector("#app-title"),
  ruleNote: document.querySelector("#rule-note"),
  peakNote: document.querySelector("#peak-note"),
  transferNote: document.querySelector("#transfer-note"),
  primaryScoreLabel: document.querySelector("#primary-score-label"),
  primaryScore: document.querySelector("#streak"),
  secondaryScoreBox: document.querySelector("#secondary-score-box"),
  secondaryScoreLabel: document.querySelector("#secondary-score-label"),
  secondaryScore: document.querySelector("#secondary-score"),
  highscore: document.querySelector("#highscore"),
  message: document.querySelector("#message"),
  modeNote: document.querySelector("#mode-note"),
  scopeButtons: document.querySelectorAll("[data-scope]"),
  playerPoolButtons: document.querySelectorAll("[data-player-pool]"),
  statusButtons: document.querySelectorAll("[data-status]"),
  statButtons: document.querySelectorAll("[data-stat]"),
  higherLowerGame: document.querySelector("#higher-lower-game"),
  rankItGame: document.querySelector("#rank-it-game"),
  guessPlayerGame: document.querySelector("#guess-player-game"),
  careerPathGame: document.querySelector("#career-path-game"),
  leftName: document.querySelector("#left-name"),
  rightName: document.querySelector("#right-name"),
  leftStatLabel: document.querySelector("#left-stat-label"),
  rightStatLabel: document.querySelector("#right-stat-label"),
  leftStatValue: document.querySelector("#left-stat-value"),
  rightStatValue: document.querySelector("#right-stat-value"),
  rightMetric: document.querySelector("#right-metric"),
  leftFacts: document.querySelector("#left-facts"),
  rightFacts: document.querySelector("#right-facts"),
  higherButton: document.querySelector("#higher-btn"),
  lowerButton: document.querySelector("#lower-btn"),
  nextButton: document.querySelector("#next-btn"),
  restartButton: document.querySelector("#restart-btn"),
  globalNewRoundButton: document.querySelector("#global-new-round-btn"),
  changeSettingsButton: document.querySelector("#change-settings-btn"),
  rankCandidateName: document.querySelector("#rank-candidate-name"),
  rankCandidateStatLabel: document.querySelector("#rank-candidate-stat-label"),
  rankCandidateStatValue: document.querySelector("#rank-candidate-stat-value"),
  rankCandidateMetric: document.querySelector("#rank-candidate-metric"),
  rankCandidateFacts: document.querySelector("#rank-candidate-facts"),
  rankProgress: document.querySelector("#rank-progress"),
  rankList: document.querySelector("#rank-list"),
  rankEndSummary: document.querySelector("#rank-end-summary"),
  guessHints: document.querySelector("#guess-hints"),
  guessInput: document.querySelector("#guess-input"),
  guessSuggestions: document.querySelector("#guess-suggestions"),
  guessSubmitButton: document.querySelector("#guess-submit-btn"),
  guessNextButton: document.querySelector("#guess-next-btn"),
  guessNewRoundButton: document.querySelector("#guess-new-round-btn"),
  careerClubSequence: document.querySelector("#career-club-sequence"),
  careerTimeline: document.querySelector("#career-timeline"),
  careerRevealFacts: document.querySelector("#career-reveal-facts"),
  careerInput: document.querySelector("#career-input"),
  careerSuggestions: document.querySelector("#career-suggestions"),
  careerSubmitButton: document.querySelector("#career-submit-btn"),
  careerNextButton: document.querySelector("#career-next-btn"),
  careerNewRoundButton: document.querySelector("#career-new-round-btn")
};

document.addEventListener("DOMContentLoaded", init);
window.addEventListener("beforeunload", () => {
  if (state.screen === "game") saveActiveGameState();
});

function init() {
  bindEvents();
  updateShell();
  showStartScreen();
}

function bindEvents() {
  elements.startGameCards.forEach((card) => {
    card.addEventListener("click", () => {
      state.gameMode = card.dataset.startGame;
      saveLastGameMode();
      resetFiltersToDefault();
      showSetupScreen();
    });
  });

  elements.resumeButton.addEventListener("click", resumeSavedGame);
  elements.discardSaveButton.addEventListener("click", () => {
    clearActiveGameState();
    updateResumeCard();
  });

  elements.setupBackButton.addEventListener("click", showStartScreen);
  elements.setupBackSecondaryButton.addEventListener("click", showStartScreen);
  elements.startGameButton.addEventListener("click", () => {
    clearActiveGameState();
    showGameScreen();
    loadSelectedPool({ mode: "new" });
  });

  elements.gameHomeButton.addEventListener("click", () => {
    saveActiveGameState();
    showStartScreen();
  });
  elements.changeSettingsButton.addEventListener("click", () => {
    saveActiveGameState();
    showSetupScreen();
  });
  elements.globalNewRoundButton.addEventListener("click", () => {
    clearActiveGameState();
    loadSelectedPool({ mode: "new" });
  });

  elements.scopeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.scopeKey = button.dataset.scope;
      updateSetupButtons();
    });
  });

  elements.playerPoolButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.playerPoolKey = button.dataset.playerPool;
      updateSetupButtons();
    });
  });

  elements.statusButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.statusFilterKey = button.dataset.status;
      updateSetupButtons();
    });
  });

  elements.statButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.statKey = button.dataset.stat;
      updateSetupButtons();
    });
  });

  elements.higherButton.addEventListener("click", () => handleHigherLowerGuess("higher"));
  elements.lowerButton.addEventListener("click", () => handleHigherLowerGuess("lowerOrEqual"));
  elements.nextButton.addEventListener("click", startNextHigherLowerRound);
  elements.restartButton.addEventListener("click", () => {
    clearActiveGameState();
    startHigherLowerGame({ save: true });
  });
  elements.guessInput.addEventListener("input", handleGuessInput);
  elements.guessSubmitButton.addEventListener("click", handleGuessSubmit);
  elements.guessNextButton.addEventListener("click", startNextGuessPlayerRound);
  elements.guessNewRoundButton.addEventListener("click", () => {
    clearActiveGameState();
    startGuessThePlayerGame({ save: true });
  });
  elements.careerInput.addEventListener("input", handleCareerInput);
  elements.careerSubmitButton.addEventListener("click", handleCareerSubmit);
  elements.careerNextButton.addEventListener("click", startNextCareerPathRound);
  elements.careerNewRoundButton.addEventListener("click", () => {
    clearActiveGameState();
    startCareerPathGame({ save: true });
  });
}

function showStartScreen() {
  state.screen = "start";
  showOnlyScreen(elements.startScreen);
  updateResumeCard();
}

function showSetupScreen() {
  state.screen = "setup";
  showOnlyScreen(elements.setupScreen);
  updateShell();
}

function showGameScreen() {
  state.screen = "game";
  showOnlyScreen(elements.gameScreen);
  updateShell();
}

function showOnlyScreen(activeScreen) {
  [elements.startScreen, elements.setupScreen, elements.gameScreen].forEach((screen) => {
    screen.classList.toggle("is-hidden", screen !== activeScreen);
  });
}

function updateResumeCard() {
  const savedGame = getSavedGame();
  if (!savedGame) {
    elements.resumeCard.classList.add("is-hidden");
    return;
  }

  elements.resumeTitle.textContent = `Fortsetzen: ${GAME_MODES[savedGame.gameMode]?.title || "Spiel"}`;
  elements.resumeSummary.textContent = buildSavedGameSummary(savedGame);
  elements.resumeCard.classList.remove("is-hidden");
}

function buildSavedGameSummary(savedGame) {
  const scope = SCOPES[savedGame.scopeKey]?.label || savedGame.scopeKey;
  const pool = PLAYER_POOLS[savedGame.playerPoolKey]?.label || savedGame.playerPoolKey;
  const status = STATUS_FILTERS[savedGame.statusFilterKey]?.label || savedGame.statusFilterKey;
  const stat = STATS[savedGame.statKey]?.label || savedGame.statKey;

  if (savedGame.gameMode === "rankIt") {
    return `${scope} · ${pool} · ${status} · ${stat} · Score ${savedGame.rankIt?.score || 0}/${RANK_CANDIDATE_COUNT}`;
  }

  if (savedGame.gameMode === "guessThePlayer") {
    return `${scope} · ${pool} · ${status} · Streak ${savedGame.guessThePlayer?.streak || 0}`;
  }

  if (savedGame.gameMode === "careerPath") {
    return `${scope} · ${pool} · ${status} · Streak ${savedGame.careerPath?.streak || 0}`;
  }

  return `${scope} · ${pool} · ${status} · ${stat} · Streak ${savedGame.higherLower?.streak || 0}`;
}

function resumeSavedGame() {
  const savedGame = getSavedGame();
  if (!savedGame) {
    updateResumeCard();
    return;
  }

  applySavedConfig(savedGame);
  showGameScreen();
  loadSelectedPool({ mode: "resume", savedGame });
}

function applySavedConfig(savedGame) {
  state.gameMode = savedGame.gameMode;
  state.scopeKey = savedGame.scopeKey;
  state.playerPoolKey = savedGame.playerPoolKey;
  state.statusFilterKey = savedGame.statusFilterKey;
  state.statKey = savedGame.statKey || "scope_goals";
}

function resetFiltersToDefault() {
  state.scopeKey = "top5";
  state.playerPoolKey = "known";
  state.statusFilterKey = "all";
  state.statKey = "scope_goals";
}

async function loadSelectedPool({ mode, savedGame = null }) {
  const loadId = state.loadId + 1;
  state.loadId = loadId;
  state.players = [];
  state.highscore = getStoredHighscore();

  setLoadingState(true);
  resetActiveGameView();
  updateShell();
  setMessage(`Lade ${getCurrentScope().label} · ${getCurrentPlayerPool().label}...`);

  try {
    const response = await fetch(getCurrentPoolPath());
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const rawText = await response.text();
    if (loadId !== state.loadId) return;

    const data = parseJsonWithNaN(rawText);
    state.players = sanitizePlayers(data, isStatlessGame() ? null : getCurrentStat().field);

    if (state.players.length < getMinimumPlayerCount()) {
      throw new Error("Nicht genug Spieler mit gültigen Werten gefunden.");
    }

    if (mode === "resume") {
      restoreSavedGame(savedGame);
    } else {
      startActiveGame({ save: true });
    }
  } catch (error) {
    if (loadId !== state.loadId) return;
    showError("Für diese Auswahl gibt es nicht genug passende Spieler oder die Daten konnten nicht geladen werden.");
    console.error(error);
  } finally {
    if (loadId === state.loadId) setLoadingState(false);
  }
}

function parseJsonWithNaN(rawText) {
  return JSON.parse(rawText.replace(/\bNaN\b/g, "null"));
}

function sanitizePlayers(players, statField) {
  if (!Array.isArray(players)) return [];

  const seenIds = new Set();

  return players
    .filter((player) => player && player.player_id !== undefined && player.player_id !== null)
    .map(normalizePlayer)
    .filter((player) => passesStatusFilter(player))
    .filter((player) => {
      if (seenIds.has(player.player_id)) return false;
      seenIds.add(player.player_id);
      return statField ? player[statField] !== null : true;
    });
}

function normalizePlayer(player) {
  const normalized = {
    ...player,
    player_id: String(player.player_id),
    career_status_key: cleanStatusKey(player.career_status_key),
    career_status_label: cleanText(player.career_status_label)
  };

  NUMERIC_FIELDS.forEach((field) => {
    normalized[field] = toFiniteNumber(player[field]);
  });

  return normalized;
}

function passesStatusFilter(player) {
  if (state.statusFilterKey === "all") return true;
  return player.career_status_key === state.statusFilterKey;
}

function startActiveGame({ save = false } = {}) {
  state.highscore = getStoredHighscore();

  if (state.gameMode === "rankIt") {
    startRankItGame({ save });
    return;
  }

  if (state.gameMode === "guessThePlayer") {
    startGuessThePlayerGame({ save });
    return;
  }

  if (state.gameMode === "careerPath") {
    startCareerPathGame({ save });
    return;
  }

  startHigherLowerGame({ save });
}

function resetActiveGameView() {
  resetHigherLowerState();
  resetRankItState();
  resetGuessThePlayerState();
  resetCareerPathState();
  renderHigherLowerEmptyCards();
  renderRankItEmpty();
  renderGuessThePlayerEmpty();
  renderCareerPathEmpty();
  updateScores();
  showHigherLowerAnswerButtons(false);
  showGuessActionButtons("submit");
  showCareerActionButtons("submit");
}

function resetHigherLowerState() {
  state.higherLower.leftPlayer = null;
  state.higherLower.rightPlayer = null;
  state.higherLower.streak = 0;
  state.higherLower.roundResolved = false;
  state.higherLower.lastCorrect = false;
}

function resetRankItState() {
  state.rankIt.placedPlayers = [];
  state.rankIt.candidateQueue = [];
  state.rankIt.currentCandidate = null;
  state.rankIt.score = 0;
  state.rankIt.errors = 0;
  state.rankIt.isOver = false;
}

function resetGuessThePlayerState({ keepStreak = false } = {}) {
  const streak = keepStreak ? state.guessThePlayer.streak : 0;

  state.guessThePlayer.targetPlayer = null;
  state.guessThePlayer.streak = streak;
  state.guessThePlayer.roundResolved = false;
  state.guessThePlayer.lastCorrect = false;
  state.guessThePlayer.selectedPlayerId = null;
}

function resetCareerPathState({ keepStreak = false } = {}) {
  const streak = keepStreak ? state.careerPath.streak : 0;

  state.careerPath.targetPlayer = null;
  state.careerPath.streak = streak;
  state.careerPath.roundResolved = false;
  state.careerPath.lastCorrect = false;
  state.careerPath.selectedPlayerId = null;
}

function restoreSavedGame(savedGame) {
  let restored = false;

  if (savedGame.gameMode === "rankIt") {
    restored = restoreRankItGame(savedGame);
  } else if (savedGame.gameMode === "guessThePlayer") {
    restored = restoreGuessThePlayerGame(savedGame);
  } else if (savedGame.gameMode === "careerPath") {
    restored = restoreCareerPathGame(savedGame);
  } else {
    restored = restoreHigherLowerGame(savedGame);
  }

  if (!restored) {
    clearActiveGameState();
    showError("Das gespeicherte Spiel konnte mit den aktuellen Daten nicht fortgesetzt werden.");
    return;
  }

  updateScores();
  saveActiveGameState();
}

function restoreHigherLowerGame(savedGame) {
  const saved = savedGame.higherLower;
  if (!saved) return false;

  const leftPlayer = findPlayerById(saved.leftPlayerId);
  const rightPlayer = findPlayerById(saved.rightPlayerId);
  if (!leftPlayer || !rightPlayer || leftPlayer.player_id === rightPlayer.player_id) return false;

  state.higherLower.leftPlayer = leftPlayer;
  state.higherLower.rightPlayer = rightPlayer;
  state.higherLower.streak = Number(saved.streak) || 0;
  state.higherLower.roundResolved = Boolean(saved.roundResolved);
  state.higherLower.lastCorrect = Boolean(saved.lastCorrect);

  renderHigherLowerRound(state.higherLower.roundResolved);
  if (!state.higherLower.roundResolved) {
    showHigherLowerAnswerButtons(true);
  } else {
    showHigherLowerResolvedButtons(state.higherLower.lastCorrect);
  }
  setMessage("Gespeichertes Higher/Lower-Spiel fortgesetzt.");
  return true;
}

function restoreRankItGame(savedGame) {
  const saved = savedGame.rankIt;
  if (!saved || saved.isOver) return false;

  const placedPlayers = mapIdsToPlayers(saved.placedPlayerIds);
  const candidateQueue = mapIdsToPlayers(saved.candidateQueueIds);
  const currentCandidate = findPlayerById(saved.currentCandidateId);

  if (placedPlayers.length === 0 || !currentCandidate) return false;

  state.rankIt.placedPlayers = placedPlayers;
  state.rankIt.candidateQueue = candidateQueue;
  state.rankIt.currentCandidate = currentCandidate;
  state.rankIt.score = Number(saved.score) || 0;
  state.rankIt.errors = Number(saved.errors) || 0;
  state.rankIt.isOver = false;

  renderRankIt();
  setMessage("Gespeichertes Rank-It-Spiel fortgesetzt.");
  return true;
}

function restoreGuessThePlayerGame(savedGame) {
  const saved = savedGame.guessThePlayer;
  if (!saved) return false;

  const targetPlayer = findPlayerById(saved.targetPlayerId);
  if (!targetPlayer || !isValidGuessTarget(targetPlayer)) return false;

  state.guessThePlayer.targetPlayer = targetPlayer;
  state.guessThePlayer.streak = Number(saved.streak) || 0;
  state.guessThePlayer.roundResolved = Boolean(saved.roundResolved);
  state.guessThePlayer.lastCorrect = Boolean(saved.lastCorrect);
  state.guessThePlayer.selectedPlayerId = saved.selectedPlayerId ? String(saved.selectedPlayerId) : null;

  renderGuessThePlayer();
  showGuessActionButtons(state.guessThePlayer.roundResolved ? "next" : "submit");
  setMessage("Gespeichertes Guess-the-Player-Spiel fortgesetzt.");
  return true;
}

function restoreCareerPathGame(savedGame) {
  const saved = savedGame.careerPath;
  if (!saved) return false;

  const targetPlayer = findPlayerById(saved.targetPlayerId);
  if (!targetPlayer || !isValidCareerPathTarget(targetPlayer)) return false;

  state.careerPath.targetPlayer = targetPlayer;
  state.careerPath.streak = Number(saved.streak) || 0;
  state.careerPath.roundResolved = Boolean(saved.roundResolved);
  state.careerPath.lastCorrect = Boolean(saved.lastCorrect);
  state.careerPath.selectedPlayerId = saved.selectedPlayerId ? String(saved.selectedPlayerId) : null;

  renderCareerPath();
  showCareerActionButtons(state.careerPath.roundResolved ? "next" : "submit");
  setMessage("Gespeichertes Career-Path-Spiel fortgesetzt.");
  return true;
}

function mapIdsToPlayers(ids = []) {
  return ids.map((id) => findPlayerById(id)).filter(Boolean);
}

function findPlayerById(playerId) {
  return state.players.find((player) => player.player_id === String(playerId));
}

function startHigherLowerGame({ save = false } = {}) {
  if (state.players.length < 2) {
    showError("Für diese Filterauswahl gibt es nicht genug gültige Spieler für Higher/Lower.");
    return;
  }

  resetHigherLowerState();
  state.higherLower.leftPlayer = getRandomPlayer();
  state.higherLower.rightPlayer = getRandomPlayer(state.higherLower.leftPlayer.player_id);

  updateScores();
  renderHigherLowerRound(false);
  showHigherLowerAnswerButtons(true);
  setMessage("Neue Higher/Lower-Runde gestartet.");
  if (save) saveActiveGameState();
}

function startNextHigherLowerRound() {
  const game = state.higherLower;
  if (!game.roundResolved || !game.lastCorrect) return;

  game.leftPlayer = game.rightPlayer;
  game.rightPlayer = getRandomPlayer(game.leftPlayer.player_id);
  game.roundResolved = false;
  game.lastCorrect = false;

  renderHigherLowerRound(false);
  showHigherLowerAnswerButtons(true);
  setMessage("Nächste Runde: mehr oder weniger/gleich?");
  saveActiveGameState();
}

function handleHigherLowerGuess(guess) {
  const game = state.higherLower;
  if (game.roundResolved || !game.leftPlayer || !game.rightPlayer) return;

  const stat = getCurrentStat();
  const leftValue = game.leftPlayer[stat.field];
  const rightValue = game.rightPlayer[stat.field];
  const correct =
    (guess === "higher" && rightValue > leftValue) ||
    (guess === "lowerOrEqual" && rightValue <= leftValue);

  game.roundResolved = true;
  game.lastCorrect = correct;

  if (correct) {
    game.streak += 1;
    saveHighscoreIfNeeded(game.streak);
    setMessage(`Richtig! ${getDisplayName(game.rightPlayer)} hat ${stat.formatter(rightValue)} ${stat.label}.`, "success");
  } else {
    game.streak = 0;
    setMessage(`Falsch. ${getDisplayName(game.rightPlayer)} hat ${stat.formatter(rightValue)} ${stat.label}.`, "error");
  }

  updateScores();
  renderHigherLowerRound(true);
  showHigherLowerResolvedButtons(correct);
  saveActiveGameState();
}

function renderHigherLowerRound(revealed) {
  const game = state.higherLower;
  const stat = getCurrentStat();

  elements.leftName.textContent = getDisplayName(game.leftPlayer);
  elements.rightName.textContent = getDisplayName(game.rightPlayer);
  elements.leftStatLabel.textContent = getStatFactLabel(stat);
  elements.rightStatLabel.textContent = getStatFactLabel(stat);
  elements.leftStatValue.textContent = stat.formatter(game.leftPlayer[stat.field]);
  elements.rightStatValue.textContent = revealed ? stat.formatter(game.rightPlayer[stat.field]) : "?";
  elements.rightMetric.classList.toggle("metric-box--hidden", !revealed);

  if (revealed) {
    renderResolvedFacts(elements.leftFacts, game.leftPlayer);
    renderResolvedFacts(elements.rightFacts, game.rightPlayer);
    return;
  }

  renderLeftFacts(elements.leftFacts, game.leftPlayer);
  renderPreviewFacts(elements.rightFacts, game.rightPlayer);
}

function renderHigherLowerEmptyCards() {
  elements.leftName.textContent = "Lädt...";
  elements.rightName.textContent = "Lädt...";
  elements.leftStatLabel.textContent = getStatFactLabel();
  elements.rightStatLabel.textContent = getStatFactLabel();
  elements.leftStatValue.textContent = "-";
  elements.rightStatValue.textContent = "?";
  elements.leftFacts.replaceChildren();
  elements.rightFacts.replaceChildren();
  elements.rightMetric.classList.add("metric-box--hidden");
}

function startRankItGame({ save = false } = {}) {
  const selectedPlayers = pickRankItPlayers();
  if (!selectedPlayers) {
    resetRankItState();
    renderRankItEmpty();
    updateScores();
    showError("Für Rank It gibt es in dieser Filterauswahl nicht genug Spieler mit 10 unterschiedlichen gültigen Werten.");
    return;
  }

  const orderedPlayers = shuffleArray(selectedPlayers);
  resetRankItState();
  state.rankIt.placedPlayers = [orderedPlayers[0]];
  state.rankIt.candidateQueue = orderedPlayers.slice(1);
  state.rankIt.currentCandidate = state.rankIt.candidateQueue.shift();

  updateScores();
  renderRankIt();
  setMessage("Ordne den Kandidaten an der richtigen Stelle in die Rangliste ein.");
  if (save) saveActiveGameState();
}

function pickRankItPlayers() {
  const stat = getCurrentStat();
  const samplingPool = getRankItSamplingPool();
  const uniqueValuePlayers = [];
  const seenValues = new Set();

  shuffleArray(samplingPool).forEach((player) => {
    if (uniqueValuePlayers.length >= RANK_ROUND_SIZE) return;

    const valueKey = String(player[stat.field]);
    if (seenValues.has(valueKey)) return;

    seenValues.add(valueKey);
    uniqueValuePlayers.push(player);
  });

  return uniqueValuePlayers.length === RANK_ROUND_SIZE ? uniqueValuePlayers : null;
}

function getRankItSamplingPool() {
  const playersWithValue = state.players.filter((player) => player[getCurrentStat().field] !== null);

  if (state.playerPoolKey === "known") return playersWithValue;

  const playersWithSamplingScore = playersWithValue
    .map((player) => ({ player, samplingScore: getSamplingScore(player) }))
    .filter((entry) => entry.samplingScore !== null);

  if (playersWithSamplingScore.length < RANK_ROUND_SIZE) return playersWithValue;

  const sortedByFame = playersWithSamplingScore.sort((a, b) => b.samplingScore - a.samplingScore);
  const sampleSize = Math.max(RANK_ROUND_SIZE, Math.ceil(sortedByFame.length * 0.75));

  return sortedByFame.slice(0, sampleSize).map((entry) => entry.player);
}

function getSamplingScore(player) {
  if (player.fame_score !== null) return player.fame_score;
  if (player.relevance_score !== null) return player.relevance_score;
  return null;
}

function handleRankInsert(position) {
  const game = state.rankIt;
  if (game.isOver || !game.currentCandidate) return;

  const correctPosition = getCorrectRankPosition(game.currentCandidate);
  const correct = position === correctPosition;

  if (correct) {
    game.score += 1;
    game.placedPlayers.splice(position, 0, game.currentCandidate);
    saveHighscoreIfNeeded(game.score);
    setMessage(`${getDisplayName(game.currentCandidate)} wurde richtig eingeordnet.`, "success");
  } else {
    game.errors += 1;
    game.placedPlayers.splice(correctPosition, 0, game.currentCandidate);
    setMessage(`Nicht ganz. ${getDisplayName(game.currentCandidate)} wurde automatisch korrekt eingeordnet.`, "error");
  }

  game.currentCandidate = game.candidateQueue.shift() || null;

  if (game.errors >= RANK_MAX_ERRORS) {
    endRankItGame(false);
    return;
  }

  if (!game.currentCandidate) {
    endRankItGame(true);
    return;
  }

  updateScores();
  renderRankIt();
  saveActiveGameState();
}

function endRankItGame(won) {
  state.rankIt.isOver = true;
  state.rankIt.currentCandidate = null;
  saveHighscoreIfNeeded(state.rankIt.score);
  clearActiveGameState();
  updateScores();
  renderRankIt();

  const result = won ? "Gewonnen" : "Verloren";
  setMessage(`${result}: ${state.rankIt.score} von ${RANK_CANDIDATE_COUNT} Spielern korrekt eingeordnet, ${state.rankIt.errors} Fehler.`, won ? "success" : "error");
}

function renderRankIt() {
  const game = state.rankIt;
  const candidate = game.currentCandidate;
  const stat = getCurrentStat();

  if (candidate) {
    elements.rankCandidateName.textContent = getDisplayName(candidate);
    elements.rankCandidateStatLabel.textContent = getStatFactLabel(stat);
    elements.rankCandidateStatValue.textContent = "?";
    elements.rankCandidateMetric.classList.add("metric-box--hidden");
    renderPreviewFacts(elements.rankCandidateFacts, candidate);
  } else {
    elements.rankCandidateName.textContent = game.isOver ? "Runde beendet" : "Lädt...";
    elements.rankCandidateStatLabel.textContent = getStatFactLabel(stat);
    elements.rankCandidateStatValue.textContent = game.isOver ? "-" : "?";
    elements.rankCandidateMetric.classList.add("metric-box--hidden");
    elements.rankCandidateFacts.replaceChildren();
  }

  elements.rankProgress.textContent = `${game.placedPlayers.length} von ${RANK_ROUND_SIZE} gesetzt`;
  renderRankList();
  renderRankEndSummary();
}

function renderRankItEmpty() {
  elements.rankCandidateName.textContent = "Lädt...";
  elements.rankCandidateStatLabel.textContent = getStatFactLabel();
  elements.rankCandidateStatValue.textContent = "?";
  elements.rankCandidateMetric.classList.add("metric-box--hidden");
  elements.rankCandidateFacts.replaceChildren();
  elements.rankProgress.textContent = `0 von ${RANK_ROUND_SIZE} gesetzt`;
  elements.rankList.replaceChildren();
  elements.rankEndSummary.classList.add("is-hidden");
  elements.rankEndSummary.replaceChildren();
}

function renderRankList() {
  const game = state.rankIt;
  const fragment = document.createDocumentFragment();
  const canInsert = !game.isOver && Boolean(game.currentCandidate);

  for (let index = 0; index <= game.placedPlayers.length; index += 1) {
    if (canInsert) fragment.append(createInsertButton(index));
    if (index < game.placedPlayers.length) fragment.append(createRankRow(game.placedPlayers[index], index + 1));
  }

  elements.rankList.replaceChildren(fragment);
}

function createInsertButton(position) {
  const button = document.createElement("button");
  button.className = "insert-button";
  button.type = "button";
  button.textContent = getInsertButtonLabel(position);
  button.addEventListener("click", () => handleRankInsert(position));
  return button;
}

function getInsertButtonLabel(position) {
  const placed = state.rankIt.placedPlayers;
  const terms = getInsertTerms();

  if (placed.length === 1) {
    const name = getDisplayName(placed[0]);
    return position === 0 ? `${terms.higher} als ${name}` : `${terms.lower} als ${name}`;
  }

  if (position === 0) return `${terms.higher} als ${getDisplayName(placed[0])}`;
  if (position === placed.length) return `${terms.lower} als ${getDisplayName(placed[placed.length - 1])}`;

  return `Zwischen ${getDisplayName(placed[position - 1])} und ${getDisplayName(placed[position])}`;
}

function getInsertTerms() {
  if (state.statKey === "peak_market_value") {
    return {
      higher: "Höherer Peak-Marktwert",
      lower: "Niedrigerer Peak-Marktwert"
    };
  }

  return {
    higher: `Mehr ${getCurrentStat().label}`,
    lower: `Weniger ${getCurrentStat().label}`
  };
}

function createRankRow(player, rank) {
  const row = document.createElement("article");
  const rankNumber = document.createElement("span");
  const name = document.createElement("strong");
  const value = document.createElement("span");

  row.className = "rank-row";
  rankNumber.className = "rank-number";
  value.className = "rank-value";

  rankNumber.textContent = String(rank);
  name.textContent = getDisplayName(player);
  value.textContent = formatRankValue(player);
  row.append(rankNumber, name, value);

  return row;
}

function renderRankEndSummary() {
  const game = state.rankIt;

  if (!game.isOver) {
    elements.rankEndSummary.classList.add("is-hidden");
    elements.rankEndSummary.replaceChildren();
    return;
  }

  const title = document.createElement("strong");
  const score = document.createElement("span");
  const errors = document.createElement("span");

  title.textContent = game.errors >= RANK_MAX_ERRORS ? "Ergebnis: verloren" : "Ergebnis: gewonnen";
  score.textContent = `Score: ${game.score} von ${RANK_CANDIDATE_COUNT}`;
  errors.textContent = `Fehler: ${game.errors} von ${RANK_MAX_ERRORS}`;

  elements.rankEndSummary.replaceChildren(title, score, errors);
  elements.rankEndSummary.classList.remove("is-hidden");
}

function getCorrectRankPosition(candidate) {
  const value = candidate[getCurrentStat().field];
  const firstLowerIndex = state.rankIt.placedPlayers.findIndex(
    (player) => value > player[getCurrentStat().field]
  );

  return firstLowerIndex === -1 ? state.rankIt.placedPlayers.length : firstLowerIndex;
}

function startGuessThePlayerGame({ save = false } = {}) {
  const targetPlayer = pickGuessTarget();
  if (!targetPlayer) {
    resetGuessThePlayerState();
    renderGuessThePlayerEmpty();
    updateScores();
    showError("Für Guess the Player gibt es in dieser Filterauswahl nicht genug Spieler mit passenden Hinweisen.");
    return;
  }

  resetGuessThePlayerState();
  state.guessThePlayer.targetPlayer = targetPlayer;

  updateScores();
  renderGuessThePlayer();
  showGuessActionButtons("submit");
  setMessage("Errate den Spieler anhand der Hinweise.");
  if (save) saveActiveGameState();
}

function startNextGuessPlayerRound() {
  const game = state.guessThePlayer;
  if (!game.roundResolved || !game.lastCorrect) return;

  const previousPlayerId = game.targetPlayer?.player_id || null;
  resetGuessThePlayerState({ keepStreak: true });
  const targetPlayer = pickGuessTarget(previousPlayerId);
  if (!targetPlayer) {
    showError("Für diese Auswahl konnte kein weiterer Spieler mit passenden Hinweisen gefunden werden.");
    return;
  }

  game.targetPlayer = targetPlayer;
  updateScores();
  renderGuessThePlayer();
  showGuessActionButtons("submit");
  setMessage("Nächster Spieler: Wer ist gesucht?");
  saveActiveGameState();
}

function pickGuessTarget(excludedPlayerId = null) {
  let samplingPool = getGuessSamplingPool()
    .filter(isValidGuessTarget)
    .filter((player) => player.player_id !== excludedPlayerId);

  if (samplingPool.length === 0 && excludedPlayerId) {
    samplingPool = getGuessSamplingPool().filter(isValidGuessTarget);
  }

  if (samplingPool.length === 0) return null;

  return samplingPool[Math.floor(Math.random() * samplingPool.length)];
}

function getGuessSamplingPool() {
  if (state.playerPoolKey === "known") return state.players;

  const playersWithSamplingScore = state.players
    .map((player) => ({ player, samplingScore: getSamplingScore(player) }))
    .filter((entry) => entry.samplingScore !== null);

  if (playersWithSamplingScore.length === 0) return state.players;

  const sortedByFame = playersWithSamplingScore.sort((a, b) => b.samplingScore - a.samplingScore);
  const sampleSize = Math.max(1, Math.ceil(sortedByFame.length * 0.75));

  return sortedByFame.slice(0, sampleSize).map((entry) => entry.player);
}

function isValidGuessTarget(player) {
  const hasName = hasKnownValue(getDisplayName(player));
  const hasIdentityHint = hasKnownValue(player.citizenship) || hasKnownValue(player.main_position || player.position);
  const hasCareerValue = [
    player.scope_apps,
    player.scope_goals,
    player.scope_assists,
    player.peak_market_value,
    player.national_matches,
    player.national_goals
  ].some((value) => value !== null);

  return hasName && hasIdentityHint && hasCareerValue;
}

function renderGuessThePlayer() {
  const game = state.guessThePlayer;
  const targetPlayer = game.targetPlayer;

  if (!targetPlayer) {
    renderGuessThePlayerEmpty();
    return;
  }

  renderGuessHints(targetPlayer);
  elements.guessInput.value = game.roundResolved ? getDisplayName(targetPlayer) : "";
  elements.guessSuggestions.classList.add("is-hidden");
  elements.guessSuggestions.replaceChildren();
}

function renderGuessThePlayerEmpty() {
  elements.guessHints.replaceChildren();
  elements.guessInput.value = "";
  elements.guessInput.disabled = false;
  elements.guessSuggestions.classList.add("is-hidden");
  elements.guessSuggestions.replaceChildren();
}

function renderGuessHints(player) {
  const labels = getCurrentScope().labels;
  const facts = [
    createKnownFactElement("Nation", player.citizenship),
    createKnownFactElement("Position", player.main_position || player.position),
    createKnownFactElement("Aktueller Verein", player.current_club_name),
    createKnownFactElement("Status", getCareerStatusHint(player)),
    createKnownFactElement(labels.seasons, formatSeasonRange(player)),
    createKnownFactElement(labels.clubs, formatList(player.scope_clubs)),
    createKnownFactElement(labels.apps, formatNumber(player.scope_apps)),
    createKnownFactElement(labels.goals, formatNumber(player.scope_goals)),
    createKnownFactElement(labels.assists, formatNumber(player.scope_assists)),
    createKnownFactElement("Karriereweiter Peak-Marktwert", formatCurrency(player.peak_market_value)),
    createKnownFactElement("Länderspiele", formatNumber(player.national_matches)),
    createKnownFactElement("Länderspieltore", formatNumber(player.national_goals))
  ].filter(Boolean);

  elements.guessHints.replaceChildren(...facts);
}

function handleGuessInput() {
  const game = state.guessThePlayer;
  if (game.roundResolved) return;

  game.selectedPlayerId = null;
  const query = normalizeGuessText(elements.guessInput.value);

  if (query.length < 2) {
    elements.guessSuggestions.classList.add("is-hidden");
    elements.guessSuggestions.replaceChildren();
    saveActiveGameState();
    return;
  }

  const suggestions = state.players
    .filter((player) => normalizeGuessText(getDisplayName(player)).includes(query))
    .sort((first, second) => {
      const firstName = normalizeGuessText(getDisplayName(first));
      const secondName = normalizeGuessText(getDisplayName(second));
      return Number(!firstName.startsWith(query)) - Number(!secondName.startsWith(query));
    })
    .slice(0, 8);

  renderGuessSuggestions(suggestions);
  saveActiveGameState();
}

function renderGuessSuggestions(suggestions) {
  if (suggestions.length === 0) {
    elements.guessSuggestions.classList.add("is-hidden");
    elements.guessSuggestions.replaceChildren();
    return;
  }

  const fragment = document.createDocumentFragment();
  suggestions.forEach((player) => {
    const button = document.createElement("button");
    const name = document.createElement("strong");
    const meta = document.createElement("span");

    button.className = "suggestion-button";
    button.type = "button";
    button.setAttribute("role", "option");
    name.textContent = getDisplayName(player);
    meta.textContent = getSuggestionMeta(player);

    button.append(name);
    if (meta.textContent) button.append(meta);
    button.addEventListener("click", () => {
      state.guessThePlayer.selectedPlayerId = player.player_id;
      elements.guessInput.value = getDisplayName(player);
      elements.guessSuggestions.classList.add("is-hidden");
      elements.guessSuggestions.replaceChildren();
      saveActiveGameState();
    });

    fragment.append(button);
  });

  elements.guessSuggestions.replaceChildren(fragment);
  elements.guessSuggestions.classList.remove("is-hidden");
}

function getSuggestionMeta(player) {
  const citizenship = cleanText(player.citizenship);
  return citizenship === "Unbekannt" ? "" : citizenship;
}

function handleGuessSubmit() {
  const game = state.guessThePlayer;
  const targetPlayer = game.targetPlayer;
  if (game.roundResolved || !targetPlayer) return;

  const selectedPlayerId = game.selectedPlayerId;
  const isCorrect = selectedPlayerId
    ? selectedPlayerId === targetPlayer.player_id
    : isFreeTextGuessCorrect(elements.guessInput.value, targetPlayer);

  game.roundResolved = true;
  game.lastCorrect = isCorrect;

  if (isCorrect) {
    game.streak += 1;
    saveHighscoreIfNeeded(game.streak);
    setMessage(`Richtig! Gesucht war: ${getDisplayName(targetPlayer)}`, "success");
    renderGuessThePlayer();
    showGuessActionButtons("next");
    updateScores();
    saveActiveGameState();
    return;
  }

  game.streak = 0;
  setMessage(`Falsch. Gesucht war: ${getDisplayName(targetPlayer)}`, "error");
  renderGuessThePlayer();
  showGuessActionButtons("restart");
  updateScores();
  clearActiveGameState();
}

function isFreeTextGuessCorrect(input, targetPlayer) {
  const normalizedInput = normalizeGuessText(input);
  if (normalizedInput.length < 3) return false;

  const normalizedTargetName = normalizeGuessText(getDisplayName(targetPlayer));
  if (normalizedInput === normalizedTargetName) return true;

  return isUniqueTargetNamePart(normalizedInput, targetPlayer);
}

function isUniqueTargetNamePart(normalizedInput, targetPlayer) {
  if (normalizedInput.length < 4) return false;

  const targetTokens = getNormalizedNameTokens(targetPlayer);
  if (!targetTokens.includes(normalizedInput)) return false;

  const matchingPlayers = state.players.filter((player) => getNormalizedNameTokens(player).includes(normalizedInput));
  return matchingPlayers.length === 1 && matchingPlayers[0].player_id === targetPlayer.player_id;
}

function getNormalizedNameTokens(player) {
  return normalizeGuessText(getDisplayName(player))
    .split(" ")
    .filter((token) => token.length >= 4);
}

function normalizeGuessText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[’'`]/g, "")
    .replace(/\u2019/g, "")
    .replace(/-/g, " ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function showGuessActionButtons(mode) {
  const canSubmit = mode === "submit";

  elements.guessSubmitButton.classList.toggle("is-hidden", !canSubmit);
  elements.guessNextButton.classList.toggle("is-hidden", mode !== "next");
  elements.guessNewRoundButton.classList.toggle("is-hidden", mode !== "restart");
  elements.guessInput.disabled = !canSubmit;

  if (!canSubmit) {
    elements.guessSuggestions.classList.add("is-hidden");
  }
}

function startCareerPathGame({ save = false } = {}) {
  const targetPlayer = pickCareerPathTarget();
  if (!targetPlayer) {
    resetCareerPathState();
    renderCareerPathEmpty();
    updateScores();
    showError("Für Career Path gibt es in dieser Filterauswahl nicht genug Spieler mit einem passenden Karriereweg.");
    return;
  }

  resetCareerPathState();
  state.careerPath.targetPlayer = targetPlayer;

  updateScores();
  renderCareerPath();
  showCareerActionButtons("submit");
  setMessage("Errate den Spieler anhand seines Karrierewegs.");
  if (save) saveActiveGameState();
}

function startNextCareerPathRound() {
  const game = state.careerPath;
  if (!game.roundResolved || !game.lastCorrect) return;

  const previousPlayerId = game.targetPlayer?.player_id || null;
  resetCareerPathState({ keepStreak: true });
  const targetPlayer = pickCareerPathTarget(previousPlayerId);
  if (!targetPlayer) {
    showError("Für diese Auswahl konnte kein weiterer Spieler mit passendem Karriereweg gefunden werden.");
    return;
  }

  game.targetPlayer = targetPlayer;
  updateScores();
  renderCareerPath();
  showCareerActionButtons("submit");
  setMessage("Nächster Karriereweg: Wer ist gesucht?");
  saveActiveGameState();
}

function pickCareerPathTarget(excludedPlayerId = null) {
  let samplingPool = getGuessSamplingPool()
    .filter(isValidCareerPathTarget)
    .filter((player) => player.player_id !== excludedPlayerId);

  if (samplingPool.length === 0 && excludedPlayerId) {
    samplingPool = getGuessSamplingPool().filter(isValidCareerPathTarget);
  }

  if (samplingPool.length === 0) return null;

  return samplingPool[Math.floor(Math.random() * samplingPool.length)];
}

function isValidCareerPathTarget(player) {
  const clubs = getCleanListItems(player.career_path_clubs);
  const transfers = getCareerPathTransfers(player);

  return (
    hasKnownValue(getDisplayName(player)) &&
    clubs.length >= 3 &&
    Number(player.career_path_club_count) >= 3 &&
    transfers.length > 0
  );
}

function renderCareerPath() {
  const game = state.careerPath;
  const targetPlayer = game.targetPlayer;

  if (!targetPlayer) {
    renderCareerPathEmpty();
    return;
  }

  renderCareerClubSequence(targetPlayer);
  renderCareerTimeline(targetPlayer);

  if (game.roundResolved) {
    elements.careerInput.value = getDisplayName(targetPlayer);
    renderCareerRevealFacts(targetPlayer);
    elements.careerRevealFacts.classList.remove("is-hidden");
  } else {
    elements.careerInput.value = "";
    elements.careerRevealFacts.classList.add("is-hidden");
    elements.careerRevealFacts.replaceChildren();
  }

  elements.careerSuggestions.classList.add("is-hidden");
  elements.careerSuggestions.replaceChildren();
}

function renderCareerPathEmpty() {
  elements.careerClubSequence.replaceChildren();
  elements.careerTimeline.replaceChildren();
  elements.careerRevealFacts.classList.add("is-hidden");
  elements.careerRevealFacts.replaceChildren();
  elements.careerInput.value = "";
  elements.careerInput.disabled = false;
  elements.careerSuggestions.classList.add("is-hidden");
  elements.careerSuggestions.replaceChildren();
}

function renderCareerClubSequence(player) {
  const clubs = getCleanListItems(player.career_path_clubs);
  if (clubs.length === 0) {
    elements.careerClubSequence.replaceChildren();
    return;
  }

  const fragment = document.createDocumentFragment();
  clubs.forEach((club, index) => {
    const clubElement = document.createElement("span");
    clubElement.className = "club-pill";
    clubElement.textContent = club;
    fragment.append(clubElement);

    if (index < clubs.length - 1) {
      const arrow = document.createElement("span");
      arrow.className = "club-arrow";
      arrow.textContent = "→";
      fragment.append(arrow);
    }
  });

  elements.careerClubSequence.replaceChildren(fragment);
}

function renderCareerTimeline(player) {
  const transfers = getCareerPathTransfers(player);

  if (transfers.length === 0) {
    const fallback = document.createElement("p");
    fallback.className = "timeline-empty";
    fallback.textContent = "Keine vollständigen Transferdetails vorhanden. Nutze die Vereinssequenz als Hinweis.";
    elements.careerTimeline.replaceChildren(fallback);
    return;
  }

  const sortedTransfers = [...transfers].sort(compareTransfersChronologically);
  const fragment = document.createDocumentFragment();
  sortedTransfers.forEach((transfer) => fragment.append(createTransferStep(transfer)));
  elements.careerTimeline.replaceChildren(fragment);
}

function createTransferStep(transfer) {
  const step = document.createElement("article");
  const date = document.createElement("span");
  const route = document.createElement("strong");
  const meta = document.createElement("span");

  step.className = "transfer-step";
  date.className = "transfer-date";
  route.className = "transfer-route";
  meta.className = "transfer-meta";

  date.textContent = formatTransferTiming(transfer);
  route.textContent = `${cleanText(transfer.from_team_name)} → ${cleanText(transfer.to_team_name)}`;
  meta.textContent = formatTransferMeta(transfer);

  step.append(date, route, meta);
  return step;
}

function handleCareerInput() {
  const game = state.careerPath;
  if (game.roundResolved) return;

  game.selectedPlayerId = null;
  const query = normalizeGuessText(elements.careerInput.value);

  if (query.length < 2) {
    elements.careerSuggestions.classList.add("is-hidden");
    elements.careerSuggestions.replaceChildren();
    saveActiveGameState();
    return;
  }

  const suggestions = state.players
    .filter((player) => normalizeGuessText(getDisplayName(player)).includes(query))
    .sort((first, second) => {
      const firstName = normalizeGuessText(getDisplayName(first));
      const secondName = normalizeGuessText(getDisplayName(second));
      return Number(!firstName.startsWith(query)) - Number(!secondName.startsWith(query));
    })
    .slice(0, 8);

  renderCareerSuggestions(suggestions);
  saveActiveGameState();
}

function renderCareerSuggestions(suggestions) {
  if (suggestions.length === 0) {
    elements.careerSuggestions.classList.add("is-hidden");
    elements.careerSuggestions.replaceChildren();
    return;
  }

  const fragment = document.createDocumentFragment();
  suggestions.forEach((player) => {
    const button = document.createElement("button");
    const name = document.createElement("strong");
    const meta = document.createElement("span");

    button.className = "suggestion-button";
    button.type = "button";
    button.setAttribute("role", "option");
    name.textContent = getDisplayName(player);
    meta.textContent = getSuggestionMeta(player);

    button.append(name);
    if (meta.textContent) button.append(meta);
    button.addEventListener("click", () => {
      state.careerPath.selectedPlayerId = player.player_id;
      elements.careerInput.value = getDisplayName(player);
      elements.careerSuggestions.classList.add("is-hidden");
      elements.careerSuggestions.replaceChildren();
      saveActiveGameState();
    });

    fragment.append(button);
  });

  elements.careerSuggestions.replaceChildren(fragment);
  elements.careerSuggestions.classList.remove("is-hidden");
}

function handleCareerSubmit() {
  const game = state.careerPath;
  const targetPlayer = game.targetPlayer;
  if (game.roundResolved || !targetPlayer) return;

  const selectedPlayerId = game.selectedPlayerId;
  const isCorrect = selectedPlayerId
    ? selectedPlayerId === targetPlayer.player_id
    : isFreeTextGuessCorrect(elements.careerInput.value, targetPlayer);

  game.roundResolved = true;
  game.lastCorrect = isCorrect;

  if (isCorrect) {
    game.streak += 1;
    saveHighscoreIfNeeded(game.streak);
    setMessage(`Richtig! Gesucht war: ${getDisplayName(targetPlayer)}`, "success");
    renderCareerPath();
    showCareerActionButtons("next");
    updateScores();
    saveActiveGameState();
    return;
  }

  game.streak = 0;
  setMessage(`Falsch. Gesucht war: ${getDisplayName(targetPlayer)}`, "error");
  renderCareerPath();
  showCareerActionButtons("restart");
  updateScores();
  clearActiveGameState();
}

function renderCareerRevealFacts(player) {
  const facts = [
    createKnownFactElement("Name", getDisplayName(player)),
    createKnownFactElement("Nation", player.citizenship),
    createKnownFactElement("Position", player.main_position || player.position),
    createKnownFactElement("Aktueller Verein", player.current_club_name),
    createKnownFactElement("Status", getCareerStatusHint(player)),
    createKnownFactElement("Karriereweiter Peak-Marktwert", formatCurrency(player.peak_market_value)),
    createKnownFactElement("Länderspiele", formatNumber(player.national_matches)),
    createKnownFactElement("Länderspieltore", formatNumber(player.national_goals))
  ].filter(Boolean);

  elements.careerRevealFacts.replaceChildren(...facts);
}

function showCareerActionButtons(mode) {
  const canSubmit = mode === "submit";

  elements.careerSubmitButton.classList.toggle("is-hidden", !canSubmit);
  elements.careerNextButton.classList.toggle("is-hidden", mode !== "next");
  elements.careerNewRoundButton.classList.toggle("is-hidden", mode !== "restart");
  elements.careerInput.disabled = !canSubmit;

  if (!canSubmit) {
    elements.careerSuggestions.classList.add("is-hidden");
  }
}

function renderLeftFacts(container, player) {
  const labels = getCurrentScope().labels;

  container.replaceChildren(
    createFactElement("Nation", cleanText(player.citizenship)),
    createFactElement("Position", cleanText(player.main_position || player.position)),
    createFactElement("Aktueller Verein", cleanText(player.current_club_name)),
    createFactElement("Status", formatCareerStatus(player)),
    createFactElement(labels.apps, formatNumber(player.scope_apps)),
    createFactElement(labels.goals, formatNumber(player.scope_goals)),
    createFactElement(labels.assists, formatNumber(player.scope_assists))
  );
}

function renderPreviewFacts(container, player) {
  const labels = getCurrentScope().labels;

  container.replaceChildren(
    createFactElement("Nation", cleanText(player.citizenship)),
    createFactElement("Position", cleanText(player.main_position || player.position)),
    createFactElement("Aktueller Verein", cleanText(player.current_club_name)),
    createFactElement("Status", formatCareerStatus(player)),
    createFactElement(labels.seasons, formatSeasonRange(player)),
    createFactElement(labels.clubs, formatList(player.scope_clubs))
  );
}

function renderResolvedFacts(container, player) {
  const labels = getCurrentScope().labels;

  container.replaceChildren(
    createFactElement(labels.apps, formatNumber(player.scope_apps)),
    createFactElement(labels.goals, formatNumber(player.scope_goals)),
    createFactElement(labels.assists, formatNumber(player.scope_assists)),
    createFactElement("Karriereweiter Peak-Marktwert", formatCurrency(player.peak_market_value)),
    createFactElement("Länderspiele", formatNumber(player.national_matches)),
    createFactElement("Länderspieltore", formatNumber(player.national_goals))
  );
}

function createFactElement(label, value) {
  const wrapper = document.createElement("div");
  const term = document.createElement("dt");
  const description = document.createElement("dd");

  term.textContent = label;
  description.textContent = value;
  wrapper.append(term, description);

  return wrapper;
}

function createKnownFactElement(label, value) {
  return hasKnownValue(value) ? createFactElement(label, value) : null;
}

function hasKnownValue(value) {
  return cleanText(value) !== "Unbekannt";
}

function getCareerStatusHint(player) {
  if (hasKnownValue(player.career_status_label)) return player.career_status_label;
  if (player.career_status_key === "active") return "Aktiv";
  if (player.career_status_key === "retired") return "Karriere beendet";
  return "";
}

function getCleanListItems(value) {
  if (Array.isArray(value)) {
    return value.map(cleanText).filter((item) => item !== "Unbekannt");
  }

  const cleaned = cleanText(value);
  return cleaned === "Unbekannt" ? [] : [cleaned];
}

function getCareerPathTransfers(player) {
  if (!Array.isArray(player.career_path_transfers)) return [];

  return player.career_path_transfers.filter((transfer) => {
    if (!transfer || typeof transfer !== "object") return false;
    return hasKnownValue(transfer.from_team_name) || hasKnownValue(transfer.to_team_name);
  });
}

function compareTransfersChronologically(first, second) {
  return getTransferSortKey(first).localeCompare(getTransferSortKey(second));
}

function getTransferSortKey(transfer) {
  return cleanText(transfer.transfer_date || transfer.season_name);
}

function formatTransferTiming(transfer) {
  const season = cleanText(transfer.season_name);
  const date = cleanText(transfer.transfer_date);

  if (season !== "Unbekannt") return season;
  if (date !== "Unbekannt") return date;
  return "Zeitpunkt unbekannt";
}

function formatTransferMeta(transfer) {
  const typeLabel = formatTransferType(transfer.transfer_type);
  const feeLabel = formatTransferFee(transfer, typeLabel);
  const parts = [];

  if (typeLabel && !["Transfer", feeLabel].includes(typeLabel)) parts.push(typeLabel);
  if (feeLabel) parts.push(feeLabel);

  return parts.join(" · ") || "Ablöse: unbekannt";
}

function formatTransferType(type) {
  const normalizedType = normalizeGuessText(type);
  if (!normalizedType) return "";
  if (normalizedType.includes("loan end") || normalizedType.includes("end of loan")) return "Leihende";
  if (normalizedType.includes("loan")) return "Leihe";
  if (normalizedType.includes("free")) return "Ablösefrei";
  if (normalizedType.includes("transfer")) return "Transfer";
  return cleanText(type);
}

function formatTransferFee(transfer, typeLabel) {
  if (typeLabel === "Leihe" || typeLabel === "Leihende" || typeLabel === "Ablösefrei") return typeLabel;

  const rawFee = cleanText(transfer.transfer_fee_raw);
  const numericFee = toFiniteNumber(transfer.transfer_fee_value);
  const hasUsefulRawFee = rawFee !== "Unbekannt" && rawFee !== "0" && rawFee !== "-";

  if (hasUsefulRawFee && numericFee !== null && numericFee > 0) {
    return `Ablöse: ${rawFee} (${formatCurrency(numericFee)})`;
  }

  if (hasUsefulRawFee) return `Ablöse: ${rawFee}`;
  if (numericFee !== null && numericFee > 0) return `Ablöse: ${formatCurrency(numericFee)}`;
  if (numericFee === 0 && typeLabel === "Transfer") return "Ablösefrei";

  return "Ablöse: unbekannt";
}

function getSavedGame() {
  try {
    const saved = JSON.parse(localStorage.getItem(ACTIVE_GAME_KEY));
    if (!saved || !GAME_MODES[saved.gameMode] || !SCOPES[saved.scopeKey]) return null;
    if (!PLAYER_POOLS[saved.playerPoolKey] || !STATUS_FILTERS[saved.statusFilterKey]) return null;
    if (!isStatlessGame(saved.gameMode) && !STATS[saved.statKey]) return null;
    return saved;
  } catch {
    return null;
  }
}

function saveActiveGameState() {
  if (state.screen !== "game") return;

  const savedGame = {
    version: 16,
    gameMode: state.gameMode,
    scopeKey: state.scopeKey,
    playerPoolKey: state.playerPoolKey,
    statusFilterKey: state.statusFilterKey,
    statKey: state.statKey,
    updatedAt: new Date().toISOString()
  };

  if (state.gameMode === "rankIt") {
    if (state.rankIt.isOver || !state.rankIt.currentCandidate) return;
    savedGame.rankIt = {
      placedPlayerIds: state.rankIt.placedPlayers.map((player) => player.player_id),
      candidateQueueIds: state.rankIt.candidateQueue.map((player) => player.player_id),
      currentCandidateId: state.rankIt.currentCandidate.player_id,
      score: state.rankIt.score,
      errors: state.rankIt.errors,
      isOver: state.rankIt.isOver
    };
  } else if (state.gameMode === "guessThePlayer") {
    if (!state.guessThePlayer.targetPlayer || (!state.guessThePlayer.lastCorrect && state.guessThePlayer.roundResolved)) return;
    savedGame.guessThePlayer = {
      targetPlayerId: state.guessThePlayer.targetPlayer.player_id,
      streak: state.guessThePlayer.streak,
      roundResolved: state.guessThePlayer.roundResolved,
      lastCorrect: state.guessThePlayer.lastCorrect,
      selectedPlayerId: state.guessThePlayer.selectedPlayerId
    };
  } else if (state.gameMode === "careerPath") {
    if (!state.careerPath.targetPlayer || (!state.careerPath.lastCorrect && state.careerPath.roundResolved)) return;
    savedGame.careerPath = {
      targetPlayerId: state.careerPath.targetPlayer.player_id,
      streak: state.careerPath.streak,
      roundResolved: state.careerPath.roundResolved,
      lastCorrect: state.careerPath.lastCorrect,
      selectedPlayerId: state.careerPath.selectedPlayerId
    };
  } else {
    if (!state.higherLower.leftPlayer || !state.higherLower.rightPlayer) return;
    savedGame.higherLower = {
      leftPlayerId: state.higherLower.leftPlayer.player_id,
      rightPlayerId: state.higherLower.rightPlayer.player_id,
      streak: state.higherLower.streak,
      roundResolved: state.higherLower.roundResolved,
      lastCorrect: state.higherLower.lastCorrect
    };
  }

  localStorage.setItem(ACTIVE_GAME_KEY, JSON.stringify(savedGame));
}

function clearActiveGameState() {
  localStorage.removeItem(ACTIVE_GAME_KEY);
}

function getRandomPlayer(excludedPlayerId = null) {
  if (state.players.length < 2) return null;

  let player = null;
  do {
    player = state.players[Math.floor(Math.random() * state.players.length)];
  } while (player.player_id === excludedPlayerId);

  return player;
}

function getMinimumPlayerCount() {
  if (state.gameMode === "rankIt") return RANK_ROUND_SIZE;
  if (isStatlessGame()) return 1;
  return 2;
}

function getCurrentScope() {
  return SCOPES[state.scopeKey];
}

function getCurrentPlayerPool() {
  return PLAYER_POOLS[state.playerPoolKey];
}

function getCurrentStatusFilter() {
  return STATUS_FILTERS[state.statusFilterKey];
}

function getCurrentStat() {
  return STATS[state.statKey];
}

function getCurrentPoolPath() {
  if (state.gameMode === "careerPath") {
    return CAREER_PATH_FILES[state.scopeKey][state.playerPoolKey];
  }

  return getCurrentScope().files[state.playerPoolKey];
}

function isStatlessGame(gameMode = state.gameMode) {
  return gameMode === "guessThePlayer" || gameMode === "careerPath";
}

function getStatFactLabel(stat = getCurrentStat()) {
  if (stat.field === "peak_market_value") {
    return `Karriereweiter Peak-Marktwert der Spieler im ${getCurrentScope().poolLabel}`;
  }

  return getCurrentScope().labels[stat.labelKey];
}

function saveHighscoreIfNeeded(score) {
  if (score <= state.highscore) return;

  state.highscore = score;
  localStorage.setItem(getHighscoreKey(), String(state.highscore));
}

function getStoredHighscore() {
  const storedValue = Number(localStorage.getItem(getHighscoreKey()));
  return Number.isFinite(storedValue) ? storedValue : 0;
}

function getHighscoreKey() {
  if (state.gameMode === "guessThePlayer") {
    return `highscore_guesstheplayer_${state.scopeKey}_${state.playerPoolKey}_${state.statusFilterKey}`;
  }

  if (state.gameMode === "careerPath") {
    return `highscore_careerpath_${state.scopeKey}_${state.playerPoolKey}_${state.statusFilterKey}`;
  }

  const gameKey = state.gameMode === "rankIt" ? "rankit" : "higherlower";
  return `highscore_${gameKey}_${state.scopeKey}_${state.playerPoolKey}_${state.statusFilterKey}_${state.statKey}`;
}

function updateShell() {
  const game = GAME_MODES[state.gameMode];

  elements.setupTitle.textContent = game.title;
  elements.setupDescription.textContent = game.setupDescription;
  elements.appTitle.textContent = game.title;
  elements.ruleNote.textContent = game.rule;
  elements.higherLowerGame.classList.toggle("is-hidden", state.gameMode !== "higherLower");
  elements.rankItGame.classList.toggle("is-hidden", state.gameMode !== "rankIt");
  elements.guessPlayerGame.classList.toggle("is-hidden", state.gameMode !== "guessThePlayer");
  elements.careerPathGame.classList.toggle("is-hidden", state.gameMode !== "careerPath");
  elements.statSetupSection.classList.toggle("is-hidden", isStatlessGame());
  elements.peakNote.classList.toggle(
    "is-hidden",
    state.gameMode === "careerPath" || (state.statKey !== "peak_market_value" && state.gameMode !== "guessThePlayer")
  );
  elements.transferNote.classList.toggle("is-hidden", state.gameMode !== "careerPath");

  updateModeNote();
  updateSetupButtons();
  updateScores();
}

function updateSetupButtons() {
  elements.scopeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.scope === state.scopeKey);
  });
  elements.playerPoolButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.playerPool === state.playerPoolKey);
  });
  elements.statusButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.status === state.statusFilterKey);
  });
  elements.statButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.stat === state.statKey);
  });
}

function updateScores() {
  state.highscore = getStoredHighscore();

  if (state.gameMode === "rankIt") {
    elements.primaryScoreLabel.textContent = "Score";
    elements.primaryScore.textContent = `${state.rankIt.score}/${RANK_CANDIDATE_COUNT}`;
    elements.secondaryScoreLabel.textContent = "Fehler";
    elements.secondaryScore.textContent = `${state.rankIt.errors}/${RANK_MAX_ERRORS}`;
    elements.secondaryScoreBox.classList.remove("is-hidden");
  } else if (state.gameMode === "guessThePlayer") {
    elements.primaryScoreLabel.textContent = "Streak";
    elements.primaryScore.textContent = String(state.guessThePlayer.streak);
    elements.secondaryScoreBox.classList.add("is-hidden");
  } else if (state.gameMode === "careerPath") {
    elements.primaryScoreLabel.textContent = "Streak";
    elements.primaryScore.textContent = String(state.careerPath.streak);
    elements.secondaryScoreBox.classList.add("is-hidden");
  } else {
    elements.primaryScoreLabel.textContent = "Streak";
    elements.primaryScore.textContent = String(state.higherLower.streak);
    elements.secondaryScoreBox.classList.add("is-hidden");
  }

  elements.highscore.textContent = String(state.highscore);
}

function updateModeNote() {
  if (isStatlessGame()) {
    elements.modeNote.textContent =
      `${getCurrentScope().label} · ${getCurrentPlayerPool().label} · ${getCurrentStatusFilter().label}`;
    return;
  }

  elements.modeNote.textContent =
    `${getCurrentScope().label} · ${getCurrentPlayerPool().label} · ${getCurrentStatusFilter().label} · ${getStatFactLabel()}`;
}

function showHigherLowerAnswerButtons(show) {
  elements.higherButton.classList.toggle("is-hidden", !show);
  elements.lowerButton.classList.toggle("is-hidden", !show);
  elements.nextButton.classList.add("is-hidden");
  elements.restartButton.classList.add("is-hidden");
}

function showHigherLowerResolvedButtons(correct) {
  elements.higherButton.classList.add("is-hidden");
  elements.lowerButton.classList.add("is-hidden");
  elements.nextButton.classList.toggle("is-hidden", !correct);
  elements.restartButton.classList.toggle("is-hidden", correct);
}

function setLoadingState(isLoading) {
  [
    elements.startGameButton,
    elements.globalNewRoundButton,
    elements.higherButton,
    elements.lowerButton,
    elements.nextButton,
    elements.restartButton,
    elements.guessSubmitButton,
    elements.guessNextButton,
    elements.guessNewRoundButton,
    elements.careerSubmitButton,
    elements.careerNextButton,
    elements.careerNewRoundButton
  ].forEach((button) => {
    button.disabled = isLoading;
  });

  elements.guessInput.disabled = isLoading || (state.gameMode === "guessThePlayer" && state.guessThePlayer.roundResolved);
  elements.careerInput.disabled = isLoading || (state.gameMode === "careerPath" && state.careerPath.roundResolved);
}

function setMessage(text, type = "") {
  elements.message.textContent = text;
  elements.message.classList.toggle("is-success", type === "success");
  elements.message.classList.toggle("is-error", type === "error");
}

function showError(text) {
  setMessage(text, "error");
  showHigherLowerAnswerButtons(false);
  if (state.gameMode === "guessThePlayer") showGuessActionButtons("none");
  if (state.gameMode === "careerPath") showCareerActionButtons("none");
}

function getDisplayName(player) {
  return cleanText(player?.player_name).replace(/\s*\(\d+\)\s*$/, "");
}

function cleanText(value) {
  if (value === undefined || value === null || value === "") return "Unbekannt";
  return String(value).replace(/\s+/g, " ").trim();
}

function cleanStatusKey(value) {
  const key = cleanText(value).toLowerCase();
  return key === "active" || key === "retired" ? key : "unknown";
}

function formatCareerStatus(player) {
  if (player.career_status_key === "active") return "Aktiv";
  if (player.career_status_key === "retired") return "Karriere beendet";
  return "Unklar";
}

function formatSeasonRange(player) {
  const firstSeason = cleanText(player.scope_first_season);
  const lastSeason = cleanText(player.scope_last_season);

  if (firstSeason === "Unbekannt" && lastSeason === "Unbekannt") return "Unbekannt";
  if (firstSeason === "Unbekannt") return lastSeason;
  if (lastSeason === "Unbekannt") return firstSeason;
  if (firstSeason === lastSeason) return firstSeason;
  return `${firstSeason} bis ${lastSeason}`;
}

function formatList(value) {
  if (Array.isArray(value) && value.length > 0) {
    return value.map(cleanText).filter((item) => item !== "Unbekannt").join(", ") || "Unbekannt";
  }

  return cleanText(value);
}

function formatRankValue(player) {
  const stat = getCurrentStat();
  return `${stat.formatter(player[stat.field])} ${stat.label}`;
}

function toFiniteNumber(value) {
  if (value === undefined || value === null || value === "") return null;

  const numericValue = Number(value);
  return Number.isFinite(numericValue) ? numericValue : null;
}

function formatNumber(value) {
  const numericValue = toFiniteNumber(value);
  if (numericValue === null) return "Unbekannt";

  return new Intl.NumberFormat("de-DE").format(numericValue);
}

function formatCurrency(value) {
  const numericValue = toFiniteNumber(value);
  if (numericValue === null) return "Unbekannt";

  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0
  }).format(numericValue);
}

function shuffleArray(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }

  return copy;
}

function getInitialGameMode() {
  const storedMode = localStorage.getItem(LAST_GAME_KEY);
  return GAME_MODES[storedMode] ? storedMode : "higherLower";
}

function saveLastGameMode() {
  localStorage.setItem(LAST_GAME_KEY, state.gameMode);
}
