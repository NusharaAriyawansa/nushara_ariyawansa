'use client';

import { useState } from 'react';

const awards = [
	{
		name: 'InspiHER{Tech} V2.0 — Top 10 Finalists',
		image: '/images/awards/award-1.jpg',
		issuer: 'IEEE WIE Student Branch Affinity Group of SLTC',
		issued: 'Jan 2024',
		learned:
			'My team and I secured a top 10 Finalists position among 81 teams across 23 universities in this hackathon, featuring stages like MATLAB 101, Mindfest, and Codewars.',
		skills: ['Hackathon', 'Teamwork', 'Problem Solving'],
	},
	{
		name: 'IEEEXtreme 17.0',
		image: '/images/awards/award-2.jpg',
		issuer: 'IEEE',
		issued: 'Oct 2023',
		learned:
			'A global competitive programming 24-hour hackathon hosted by IEEE, where my team and I attained the 50th island rank and 664th global rank, surpassing over 7000 participating teams.',
		skills: ['Competitive Programming', 'Problem Solving'],
	},
	{
		name: "CyberZee '23 — Top 10 Semifinalists",
		image: '/images/awards/award-3.jpg',
		issuer: 'ISACA Student Group (University of Kelaniya) & ISACA Sri Lanka Chapter',
		issued: 'Jul 2023',
		learned:
			'Organized by the ISACA Student Group of the University of Kelaniya in collaboration with the ISACA Sri Lanka Chapter, my team and I emerged as top 10 semifinalists in the inter-university cyber security quiz competition.',
		skills: ['Cybersecurity', 'Quiz Competition', 'Teamwork'],
	},
];

export default function Awards() {
	const [expanded, setExpanded] = useState<number | null>(null);

	return (
		<div className="px-0 sm:px-6">
			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
				{awards.map((award, index) => (
					<div
						key={award.name}
						className="group rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 overflow-hidden transition-all duration-300 flex flex-col h-[530px]"
					>
						<div
							className="overflow-hidden border-b border-border/30 cursor-zoom-in flex-shrink-0 bg-gray-300 flex items-center justify-center p-4"
							style={{ height: '280px' }}
							onClick={() => setExpanded(index)}
						>
							<img
								src={award.image}
								alt={award.name}
								className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
							/>
						</div>

						<div className="p-4 flex-1 flex flex-col">
							<h3 className="text-sm font-semibold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">
								{award.name}
							</h3>

							<p className="text-xs text-primary font-medium">{award.issuer}</p>
							<p className="text-xs text-muted-foreground mb-2">Issued {award.issued}</p>

							<p className="text-xs text-foreground/60 leading-relaxed line-clamp-4 mb-3">{award.learned}</p>

							<div className="flex flex-wrap gap-1.5 mt-auto">
								{award.skills.map((skill) => (
									<span
										key={skill}
										className="px-2 py-0.5 text-xs bg-secondary/10 text-secondary rounded border border-secondary/30"
									>
										{skill}
									</span>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			{expanded !== null && (
				<div
					className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 sm:p-8"
					onClick={() => setExpanded(null)}
				>
					<div className="max-w-3xl w-full" onClick={(event) => event.stopPropagation()}>
						<img src={awards[expanded].image} alt={awards[expanded].name} className="w-full rounded-lg shadow-2xl" />
						<p className="text-center text-white mt-4 text-sm">{awards[expanded].name}</p>
						<button
							onClick={() => setExpanded(null)}
							className="block mx-auto mt-3 text-xs text-muted-foreground hover:text-white transition-colors"
						>
							Click anywhere to close
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
