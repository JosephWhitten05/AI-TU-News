---
title: "OpenAI: First Casualty of the New AI Accountability Wave"
date: 2026-10-13
author: "Joseph Whitten, AI@TU Outreach Chair"
summary: "Over the past several years, America has largely fallen behind Europe and parts of Asia in data and AI regulation — but skepticism and a desire for accountability have grown fast among Americans and lawmakers alike. This shift recently hit OpenAI, which now faces legal pressure on four different fronts. These include an FTC probe, a subpoena from the California attorney general, a lawsuit from the Legal Advocates for Safe Science and Technology, and a bipartisan proposed bill that would hold operators and developers liable for AI accidents — all tracing back to the July Hugging Face incident."
mention:
  headline: "Real Life I, Robot"
  body: |-
    Not AI, but worth a mention. If you've been on TikTok or YouTube recently, you've probably seen videos of a guy fighting large, humanoid-like robots in an octagon. At first it might seem fake, but it's actually real.

    A company called Robot Entertainment Kombat (REK) held a human vs. robot cage fight in San Francisco. A YouTube influencer named Frankie LaPenna decided to try his hand. He entered the octagon and fought three remote-controlled robots, one after another. Frankie even signed a waiver stating the company wouldn't be held liable if he was killed in the ring. Surprisingly, he finished the bouts in pretty good shape, suffering only a hand injury — nothing major.

    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@frankielapenna/video/7687687037360540959" data-video-id="7687687037360540959" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@frankielapenna" href="https://www.tiktok.com/@frankielapenna?refer=embed">@frankielapenna</a> World's first human vs. 6ft terminator robot battle. Is the end near? Or do we still stand a chance? <a title="robot" target="_blank" href="https://www.tiktok.com/tag/robot?refer=embed">#robot</a> <a title="clanker" target="_blank" href="https://www.tiktok.com/tag/clanker?refer=embed">#clanker</a> <a title="martialarts" target="_blank" href="https://www.tiktok.com/tag/martialarts?refer=embed">#martialarts</a> <a title="boxing" target="_blank" href="https://www.tiktok.com/tag/boxing?refer=embed">#boxing</a> <a title="technology" target="_blank" href="https://www.tiktok.com/tag/technology?refer=embed">#technology</a> <a target="_blank" title="♬ REI DOS REIS (Slowed) - RXDFXRCE" href="https://www.tiktok.com/music/REI-DOS-REIS-Slowed-7580437255677872145?refer=embed">♬ REI DOS REIS (Slowed) - RXDFXRCE</a> </section> </blockquote>
    <script async src="https://www.tiktok.com/embed.js"></script>

    After it went public, the California State Athletic Commission sent REK a cease-and-desist, to which REK essentially said I don't think I will. Their argument is that a 'match' is between two persons, and a robot is not a person, so the commission can't actually stop them. Meanwhile, they've changed their next event to robot-only, called the "REK Deathmatch."
tip:
  headline: "Ask for a Probability, Not a Pick"
  body: |-
    When you ask ChatGPT to choose between two options, like A or B, it tends to pick one answer with more confidence than it should, even when it should really be closer to a coin flip. OpenAI tested this by showing a model a coin weighted 70/30 toward heads and asking it to pick an answer. It said heads 98% of the time — but when asked for the actual probability instead, it answered with the real 70%.

    Instead of asking something like "which one is right?", switch your prompt to something like "what's the probability each one is right?" This should give you a much more honest, useful answer.
---

## FTC Probe: Pressure or Posturing?

The FTC probe is a prime example of American policy falling behind the current AI landscape. Neither the FTC nor federal law provides a specific AI precedent or established authority to investigate OpenAI, but instead of sitting on their hands, they found another way to investigate. The FTC has the power to investigate and prohibit "unfair or deceptive acts or practices in or affecting commerce" under Section 5 of the FTC Act. This is the general premise of their investigation: if a company's AI product harms consumers like a rogue agent, and the company potentially misrepresented the product's safety, could that be considered an "unfair or deceptive practice"?

