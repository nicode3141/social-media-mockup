import "./MainPage.css";
import { useState } from "react";

function MainPage() {
    const [username, setUsername] = useState("username");
    const [name, setName] = useState("Name");
    const [postsCount, setPostsCount] = useState(23);
    const [followerCount, setFollowerCount] = useState(240);
    const [followingsCount, setFollowingsCount] = useState(199);
    const [bio, setBio] = useState("Biography");
    const [content, setContent] = useState([]);
    const [isEditMode, setEditMode] = useState(false);
    const [avatarImage, setAvatarImage] = useState();

    return (
        <div className="MainPageWrapper">
            <div className="userInfoWrapper">
                <div className="username">{username}</div>
                <div className="avatarInfo">
                    <div className="userAvatarWrapper">
                        
                        <img className="userAvatar" src={(avatarImage) ? URL.createObjectURL(avatarImage) : "./defaultAvatar.png"} alt="avatar"></img>
                        {isEditMode &&(
                            <>
                                <img className="userAvatarInput" src="./pencil.svg" alt="pick image"></img>
                                <input className="userAvatarImgUpload" type="file" accept="image/png, image/jpeg, image/jpg" 
                                onChange={(event) => {
                                    console.log(event.target.files[0]);
                                    setAvatarImage(event.target.files[0]);
                                }}/>
                            </>
                        )}
                     
                        
                    </div>
                    <div className="userMetrics">
                        <div className="userPosts userMetricWrapper">
                            <span className="userStatNum">{postsCount}</span>
                            <span className="userStatDesc">posts</span>
                        </div>
                        <div className="userFollowers userMetricWrapper">
                            <span className="userStatNum">{followerCount}</span>
                            <span className="userStatDesc">followers</span>
                        </div>
                        <div className="userFollowing userMetricWrapper">
                            <span className="userStatNum">{followingsCount}</span>
                            <span className="userStatDesc">following</span>
                        </div>
                    </div>
                </div>
                <div className="userDesc">
                    <span className="nameDesc">{name}</span>
                    <span className="userBio">{bio}</span>
                </div>
                <div className="mockupEditWrapper">
                    <button className={`mockupEdit ${isEditMode? "activeEdit" : ""}`} onClick={() => {setEditMode(!isEditMode)}}>{isEditMode? "Save Changes" : "Edit Mockup"}</button>
                </div>
            </div>
            {
                isEditMode ? (
                    <div className="editWrapper">
                        <div className="formContainer">
                            <div className="formFields usernameForm">
                                <span className="formInputHeading">username</span>
                                <input className="formField" placeholder={username}
                                onChange={event => {
                                    if(event.target.value.length > 0){
                                         setUsername(event.target.value)
                                    }else{
                                        setUsername("username")
                                    }}}></input>
                            </div>
                            <div className="formFields nameForm">
                                <span className="formInputHeading">name</span>
                                <input className="formField" placeholder={name}
                                onChange={event => {
                                    if(event.target.value.length > 0){
                                         setName(event.target.value)
                                    }else{
                                        setName("Name")
                                    }}}></input>
                            </div>
                            <div className="formFields bioForm">
                                <span className="formInputHeading">biography</span>
                                <input className="formField" placeholder={bio}
                                onChange={event => {
                                    if(event.target.value.length > 0){
                                         setBio(event.target.value)
                                    }else{
                                        setBio("Biography")
                                    }}}></input>
                            </div>
                            <div className="formMetricFieldWrapper">
                                <span className="metricFormHeading">metrics</span>
                                <div className="formMetricFields">
                                    <div className="formMetricField">
                                        <input className="formMetricInput" placeholder={postsCount} type="number"
                                        onChange={event => {
                                            if(event.target.value.length > 0){
                                                 setPostsCount(event.target.value)
                                            }}}></input>
                                        <span className="formMetricDesc">Posts</span>
                                    </div>
                                    <div className="formMetricField">
                                        <input className="formMetricInput" placeholder={followerCount} type="number"
                                        onChange={event => {
                                            if(event.target.value.length > 0){
                                                 setFollowerCount(event.target.value)
                                            }}}></input>
                                        <span className="formMetricDesc">Followers</span>
                                    </div>
                                    <div className="formMetricField">
                                        <input className="formMetricInput" placeholder={followingsCount} type="number"
                                        onChange={event => {
                                            if(event.target.value.length > 0){
                                                 setFollowingsCount(event.target.value)
                                            }}}></input>
                                        <span className="formMetricDesc">Following</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="userContent">
                        <div className="contentHeading">Your Content</div>
                        <div className="contentArea">
                            {(content || content.length > 0) ? (
                                <> 
                                    <div className="addContent">
                                        <img className="addContentIcon" src="../addContent.svg" alt="addContent"></img>
                                        <div className="addContentDesc">Add Content</div>
                                    </div>
                                    <div className="ads">
                                        {/*IN DEV!*/}
                                    </div>
                                </>
                            ): (
                                <>
                                </>
                            )}
                        </div>
                    </div>
                )
            }
            
        </div>
    );
}

export default MainPage;
