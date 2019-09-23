import React, {useState, useEffect} from "react";
import "./../App.scss";

const initProfile = {
	followers: null,
	publicRepos: null
}

function AppUseEffectAsync() {
	const [profile, setProfile] = useState(initProfile)
	
	async function getProfile() {
		const response = await fetch('https://api.github.com/users/SparkeEcrash');
		const json = await response.json();

		setProfile({
			followers: json.followers,
			publicRepos: json.public_repos
		})
	}

	useEffect(() => {
		getProfile();
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<h2>Fetch Data</h2>
				<h3>{`followers: ${profile.followers}, repos: ${profile.publicRepos}`}</h3>
			</header>
		</div>
	)
}

export default AppUseEffectAsync;