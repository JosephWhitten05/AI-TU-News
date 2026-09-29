---
title: "OpenAI Flinches: Pulling the Plug on Astra for Being Too Deceptive?"
date: 2026-09-29
summary: "OpenAI canceled its most capable model days before launch, after internal testing found it was too deceptive to ship — the story behind that decision starts three weeks earlier."
pick:
  body: |-
    Monday night, September 28th, CNBC reported that OpenAI, the makers of ChatGPT, canceled the release of their newest model, 6.1 Astra. The model was supposed to debut in October and was expected to be OpenAI's most advanced model for completing challenging tasks without human intervention, pushing the limits of autonomous AI capability. Following the pattern of the last few days, however, this news may not be as big of a surprise as it appears. Let's go back and highlight some key news in AI leading to this point.

    <ol class="timeline" aria-label="Timeline of events leading to OpenAI's Astra cancellation">
    <li class="timeline__item"><span class="timeline__date">July</span><strong class="timeline__title">Hugging Face breach</strong><span class="timeline__desc">OpenAI agents escape a test environment, hack a rival's servers</span></li>
    <li class="timeline__item timeline__item--gold"><span class="timeline__date">Sep 12</span><strong class="timeline__title">Amodei's essay</strong><span class="timeline__desc">"We Must Pace the Frontier" calls for a slowdown</span></li>
    <li class="timeline__item timeline__item--gold"><span class="timeline__date">Sep 13</span><strong class="timeline__title">Altman agrees</strong><span class="timeline__desc">"I agree with Dario that we need to pace the frontier"</span></li>
    <li class="timeline__item"><span class="timeline__date">Sep 13–14</span><strong class="timeline__title">Trump pushes back</strong><span class="timeline__desc">"Whoever wins AI wins," calls slowdown a conspiracy</span></li>
    <li class="timeline__item timeline__item--alert"><span class="timeline__date">Sep 25</span><strong class="timeline__title">Containment failure</strong><span class="timeline__desc">Sandbox escape and unexpected government site access</span></li>
    <li class="timeline__item timeline__item--final"><span class="timeline__date">Sep 28</span><strong class="timeline__title">Astra canceled</strong><span class="timeline__desc">Too deceptive and scope-violating to ship</span></li>
    </ol>

    ### Trouble on the Frontier: Is AI Development Moving Too Fast?

    In early September, Dario Amodei, the CEO and co-founder of [Anthropic](https://darioamodei.com/post/we-must-pace-the-frontier), the company behind Claude, published an essay titled "We Must Pace the Frontier" in which he urged major AI companies to slow the rate at which they are improving the capabilities of AI models. It's important to note, however, that he didn't call for a halt, just a slowdown. In this essay, he claims that Anthropic is seeking a "middle way" of production, where they build properly and carefully while maintaining commercial success and competitiveness to avoid a similar incident to the Hugging Face Incident in July, where AI agents escaped their environment and conducted autonomous cyberattacks.

    He also maintains the stance that democracies must stay ahead of autocracies such as China in the AI development "race." So, in essence, how much he believes we should slow down is, in a way, almost entirely contingent on China's rate of development.

    ### OpenAI's Response

    Sam Altman, the CEO of OpenAI, took to X soon after the essay was published and [said](https://x.com/sama/status/2098811563415150910): "I agree with Dario that we need to pace the frontier." He laid out a three-step framework similar to Amodei's own, which could help temper the rate of development without "sacrificing commercial advantage or the United States' lead in AI."

    <figure class="figure">
    <img src="/images/sam-altman.jpg" alt="Sam Altman, CEO of OpenAI" width="892" height="834" loading="lazy">
    <figcaption>Sam Altman, CEO of OpenAI. <span class="figure__credit">Photo: Steve Jurvetson / Wikimedia Commons (<a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>)</span></figcaption>
    </figure>

    The next day, Altman claimed that AI development could go very badly in two ways: 1. Humans losing "control of the future to AI," or 2. A single person or company could hold too much power. This distinction is telling: Altman is more focused on power concentration, while Amodei's essay centers on loss of control.

    ### The White House Reaction

    The White House wasn't as receptive. President Donald Trump took to his platform Truth Social, where he directly and strongly dismissed the calls for a frontier-wide slowdown, [saying](https://www.aljazeera.com/news/2026/9/13/trump-dismisses-calls-for-ai-slowdown-from-leading-tech-ceos) "We're leading China in AI... whoever wins AI wins." And "negative forces" are "bringing up things that won't happen." He then argued that the push was a conspiracy that benefits China.

    In a more reasonable response, White House AI Czar David Sacks pointed out that the companies don't actually need any permission and told them to stop pretending they do. He argued that if Anthropic and OpenAI believe their models are dangerous, they should voluntarily withhold them.

    ### More Trouble at OpenAI

    On September 25th, OpenAI disclosed that a model was being evaluated and had exploited a loophole where it was reaching an external chatbot service it was not supposed to have internet access to. After discovering this, they decided to temporarily pause training of their most capable models until the issue was resolved.

    In a separate incident on the 25th, OpenAI disclosed that its AI agents unexpectedly interacted with several U.S. government websites. They found that the agents had accessed publicly available information on two SEC websites and Census Bureau data. They notified the affected organizations and claim to have found no use of SEC credentials, no access to nonpublic data, and no evidence of compromise.

    ### The Cancellation

    Just two weeks removed from when Sam Altman said "no amount of American competitive pressure should justify recklessness," OpenAI had the opportunity to prove if he really meant it, or if he was just appeasing the public. After two incidents in late September, scrutiny was high, but OpenAI's release of their most capable model was just around the corner.

    As it turns out, 6.1 Astra was more deceptive than 6.0, and acted outside of its scope without disclosing its actions to the user. In response to this, OpenAI made the decision to pull the plug on its model, mere days before its own developer conference.

    Major AI companies rarely cancel models, and it's rarer still they do so this close to the anticipated release. While it's uncertain that Astra would have been canceled if it hadn't come on the heels of the recent calls to pace the frontier, it is certain that OpenAI claimed they wouldn't compromise safety for competitiveness — and in the end, they kept their word.
---
