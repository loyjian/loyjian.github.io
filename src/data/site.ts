export type SocialIcon = 'email' | 'github' | 'scholar' | 'linkedin';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export const siteConfig = {
  isDraft: false,
  name: '罗才健',
  englishName: 'Caijian Luo',
  initials: 'CL',
  title: 'Caijian Luo · Hunan University of Science and Technology',
  description:
    'Undergraduate student in Internet of Things Engineering working on side-channel analysis and hardware security.',
  institution: 'Hunan University of Science and Technology',
  location: 'Xiangtan, China',
  eyebrow: 'IoT Engineering · HNUST',
  headline: 'Studying security through unintended physical leakage.',
  introduction:
    'I study information leakage from the physical behavior of embedded devices and the methods used to analyze and mitigate it.',
  email: 'caijianluo@163.com',
  profileImage: '',
  lab: {
    name: 'Laboratory of Intelligent Systems and Applications (LISA)',
    url: 'https://sca-hnust.github.io/',
  },
  socials: [
    {
      label: 'Email',
      href: 'mailto:caijianluo@163.com',
      icon: 'email',
    },
  ] satisfies SocialLink[],
  learning: [
    {
      index: '01',
      title: 'FPGA Design and Implementation',
      description:
        'HDL-based digital design, functional simulation, synthesis and implementation, timing constraints and analysis, and on-board verification.',
    },
    {
      index: '02',
      title: 'Side-Channel Analysis',
      description:
        'Leakage modeling, trace acquisition and preprocessing, leakage assessment, profiled attacks, key-recovery evaluation, and countermeasure analysis.',
    },
  ],
  research: [
    {
      label: 'Research topic · 01',
      title: 'Far-field EM side-channel analysis with incomplete traces',
      summary:
        'This work studies AES key recovery from far-field electromagnetic traces and uses a liquid neural network to model both complete traces and incomplete traces with non-uniform sampling intervals.',
      tags: ['Side-channel attacks', 'Far-field EM emissions', 'Liquid neural network', 'AES', 'Incomplete trace'],
    },
    {
      label: 'Research topic · 02',
      title: 'Evaluating clock-jitter countermeasures',
      summary:
        'This work quantifies the resistance of clock-jitter countermeasures against deep-learning-based side-channel attacks across multiple AES implementations, leakage sources, defense strengths, and attacker-knowledge settings.',
      tags: ['Side-Channel Attacks', 'Countermeasures', 'Advanced Encryption Standard', 'Deep Learning', 'Communication Security'],
    },
  ],
  education: {
    school: 'Hunan University of Science and Technology',
    degree: 'B.Eng. candidate in Internet of Things Engineering',
    period: 'Sep 2023 — Jun 2027',
    details: 'School of Computer Science and Engineering · Xiangtan, China',
  },
} as const;
