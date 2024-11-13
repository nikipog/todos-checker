import React, { useEffect, useState } from 'react';

interface UserListProps {
    userIds: number[];
    onUserClick: (userId: number) => void;
}

interface UserAvatar {
    [key: number]: string;
}

const UserList: React.FC<UserListProps> = ({ userIds, onUserClick }) => {
    const [avatars, setAvatars] = useState<UserAvatar>({});

    useEffect(() => {
        const initialAvatars: UserAvatar = {};
        userIds.forEach(userId => {
            initialAvatars[userId] = `https://i.pravatar.cc/128?u=${userId}`;
        });
        setAvatars(initialAvatars);
    }, [userIds]);

    return (
        <div className="user-list">
            {userIds.map(userId => (
                <div
                    key={userId}
                    className="user-card"
                    onClick={() => onUserClick(userId)}
                >
                    <img
                        src={avatars[userId]}
                        alt={`Аватар ${userId}`}
                        width="128"
                        height="128"
                        className="user-avatar"
                    />
                    <span className="user-card__text">User {userId}</span>
                </div>
            ))}
        </div>
    );
};

export default UserList;
