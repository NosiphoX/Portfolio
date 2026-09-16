
function BrowserFrame({ children }) {
  return (
    <div className="browser-frame">
      <div className="browser-frame__bar">
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
        <span className="browser-frame__dot" />
      </div>
      <div className="browser-frame__body">{children}</div>
    </div>
  );
}

export default BrowserFrame;