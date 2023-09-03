import { CatData } from "@/lib/type";
import EmojiIcons from "@/components/ui/EmojiIcon";
interface Props {
  imgId: string;
  emojis: 'like' | 'favorite' | 'dislike';
}

const UserActionLogs = ({ imgId, emojis }: Props) => {

  const emojiType = emojis === 'like' 
    ? 'Likes' : emojis === 'favorite' 
    ? 'Favorites' 
    : 'Dislike'

  const emojiTextColor = emojis === 'like'
    ? 'text-paw_green'
    : emojis === 'favorite'
    ? 'text-paw_pry'
    : 'text-paw_yellow'

  return ( 
    <div className="w-full bg-grey_10 h-606 flex justify-between items-center px-3 my-3 rounded-10 dark:bg-bgg">
    <div className="flex gap-x-3 h-full items-center">
      <span className="bg-white px-2 py-1 rounded-md dark:bg-paw_black dark:text-white">
        22: 35
      </span>
      <p className="text-paw_black dark:text-white">
        <span className="text-paw_grey">Image ID:</span> {imgId} &nbsp;
         <span className="text-paw_grey">
          was added to {emojiType}
        </span>
      </p>
    </div>
    <div className={emojiTextColor}>
      <EmojiIcons name={emojis} />
    </div>
   </div>
   );
}
 
export default UserActionLogs;