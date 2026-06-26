const UserProfile = ({name,job_title}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{job_title}</p>
        </div>
    );
};

export default UserProfile;
