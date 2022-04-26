
function TopNav() {
    const handleClick = () => {
        console.log('cUstom PANEL');
      };

  return (
    <nav >
      <div className="container">
        {/* <button
          className="btn btn-sm btn-outline-primary"
          onClick={handleClick}
        >
          <i className="fa fa-bars"></i>
        </button> */}
        <div className="panel__devices"></div>
        <div className="panel__editor"></div>
        <div className="panel__basic-actions"></div>
      </div>
    </nav>
  );
}

export default TopNav;
