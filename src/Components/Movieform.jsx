import React, {useState} from 'react'



const Movieform = () => {

  const [nameInput, setNameInput]= useState([]);
  const [ratingsInput,setRatingsInput] = useState([]);
  const [durationInput,setDurationInput] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies]= useState([]);


const inputNameHandler = (e) => {
  setNameInput(e.target.value);
}

const ratingsInputHandler = (e) => {
  setRatingsInput(e.target.value);
}

const durantionInputHandler = (e) => {
  setDurationInput(e.target.value);
}

const filteredMovies = movies.filter((movie) =>
movie.name.toLowerCase().includes(searchInput.toLowerCase())
);

const AddMovie = () => {

  if(nameInput && ratingsInput>0 && ratingsInput<100 && durationInput.slice(-1)==="h" | durationInput.slice(-1)==="m"){
   
    const newMovie = {
      name: nameInput,
      rating: ratingsInput,
      duration: durationInput
      };

      const updatedMovies = [...movies, newMovie];
      setMovies(updatedMovies);
      setNameInput('');
      setRatingsInput('');
      setDurationInput('');

      alert("Movie Added")


}

      else if(!nameInput)
       alert("Error: Please enter a movie name")
      else if(!ratingsInput | ratingsInput<0 | ratingsInput>100)
       alert("Error: Please enter a rating from 0 to 100")
      else if(durationInput.slice(-1)!=="h" | durationInput.slice(-1)!=="m")
        alert("Error: Please enter a duration ex: 120m or 2.5h")
}


  return (
    <div className='container'>
    <div className='MovieForm'><br/><br/>
      <label>Movie Name <br/><input type='text' style={{width:"300px"}} onChange={inputNameHandler} value={nameInput} placeholder='Enter a Movie Name'/><br/><br/></label>
      <label>Rating <br/><input type='number' style={{width:"300px"}} onChange={ratingsInputHandler} value={ratingsInput} placeholder='Enter a Rate betwwin 0 and 100'/><br/><br/></label>
      <label>Duration <br/><input type='text'style={{width:"300px"}} onChange={durantionInputHandler} value={durationInput} placeholder='Enter a duration in hours or minutes'/><br/><br/></label>
      <button className='Button'  onClick={AddMovie}>Add Movie</button><br/><br/>
      </div>
      <div className='SearchForm'>
      <input type="text" placeholder="Search movies" value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />  
</div>
<div>
<br/><br/>
<table className='header'>
  <tr>
    <th>Name</th>
    <th>Rating</th>
    <th>Duration</th>
  </tr>
</table>

        {filteredMovies.map((movie) => (
          
        <div className='MoviesList'  key={movie.id}>
          <table className='MovieTable'>

         <tbody>
         <tr>
         <td>{movie.name}</td>
         <td>{movie.rating} / 100</td>
         <td>{movie.duration}</td>
         </tr>
         </tbody>
          </table>
          </div>
        
        ))}
    </div>
    </div>
  )
}

export default Movieform;