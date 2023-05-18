const GifItem = ({ img }) => {
  return (
    <div className="card">
      <img src={img.url} alt={img.title} />
    </div>
  );
};

export default GifItem;
