import './BrandFramework.css';

export default function BrandFramework() {
  return (
    <div className="diagram-container">
      <svg className="lines" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
        <polygon className="hourglass-left" points="0,100 500,225 500,275 0,400" />
        <polygon className="hourglass-right" points="1200,100 700,225 700,275 1200,400" />
      </svg>

      <div className="section society">
        <h2>Society</h2>
        <p>Canon of values</p>
        <p>Link to the Brand</p>
      </div>

      <div className="section human">
        <h2>Human</h2>
        <p>What people value</p>
      </div>

      <div className="brand-core">
        Your<br />Brand
      </div>

      <div className="section brand">
        <p>What makes your brand valuable</p>
        <h2>Brand</h2>
        <p>Yesterday<br />Today<br />Tomorrow</p>
      </div>

      <div className="section competition">
        <h2>Competition</h2>
        <p>Remarkable in competitive market</p>
      </div>
    </div>
  );
}
