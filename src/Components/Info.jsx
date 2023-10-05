import '../Info.css';


const Info = (props) => {
  const { breed, age, img, name, sex, present } = props.dog; // Ta emot dog-objektet som props

  return (
    <div className='info-container'>
      <h3>{name}</h3>
      <img src={img}
        alt={name} />
      <p>Ras: {breed}</p>
      <p>Ålder: {age}</p>
      <p>Kön: {sex}</p>

      {present ? <p>Status: På Golden Dogs</p> : <p>Status: Hemma</p>}

    </div>
  );
}

export default Info;