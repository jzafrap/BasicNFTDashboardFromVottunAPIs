import { useState, useEffect } from "react";
import { Card, CardActionArea, CardMedia } from "@material-ui/core";

export default function NFTwithFetch(props) {
  const [nft, setNft] = useState({ uri: "./no_preview.jpg" });

  const myHeaders = new Headers();
  myHeaders.append("x-application-vkn", process.env.REACT_APP_ID);
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", "Bearer " + process.env.REACT_APP_KEY);

  const raw = JSON.stringify({
    contractAddress: "0x11C5e65cAf3F94FCF897C9072341b861dc6D62e8",
    network: 80001,
    id: props.tokenId,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  useEffect(() => {
    fetch("https://api.vottun.tech/erc/v1/erc721/tokenUri", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setNft(data);
      });
  }, []);
  return (
    <div>
      <Card style={{ maxWidth: 300 }} elevation={6}>
        <CardActionArea>
          <CardMedia
            style={{ height: 0, paddingTop: "56%" }}
            image={nft.uri}
            title={"img:" + nft.uri}
          />
        </CardActionArea>
      </Card>
    </div>
  );
}
