const Scroll = ({ children }) => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "2px solid #9cf4db",
        height: "800px",
        padding: ".75rem 0",
      }}
    >
      {children}
    </div>
  );
};

export default Scroll;
