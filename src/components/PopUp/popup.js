import React from "react";

function popup(props) {
  return props.trigger ? (
    <div className="popup">
      <form method="post" enctype="multipart/form-data">
        <input type="file" name="file" id="file" />
        <button>Submit</button>
        {props.children}
      </form>
      <p> OR </p>
      <form method="post">
        <input
          type="url"
          name="url"
          id="url"
          placeholder="https://example.com"
          pattern="https://.*"
        />
        <button>Submit</button> {props.children}
      </form>
      <button onClick={() => props.setTrigger(false)}>Cancel</button>
    </div>
  ) : (
    ""
  );
}

export default popup;
