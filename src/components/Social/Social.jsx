import intagramPhoto from '../../assets/insta.png';
export const Social = () => {
  return (
    <div className="mt-10 flex" style={{ justifyContent: 'center' }}>
      <a href="https://www.instagram.com/psyhoanaliz.nenumerology/">
        <img style={{ width: 100 }} src={intagramPhoto} alt="insta" />
      </a>
    </div>
  );
};
