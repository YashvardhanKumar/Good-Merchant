import React, { useEffect, useState } from "react";
import { useHistory,withRouter } from "react-router-dom";
import StyledButton from "../styledbutton/StyledButton";
import './popup.light.css'
import './popup.dark.css'
let searchQ

function Popup(props) {
  let [imageFile, setimageFile] = useState({})
  const [submitted, setSubmitted] = useState(false);
  let [urlInput, seturlInput] = useState({
    url: ""
  })
  const history = useHistory();
  const onAddFile = (event) => {
    event.target.value = null
    setimageFile(event.target.files[0])
  }
  const onAddUrl = (event) => {
    const { value, name } = event.target
    seturlInput(() => {
      if (name === 'url') {
        return { url: value }
      }
    })
  }

  const handleSubmitFile = (event) => {
    event.preventDefault()
    // var myHeaders = new Headers();
    // myHeaders.append("Cookie", "session=.eJyrVopPy0kszkgtVrKKrlZSKAFSSrmpxcWJ6alKOkp--QppmTmpCgWJRSVKsbU6I0pFbC0AhL5cIA.YhFNSQ.aM-CI_0z8avhaT6gRDWyTcxQG28");

    // var formdata = new FormData();
    // formdata.append("file", imageFile.files[0], "");
    // var requestOptions = {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: 'follow'
    // };

    // fetch("http://localhost:5000/qimage", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    if (imageFile.files.length == 0) {
      console.log(`No files chosen`);
      return;
    }

    // assume only one file - read it, and when it's ready, upload to google drive
    const file = imageFile.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      console.log(`File loaded locally - uploading`)
      fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=media', {
        method: 'POST',
        headers: {
          'Content-Type': file.type,
          'Content-Length': file.size
        },
        body: reader.result
      })
        .then(data => data.json())
        .then(console.log)
        .catch(console.error)
    }
    reader.readAsArrayBuffer(file);

  }

  const handleSubmitUrl = (event) => {
    event.preventDefault()
    var myHeaders = new Headers();
    myHeaders.append("Cookie", "session=.eJyrVopPy0kszkgtVrKKrlZSKAFSSrmpxcWJ6alKOkp--QppmTmpCgWJRSVKsbU6Q0ZFbC0ABkNGag.YhFDDg.anjpgAej5rLZsMRr2lVsHJsjLH4");
    var formdata = new FormData();
    formdata.append("url", urlInput.url);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch("https://good-merchant-image-classifier.herokuapp.com/qimageurl", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setSubmitted(true)
        history.push('/search?q=' + result.q)
        window. location. reload() 
        // history.replace()
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="popup-container">
      <div className="popup">
        <div className="popup-heading">
          <h3>Upload Image To Search</h3>
          <StyledButton className={"cancel"} onClick={() => props.toggleMenu(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#1C0C5B">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
            </svg>

          </StyledButton>
        </div>
        <div className="popup-content">

          {/* <form onSubmit={handleSubmitFile} encType='multipart/form-data'>
            <label for={"file"}>
              {(!setIsFile) ? "Upload Image" : "Uploaded!"}
              <input type="file" ref={(ref) => setimageFile(ref)} name="file" id="file" onChange={onAddFile} />
            </label>

            <StyledButton type={"submit"}>Submit</StyledButton>
          </form>
          <p> OR </p> */}
          <form onSubmit={handleSubmitUrl}>
            <input
              type="url"
              name="url"
              id="url"
              onChange={onAddUrl}
              placeholder="https://example.com"
              pattern="https://.*"
            />
            <StyledButton type={"submit"}>Submit</StyledButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Popup)
