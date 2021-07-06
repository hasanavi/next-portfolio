import type { FC } from "react";
import { Timeline } from "react-twitter-widgets";

interface TwitterTimeLineProps {
  userName: string;
}

const TwitterTimeline: FC<TwitterTimeLineProps> = ({ userName }) => (
  <Timeline
    dataSource={{
      sourceType: "profile",
      screenName: userName,
    }}
    options={{
      username: userName,
      height: "350",
    }}
  />
);

export default TwitterTimeline;
