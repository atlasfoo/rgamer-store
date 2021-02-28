import React, { useEffect, useState } from "react";
import { Container, Grid, Image, Input } from "semantic-ui-react";
import { useRouter } from 'next/router';

export default function TopBar() {
  return (
    <div className="top-bar">
      <Container>
        <Grid className="top-bar">
          <Grid.Column width={8} className="top-bar__left">
            <Logo/>
          </Grid.Column>
          <Grid.Column width={8} className="top-bar__right">
            <Search/>
          </Grid.Column>
        </Grid>
      </Container>
    </div>
  );
}


function Logo(){
  return (
    <Image src='/logo.png' alt='Gaming' as='a' href='/' />
  )
}

function Search(){
  const [searchStr, setSearchStr] = useState("");
  const [load, setLoad] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if(load){
      router.push(`/search?q=${searchStr}`)
    }
    setLoad(true);
  }, [searchStr])

  return(
    <Input
      id='search-game'
      icon={{name: "search"}}
      value={router.query["q"]}
      onChange={(_, data) => setSearchStr(data.value) }
    />
  )
}