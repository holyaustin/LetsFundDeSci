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
fetchMyContacts method has prebuilt ETH address and i found it difficult adding my own contacts without disrupting the flow of the SDK. 

Suggestions for Improvement:

Let it be open for devs to pull contacts from their own sources not the prebuilt contacts.

- Issue 2: 

Description of the Issue:

fetchMyContacts method has prebuilt ETH address and i found it difficult adding my own contacts without disrupting the flow of the SDK. 

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

Consider Interactive Diagrams: Utilize interactive or dynamic diagram tools to enhance user understanding of system interactions.

- Issue 2:

Description of the Issue:

Gaps in Documentation for Edge Cases: Documentation predominantly covers standard use cases, leaving gaps for edge cases or non-standard integrations, which might frustrate developers with unique requirements.
Affected Areas: Advanced Integration, Custom Use Cases

Suggestions for Improvement:

Community-Driven Edge Case Registry: Create a community forum or wiki section where developers can share, discuss, and document their experiences with edge cases.
Periodic Documentation Expansion: Schedule regular documentation updates focusing on incorporating solutions for commonly encountered edge cases.

5. Additional Feedback

User Experience: Happy with the initial trail

Actually the code sandbox helped me to integrate faster. i am also pleased with the use of wagmi. this help me to integrate the multi-chain application with ease. the dApp sensing the required chain and switches to that chain.

