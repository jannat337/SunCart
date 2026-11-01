export default function UserAvatar({ user, size = "w-10" }) {
  if (user?.image) {
    return (
      <div className="avatar">
        <div className={`${size} rounded-full ring ring-primary ring-offset-2`}>
          <img src={user.image} alt={user.name || "User"} />
        </div>
      </div>
    );
  }
  return (
    <div className="avatar avatar-placeholder">
      <div className={`${size} rounded-full bg-primary text-primary-content`}>
        <span className="text-lg font-bold">
          {user?.name?.[0]?.toUpperCase() || "U"}
        </span>
      </div>
    </div>
  );
}