import React, { useEffect } from "react";
import StyledButton from "../styledbutton/StyledButton";
import './popup.light.css'
import './popup.dark.css'
function popup(props) {
  useEffect(() => {
    const article = { title: 'React POST Request Example' };
    axios.post('https://localhost:5000/qimage', article)
      .then(response => this.setState({ articleId: response.data.id }))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        console.error('There was an error!', error);
      });
  }, []);
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

          <form onSubmit={} enctype="multipart/form-data">
            <label for={"file"}>
              Upload Image
              <input type="file" name="file" id="file" />
            </label>

            <StyledButton>Submit</StyledButton>
          </form>
          <p> OR </p>
          <form action="/qimageurl" method="post">
            <input
              type="url"
              name="url"
              id="url"
              placeholder="https://example.com"
              pattern="https://.*"
            />
            <StyledButton>Submit</StyledButton>
          </form>
        </div>
      </div>
    </div>
  )
}

export default popup;
