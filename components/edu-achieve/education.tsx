import { GraduationCap } from 'lucide-react';

const education = [
	{
		degree: 'BSc (Hons) in Computer Science',
		institution: 'University of Colombo School of Computing',
		period: 'May 2022 – April 2026',
		grade: 'GPA: 3.61 / 4.00',
		details: [
			'Key Modules: Data Structures & Algorithms | Software Engineering | Computer Networks | Operating Systems | Database Management | Object-Oriented Programming | Information Security | Machine Learning | Digital Forensics',
		],
	},
	{
		degree: 'Bachelor of Laws (LLB)',
		institution: 'University of London',
		period: 'Nov 2021 – Nov 2024',
		grade: 'Grade: Second Class Honours (Upper Division)',
		details: [
			'Modules: Contract Law | Criminal Law | Public Law | Legal Systems and Methods | Tort Law | EU Law | Administrative Law | Property Law | Jurisprudence | Intellectual Property Law | Criminology | Equity and Trusts',
		],
	},
	{
		degree: 'Mentee - ScholarX',
		institution: 'Sustainable Education Foundation, Sri Lanka',
		period: 'Oct 2023 – May 2024',
		grade: '',
		details: [
			'Selected for ScholarX, a competitive mentoring program for high-potential undergraduates in Sri Lanka, mentored by Dr. Ridwan Shariffdeen (Secure Software Research Group, National University of Singapore).',
		],
	},
	{
		degree: 'Secondary Education',
		institution: 'Visakha Vidyalaya',
		period: '2007 – 2020',
		grade: '',
		details: [
			'GCE A/Ls (2020): AAC (Combined Mathematics, Chemistry, Physics)',
			'GCE O/Ls (2017): 9 As (Core subjects, Business Studies & Accounting, Health, Drama)',
		],
	},
];

const splitLabeledDetails = (text: string) => {
	const separatorIndex = text.indexOf(':');
	if (separatorIndex === -1) {
		return { label: '', items: [text] };
	}

	const label = text.slice(0, separatorIndex + 1).trim();
	const values = text
		.slice(separatorIndex + 1)
		.split('|')
		.map((value) => value.trim())
		.filter(Boolean);

	return { label, items: values.length > 0 ? values : [text.slice(separatorIndex + 1).trim()] };
};

export default function Education() {
	return (
		<div className="relative">
			<div className="absolute left-6 top-0 bottom-0 w-px bg-primary/60 hidden sm:block" />

			<div className="space-y-5">
				{education.map((item, index) => (
					<div key={`${item.degree}-${index}`} className="sm:pl-20 relative">
						<div className="absolute left-0 top-5 hidden sm:flex w-12 h-12 rounded-full bg-card border-2 border-primary/60 items-center justify-center shadow-lg shadow-primary/10">
							<GraduationCap size={18} className="text-primary" />
						</div>

						<article className="rounded-xl border border-border/50 bg-card/30 p-3 sm:p-4 hover:border-primary/40 hover:bg-card/60 transition-all duration-300">
							<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1.5">
								<div>
									<h3 className="text-lg font-semibold text-foreground mb-0.5">{item.degree}</h3>
									<p className="text-sm font-medium text-primary">{item.institution}</p>
								</div>
								<span className="text-xs text-muted-foreground font-mono bg-muted/40 px-3 py-1 rounded-full whitespace-nowrap self-start flex-shrink-0">
									{item.period}
								</span>
							</div>

							{item.grade && <p className="text-sm text-foreground/80 mb-1">{item.grade}</p>}

							<ul className="space-y-1">
								{item.details.map((detail, detailIndex) => (
									<li key={detailIndex} className="text-sm text-foreground/70 leading-tight break-words">
										{detail.includes('|') ? (
											(() => {
												const parsed = splitLabeledDetails(detail);
												return (
													<div className="flex flex-wrap items-center gap-2">
														{parsed.label && <span className="text-foreground/80">{parsed.label}</span>}
															{parsed.items.map((value) => (
																<span
																	key={value}
																	className="px-2 py-1 text-xs rounded-md bg-muted/40 border border-border/60 text-foreground/80"
																>
																	{value}
																</span>
															))}
													</div>
												);
											})()
										) : (
											<div className="flex items-start gap-2">
												<span className="text-primary mt-0.3 flex-shrink-0">▸</span>
												<span>{detail}</span>
											</div>
										)}
									</li>
								))}
							</ul>
						</article>
					</div>
				))}
			</div>
		</div>
	);
}
