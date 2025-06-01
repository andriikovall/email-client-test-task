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
    - [Managing the Suspense and loading states](#managing-the-suspense-and-loading-states)

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
  - [x] Simulate network request and delay


## Tech challenges faced and their solutions

### Managing the navigation

I decided to bind the app UI state to the router. This is a common approach which sets user in center by allowing for example to copy the url and get back to the same state when needed. Other email clients like `Gmail` or `Outlook` also use this approach.

It wasn't a pleasant experience, I had issues with `Suspense`, proper routing, route fallbacks and other edge cases

### Picking the right approach to manage RxJS state

I was picking between 3 approaches to manage RxJS state:

1. [observable-hooks](https://observable-hooks.js.org/api/#useobservablestate)
2. [jet-blaze](https://readdle.github.io/jet-blaze/docs/examples)
3. [react-rxjs](https://react-rxjs.org/) 

I am usually skeptical about any black box solutions which have a steep learning curve so I firstly tried to write my simple custom hooks to manage the state of the observables. After couple of the first tries I failed - [commit](https://github.com/andriikovall/email-client-test-task/commit/ea4ab95d0a901e220a61b2e968f044b26eff8465). And then started to come back eventually - [commit](https://github.com/andriikovall/email-client-test-task/commit/2c284240b251182ff972d21ff7142d100345a9ed).

Then I decided to use the [react-rxjs](https://react-rxjs.org/)  approach. It was the most straightforward and easy to understand in the beginning. Might not be the best approach in the long run, but given the time constraints and limited experience with `RxJS` in combination with `React` it was the best choice for me.

### Defining the architecture

There are examples of the [jet-blaze Todo app](https://github.com/readdle/jet-blaze/tree/main/examples/todo-mvc) and [React-RxJS Todo app](https://react-rxjs.org/docs/tutorial/todos) which I used as a reference. Given my low familiarity with `RxJS` + `React` + `signals` together, I decided to go with the simplest custom architecture to start with. 

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

Example of the `EmailsList.view.tsx` component:

```tsx
export type EmailsListViewProps = {
  // ..
};

const EmailsListView = (props: EmailsListViewProps) => {
  const { emails, onReadOrUnread, onDelete } = props;
  // UI part ...
};

export const EmailsList = memo(
  connectController(useEmailsListController, EmailsListView)
);
```

Example of the `EmailsList.controller.tsx` file:

```tsx
const [useEmails] = bind((folder: string) =>
  EmailsService.getEmailsByFolder(folder)
);

export const useEmailsListController = (): EmailsListViewProps => {
  const { folderSlug: folderSlugParam } = useParams();

  const folder = folderSlugParam ?? DEFAULT_FOLDER_SLUG;

  const emails = useEmails(folder);

  // other hooks calls ...

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

### Managing the Suspense and loading states

Initially I had an issue of using the `BehavioralSubject` for the UI state. It wasn't obvious if it's OK to handle the UI and the requests observables separately. Even though it sounds reasonable and resembles the default request -> setState approach, I doubted it and was looking for something else without building a whole bunch of custom observables.

It appears that it's OK to handle the UI and the requests observables separately and eventually combine them in the components. This is how it's done and recommended by the libraries like `react-rxjs` and `jet-blaze`.

Eventual approach:

- Used `delay` operator to simulate the network request.
- Used `useObservableAction` hook to manage the actions and their loading states.
- Hold a separate `BehaviorSubject` for the UI state and subscribe to the backend requests manually


