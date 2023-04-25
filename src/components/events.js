

function Events(props) {

  return (
    <div>
        <div style={{display: "flex"}}>
          <p style={{fontSize: "30px", flexGrow: "1"}}>{props.title}</p>
          <button className="button action">View</button>
          <button className="button secondary">Edit</button>
          <button className="button alert">Delete</button>
        </div >
        <br />
    </div>
  );
}

export default Events;