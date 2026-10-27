function Event() {
  const sayHello = () => {
    alert("Hello Harini!");
  };

  return (
    <button onClick={sayHello}>
      Click Me
    </button>
  );
}

export default Event;