import './Results.css';

// default value given on the img
function Results({ children, img = null, alt, className }) {
  return (
    <>
      <div>
        {/* JSX conditional */}
        {img && <img src={img} alt={alt} className={className} />}
        {children}
      </div>
    </>
  );
}

export default Results;
