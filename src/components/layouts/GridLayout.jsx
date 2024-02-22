function GridLayout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "1rem",
      }}
    >
      {children}
    </div>
  );
}

export default GridLayout;
