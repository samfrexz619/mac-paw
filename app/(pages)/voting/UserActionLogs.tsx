

const UserActionLogs = () => {
  return ( 
    <div className="w-full bg-grey_10 h-606 flex justify-between items-center px-3 my-2 rounded-10 dark:bg-bgg">
    <div className="flex gap-x-3 h-full items-center">
      <span className="bg-white px-2 py-1 rounded-md dark:bg-paw_black dark:text-white">
        22: 35
      </span>
      <p className="text-paw_black dark:text-white">
        <span className="text-paw_grey">Image ID:</span> fQSunHvl8 <span className="text-paw_grey">was added to Favourites</span>
      </p>
    </div>
    <div className="text-paw_pry">
      <svg width="30" height="26" viewBox="0 0 30 26">
        <use xlinkHref="/sprite.svg#like" />
      </svg>
    </div>
  </div>
   );
}
 
export default UserActionLogs;