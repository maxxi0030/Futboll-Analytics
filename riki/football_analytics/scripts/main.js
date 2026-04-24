// логика интерфейса

import { searchTeams, fetchMatchData } from "./api.js";
import { calculateWinProbability } from "./calculator.js";

let selectedTeam1 = null;
let selectedTeam2 = null;