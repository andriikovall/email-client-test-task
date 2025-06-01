[![Netlify Status](https://api.netlify.com/api/v1/badges/cdc113db-28d3-4d26-b5e9-08bab9c62715/deploy-status)](https://app.netlify.com/projects/relaxed-tartufo-233bb8/deploys)

# Email client using RxJS and React 


- [Email client using RxJS and React](#email-client-using-rxjs-and-react)
  - [Overview](#overview)
  - [Stack used](#stack-used)
  - [How to run the project](#how-to-run-the-project)
  - [Features implemented](#features-implemented)
  - [Tech challenges faced and their solutions](#tech-challenges-faced-and-their-solutions)
    - [Managing the navigation](#managing-the-navigation)
    - [Picking the right approach to manage RxJS state](#picking-the-right-approach-to-manage-rxjs-state)
    - [Defining the architecture](#defining-the-architecture)
      - [Components](#components)
      - [Services](#services)
    - [Managing the Suspense and loading states ⏳](#managing-the-suspense-and-loading-states-)

## Overview
This is a test task for the Senior Software Engineer job. The goal of this task is to implement a simple mail client using `React` and `RxJS` as a state manager.

[Preview link](https://relaxed-tartufo-233bb8.netlify.app/)

## Stack used

- `React`
- `RxJS`
  - [react-rxjs.org](https://react-rxjs.org/)
- `Bootstrap` and `Bootstrap Icons`
  - For simplicity of the UI and quick development
- `React Router`
- `TypeScript`
- `Vite`

Deployed with **Netlify**

## How to run the project

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev`

## Features implemented

- [x] 3 column layout 
  - [x] Folders
  - [x] Emails list  
  - [x] Email preview
- [x] Features and Behavior
  - [x] Emails are sorted by date and grouped by folder
  - [x] Preview email by clicking on the email in the list
    - Used [sanitize-html](https://www.npmjs.com/package/sanitize-html) to sanitize the html
  - [x] Mark email as read or unread
  - [x] Delete email
  - [x] Simulate new email
    - Added to any of the folders randomly
  - [x] Email has context menu to mark as read or unread and delete
  - [x] Empty state for the emails list of the folder
  - [x] Empty state for the email (after the email is deleted or url has the id of the missing email)
  - [ ] Keyboard navigation
    - [ ] Arrow keys to navigate between emails
    - [ ] Enter to open email preview and focus on the email preview
    - [x] Tabbing between emails and folders
    - [x] Tabbing in email context menu
    - [ ] Escape to close email preview
    - [ ] Backspace to delete email
- [x] Data storage
  - [x] Mock data is stored in the `src/lib/services/mocks/emails.ts` file
  - [ ] Simulate network request and delay (had issues with `Suspense` and loading, will share the details below)


Ignored for the sake of the test task:
- JS chunking, lazy loading, code splitting
- Custom linting to enforce project conventions
- Any proper caching
- Error handling
- TS import path config
- Lazy loading scroll feature for the emails list (currently it's just a list long list of the emails all together)
- UI is very simple
- No responsive design for the mobile
- Email preview implemented in the simplest way possible with basic sanitization [sanitize-html](https://www.npmjs.com/package/sanitize-html) and putting HTML to the DOM directly
- In some places used icons in other places used text emojis
- ect...

## Tech challenges faced and their solutions

### Managing the navigation

Most of my professional carrier I have been working with `React Native` where the navigation is mostly handled manually and the concept of the URL is not a common thing.

I decided to rely on the `React Router` and bind the app UI state to the router. Given that I had a previous experience with `React Router` it was the most straightforward approach for me. It's also a standard de facto now.

I decided to bind the app UI state to the router. This is a common approach which sets user in center by allowing for example to copy the url and get back to the same state when needed. Other email clients like `Gmail` or `Outlook` also use this approach.

It wasn't a pleasant experience, I had issues with `Suspense`, proper routing, route fallbacks and other edge cases. Some of them might not be covered in scope of the test task.

### Picking the right approach to manage RxJS state

I was picking between 3 approaches to manage RxJS state:

1. [observable-hooks](https://observable-hooks.js.org/api/#useobservablestate)
2. [jet-blaze](https://readdle.github.io/jet-blaze/docs/examples)
3. [react-rxjs](https://react-rxjs.org/) 

I am usually skeptical about any black box solutions which have a steep learning curve so I firstly tried to write my simple custom hooks to manage the state of the observables. After couple of the first tries I failed. 

Then I decided to use the [react-rxjs](https://react-rxjs.org/)  approach. It was the most straightforward and easy to understand in the beginning. Might not be the best approach in the long run, but given the time constraints and limited experience with `RxJS` in combination with `React` it was the best choice for me.

### Defining the architecture

There are examples of the [jet-blaze Todo app](https://github.com/readdle/jet-blaze/tree/main/examples/todo-mvc) and [React-RxJS Todo app](https://react-rxjs.org/docs/tutorial/todos) which I used as a reference. Given my low familiarity with `RxJS` + `React` + `signals` together I decided to go with the simplest custom architecture. 

The positive sides are:
- Low learning curve, quicker start
- No need to learn the `signals` concept, just `RxJS` and `React-RxJS`

The downsides are:
- Boilerplate
- Not battle tested yet
- Custom architecture with no documentation

#### Components

I used an approach which is suggested by the [jet-blaze](https://readdle.github.io/jet-blaze/docs/Smart%20Component/creating-smart-components) and ended up with the following custom architecture:

```
├── Header
    ├── Header.controller.tsx
    ├── Header.view.tsx
    └── index.ts
```

The `view` file is a pure component which is responsible for the UI. The `controller` file is responsible for the business logic and the state management.

This is the simplest example of the architecture which decouples the UI from the business logic and the state management.

This was crucial for me to keep the `RxJS` and other state stuff separated.

Example of the `EmailsList.view.tsx` component:

```tsx
export type EmailsListViewProps = {
  emails: Email[];
  onReadOrUnread: (email: Email) => void;
  onDelete: (email: Email) => void;
};

const EmailsListView = (props: EmailsListViewProps) => {
  const { emails, onReadOrUnread, onDelete } = props;

  if (!emails.length) {
    return <div className="text-center p-4">No emails in this folder</div>;
  }

  return (
    <>
      <h2 className="h4 mt-4">Emails</h2>
      <ul className="list-unstyled d-grid gap-2">
        {emails.map((email) => (
          <EmailItem
            key={email.id}
            email={email}
            onReadOrUnread={() => onReadOrUnread(email)}
            onDelete={() => onDelete(email)}
          />
        ))}
      </ul>
    </>
  );
};

export const EmailsList = memo(
  connectController(useEmailsListController, EmailsListView)
);
```

Example of the `Header.controller.tsx` file:

```tsx
const [useEmails] = bind((folder: string) =>
  EmailsService.getEmailsByFolder(folder)
);

export const useEmailsListController = (): EmailsListViewProps => {
  const { folderSlug: folderSlugParam } = useParams();

  const folder = folderSlugParam ?? DEFAULT_FOLDER_SLUG;

  const emails = useEmails(folder);

  const onReadOrUnread = useCallback((email: Email) => {
    EmailsService.markAsReadOrUnread(email.id);
  }, []);

  const onDelete = useCallback((email: Email) => {
    EmailsService.deleteEmail(email);
  }, []);

  if (!folderSlugParam) {
    return {
      emails: [],
      onReadOrUnread,
      onDelete,
    };
  }

  return {
    emails,
    onReadOrUnread,
    onDelete,
  };
};

```

Simple components like `Dropdown` are preferred to be stateless and have no controller.

#### Services

Services are responsible for the data fetching and manipulation. The structure is following:

```
src/lib/services
└── emails.service.ts
```

In future it's better to give the services less responsibility and split them to data manipulation, data fetching and data caching.

### Managing the Suspense and loading states ⏳

I still encounter issues with the `Suspense` and loading states for the actions like deleting the email or making it read. I used `delay` operator to simulate the network request and delay and I didn't understand how to properly handle the loading state.

Still looking for the best approach to handle this in terms of the `RxJS`, `Suspense` and `React`. It should be some kind of a `React` `transition`. WIP
