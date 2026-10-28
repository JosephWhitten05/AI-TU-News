---
title: "The Law Gives Chase: A Fast Week in AI"
date: 2026-10-27
author: "Joseph Whitten, AI@TU Outreach Chair"
summary: "Welcome back to another week of AI@TU news! In our last issue, we covered the legal pressure building on OpenAI: a federal investigation, a state subpoena, a lawsuit and a proposed Senate bill. At the time, most of it was still in the early stages. This week, the law gave chase. The FTC served formal demands, eight states filed suits, and DHS made public its order banning DeepSeek from federal civilian systems. Let’s catch you up on all of that, a new hacking campaign run by AI agents, and this week’s model launches."
threat:
  headline: "Budget Breaches"
  body: |-
    On October 19, Reuters reported the findings published by a security firm called NorForge. Their findings showed that a Chinese-speaking operator used a popular open-source agent platform, Cairn, paired with Claude Code and a DeepSeek model, to attempt break-ins at more than 1,200 websites since September. More than 100 companies reported being breached, including large companies like John Deere and SharkNinja.

    NorForge claims that the cost was about $5,000 in tokens, with a success rate of around 10 percent, and each successful breach took an average of 23 hours to complete. Neither Anthropic nor DeepSeek has confirmed the role their tools played in the breaches, and “Chinese–speaking” does not necessarily mean it was a Chinese-backed attack. The notable difference between this and the Hugging Face breaches is that, in these attacks, the agents were pointed at specific targets, while Hugging Face was a case where AI agents acted autonomously.
