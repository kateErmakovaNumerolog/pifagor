import kateImage from '../../assets/katia.png';
export const PhotoContainer = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className="mt-10"
    >
      <img
        style={{ width: 100, height: 100, borderRadius: 50 }}
        src={kateImage}
        alt="katia"
      />
    </div>
  );
};
