import "./styles.css";

export default function NFTCollection(props) {
  return (
    <div className="App">
      <h1>This is {props.name} NFT collection!</h1>
      <h2>
        Already minted {props.mintedElements} {props.symbol} nfts!
      </h2>
    </div>
  );
}
