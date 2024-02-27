import "./styles.css";
import NFTCollection from "./NFTCollection";
import React from "react";
import NFTwithFetch from "./NFTwithFetch";
import { GridList, GridListTile } from "@material-ui/core";

export default function App() {
  const tokenIds = [1, 2, 3, 4];

  return (
    <div>
      <React.Fragment>
        <NFTCollection
          name="NFT"
          symbol="NFT"
          mintedElements={tokenIds.length}
        />
      </React.Fragment>
      <React.Fragment>
        <div style={{ width: "100%" }}>
          <div>
            <GridList spacing={10} cellHeight={"auto"} cols={3}>
              {tokenIds.map((aToken) => (
                <GridListTile key={aToken}>
                  <NFTwithFetch tokenId={aToken} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
