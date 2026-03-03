'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const volunteeringItems = [
	{
		organization: 'IEEE Student Branch of UCSC',
		imageLabel: '/images/volunteering/2.jpeg',
		period: '2022 - 2025',
		roles: 'Treasurer (2024/25), Editorial Lead (2023/24), Content Team Member (2023, 2022)',
		details:
			'Managed budgeting and content for major IEEE events including IEEE Day, InfiniteLoop, and RevolUX.',
		skills: ['Budgeting', 'Editorial', 'Content Strategy', 'Event Management'],
	},
	{
		organization: 'UCSC ISACA Student Group',
		imageLabel: '/images/volunteering/4.jpeg',
		period: '2022 - 2025',
		roles: 'Executive Committee Member - Public Relations (2024/25, 2023/24), Member (2023, 2022)',
		details:
			'Handled student outreach and communications while supporting chapter activities and community engagement.',
		skills: ['Public Relations', 'Communications', 'Community Engagement'],
	},
	{
		organization: 'Rotaract Club of CfPS Law School',
		imageLabel: '/images/volunteering/rota.jpeg',
		period: '2021 - 2023',
		roles: 'Vice President (2023/22), Director of Community Service (2022/21)',
		details:
			'Led community service initiatives including charity drives and outreach programs.',
		skills: ['Leadership', 'Community Service', 'Program Coordination'],
	},
	{
		organization: 'Visakha Vidyalaya',
		imageLabel: '/images/volunteering/visakha.jpeg',
		period: '2007 - 2020',
		roles:
			'Senior Prefect (2018/19), Junior Prefect (2016/17), National Squash Athlete, President Girl Guide, Member of the Senior Eastern Band',
		details:
			'Served in student leadership roles while actively contributing to sports, Girl Guiding movement, and extracurricular activities.',
		skills: ['Student Leadership', 'Teamwork', 'Sportsmanship', 'Discipline'],
	},
	{
		organization: 'UCSC ACM Student Chapter',
		imageLabel: '/images/volunteering/1.jpeg',
		period: '2022 - 2025',
		roles: 'Executive Committee Member (2024/25), Content Team Member (2023/24, 2023, 2022)',
		details:
			'Contributed to chapter planning and content creation to support technical events and student engagement.',
		skills: ['Content Creation', 'Technical Community', 'Event Support'],
	},
	{
		organization: 'Gavel Club of University of Colombo',
		imageLabel: '/images/volunteering/gavel.jpeg',
		period: '2022 - 2025',
		roles: "Delegates Team Lead for SpeakOut'22, Logistics Team Lead for Enliven'23",
		details:
			'Coordinated delegates and logistics for public speaking events, ensuring smooth event execution.',
		skills: ['Public Speaking', 'Logistics', 'Team Leadership'],
	},
	{
		organization: 'IEEE WIE Student Branch Affinity Group of UCSC',
		imageLabel: '/images/volunteering/3.jpeg',
		period: '2022 - 2025',
		roles: "Content Team Lead for WiCSat'22, Public Relations Lead for FallCode'23",
		details:
			'Led content and public relations efforts to increase participation and visibility for women-in-tech initiatives.',
		skills: ['Public Relations', 'Content Leadership', 'Women in Tech Advocacy'],
	},
];

export default function Volunteering() {
	const [startIdx, setStartIdx] = useState(0);
	const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
	const isMobile = useIsMobile();
	const visibleCount = isMobile ? 1 : 4;

	const prev = () =>
		setStartIdx((prevIdx) =>
			(prevIdx - 1 + volunteeringItems.length) % volunteeringItems.length
		);
	const next = () =>
		setStartIdx((prevIdx) => (prevIdx + 1) % volunteeringItems.length);

	const visibleItems = Array.from({ length: visibleCount }, (_, index) =>
		volunteeringItems[(startIdx + index) % volunteeringItems.length]
	);

	return (
		<div className="relative px-0 sm:px-6">
			<button
				onClick={prev}
				className="absolute left-1 sm:-left-1 top-[67%] -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/60 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg"
			>
				<ChevronLeft size={20} />
			</button>

			<button
				onClick={next}
				className="absolute right-1 sm:-right-1 top-[67%] -translate-y-1/2 z-10 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/20 border border-primary/60 hover:bg-primary/40 flex items-center justify-center text-primary hover:text-white transition-all duration-300 shadow-lg"
			>
				<ChevronRight size={20} />
			</button>

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5">
				{visibleItems.map((item, idx) => (
					<div
						key={`${startIdx}-${idx}-${item.organization}`}
						className="group rounded-lg border border-border/50 bg-card/30 hover:bg-card/70 hover:border-primary/50 overflow-hidden transition-all duration-300 flex flex-col h-[500px]"
					>
						<div
							className="overflow-hidden border-b border-border/30 flex-shrink-0 bg-muted/40 flex items-center justify-center p-2"
							style={{ height: '160px' }}
						>
							{failedImages[item.imageLabel] ? (
								<p className="text-[11px] text-muted-foreground font-mono break-all text-center px-2">
									Image not found: {item.imageLabel}
								</p>
							) : (
								<img
									src={item.imageLabel}
									alt={item.organization}
									className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
									onError={() =>
										setFailedImages((prev) => ({
											...prev,
											[item.imageLabel]: true,
										}))
									}
								/>
							)}
						</div>

						<div className="p-4 flex-1 flex flex-col">
							<h3 className="text-sm font-semibold text-foreground mb-2 transition-colors leading-snug line-clamp-3">
								{item.roles}
							</h3>

							<p className="text-xs text-primary font-medium">{item.organization}</p>
							<p className="text-xs text-muted-foreground mb-2">{item.period}</p>

							<p className="text-xs text-foreground/60 leading-relaxed line-clamp-4 mb-3">
								{item.details}
							</p>

							<div className="flex flex-wrap gap-1.5 mt-auto">
								{item.skills.map((skill) => (
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

			<div className="flex justify-center gap-2 mt-4">
				{volunteeringItems.map((_, idx) => (
					<button
						key={idx}
						onClick={() => setStartIdx(idx)}
						className={`h-2 rounded-full transition-all duration-300 ${
							idx === startIdx ? 'bg-primary w-4' : 'bg-border/60 hover:bg-primary/50 w-2'
						}`}
					/>
				))}
			</div>
		</div>
	);
}