tip:
  headline: "Save Your Prompts as Gemini Skills"
  body: |-
    Google began rolling out [skills in the Gemini app](https://workspaceupdates.googleblog.com/2026/10/an-update-on-launch-of-skills-in-gemini-app-and-workspace.html) on October 13. A skill is a set of reusable, custom instructions you write once and use in any chat. Try making one called “Study Coach” that says: quiz me one question at a time, wait for my answer, then explain what I got wrong. Skills use the open SKILL.md format, so ones built for other tools can be imported. The rollout runs through mid-November; skills inside Workspace apps like Docs and Gmail are delayed, and skills are replacing Gems, so check Google’s help page for what you can use right now.
---

## FTC Turns the Screws

Last issue, we asked whether the FTC probe was pressure or posturing. This week we got a partial answer. On October 14, the FTC sent civil investigative demands to OpenAI and Anthropic, which are legally enforceable requests for documents and testimony. [Axios](https://www.axios.com/2026/10/15/ftc-openai-anthropic-ai-safety-investigation) broke the story, and an FTC spokesperson confirmed the subpoenas to [CBS News](https://www.cbsnews.com/news/ftc-subpoenas-anthropic-openai-consumer-protection/). According to Axios, each demand runs more than 50 pages and asks for records on security incidents, safeguarding practices, marketing materials, and privacy policies. One source provided those details, but the demands have not yet been made public.

Axios’s source also says the FTC plans to compel top AI executives to testify and to send demands to third-party AI organizations. As of October 26th, the FTC has sent demands to testify to Anthropic and executives at other unnamed companies. Reuters reported in September, citing a senior FTC official, that the probe also covers METR, the AI-evaluation nonprofit ([via Al Jazeera](https://www.aljazeera.com/economy/2026/9/30/us-regulator-launches-probe-into-ai-companies)). OpenAI told Axios it will “engage constructively” with the FTC. Anthropic has not responded publicly. The FTC maintains that these civil investigative demands are an investigative step, not an accusation, and it has not said what it suspects.

Former FTC Chair Lina Khan said on [ABC’s This Week](https://abcnews.com/Politics/week-transcript-10-4-26-former-ftc-chair/story?id=136978511) on October 4 that the idea of AI executives getting a credible subpoena from this administration “strains credulity.” The subpoenas arrived ten days later, but that doesn’t settle her point. What matters is what the FTC does with the records. For now, we don’t know what it suspects, whether anyone broke any law, or when anyone will testify.

## Eight State Dogpile

On October 14, attorneys general in Arizona, Arkansas, Idaho, Iowa, Kansas, Montana, Nebraska, and West Virginia filed lawsuits against OpenAI. Each is a separate case in each state’s courts under state consumer-protection laws, not a single suit. States are seeking financial penalties and safeguards, according to [AP](https://www.wtoc.com/2026/10/15/states-sue-ai-giant-openai-saying-chatgpt-is-hurting-children-deceiving-adults/) and [CNBC](https://www.cnbc.com/2026/10/14/openai-sued-by-8-states-over-chatgpt-safety-concerns-.html).

The core claim is that ChatGPT harmed children and deceived adults despite being marketed as safe by OpenAI. Iowa’s suit cites dangerous medical advice, instances of encouraging paranoia, and coaching users toward suicide or harming others. Arizona has a different claim, that ChatGPT encouraged teens to share personal information and deceive adults about doing so. West Virginia also cites instances of deceptive practices and public nuisance.

While most suits seem to center on protecting children, AP reports that some states accuse OpenAI of creating rogue AI models that hacked other companies, which appears to be another instance of the Hugging Face incident. Idaho even cites a “plausible threat of civilian collapse.”

All of these suits are allegations, and no court has ruled on them yet. There is a similar precedent for this kind of pile-on, though, as Meta recently agreed to an $18 billion settlement that ended a trial regarding teen social media addiction.

## DeepSeek in Deep Trouble?

The US government has just barred DeepSeek from federal civilian agencies, and days later, DeepSeek is reportedly closing in on a funding round of around $15 billion. [Reuters](https://www.ksl.com/article/51639460/deepseek-wrapping-up-15-billion-fundraising-to-fuel-ai-race) and Bloomberg report that the Chinese AI lab is raising the money at a valuation near $75 billion before the new cash. While DeepSeek itself has not confirmed the round, let's discuss whether DeepSeek is actually in deep trouble. First order of business is to understand the government's order.

The DHS order was made public on October 19th and published in the [Federal Register](https://www.federalregister.gov/documents/2026/10/20/2026-21447/notice-of-order-regarding-exclusion-and-removal-of-deepseek-products-from-federal-civilian-executive) on October 20th. It contains two parts. First, agencies cannot buy DeepSeek products or services and must remove any DeepSeek affiliate products, including third-party tools built using its technology. It applies to civilian agencies, not national security systems, and does not stop the majority of private businesses from using DeepSeek and its products. Agencies have 60 days to request an exception. DHS issued the order under the Federal Acquisition Supply Chain Security Act of 2018 in response to data-security concerns about DeepSeek’s Chinese-based servers.

Although it was made public just a few weeks ago, DHS signed the order on July 24th, and on October 20th China’s Foreign Ministry said that it opposes overstretching national security and politicizing tech and trade issues.

What does all this mean for DeepSeek? In reality, it’s unlikely that the order significantly impacts DeepSeek. In practice, the order only cuts off DeepSeek from the federal civilian government, leaving a majority of their investors and users unaffected. And while the funding round was reported before the ban was made public, it didn’t fall apart once the ban was made public, signaling that they still have strong backing regardless of the order.

## New Launches

The model race kept moving too.

- **Gemini 4 Argon, October 13.** It reached the Gemini app for AI Pro and Ultra subscribers. Google says it beats rival models on benchmarks, which is Google’s own claim. [Google’s announcement](https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/).
- **DeepSeek V4.1-Flash-1017, October 17.** DeepSeek released open weights under an MIT license with a 1-million-token context window. It says its scores come close to Anthropic’s Opus 5, which are self-reported numbers.
- **ChatGPT Slides, October 16.** OpenAI added the ability to create, edit, present and export slide decks inside ChatGPT.
- **OpenAI on Google Cloud, October 21.** OpenAI’s models and Codex are coming to Google Cloud’s Model Garden, in private preview with wider availability “in the coming weeks.” Reuters says it follows the end of OpenAI’s exclusive distribution arrangement with Microsoft in April. [OpenAI’s announcement](https://community.openai.com/t/openai-models-are-coming-to-google-cloud/1408440).
