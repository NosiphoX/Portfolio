
import TerminalTyper from "./TerminalTyper";
import PaletteCycle from "./PaletteCycle";
import CursorOrb from "./CursorOrb";
import WordTicker from "./WordTicker";

function MicroStage({ type }) {
  switch (type) {
    case "terminal": return <TerminalTyper />;
    case "palette": return <PaletteCycle />;
    case "orb": return <CursorOrb />;
    case "ticker": return <WordTicker />;
    default: return null;
  }
}

export default MicroStage;