The FTC announced this probe on September 30, 2026, but launched it a few weeks earlier, targeting OpenAI, Anthropic, and the outside evaluator both companies used to review their agent incidents: METR. Other unnamed companies are reportedly being investigated. As of October 13, no allegations of wrongdoing have been leveled against any of the companies; it's a consumer-protection investigation, not a criminal or antitrust action. They plan to issue civil investigative demands, which require companies to hand over formal documents for review. It's also possible they could compel executive testimony. This came just weeks after the Hugging Face breach, suggesting federal agencies may be scrambling to respond to AI agent disasters before they cause more harm.

Some outside sources remain skeptical of this probe, however, and see it as little more than political posturing. Former FTC Chair Lina Khan, appointed during the Biden administration, said the idea of a "credible subpoena" from this administration "strains credulity." It seems she doesn't believe the probe will have any consequences, but it's unclear whether that's because she believes OpenAI is innocent or because she doesn't think the FTC intends to enforce it.

## OpenAI: You've Got Mail

On September 30, 2026, California Attorney General Rob Bonta officially served OpenAI with an investigative subpoena. The subpoena is part of a broader investigation launched by the California DOJ into cybersecurity incidents involving OpenAI, including but not limited to Hugging Face.

Several differences separate this from the FTC probe, including that this is a state-level action, as opposed to the federal FTC probe. The California investigation is also further along than the FTC probe, as the subpoena legally compels OpenAI to turn over documents, records, and any information deemed relevant, while the federal civil investigative demands are still planned and haven't been served yet.

The investigation follows the OpenAI disclosures; they notified over 100 organizations about "misaligned agent activity" and reviewed about 50 petabytes of data (roughly 50,000 fully loaded laptops) during their internal review. They claim the notifications don't confirm an actual breach — they are more a cautionary disclosure than an admission of wrongdoing or harm caused by the agent.

## LASST v. OpenAI

The Legal Advocates for Safe Science and Technology is a nonprofit formed to protect the public interest and combat AI catastrophe risks. On September 29, 2026, they filed a civil lawsuit in San Francisco Superior Court against OpenAI, invoking California's Unfair Competition Law and the Comprehensive Computer Data Access and Fraud Act. Their core claim is simple: OpenAI built and ran the agents, so OpenAI is responsible for the actions of those agents.

To understand this case's importance and merits, we first must understand why "autonomy as an excuse" is no longer a valid defense. Governor Newsom signed into effect AB 316 on October 13, 2025. AB 316 is a provision added to California's Civil Code; it applies to any civil case against a company that developed, modified, or used an AI system that allegedly caused harm, and it states that the accused company cannot argue autonomy as a defense. It does not make a company liable if its agent caused harm, and it doesn't remove other defenses a company can use — it's a specific, targeted provision that prevents a company from using that one defense.

In the lawsuit, LASST specifically cites AB 316 to force OpenAI to find another defense for its incidents. Most people would probably assume LASST is seeking a large settlement or payout, and while it is asking for attorneys' fees, it is really seeking a public injunction that would require OpenAI to change its practices going forward. While OpenAI acknowledges that Hugging Face was a serious incident, it said the lawsuit was "completely without merit."

## AI Issues Fostering Bipartisan Collaboration?

Currently, the Computer Fraud and Abuse Act is the main federal anti-hacking law, but it falls short when it comes to prosecuting AI companies. A proposed bill introduced by Senators Josh Hawley (R-MO) and Chris Murphy (D-CT), called the AI Agent Accountability Act, would extend liability under the CFAA to companies and operators. The idea is that operators or companies would face both civil and criminal liability if they ran an AI agent that recklessly caused damage from hacking, or if they should have known and failed to take reasonable steps to prevent such incidents.

Before introducing this bill, Hawley launched an investigation into OpenAI, alleging that it knew its agents were communicating through unauthorized channels and failed to address it. After a hearing titled "Rogue AI: Securing the Homeland Against AI Agent Attacks" revealed the number of agents that participated in the incident, Hawley and Murphy introduced their bill.

## OpenAI's Gift That Keeps Giving

A federal investigation, a state subpoena, a civil lawsuit, and a proposed Senate bill seeking legal penalties. Four separate actions, from different levels of government, all triggered by the July Hugging Face incident.

It appears that this was the straw that broke the camel's back. Perhaps this incident was needed, as it finally prompted the reaction lawmakers should have had from the beginning: a desire to protect the American people from the dangers of AI while still allowing companies the freedom to improve their technology.
