import config from "../config.json";
import styled from "styled-components";
import { Menu } from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

export default function HomePage() {
  console.log(config.playlists);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Menu />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Header />
        <TimeLine playlist={config.playlists} />
      </main>
    </div>
  );
}

// function Menu() {

//   return (
//     <div>
//       MENU
//     </div>
//   );
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    margin-top: 50px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/* <img src="banner" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

// interface propsTimeline {
//   name: string;
//   job: string;
//   github: string;
//   playlist: {
//     jogos: [
//       title:string,
//       url: string,
//       thumb:string
//     ],
//     frontEnd: [
//       title:string,
//       url: string,
//       thumb:string
//     ]
//   }
// }

function TimeLine(props: { playlist: { [x: string]: any } }) {
  const playlistName = Object.keys(props.playlist);

  //Statement
  //Retorno por expressão
  return (
    <StyledTimeline>
      {playlistName.map((playlistName) => {
        const videos = props.playlist[playlistName];
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((jogo: any) => {
                return (
                  <a href={jogo.url}>
                    <img src={jogo.thumb} />
                    <span>{jogo.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
