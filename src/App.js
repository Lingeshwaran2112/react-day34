import React,{useState} from 'react';
import './App.css';
import './component/movielist'
import Modal from 'react-modal'
import { Movielist } from './component/movielist';
Modal.setAppElement('#root')
function App() {
  const [name, setname]=useState('')
  const[image , setimage]=useState('')
  const[rating , setrating]=useState(0)
 const [isopen,setisopen]=useState(false)
  const [movieList , setmovielist]= useState([{

       id : 1,
      name:"Spiderman No Way Home",
    image:"http://m.gettywallpapers.com/wp-content/uploads/2021/08/Spider-Man-No-Way-Home-Wallpaper-4k-1536x864.jpg",
    rating: 9.8,
    
    },
    {
      id  : 2,
    name  :"Venom 2",
    rating: 4.2,
    image:"https://thakoni.com/wp-content/uploads/2020/09/Venom-2-Release-Date-Delayed-amp-What-We-Know-So.jpgfit768960ssl1-1200x1500.jpeg"
    
  },
    {
      id  : 3,
    name  :"KGF",
    rating: 4,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjeMZ8By7pXrKnBwMtW4UUOEuRoeXrv4JhA&usqp=CAU"
    },
   
    {
      id  : 4,
    name  :"Avengers",
    rating: 4.8,
    image:"https://image.api.playstation.com/vulcan/img/cfn/11307mfB_C9XcqTOrc2UYKVwNS-Im4Ncsv0WDC50BU-j1hyUXTfzKxgxKSMz_mbBtVoQmuvDLHzPclp__egUa2LmmHoD6uEO.png"
    
  },
    {
      id  : 5,
    name  :"Iron Man",
    rating: 4.5,
    image:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4432/674432-v"
    
  },
    {
      id  : 6,
    name  :"Master",
    rating: 4.5,
    image :"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg"
    
  },
    {
      id  : 7,
    name  : "Thuppakki",
    rating: 4,
    image :"https://upload.wikimedia.org/wikipedia/en/8/8c/Thuppakki_Audio.jpg"
    }, 

   { id :8 , 
    name : 'harry potter 3',
    rating: 4,
    image : 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-04/montage_hp5_une.jpg'
  
  },
  {
    id :9 , 
    name : 'terminator',
    rating: 3,
    image :'https://images-na.ssl-images-amazon.com/images/I/A1TkRjQssmL._SL1500_.jpg'
  
},
{id : 10 , 
name: 'harry potter 6',
rating:4,
image:'https://i.pinimg.com/564x/cc/5b/0c/cc5b0c78a09d228e696c89b0da189fda.jpg'  

}

])
  const iname = (e)=>{
   setname(e.target.value)
  }
  const onimage = (e) =>{
    setimage(e.target.value)
  }
  const mrating = (e) =>{
    setrating(parseInt(e.target.value))
  }
  const addmovie = () =>{
     if(rating<6){
    setmovielist([...movieList,{
      id : movieList.length+1,
      name : name 
      , image : image,
      rating : rating

    }])
     }
  
  }
  const display = () =>{
    setisopen(!isopen)
  }
  
  console.log(movieList)
  return (
    <div className="App">
      <h1>Movie App</h1>
      <label>Adding Movies</label><button onClick= {display} className='btn btn-primary'>+</button>
      
      <Modal isOpen={isopen} style={{
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(240, 240, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '300px',
      left: '300px',
      right: '300px',
      bottom: '300px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px',
      width: '550px',
      margin: 'auto'
      
      ,display:'flex'
    }
  }}>  
       <div className='App'>
         <h2>Add Movies</h2>
         <div className="input-group">
         <div class="input-group-prepend">
    <span class="input-group-text">Name</span>
          </div>
        <input type='text'  className='form-control' placeholder='name...' value={name} onChange={iname}/> 
         </div>

       <div className='input-group'>
       <div class="input-group-prepend">
    <span class="input-group-text">Image</span>
  </div>
        <input type='text' className='form-control' placeholder='img...' value={image} onChange={onimage}/>
       </div>

     <div className='input-group'>
     <div class="input-group-prepend">
    <span class="input-group-text">rating</span>
  </div>
        <input type='number'  className='form-control' placeholder='rating...' value={rating} onChange={mrating}/>
     </div>

     <div>
       <button onClick={addmovie} className='btn btn-primary'>addMovie</button>  
     </div>
        <div>
          <button onClick={display} className='btn btn-primary' id='close'>close</button> 
        </div> 
        </div>
      
      </Modal>
      <Movielist data={movieList}/>
    </div>
  
  );
}

export default App;
