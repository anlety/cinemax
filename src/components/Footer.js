import React, {useState, useEffect} from 'react'

const Footer = () => {
  const [name, setName] = useState(null);
  const [save, setSave] = useState(false);
  const [stylePath1, setStylePath1] = useState('/style1.css');
  const [stylePath2, setStylePath2] = useState('/style2.css');
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
      let save = localStorage.getItem("save")
      if (save === "true") {
          setSave(true);
      } else {
          setSave(false);
      }
      let darkModeValue = localStorage.getItem("darkMode")
      if (darkModeValue === "true") {
          setDarkMode(true);
        
      } else {
          setDarkMode(false);
        
      }
      let savedName = localStorage.getItem("name")
      setName(savedName);
  }, [])

  const handleChange = (e) => {
      console.log(e.target.value);
      setName(e.target.value);
  }

  const handleClick = async (e) => {
      localStorage.setItem("name", name)
      localStorage.setItem("save", true)
      setSave(true);
  }
  const handleClear = (e) => {
      localStorage.clear()
      setSave(false);
      setDarkMode(false);
      setStylePath1('')
      setStylePath2('')
  }

  const handleWhite = async (e) => {
      setDarkMode(false);
      
      localStorage.setItem("darkMode", "false")
  }
  const handleBlack = async (e) => {
      setDarkMode(true);
      
      localStorage.setItem("darkMode", "true")
  }
  return (
    <footer className="mt-2 text-center p-3">
            <link rel="stylesheet" type="text/css" href={!darkMode ? stylePath1 : stylePath2} />
            {!save &&
                <div className="row footerInfo">
                    <div className="col-4">
                        <input type="text" className="form-control" placeholder="What is your Name?" onChange={handleChange} />
                    </div>
                    <div className="col-2">
                        <button onClick={handleClick} className="btn btn-dark m-1">Save</button>
                    </div>
                </div>
            }

            {save && <div>Welcome {name}
                <button onClick={handleClear} className="btn btn-primary m-1">Clear</button></div>}
            <div className='redBlue'>
                <button onClick={handleWhite} className="btn btn-danger m-1">Red</button>
                <button onClick={handleBlack} className="btn btn-primary m-1">Blue</button>
            </div>
            <div className='footerColor'>
                Cinemax App &copy; 2023
            </div>
            
        </footer>
  )
}

export default Footer