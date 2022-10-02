import React from "react";

const FLEXTEAM = [
	{
		name: "Ryan Aulia",
		role: "Founder & CEO",
		photo: "assets/images/teams/ryan.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
			twitter: "https://twitter.com/aulianzaa",
		},
	},
	{
		name: "Farhan Ramadhana",
		role: "Co-Founder & CTO",
		photo: "assets/images/teams/farhan.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Bagoes Muliawan",
		role: "Co-Founder & CPO",
		photo: "assets/images/teams/bagoes.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Muhammad Fadhil",
		role: "Chief Operating Officer",
		photo: "assets/images/teams/fadhil.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Eko Wahyudi",
		role: "Digital Marketing",
		photo: "assets/images/teams/eko.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Ryan Achdiadsyah",
		role: "Fullstack Developer",
		photo: "assets/images/teams/achdiadsyah.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Faeri Hafriza",
		role: "Fullstack Developer",
		photo: "assets/images/teams/faeri.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Khairul Bahri",
		role: "Senior Frontend Developer",
		photo: "assets/images/teams/khairul.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	{
		name: "Muhammad Ridha Aulia",
		role: "UI/UX Designer",
		photo: "assets/images/teams/aulia.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
	// {
	// 	name: "Astri Yulianti",
	// 	role: "UI/UX Designer",
	// 	photo: "assets/images/teams/you.jpg",
	// 	social: {
	// 		linkedin: "https://linkedin.com/in/aulianza",
	// 		instagram: "https://instagram.com/aulianza",
	// 	},
	// },
	{
		name: "Kana Rekha",
		role: "UI/UX Designer",
		photo: "assets/images/teams/kana.png",
		social: {
			linkedin: "https://linkedin.com/in/aulianza",
			instagram: "https://instagram.com/aulianza",
		},
	},
];

const Team = () => {
	return (
		<>
			<section id="our-team" className="team-section pt-60 pb-120">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-md-12">
							<div className="section-heading text-center">
								<h5 className="h6 text-primary">Our Team</h5>
								<h2>The People Behind FlexCode</h2>
								<p>
									We are proud to call ourselves FlexTeam because we are always
									there for you.
								</p>
							</div>
						</div>
					</div>
					<div className="row justify-content-center">
						{FLEXTEAM.map((item, index) => (
							<div className="col-lg-3 col-md-6" key={index}>
								<div className="team-single-wrap mb-5">
									<div className="team-img rounded-custom">
										<img
											src={item?.photo}
											alt="team"
											className="img-fluid position-relative"
										/>
										<ul className="list-unstyled team-social-list d-flex flex-column mb-0">
											{item?.social?.linkedin && (
												<li className="list-inline-item">
													<a
														href={item?.social?.linkedin}
														target="_blank"
														rel="noreferrer"
													>
														<i className="fab fa-linkedin-in"></i>
													</a>
												</li>
											)}
											{item?.social?.instagram && (
												<li className="list-inline-item">
													<a
														href={item?.social?.instagram}
														target="_blank"
														rel="noreferrer"
													>
														<i className="fab fa-instagram"></i>
													</a>
												</li>
											)}
											{item?.social?.twitter && (
												<li className="list-inline-item">
													<a
														href={item?.social?.twitter}
														target="_blank"
														rel="noreferrer"
													>
														<i className="fab fa-twitter"></i>
													</a>
												</li>
											)}
										</ul>
									</div>
									<div className="team-info mt-4 text-center">
										<h5 className="h6 mb-0">{item?.name}</h5>
										<p className="text-muted mb-0">{item?.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Team;
