import profilePic from './assets/sandy cheeks.png'

function Card(){
    return(
        <div className = "card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Luhle</h2>
            <p className='card-text'>Studying at Richfield and I play video games</p>
        </div>
    );
}

export default Card