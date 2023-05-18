import GifItem from "./GifItem";
import Loading from "./Loading";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading ? <Loading /> : ""}
      <div className="card-grid">
        {images.map((img) => (
          <div key={img.id}>
            <GifItem img={img} />
          </div>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
