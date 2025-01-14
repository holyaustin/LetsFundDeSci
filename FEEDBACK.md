## Development Tools Feedback Report Template

1. Project Information

Project Name: LetsFund DeSci

2. Tools and Technologies Used

iExec Tools: (Web3Mail)
Other Technologies: (Next.js, TypeScript, Hardhat, EthersJs, Redux-Toolkit, Tailwind CSS, @rainbow-me/rainbowkit-siwe-next-auth, React-Toastify, Swiper, Wagmi)

3. Overview of Implementation

Letsfund operates as a decentralized crowdfunding platform dedicated to charitable causes. Whether it's supporting humanitarian projects, funding healthcare initiatives, providing educational resources, or aiding disaster relief efforts, letsfund empowers organizations and individuals to raise funds effectively. The platform assures donors that their contributions are transparent and utilized appropriately, addressing the common concerns regarding the effectiveness of charitable donations. 

### How iExec Tools Were Integrated:

To enhance our DeSci (Decentralized Science) donation dApp, I successfully integrated iExec's innovative Web3Mail Tools. This strategic move aimed to foster a deeper connection with our project sponsors, ensuring they feel valued and informed throughout their engagement with our platform.

4. Challenges Faced

### Technical Challenges:

After going through the documentation, i used the code sandbox to implement the integration. I found it not clear with how to do it my own way.

- Issue 1:

Description of the Issue:
fetchMyContacts method has prebuild ETH address and i found it difficult adding my own contacts without disrupting the flow of the SDK. 

Suggestions for Improvement:

Let it be open for devs to pull contacts from their own sources not the prebuilt contacts.

- Issue 2: 

Description of the Issue:

fetchMyContacts method has prebuild ETH address and i found it difficult adding my own contacts without disrupting the flow of the SDK. 

Suggestions for Improvement:

Let it be open for devs to pull contacts from their own sources not the prebuilt contacts.

- Issue 3:

Description of the Issue:

Lack of Clear Error Handling Examples: While the Web3Mail API endpoints are well-documented, there's a noticeable absence of comprehensive error handling examples. This omission might lead to integration difficulties when handling edge cases or unexpected errors.
Affected Areas: API Integration, Troubleshooting

Suggestions for Improvement:

Add Dedicated Error Handling Section: Include a separate section with detailed examples of potential errors (e.g., authentication failures, rate limits, invalid requests) and their corresponding HTTP response codes.
Provide Troubleshooting Guide: Offer a step-by-step troubleshooting guide to help developers quickly identify and resolve common integration issues.

- Issue 4:

Description of the Issue:

Insufficient Information on Security Best Practices: The documentation lacks explicit guidelines on implementing security best practices when integrating Web3Mail, potentially leaving applications vulnerable. 
    
Suggestions for Improvement:

Dedicate a Section to Security Best Practices: Outline clear, Web3Mail-specific security recommendations, including but not limited to, secure content, encryption practices, and authentication flow hardening.
Link to Relevant Security Resources: Provide additional reading or resources for developers to deepen their understanding of Web3 security.
Possible integration of the in-house tool Data Protector on Mail contents.

### Documentation and Resources:

(Discuss any issues faced with the provided documentation or other resources. Were there gaps in the information? Was something unclear or outdated?)

- Issue 1:
Description of the Issue: No Explorer to se transaction. i could be wrong, but i did not see the explorer to view the transaction for mails sent.

Suggestions for Improvement:

If possible, ETH Addresses should have a DASHBOARD to pull out all mails sent and received. From my own experience, there is no where to see mails sent and those received for me to read them.

- Issue 2:

5. Additional Feedback

User Experience: Happy with the initail trail

Actually the code snadbox helped me to integrate faster. i am also pleased with the use of wagmi. this help me to integrate the multi-chain application with ease. the dApp sensing the required chain and switches to that chain.

























Engaging with iExec Web3Mail: Challenges & Feedback

To provide a comprehensive response, I'll simulate a user's experience, breaking down potential challenges into technical difficulties, documentation/resource gaps, and offering additional feedback. Since I don't have real-time interaction with iExec Web3Mail, I'll create hypothetical scenarios to demonstrate the requested format.
Technical Challenges
Issue 1: Integration with Custom Smart Contracts

    Description of the Issue: When attempting to integrate iExec Web3Mail with a custom-built smart contract on the Ethereum network, the system failed to recognize and authenticate the contract address, resulting in failed transaction initiations.
    Suggestions for Improvement:
        Enhance the contract recognition algorithm to support a broader range of custom smart contract formats.
        Provide a sandbox environment for testing integrations before going live.
    Relevant Files or Links:
        Screenshot of Error Message: Link to Screenshot
        Custom Smart Contract Code Snippet: GitHub Gist Link

Issue 2: Delayed Email Notifications for Transaction Updates

    Description of the Issue: Users experienced delays of up to 30 minutes in receiving email updates for transaction status changes (e.g., from "pending" to "confirmed").
    Suggestions for Improvement:
        Implement a more responsive webhook system for real-time transaction updates.
        Offer customizable notification timing preferences for users.
    Relevant Files or Links:
        Transaction Timeline Screenshot: Link to Screenshot
        Webhook Documentation Review: Markdown File

Documentation and Resources
Issue 1: Outdated Tutorials for Web3Mail Integration

    Description of the Issue: Tutorials and guides on the official iExec website for integrating Web3Mail with dApps were outdated, referencing deprecated APIs and causing confusion.
    Suggestions for Improvement:
        Regularly update documentation to reflect the latest API versions and best practices.
        Include a "Last Updated" timestamp on each tutorial for transparency.
    Relevant Files or Links:
        Outdated Tutorial Screenshot: Link to Screenshot
        Proposed Update for Tutorial Google Doc Link

Issue 2: Lack of Community-Driven FAQs

    Description of the Issue: The absence of a community-driven FAQ section made it difficult for users to find solutions to common, non-technical issues.
    Suggestions for Improvement:
        Create a moderated community forum for FAQ generation.
        Integrate a voting system to highlight the most relevant FAQs.
    Relevant Files or Links:
        Concept Design for Community Forum: Figma Link
        FAQ Template Example: Pastebin Link

Additional Feedback
User Experience:

    Intuitiveness of UI: 7/10 - While the dashboard is visually appealing, some features (e.g., advanced transaction filtering) were not immediately intuitive.
    Straightforwardness of the Process: 8/10 - Most processes were well-guided, except for the custom smart contract integration, which required additional research.

General Feedback:

    Enhanced Developer Support: Offer more frequent webinars or workshops focusing on advanced integrations and troubleshooting.
    Gamified Learning Platform: Develop an interactive platform where developers can learn about iExec tools through challenges and projects, with rewards for milestones achieved.
    Regular Community Surveys: Conduct quarterly surveys to ensure the development roadmap aligns with the evolving needs of the iExec developer community.
