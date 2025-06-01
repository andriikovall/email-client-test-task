import { delay } from "rxjs/operators";
import { of } from "rxjs";
import type { Observable } from "rxjs";
import type { Email } from "../../types";
import { MOCK_FOLDERS } from "./folders";

// mock functions to simulate async operations
export const getEmails = (): Observable<Email[]> => of(MOCK_EMAILS).pipe(delay(2000));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const deleteEmail = (email: Email): Observable<void> => of(undefined).pipe(delay(1000));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const markAsReadOrUnread = (id: string): Observable<void> => of(undefined).pipe(delay(1000));


export const MOCK_EMAILS: Email[] = [
  {
    id: "1",
    subject: "Welcome to Our Platform! 🎉",
    from: {
      name: "Sarah Johnson",
      email: "sarah.j@techcorp.com",
    },
    date: "2024-03-15T09:30:00",
    to: [{ name: "New User", email: "user@example.com" }],
    content:
      "<h1>Welcome to Our Platform!</h1><p>We're absolutely thrilled to have you join our vibrant community! 🎉</p><p>Here's what you can do to get started:</p><ul><li>Complete your profile</li><li>Explore our features</li><li>Connect with other members</li><li>Check out our getting started guide</li></ul><p>If you have any questions, our support team is available 24/7 to help you.</p><p>Best regards,<br>The Team</p>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[2].slug,
  },
  {
    id: "2",
    subject: "Your Order #12345 has been shipped",
    from: {
      name: "Amazon Support",
      email: "support@amazon.com",
    },
    date: "2024-03-14T14:45:00",
    to: [{ name: "Customer", email: "customer@example.com" }],
    content:
      "<div><h2>Your Order Has Been Shipped!</h2><p>Great news! Your package is on its way to you.</p><p><strong>Tracking number:</strong> ABC123XYZ</p><p><strong>Estimated delivery:</strong> March 16-18, 2024</p><p><strong>Shipping method:</strong> Standard Delivery</p><p><strong>Shipping address:</strong><br>123 Main Street<br>Anytown, ST 12345</p><p>You can track your package using the tracking number above on our website or through the carrier's tracking system.</p><p>Thank you for shopping with us!</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "3",
    subject: "Meeting Reminder: Project Kickoff Some very long subject here",
    from: {
      name: "Michael Chen",
      email: "m.chen@company.com",
    },
    date: "2024-03-13T11:15:00",
    to: [
      { name: "Team Lead", email: "lead@company.com" },
      { name: "Project Manager", email: "pm@company.com" },
    ],
    content:
      "<h2>Project Kickoff Meeting Reminder</h2><p>Don't forget our important meeting tomorrow at 10 AM in Conference Room B.</p><h3>Agenda:</h3><ul><li>Project Overview (30 mins)</li><li>Team Introductions (15 mins)</li><li>Timeline Review (45 mins)</li><li>Resource Allocation (30 mins)</li><li>Q&A Session (20 mins)</li></ul><p>Please come prepared with:</p><ul><li>Your availability for the next two weeks</li><li>Any initial questions or concerns</li><li>Your department's resource requirements</li></ul><p>Meeting Link: <a href='#'>Click here to join</a></p><p>Best regards,<br>Michael Chen<br>Project Manager</p>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "4",
    subject: "Your subscription is expiring soon",
    from: {
      name: "Netflix",
      email: "billing@netflix.com",
    },
    date: "2024-03-12T16:20:00",
    to: [{ name: "Subscriber", email: "subscriber@example.com" }],
    content:
      "<h2>Your Netflix Subscription is Expiring Soon</h2><p>Dear Valued Subscriber,</p><p>We noticed that your Netflix subscription will expire on March 15, 2024. To continue enjoying unlimited access to our vast library of movies, TV shows, and exclusive content, please renew your subscription.</p><p><strong>Current Plan:</strong> Premium (4K + 4 screens)</p><p><strong>Monthly Price:</strong> $19.99</p><p><strong>Expiration Date:</strong> March 15, 2024</p><p>Click here to renew your subscription and continue enjoying:</p><ul><li>Unlimited movies and TV shows</li><li>Ad-free streaming</li><li>Download content for offline viewing</li><li>Access on all your devices</li></ul><p>If you have any questions, our customer support team is here to help.</p><p>Best regards,<br>The Netflix Team</p>",
    isRead: false,
    isDeleted: true,
    folderSlug: MOCK_FOLDERS[2].slug,
  },
  {
    id: "5",
    subject: "Password Reset Request",
    from: {
      name: "Security Team",
      email: "security@company.com",
    },
    date: "2024-03-11T08:55:00",
    to: [{ name: "User", email: "user@company.com" }],
    content:
      "<h2>Password Reset Request</h2><p>Dear User,</p><p>We received a request to reset your password for your account. If you didn't make this request, please ignore this email or contact our security team immediately.</p><p>To reset your password, click the link below:</p><p><a href='#' class='button'>Reset Password</a></p><p>This link will expire in 24 hours for security reasons.</p><p>For your security, please ensure your new password:</p><ul><li>Is at least 12 characters long</li><li>Includes uppercase and lowercase letters</li><li>Contains numbers and special characters</li><li>Is different from your previous passwords</li></ul><p>If you need any assistance, please contact our support team.</p><p>Best regards,<br>Security Team</p>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[2].slug,
  },
  {
    id: "6",
    subject: "New Comment on Your Post",
    from: {
      name: "Social Media",
      email: "notifications@social.com",
    },
    date: "2024-03-10T13:40:00",
    to: [{ name: "Content Creator", email: "creator@example.com" }],
    content:
      "<div><h2>New Comment on Your Post</h2><p>Someone has commented on your recent post:</p><blockquote><p>Great post! I really enjoyed reading your insights on this topic. The examples you provided were particularly helpful. Looking forward to more content like this!</p><p>- John Doe</p></blockquote><p><strong>Post Title:</strong> Understanding Modern Web Development</p><p><strong>Posted on:</strong> March 9, 2024</p><p>You can view and respond to this comment by clicking <a href='#'>here</a>.</p><p>Keep up the great work!</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "7",
    subject: "Invoice #INV-2024-007",
    from: {
      name: "Billing Department",
      email: "billing@service.com",
    },
    date: "2024-03-09T10:25:00",
    to: [{ name: "Client", email: "client@company.com" }],
    content:
      "<div class='invoice'><h2>Invoice #INV-2024-007</h2><p>Dear Valued Client,</p><p>Please find below the details of your recent service purchase:</p><table class='invoice-table'><tr><th>Item</th><th>Description</th><th>Amount</th></tr><tr><td>Premium Service Package</td><td>Monthly subscription with priority support</td><td>$99.99</td></tr><tr><td>Setup Fee</td><td>Initial configuration and onboarding</td><td>$49.99</td></tr><tr><td>Training Session</td><td>2-hour personalized training</td><td>$199.99</td></tr></table><p>Total Amount Due: $349.97</p><p>Payment Terms: Net 30</p><p>Please remit payment to:<br>Account: 1234567890<br>Bank: Example Bank<br>Routing: 987654321</p><p>If you have any questions about this invoice, please don't hesitate to contact our billing department.</p><p>Thank you for your business!</p><p>Best regards,<br>Billing Department</p></div>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "8",
    subject: "Job Application Status Update",
    from: {
      name: "HR Department",
      email: "hr@company.com",
    },
    date: "2024-03-08T15:10:00",
    to: [{ name: "Applicant", email: "applicant@example.com" }],
    content:
      "<div class='application-update'><h2>Application Status Update</h2><p>Dear Applicant,</p><p>Thank you for your interest in the Senior Software Engineer position at our company. We were impressed with your background and experience, and we would like to move forward with your application.</p><p>We would like to schedule an interview with you. The interview process will consist of:</p><ul><li>Initial screening with HR (30 minutes)</li><li>Technical assessment (1 hour)</li><li>Team interview (1 hour)</li><li>Final interview with department head (45 minutes)</li></ul><p>Please let us know your availability for the following dates:</p><ul><li>March 15, 2024</li><li>March 16, 2024</li><li>March 17, 2024</li></ul><p>We look forward to meeting you and discussing how your skills and experience align with our team's needs.</p><p>Best regards,<br>HR Department</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "9",
    subject: "Your Weekly Newsletter",
    from: {
      name: "News Team",
      email: "news@media.com",
    },
    date: "2024-03-07T12:35:00",
    to: [{ name: "Subscriber", email: "subscriber@example.com" }],
    content:
      "<div class='newsletter'><h1>This Week's Highlights</h1><h2>Technology News</h2><ul><li>Major breakthrough in quantum computing announced</li><li>New AI model achieves human-level performance in complex tasks</li><li>Tech giants announce collaboration on open-source standards</li></ul><h2>Business Updates</h2><ul><li>Global markets show strong recovery in Q1</li><li>New regulations impact tech industry</li><li>Startup funding reaches new heights</li></ul><h2>Industry Insights</h2><ul><li>Future of remote work: Trends and predictions</li><li>Sustainable tech: Companies leading the way</li><li>Cybersecurity threats on the rise</li></ul><p>Stay tuned for more updates next week!</p></div>",
    isRead: true,
    isDeleted: true,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "10",
    subject: "System Maintenance Notice",
    from: {
      name: "IT Department",
      email: "it@company.com",
    },
    date: "2024-03-06T09:50:00",
    to: [{ name: "All Users", email: "users@company.com" }],
    content:
      "<div class='maintenance-notice'><h2>System Maintenance Notice</h2><div class='alert alert-warning'><p><strong>Important:</strong> System will be down for maintenance on Saturday, March 9, 2024</p></div><h3>Maintenance Details:</h3><ul><li>Date: March 9, 2024</li><li>Time: 2:00 AM - 6:00 AM EST</li><li>Duration: 4 hours</li></ul><h3>Affected Systems:</h3><ul><li>Email System</li><li>File Storage</li><li>Internal Applications</li><li>VPN Access</li></ul><h3>What to Expect:</h3><p>During this period, you will not be able to access any of the affected systems. Please plan your work accordingly and save all important documents before the maintenance window begins.</p><h3>Contact Information:</h3><p>If you experience any issues after the maintenance, please contact the IT Support Desk at support@company.com or call extension 5555.</p><p>Thank you for your understanding.</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "11",
    subject: "Project Deadline Reminder",
    from: {
      name: "Project Manager",
      email: "pm@company.com",
    },
    date: "2024-03-05T14:20:00",
    to: [{ name: "Team Lead", email: "team@company.com" }],
    content: "<div class='project-update'><h2>Project Deadline Reminder</h2><p>Dear Team Lead,</p><p>This is a reminder that the Q1 project deliverables are due by Friday, March 8, 2024. Please ensure all team members are aware of the following deadlines:</p><h3>Key Deliverables:</h3><ul><li>Feature Implementation: March 6</li><li>Code Review: March 7</li><li>Testing: March 7-8</li><li>Documentation: March 8</li><li>Final Submission: March 8, 5:00 PM</li></ul><h3>Required Documentation:</h3><ul><li>Technical specifications</li><li>Test results</li><li>User documentation</li><li>Deployment instructions</li></ul><p>Please coordinate with the QA team to ensure all testing is completed on time. If you anticipate any delays, please notify me immediately.</p><p>Best regards,<br>Project Manager</p></div>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "12",
    subject: "Client Meeting Notes",
    from: {
      name: "Sales Team",
      email: "sales@company.com",
    },
    date: "2024-03-04T11:15:00",
    to: [{ name: "Account Manager", email: "account@company.com" }],
    content: "<div class='meeting-notes'><h2>Client Meeting Summary</h2><p>Date: March 4, 2024<br>Location: Client Office<br>Attendees: John Smith (Client), Sarah Johnson (Sales), Michael Brown (Technical Lead)</p><h3>Key Points Discussed:</h3><ul><li>Client requested additional features for Q2 implementation</li><li>New requirements include advanced analytics dashboard</li><li>Integration with third-party systems needed</li><li>Performance optimization requirements specified</li></ul><h3>Action Items:</h3><ul><li>Prepare detailed proposal by March 11</li><li>Schedule technical review meeting</li><li>Provide cost estimates for new features</li><li>Create implementation timeline</li></ul><h3>Next Steps:</h3><p>Please review these notes and prepare the necessary documentation for the follow-up meeting scheduled for March 18, 2024.</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "13",
    subject: "Office Party Invitation",
    from: {
      name: "HR Events",
      email: "events@company.com",
    },
    date: "2024-03-03T16:45:00",
    to: [{ name: "All Staff", email: "staff@company.com" }],
    content: "<div class='party-invitation'><h2>Quarterly Celebration Invitation 🎉</h2><p>Dear Team Members,</p><p>We're excited to invite you to our quarterly celebration this Friday!</p><h3>Event Details:</h3><ul><li>Date: Friday, March 8, 2024</li><li>Time: 4:00 PM - 7:00 PM</li><li>Location: Main Office Rooftop</li></ul><h3>What to Expect:</h3><ul><li>Live Music</li><li>Food & Drinks</li><li>Team Building Activities</li><li>Recognition Ceremony</li><li>Raffle Prizes</li></ul><h3>Dress Code:</h3><p>Business Casual</p><p>Please RSVP by Wednesday, March 6, 2024, by clicking the link below or responding to this email.</p><p>Looking forward to celebrating our achievements together!</p><p>Best regards,<br>HR Events Team</p></div>",
    isRead: true,
    isDeleted: true,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "14",
    subject: "Security Alert",
    from: {
      name: "Security Team",
      email: "security@company.com",
    },
    date: "2024-03-02T09:30:00",
    to: [{ name: "IT Department", email: "it@company.com" }],
    content: "<div class='security-alert'><h2>Security Alert: Password Update Required</h2><p>Dear IT Department,</p><p>We have detected unusual activity in our system that requires immediate attention. As a precautionary measure, we are requesting all department members to update their passwords immediately.</p><h3>Required Actions:</h3><ul><li>Change your password within the next 24 hours</li><li>Ensure your new password meets our security requirements</li><li>Enable two-factor authentication if not already enabled</li><li>Review your recent account activity</li></ul><h3>Password Requirements:</h3><ul><li>Minimum 12 characters</li><li>Include uppercase and lowercase letters</li><li>Include numbers and special characters</li><li>Do not reuse previous passwords</li></ul><p>If you notice any suspicious activity, please contact the security team immediately.</p><p>Best regards,<br>Security Team</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "15",
    subject: "Training Session Schedule",
    from: {
      name: "Learning & Development",
      email: "training@company.com",
    },
    date: "2024-03-01T13:20:00",
    to: [{ name: "New Employees", email: "newhires@company.com" }],
    content: "<div class='training-schedule'><h2>New Employee Training Schedule</h2><p>Welcome to the team! Below is your comprehensive training schedule for the next two weeks.</p><h3>Week 1:</h3><ul><li>Monday: Company Policies & Procedures (9:00 AM - 12:00 PM)<ul><li>HR Policies</li><li>Code of Conduct</li><li>Security Protocols</li></ul></li><li>Tuesday: Tools Overview (1:00 PM - 4:00 PM)<ul><li>Project Management Tools</li><li>Communication Platforms</li><li>Development Environment Setup</li></ul></li><li>Wednesday: Team Integration (10:00 AM - 3:00 PM)<ul><li>Team Structure</li><li>Workflow Processes</li><li>Collaboration Guidelines</li></ul></li></ul><h3>Week 2:</h3><ul><li>Monday: Technical Training (9:00 AM - 4:00 PM)<ul><li>System Architecture</li><li>Development Standards</li><li>Code Review Process</li></ul></li><li>Tuesday: Project Overview (1:00 PM - 4:00 PM)<ul><li>Current Projects</li><li>Future Roadmap</li><li>Team Goals</li></ul></li></ul><p>Please bring your laptop and any necessary credentials to each session.</p><p>Best regards,<br>Learning & Development Team</p></div>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "16",
    subject: "Budget Approval Required",
    from: {
      name: "Finance Department",
      email: "finance@company.com",
    },
    date: "2024-02-29T10:15:00",
    to: [{ name: "Department Heads", email: "heads@company.com" }],
    content: "<div class='budget-approval'><h2>Q2 Budget Review and Approval</h2><p>Dear Department Heads,</p><p>As we approach the end of Q1, it's time to review and approve the Q2 budget allocations. Please find the detailed breakdown below.</p><h3>Department Allocations:</h3><ul><li>Research & Development: $2.5M<ul><li>New Product Development: $1.2M</li><li>Infrastructure Upgrades: $800K</li><li>Technical Training: $500K</li></ul></li><li>Marketing & Sales: $1.8M<ul><li>Digital Marketing: $900K</li><li>Sales Operations: $600K</li><li>Market Research: $300K</li></ul></li><li>Operations: $1.2M<ul><li>Facilities Management: $500K</li><li>IT Infrastructure: $400K</li><li>Administrative Costs: $300K</li></ul></li></ul><h3>Required Actions:</h3><ul><li>Review your department's allocation</li><li>Submit any adjustment requests by March 5</li><li>Provide justification for any changes</li><li>Sign off on final budget by March 10</li></ul><p>Please schedule a meeting with the finance team if you have any questions or concerns.</p><p>Best regards,<br>Finance Department</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "17",
    subject: "Product Launch Announcement",
    from: {
      name: "Marketing Team",
      email: "marketing@company.com",
    },
    date: "2024-02-28T15:40:00",
    to: [{ name: "All Staff", email: "staff@company.com" }],
    content: "<div class='product-launch'><h1>Exciting New Product Launch Coming Next Month! 🚀</h1><p>Dear Team,</p><p>We're thrilled to announce the launch of our revolutionary new product line next month. This represents months of hard work and innovation from our entire team.</p><h3>Key Features:</h3><ul><li>Advanced AI Integration</li><li>Real-time Analytics Dashboard</li><li>Enhanced Security Protocols</li><li>Seamless Third-party Integrations</li><li>Mobile-first Design</li></ul><h3>Launch Timeline:</h3><ul><li>March 15: Beta Testing Complete</li><li>March 20: Marketing Campaign Launch</li><li>March 25: Press Release</li><li>April 1: Official Product Launch</li></ul><h3>Team Recognition:</h3><p>Special thanks to the development, design, and QA teams for their exceptional work on this project. Your dedication and innovation have made this possible.</p><p>Stay tuned for more updates and the official launch event details!</p><p>Best regards,<br>Marketing Team</p></div>",
    isRead: true,
    isDeleted: true,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "18",
    subject: "Customer Feedback Summary",
    from: {
      name: "Customer Success",
      email: "success@company.com",
    },
    date: "2024-02-27T14:25:00",
    to: [{ name: "Product Team", email: "product@company.com" }],
    content: "<div class='feedback-summary'><h2>Monthly Customer Satisfaction Report</h2><p>Dear Product Team,</p><p>Please find below the comprehensive analysis of customer feedback for February 2024.</p><h3>Overall Satisfaction Score: 4.2/5</h3><h3>Key Metrics:</h3><ul><li>User Engagement: +15% from last month</li><li>Feature Adoption: +8% increase</li><li>Support Tickets: -12% decrease</li><li>Customer Retention: 92%</li></ul><h3>Top Feedback Categories:</h3><ul><li>User Interface Improvements (35%)<ul><li>Mobile responsiveness</li><li>Navigation simplicity</li><li>Visual consistency</li></ul></li><li>Performance Optimization (25%)<ul><li>Load times</li><li>Search functionality</li><li>Data processing speed</li></ul></li><li>Feature Requests (20%)<ul><li>Advanced filtering</li><li>Export capabilities</li><li>Integration options</li></ul></li></ul><h3>Action Items:</h3><ul><li>Prioritize mobile optimization</li><li>Review search algorithm performance</li><li>Plan implementation of top feature requests</li><li>Schedule user testing sessions</li></ul><p>Please review the attached detailed report for more information.</p><p>Best regards,<br>Customer Success Team</p></div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
  {
    id: "19",
    subject: "Team Building Event",
    from: {
      name: "HR Department",
      email: "hr@company.com",
    },
    date: "2024-02-26T11:50:00",
    to: [{ name: "Development Team", email: "dev@company.com" }],
    content: "<p>Join us for a fun afternoon of team activities!</p>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[1].slug,
  },
  {
    id: "20",
    subject: "System Update Complete",
    from: {
      name: "IT Support",
      email: "support@company.com",
    },
    date: "2024-02-25T09:05:00",
    to: [{ name: "All Users", email: "users@company.com" }],
    content: "<p>System maintenance completed successfully.</p>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
];
