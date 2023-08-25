


interface Props {
  iconName: string;
  height: string;
  width: string;
  viewBox: string;
}


const Icon = ({ iconName, height, width, viewBox}: Props) => {
  return ( 
    <div className="w-11 h-11 rounded-[10px] text-paw_pry bg-hover_pry flex justify-center items-center">
      <svg width={width} height={height} viewBox={viewBox}>
        <use xlinkHref={`/sprite.svg#${iconName}`} />
      </svg>
    </div>
   );
}
 
export default Icon;