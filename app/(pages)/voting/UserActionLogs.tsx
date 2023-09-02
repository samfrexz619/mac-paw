import { CatData } from "@/lib/type";
import EmojiIcons from "@/components/ui/EmojiIcon";
interface Props {
  imgId: string;
  emojis: string;
}

const UserActionLogs = ({ imgId, emojis }: Props) => {

  switch(emojis) {
    case 'like':
      return (
        <div className="w-full bg-grey_10 h-606 flex justify-between items-center px-3 my-3 rounded-10 dark:bg-bgg">
          <div className="flex gap-x-3 h-full items-center">
            <span className="bg-white px-2 py-1 rounded-md dark:bg-paw_black dark:text-white">
              22: 35
            </span>
            <p className="text-paw_black dark:text-white">
              <span className="text-paw_grey">Image ID:</span> {imgId} &nbsp;
              <span className="text-paw_grey">was added to Favourites</span>
            </p>
          </div>
          <div className="text-paw_pry">
            <EmojiIcons name={emojis} />
          </div>
        </div>
      )
    case 'favorite':
      return (
        <div className="w-full bg-grey_10 h-606 flex justify-between items-center px-3 my-3 rounded-10 dark:bg-bgg">
          <div className="flex gap-x-3 h-full items-center">
            <span className="bg-white px-2 py-1 rounded-md dark:bg-paw_black dark:text-white">
              22: 35
            </span>
            <p className="text-paw_black dark:text-white">
              <span className="text-paw_grey">Image ID:</span> {imgId} &nbsp;
              <span className="text-paw_grey">was added to Favourites</span>
            </p>
          </div>
          <div className="text-paw_pry">
            <EmojiIcons name={emojis} />
          </div>
        </div>
      )
    case 'dislike':
      return (
        <div className="w-full bg-grey_10 h-606 flex justify-between items-center px-3 my-3 rounded-10 dark:bg-bgg">
          <div className="flex gap-x-3 h-full items-center">
            <span className="bg-white px-2 py-1 rounded-md dark:bg-paw_black dark:text-white">
              22: 35
            </span>
            <p className="text-paw_black dark:text-white">
              <span className="text-paw_grey">Image ID:</span> {imgId} &nbsp;
              <span className="text-paw_grey">was added to Favourites</span>
            </p>
          </div>
          <div className="text-paw_pry">
            <EmojiIcons name={emojis} />
          </div>
        </div>
      )
  }
  // return ( 
  //   <div className="w-full bg-grey_10 h-606 flex justify-between items-center px-3 my-3 rounded-10 dark:bg-bgg">
  //   <div className="flex gap-x-3 h-full items-center">
  //     <span className="bg-white px-2 py-1 rounded-md dark:bg-paw_black dark:text-white">
  //       22: 35
  //     </span>
  //     <p className="text-paw_black dark:text-white">
  //       <span className="text-paw_grey">Image ID:</span> {imgId} &nbsp;
  //        <span className="text-paw_grey">was added to Favourites</span>
  //     </p>
  //   </div>
  //   <div className="text-paw_pry">
  //     <EmojiIcons name={emojis} />
  //   </div>
  //  </div>
  //  );
}
 
export default UserActionLogs;