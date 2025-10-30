🏗 Project Overview

This project is a front-end only expense-sharing web app built using React + Vite + Tailwind CSS.
The app’s purpose is to help friends, roommates, or travel groups track, split, and settle expenses easily — think of it as a simple, sleek version of Splitwise but built for mobile-first usage.

The goal is to create a sleek, modern, bold, minimal interface — inspired by Apple and Samsung’s design language: clean typography, subtle gradients, rounded corners, clear hierarchy, and generous white space.

Focus is on user experience, clarity, and smooth interaction.

🧱 Tech Stack

React (Vite) for component-based UI

Tailwind CSS v4 for utility-first styling (no config file customization)

Mobile-first responsive design

No backend, no database, no authentication logic (UI only)

🎯 MVP Features (Front-End Only)
1. Authentication Screens (UI Only)

Login page: Option to log in with email or Google (mock buttons only)

Signup page: Minimal form with name, email, password fields (UI only)

Forgot password link (non-functional placeholder)

2. Dashboard / Home

Overview of all active groups and individual balances

Quick action buttons:

➕ Add Group

➕ Add Person

⚖️ Settle Balance

Show simple cards or tiles for each group (with group name, members, total balance)

Show a list of recent transactions or settlements below

3. Group Detail Page

Header with group name and members

List of all expenses in that group

Expense card should show:

Description

Amount

Who paid and who owes

Date

Floating “Add Expense” button at the bottom

4. Add Expense Modal/Page

Simple form:

Title / Description

Amount

Paid by (dropdown from group members)

Split type (equally / custom)

Submit button (no backend logic)

5. Person-to-Person Balance Page

List of all people and the current balances:

“You owe Ali 500 PKR”

“Sara owes you 900 PKR”

Option to settle balance with a “Settle” button

When “Settle” is clicked → open a modal for:

Amount

Upload payment proof (mock file upload component)

Confirmation button (UI only)

6. Navigation

Bottom navigation bar (mobile style)

Home

Groups

People

Profile

Top navigation bar (on desktop/tablet)

Logo or app name (“SplitEase” or your chosen name)

Quick links (Home, Groups, People, Profile)

Avatar or profile icon at right

7. Profile Page (UI only)

Show user info (name, email, profile picture placeholder)

Edit profile button (non-functional)

Logout button (non-functional)

📱 Design & Layout Guidelines
💎 Visual Style

Modern, bold, clean

Rounded corners (2xl)

Soft drop shadows

Minimal gradients or glassmorphism for depth

Consistent color palette — think:

Primary: Deep blue (#1E40AF) or dark teal (#0F172A)

Accent: Electric blue or neon green

Background: Neutral gray or off-white

Typography: Use sans-serif (e.g., Inter, Poppins, SF Pro look)

⚙️ Layout System

Mobile-first (base styles target small screens)

Responsive breakpoints for tablet and desktop

Use grid or flexbox consistently

Spacing & hierarchy via Tailwind’s padding and margin utilities

Use motion or transitions (e.g. transition-all, duration-300) for smooth interactions

💡 Component Structure

/components

Navbar.jsx

BottomNav.jsx

Card.jsx

ExpenseItem.jsx

AddExpenseModal.jsx

SettleModal.jsx

BalanceItem.jsx

ProfileCard.jsx

Button.jsx, Input.jsx

/pages

Login.jsx

Signup.jsx

Dashboard.jsx

GroupDetail.jsx

AddExpense.jsx

People.jsx

Profile.jsx

/layouts

MainLayout.jsx (with bottom navigation for mobile)

/assets

Icons, placeholder images, logos

🧭 Navigation Flow

Login → Dashboard

From Dashboard, user can go to:

Groups

People

Profile

Within Groups, can open Group Details

Inside Group Details, can open Add Expense

Inside People, can Settle Balance

🧩 UX Notes

Smooth transitions between pages

Buttons should feel “clickable” with subtle hover and tap feedback

Keep forms minimal — focus on touch-friendly spacing

Floating action buttons (FAB) for adding actions

Avoid clutter, show only essential info

🚀 Future Hooks (Ignore for Now)

These features will be added later with backend:

Real authentication (Firebase/Auth)

Database (Firestore/Node API)

Real-time balance sync

Notifications

For now, only mock data / sample state is needed for UI layout and flow.

✅ Copilot Instructions

When generating components or pages:

Always use TailwindCSS utility classes

Always use mobile-first responsive design

Prefer functional components and React hooks

Use semantic HTML

Keep everything accessible (ARIA labels, alt text, contrast)

Use placeholder mock data

Focus on UI + UX, not business logic

Keep the design sleek, modern, and minimal