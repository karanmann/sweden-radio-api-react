import { LatestNews } from './LatestNews';
import { Programs } from './Programs';
import { RadioChannels } from './RadioChannels';
import { Weather } from './Weather';



export const Main = () => {
  return (
    <>
      <p>Main Page</p>
      <LatestNews />
      <Weather />
      <RadioChannels />
      <Programs />
    </>
  )
}