import Storages from '../storages/Storages';


export default function Slider({ storage }) {
  const listRef = 'slider/';
  return (
    <div>
      <Storages listRef={listRef} storage={storage} />
    </div>
  );
}
