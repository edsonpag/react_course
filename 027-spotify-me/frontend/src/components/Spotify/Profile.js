import React from "react";

import "./Profile.css";

function Profile({ spotifyData }) {

    return (
        <div className="profile">
            <img src={spotifyData.images[0].url} alt="Foto de perfil" className="profile-picture"/>
            <p className="name">{spotifyData.display_name}</p>
            <div className="user-information">
                <p className="followers">
                    <span className="green">{spotifyData.followers.total}</span>
                    followers
                </p>
                <p>
                    <span className="green">{spotifyData.following.total}</span>
                    following
                </p>
                <p className="playlist">
                    <span className="green">{spotifyData.playlists.length}</span>
                    playlist
                </p>
            </div>
        </div>
    );
}

export default Profile;