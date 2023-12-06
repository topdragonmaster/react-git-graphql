import type { User } from "graphql/generated";
import { Link } from "react-router-dom";

const UserListItem: React.FC<{ item: Partial<User> }> = ({ item }) => {
  return (
    <li data-testid="name" key={item.name} className="flex justify-between gap-x-6 py-5 bg-secondary mb-4 rounded-md px-5 border-none">
      <div className="flex gap-x-4">
        <img data-testid="avatar" className="h-12 w-12 flex-none rounded-full bg-gray-50" src={item.avatarUrl} alt="user avatar" />
        <div className="min-w-0 flex-auto">
          <Link to={`/users/${item.login}`}>
            <p className="text-sm font-semibold leading-6 text-white">{item.login || item.name}</p>
          </Link>
          <p data-testid="bio" className="mt-1 text-xs leading-5 text-white">{item.bio}</p>
        </div>
      </div>
    </li>
  );
};

export default UserListItem;
