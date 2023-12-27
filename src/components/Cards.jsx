import './Cards.css';

function Cards({ children, img, className }) {
  return (
    <div>
      <img src={img} className={className}></img>
      {children}
    </div>
  );
}

export default Cards;
