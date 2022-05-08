import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  serverScoreIncrement,
  serverScoreDecrement,
  receiverScoreIncrement,
  receiverScoreDecrement,
} from "../data/feature/score";
import { RootState } from "../data/store";

const Court = () => {
  const { serverScore, receiverScore } = useSelector(
    (state: RootState) => state.counter
  );
  const dispatch = useDispatch();
  const [serveCourt, setServeCourt] = useState(1);
  const [receiveCourt, setReceiveCourt] = useState(1);
  const [servers, setServers] = useState([{ name: "A" }, { name: "B" }]);
  const [receivers, setReceivers] = useState([{ name: "C" }, { name: "D" }]);

  const setCourt = () => {
    const totalScore = serverScore + receiverScore;
    setServeCourt((totalScore ^ 2) % 2);
    setReceiveCourt((totalScore ^ 2) % 2);
  };

  const swapServers = () => {
    if (servers.length > 1) {
      const temp = servers[0];
      servers[0] = servers[1];
      servers[1] = temp;

      setCourt();
    }
  };

  const swapReceivers = () => {
    if (receivers.length > 1) {
      const temp = receivers[0];
      receivers[0] = receivers[1];
      receivers[1] = temp;

      setCourt();
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
        className={`player ${serveCourt === 0 && "serving"}`}
        onClick={() => {
          swapServers();
          dispatch(serverScoreIncrement());
        }}
      >
        <div className="h-full flex justify-center items-center">
          {servers[0].name}
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
        className={`relative player ${receiveCourt === 1 && "receiving"}`}
        onClick={() => {
          swapReceivers();
          dispatch(receiverScoreIncrement());
        }}
      >
        <div className="indicator top h-full flex justify-center items-center">
          {receivers[0].name}
        </div>
      </div>
      <div></div>
      <div></div>
      <div
        className={`relative player ${serveCourt === 1 && "serving"}`}
        onClick={() => {
          swapServers();
          dispatch(serverScoreIncrement());
        }}
      >
        <div className="indicator bottom h-full flex justify-center items-center">
          {servers[1].name}
        </div>
      </div>
      <div
        className={`player ${receiveCourt === 0 && "receiving"}`}
        onClick={() => {
          swapReceivers();
          dispatch(receiverScoreIncrement());
        }}
      >
        <div className={`h-full flex justify-center items-center`}>
          {receivers[1].name}
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
