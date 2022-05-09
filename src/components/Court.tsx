import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  serverScoreIncrement,
  receiverScoreIncrement,
} from "../data/feature/score";
import {
  setServeTeam,
  setServerPosition,
  setReceiverPosition,
} from "../data/feature/serve";
import { RootState } from "../data/store";

const Court = () => {
  const { serverScore, receiverScore } = useSelector(
    (state: RootState) => state.counter
  );
  const { serveTeam, serverPosition, receiverPosition } = useSelector(
    (state: RootState) => state.serve
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setServeTeam(1));
  }, [dispatch]);

  const [teamA, setTeamA] = useState([
    "Team A - Player 1",
    "Team A - Player 2",
  ]);

  const [teamB, setTeamB] = useState([
    "Team B - Player 1",
    "Team B - Player 2",
  ]);

  const changePositionA = () => {
    if (serveTeam === 1) {
      swapTeamA();
    } else {
      dispatch(setServeTeam(1));
    }
    dispatch(setServerPosition(serverScore + 1));
    dispatch(serverScoreIncrement());
  };

  const changePositionB = () => {
    if (serveTeam === 2) {
      swapTeamB();
    } else {
      dispatch(setServeTeam(2));
    }
    dispatch(receiverScoreIncrement());
    dispatch(setReceiverPosition(receiverScore + 1));
  };

  const swapTeamA = () => {
    if (teamA.length > 1) {
      const temp = teamA[0];
      teamA[0] = teamA[1];
      teamA[1] = temp;

      setTeamA(teamA);
    }
  };

  const swapTeamB = () => {
    if (teamB.length > 1) {
      const temp = teamB[0];
      teamB[0] = teamB[1];
      teamB[1] = temp;

      setTeamB(teamB);
    }
  };

  return (
    <div className="court">
      <div></div>
      <div></div>
      <div></div>
      <div className="net">
        <div className="post post-top"></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div
        className={`player ${serverPosition === 1 ? "serving" : ""}`}
        onClick={() => changePositionA()}
      >
        <div className="h-full flex justify-center items-center">
          {teamA[0]}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <span className="uppercase text-3xl tracking-widest text-white">
          {serverScore}
        </span>
      </div>
      <div className="net flex justify-center items-center">
        <span className="uppercase text-3xl tracking-widest text-white">
          {receiverScore}
        </span>
      </div>
      <div
        className={`relative player ${
          receiverPosition === 0 ? "receiving" : ""
        }`}
        onClick={() => changePositionB()}
      >
        <div className="indicator top h-full flex justify-center items-center">
          {teamB[0]}
        </div>
      </div>
      <div></div>
      <div></div>
      <div
        className={`relative player ${serverPosition === 0 ? "serving" : ""}`}
        onClick={() => changePositionA()}
      >
        <div className="indicator bottom h-full flex justify-center items-center">
          {teamA[1]}
        </div>
      </div>
      <div
        className={`player ${receiverPosition === 1 ? "receiving" : ""}`}
        onClick={() => changePositionB()}
      >
        <div className={`h-full flex justify-center items-center`}>
          {teamB[1]}
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div className="net">
        <div className="post post-bottom"></div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Court;
