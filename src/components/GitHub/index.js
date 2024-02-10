import GitHubIcon from '../../assets/icons/github.svg';

const GitHub = () => {
    return (
        <div className="github-wrapper">
            <a className="icon-wrapper" href="https://github.com/MihirMistry2/tic_tac_toe" target="_blank" rel="noopener noreferrer">
                <img className="icon" src={GitHubIcon} alt="github icon" width="34px" height="34px" />
            </a>
        </div>
    );
};
export default GitHub;
