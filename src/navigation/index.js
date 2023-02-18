import { appUrls } from '../appUrls';
import { ReactComponent as NotesIcon } from '../assets/images/icons/book.svg';

const navigation = [
  {
    id: 'all-notes',
    title: 'All notes',
    icons: <NotesIcon />,
    path: appUrls.HOME,
  },
];

export default navigation;
