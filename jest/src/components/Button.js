export function Button(props) {
  //SNAPSHOT
  // return <div></div>
  // return (
  //   <button>
  //   </button>
  // )
  //## GREEN TEST 01
  const { content, handleClick, classe } = props;
  return (
    //<button className={classe} onClick={handleClick}>
    // {content}
    //</button>
    <button className={classe} onClick={handleClick}>
      {content}
    </button>
  )
}