import type { Email } from "../../types";
import { MOCK_FOLDERS } from "./folders";

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
      "<h1>Welcome!</h1><p>We're excited to have you join our community.</p>",
    isRead: true,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
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
      "<div>Your package is on its way! <strong>Tracking number: ABC123XYZ</strong></div>",
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
      "<p>Don't forget our meeting tomorrow at 10 AM.</p><ul><li>Agenda</li><li>Timeline</li></ul>",
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
      "<h2>Renew your subscription</h2><p>Click here to continue enjoying our service.</p>",
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
      "<p>Click the link below to reset your password:</p><a href='#'>Reset Password</a>",
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
      "<div>Someone commented: <blockquote>Great post!</blockquote></div>",
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
      "<table><tr><th>Item</th><th>Amount</th></tr><tr><td>Service</td><td>$99.99</td></tr></table>",
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
      "<p>Thank you for your application. We would like to schedule an interview.</p>",
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
      "<h1>This Week's Highlights</h1><ul><li>News 1</li><li>News 2</li></ul>",
    isRead: true,
    isDeleted: true,
    folderSlug: MOCK_FOLDERS[0].slug,
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
      "<div class='alert'>System will be down for maintenance on Saturday.</div>",
    isRead: false,
    isDeleted: false,
    folderSlug: MOCK_FOLDERS[0].slug,
  },
];
