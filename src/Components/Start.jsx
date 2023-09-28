import  '../Start.css';


const Start = (props) => {



    return (
        <section>
          <div className='start-div'>

      <h3>Welcome to Doggy Dawg</h3>
      <p>The daycare center for you and your dawg</p>
      <button onClick={props.nextScreen}>The dawgs</button>
      </div>
    
        </section>
    )
}


export default Start;